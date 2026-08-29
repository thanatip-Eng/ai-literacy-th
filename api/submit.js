'use strict';
// Session-gated result submission. Default-deny: every request without a
// valid session is rejected — this is the data layer the spec protects.
// The verified email from the session overrides whatever the client sent.
const {readSession} = require('./_lib/session');
const {readJsonBody} = require('./_lib/body');
const {makeReceipt} = require('./_lib/receipt');
const {postScore} = require('./_lib/outcomes');
const connectConfig = require('../content/connect-config.js');

// Google Forms occasionally throttles a burst of submissions. One retry on a
// transient failure turns most of those into a success the student never sees;
// the deadline keeps the whole request inside the serverless time limit.
const FORM_ATTEMPT_TIMEOUT_MS = 3500;
const FORM_RETRY_DELAY_MS = 400;

function isTransient(status) {
  return status === 429 || status >= 500;
}

async function postToForm(url, body, deadline) {
  let lastStatus = 0;
  for (let attempt = 0; attempt < 2; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FORM_ATTEMPT_TIMEOUT_MS);
    try {
      const resp = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body,
        redirect: 'manual',
        signal: controller.signal
      });
      // Google Forms answers 200 on success and 302 for some locales.
      if (resp.status >= 200 && resp.status < 400) return {ok: true, status: resp.status};
      lastStatus = resp.status;
      if (!isTransient(resp.status)) return {ok: false, status: resp.status};
    } catch (err) {
      console.log('submit: Google Form attempt failed:', err && err.message);
      lastStatus = 0;
    } finally {
      clearTimeout(timer);
    }
    // Only spend a second attempt while there is time left for the grade push.
    if (Date.now() + FORM_RETRY_DELAY_MS > deadline) break;
    await new Promise(resolve => setTimeout(resolve, FORM_RETRY_DELAY_MS));
  }
  return {ok: false, status: lastStatus};
}

function json(res, status, payload) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(payload));
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    json(res, 405, {ok: false, error: 'method_not_allowed'});
    return;
  }
  const sessionSecret = process.env.SESSION_SECRET;
  const session = sessionSecret ? readSession(req, sessionSecret) : null;
  if (!session) {
    json(res, 401, {ok: false, error: 'no_session'});
    return;
  }
  if (!connectConfig || !connectConfig.enabled || !connectConfig.formUrl ||
      !connectConfig.fields || typeof connectConfig.fields !== 'object') {
    json(res, 500, {ok: false, error: 'not_configured'});
    return;
  }

  const data = await readJsonBody(req);
  if (!data || typeof data !== 'object') {
    json(res, 400, {ok: false, error: 'bad_payload'});
    return;
  }

  // Signed submission receipt: shown to the student as proof and, when a
  // "receipt" field is mapped in connect-config, stored in the Sheet too.
  const stamp = new Date().toISOString();
  const receipt = makeReceipt(sessionSecret, session.email, stamp);
  const values = {
    ...data,
    email: session.email,
    name: (typeof data.name === 'string' && data.name.trim()) || session.name || '',
    receipt: receipt
  };
  const form = new URLSearchParams();
  for (const [field, entryId] of Object.entries(connectConfig.fields)) {
    if (typeof entryId !== 'string' || !entryId.startsWith('entry.')) continue;
    const value = values[field];
    if (value === undefined || value === null || value === '') continue;
    form.append(entryId, String(value).slice(0, 2000));
  }
  if (![...form.keys()].length) {
    json(res, 500, {ok: false, error: 'no_fields_mapped'});
    return;
  }

  try {
    // Budget: up to two form attempts, leaving room for the grade push below.
    const deadline = Date.now() + FORM_ATTEMPT_TIMEOUT_MS * 2;
    const posted = await postToForm(connectConfig.formUrl, form.toString(), deadline);
    const ok = posted.ok;
    if (!ok) {
      console.log(`submit: Google Form rejected the entry with HTTP ${posted.status} ` +
        '(common causes: form not published, requires sign-in, or a required question is unmapped)');
      json(res, 502, {ok, error: 'form_rejected', formStatus: posted.status});
      return;
    }
    // The Sheet is the record of truth; a gradebook failure is reported but
    // never turns a stored submission into an error for the student.
    const grade = await postScore({
      serviceUrl: session.outcomeUrl,
      sourcedId: session.sourcedId,
      score: 1,
      consumerKey: process.env.LTI_CONSUMER_KEY,
      consumerSecret: process.env.LTI_SHARED_SECRET
    });
    json(res, 200, {ok, receipt, stamp, email: session.email, graded: grade.ok});
  } catch (err) {
    console.log('submit: submission failed:', err && err.message);
    json(res, 502, {ok: false, error: 'form_unreachable'});
  }
};
