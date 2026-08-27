'use strict';
// LTI 1.1 Basic Outcomes: push a score back into the Canvas gradebook.
// Canvas only sends lis_outcome_service_url + lis_result_sourcedid when the
// tool is launched from an assignment, so callers must treat a missing pair as
// "this launch is not graded" rather than an error.
const crypto = require('crypto');
const oauth1 = require('./oauth1');

const TIMEOUT_MS = 8000;

function xmlEscape(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// POX envelope per the IMS Basic Outcomes spec. score is a float 0.0–1.0.
function buildReplaceResultXml({sourcedId, score, messageId}) {
  const id = messageId || crypto.randomUUID();
  const value = Math.min(1, Math.max(0, Number(score)));
  return `<?xml version="1.0" encoding="UTF-8"?>
<imsx_POXEnvelopeRequest xmlns="http://www.imsglobal.org/services/ltiv1p1/xsd/imsoms_v1p0">
  <imsx_POXHeader>
    <imsx_POXRequestHeaderInfo>
      <imsx_version>V1.0</imsx_version>
      <imsx_messageIdentifier>${xmlEscape(id)}</imsx_messageIdentifier>
    </imsx_POXRequestHeaderInfo>
  </imsx_POXHeader>
  <imsx_POXBody>
    <replaceResultRequest>
      <resultRecord>
        <sourcedGUID>
          <sourcedId>${xmlEscape(sourcedId)}</sourcedId>
        </sourcedGUID>
        <result>
          <resultScore>
            <language>en</language>
            <textString>${value}</textString>
          </resultScore>
        </result>
      </resultRecord>
    </replaceResultRequest>
  </imsx_POXBody>
</imsx_POXEnvelopeRequest>`;
}

function isSuccessResponse(xml) {
  const match = /<imsx_codeMajor>\s*([^<\s]+)\s*<\/imsx_codeMajor>/i.exec(String(xml || ''));
  return !!match && match[1].toLowerCase() === 'success';
}

// Best-effort by contract: resolves {ok, reason} and never throws, so a
// gradebook hiccup can never fail the student's submission.
async function postScore({serviceUrl, sourcedId, score, consumerKey, consumerSecret, fetchImpl}) {
  if (!serviceUrl || !sourcedId) return {ok: false, reason: 'not_graded_launch'};
  if (!consumerKey || !consumerSecret) return {ok: false, reason: 'not_configured'};
  const body = buildReplaceResultXml({sourcedId, score});
  const oauthParams = {
    oauth_consumer_key: consumerKey,
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: String(Math.floor(Date.now() / 1000)),
    oauth_nonce: crypto.randomBytes(16).toString('hex'),
    oauth_version: '1.0',
    oauth_body_hash: oauth1.bodyHash(body)
  };
  const doFetch = fetchImpl || fetch;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const resp = await doFetch(serviceUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml',
        Authorization: oauth1.authHeader('POST', serviceUrl, oauthParams, consumerSecret)
      },
      body,
      signal: controller.signal
    });
    const text = await resp.text();
    if (resp.status < 200 || resp.status >= 300) {
      console.log(`outcomes: Canvas replied HTTP ${resp.status}`);
      return {ok: false, reason: `http_${resp.status}`};
    }
    if (!isSuccessResponse(text)) {
      console.log('outcomes: Canvas rejected the score (imsx_codeMajor was not success)');
      return {ok: false, reason: 'rejected'};
    }
    return {ok: true};
  } catch (err) {
    console.log('outcomes: score post failed:', err && err.message);
    return {ok: false, reason: 'unreachable'};
  } finally {
    clearTimeout(timer);
  }
}

module.exports = {xmlEscape, buildReplaceResultXml, isSuccessResponse, postScore};
