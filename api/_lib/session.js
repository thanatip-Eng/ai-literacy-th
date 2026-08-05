'use strict';
// HMAC-signed session tokens carried in an httpOnly cookie.
const crypto = require('crypto');

const COOKIE_NAME = 'ails_session';
const DEFAULT_MAX_AGE = 6 * 60 * 60; // 6 hours

function signSession(payload, secret, maxAgeSeconds = DEFAULT_MAX_AGE) {
  const now = Math.floor(Date.now() / 1000);
  const body = {...payload, iat: now, exp: now + maxAgeSeconds};
  const data = Buffer.from(JSON.stringify(body)).toString('base64url');
  const sig = crypto.createHmac('sha256', secret).update(data).digest('base64url');
  return `${data}.${sig}`;
}

function verifySession(token, secret) {
  if (typeof token !== 'string') return null;
  const dot = token.lastIndexOf('.');
  if (dot < 1) return null;
  const data = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expected = crypto.createHmac('sha256', secret).update(data).digest('base64url');
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  let payload;
  try {
    payload = JSON.parse(Buffer.from(data, 'base64url').toString('utf8'));
  } catch {
    return null;
  }
  if (!payload || typeof payload.exp !== 'number') return null;
  if (payload.exp < Date.now() / 1000) return null;
  return payload;
}

function parseCookies(header) {
  const out = {};
  String(header || '').split(';').forEach(part => {
    const eq = part.indexOf('=');
    if (eq < 0) return;
    const key = part.slice(0, eq).trim();
    if (key) out[key] = decodeURIComponent(part.slice(eq + 1).trim());
  });
  return out;
}

function readSession(req, secret) {
  if (!secret) return null;
  const cookies = parseCookies(req.headers && req.headers.cookie);
  return verifySession(cookies[COOKIE_NAME], secret);
}

// SameSite=None so the cookie also flows when Canvas launches into an iframe
// (browsers with third-party-cookie blocking still need the "open in a new
// tab" placement — documented in docs/connect-setup.md).
function sessionCookie(token, maxAgeSeconds = DEFAULT_MAX_AGE) {
  return `${COOKIE_NAME}=${token}; Path=/; Max-Age=${maxAgeSeconds}; HttpOnly; Secure; SameSite=None`;
}

module.exports = {COOKIE_NAME, DEFAULT_MAX_AGE, signSession, verifySession, parseCookies, readSession, sessionCookie};
