'use strict';
// Session-gated result submission. Default-deny: every request without a
// valid session is rejected — this is the data layer the spec protects.
// The verified email from the session overrides whatever the client sent.
const {readSession} = require('./_lib/session');
const {readJsonBody} = require('./_lib/body');
const connectConfig = require('../content/connect-config.js');

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

  const values = {
    ...data,
    email: session.email,
    name: (typeof data.name === 'string' && data.name.trim()) || session.name || ''
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
    const resp = await fetch(connectConfig.formUrl, {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: form.toString(),
      redirect: 'manual'
    });
    // Google Forms answers 200 on success and 302 for some locales.
    const ok = resp.status >= 200 && resp.status < 400;
    json(res, ok ? 200 : 502, {ok, error: ok ? undefined : 'form_rejected'});
  } catch {
    json(res, 502, {ok: false, error: 'form_unreachable'});
  }
};
