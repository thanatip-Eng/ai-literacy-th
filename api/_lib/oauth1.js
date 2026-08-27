'use strict';
// OAuth 1.0 HMAC-SHA1 signature verification for LTI 1.1 launches.
// No dependencies — Node crypto only.
const crypto = require('crypto');

function rfc3986(value) {
  return encodeURIComponent(value)
    .replace(/[!'()*]/g, c => '%' + c.charCodeAt(0).toString(16).toUpperCase());
}

function normalizedParams(params) {
  const pairs = [];
  for (const [key, value] of Object.entries(params)) {
    if (key === 'oauth_signature') continue;
    const values = Array.isArray(value) ? value : [value];
    for (const v of values) pairs.push([rfc3986(key), rfc3986(String(v))]);
  }
  pairs.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] < b[0] ? -1 : 1;
    if (a[1] !== b[1]) return a[1] < b[1] ? -1 : 1;
    return 0;
  });
  return pairs.map(([k, v]) => `${k}=${v}`).join('&');
}

function signatureBaseString(method, url, params) {
  return [
    method.toUpperCase(),
    rfc3986(url),
    rfc3986(normalizedParams(params))
  ].join('&');
}

function hmacSha1(baseString, consumerSecret, tokenSecret = '') {
  const key = `${rfc3986(consumerSecret)}&${rfc3986(tokenSecret)}`;
  return crypto.createHmac('sha1', key).update(baseString).digest('base64');
}

function sign(method, url, params, consumerSecret) {
  return hmacSha1(signatureBaseString(method, url, params), consumerSecret);
}

// --- outgoing requests (grade passback) ---------------------------------
// LTI launches arrive with the OAuth params in the form body; outcome calls go
// the other way: an XML body plus an Authorization header, where the body is
// bound to the signature through oauth_body_hash (OAuth 1.0 body signing).
function bodyHash(body) {
  return crypto.createHash('sha1').update(body, 'utf8').digest('base64');
}

function authHeader(method, url, oauthParams, consumerSecret) {
  const signature = sign(method, url, oauthParams, consumerSecret);
  const parts = Object.entries({...oauthParams, oauth_signature: signature})
    .map(([k, v]) => `${rfc3986(k)}="${rfc3986(String(v))}"`);
  return `OAuth ${parts.join(',')}`;
}

function verify(method, url, params, consumerSecret) {
  const provided = params.oauth_signature;
  if (typeof provided !== 'string' || !provided) return false;
  const expected = sign(method, url, params, consumerSecret);
  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

module.exports = {rfc3986, signatureBaseString, sign, verify, bodyHash, authHeader};
