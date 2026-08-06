const test = require('node:test');
const assert = require('node:assert/strict');

const oauth1 = require('../api/_lib/oauth1');
const {signSession, verifySession, readSession, sessionCookie, COOKIE_NAME} = require('../api/_lib/session');
const {nonceSeen, clearMemoryStore} = require('../api/_lib/nonce-store');
const {isAllowed} = require('../api/_lib/allowlist');
const launch = require('../api/lti/launch');
const me = require('../api/me');

const LAUNCH_URL = 'https://example.vercel.app/api/lti/launch';
const CONSUMER_KEY = 'test-key';
const SHARED_SECRET = 'test-shared-secret';
const SESSION_SECRET = 'test-session-secret';

function baseEnv() {
  process.env.LTI_CONSUMER_KEY = CONSUMER_KEY;
  process.env.LTI_SHARED_SECRET = SHARED_SECRET;
  process.env.LTI_LAUNCH_URL = LAUNCH_URL;
  process.env.SESSION_SECRET = SESSION_SECRET;
  process.env.ALLOWLIST = 'student@cmu.ac.th, *@eng.cmu.ac.th';
  delete process.env.UPSTASH_REDIS_REST_URL;
  delete process.env.UPSTASH_REDIS_REST_TOKEN;
}

function signedLaunchParams(overrides = {}) {
  const params = {
    lti_message_type: 'basic-lti-launch-request',
    lti_version: 'LTI-1p0',
    resource_link_id: 'rl-1',
    oauth_consumer_key: CONSUMER_KEY,
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: String(Math.floor(Date.now() / 1000)),
    oauth_nonce: `nonce-${Math.random().toString(36).slice(2)}`,
    oauth_version: '1.0',
    lis_person_contact_email_primary: 'student@cmu.ac.th',
    lis_person_name_full: 'Somchai Jaidee',
    roles: 'Learner',
    ...overrides
  };
  params.oauth_signature = oauth1.sign('POST', LAUNCH_URL, params, SHARED_SECRET);
  return params;
}

function mockRes() {
  const res = {
    statusCode: 200,
    headers: {},
    body: '',
    setHeader(key, value) { this.headers[key.toLowerCase()] = value; },
    end(chunk) { this.body = chunk == null ? '' : String(chunk); this.ended = true; }
  };
  return res;
}

function mockReq({method = 'POST', body = null, cookie = ''} = {}) {
  return {method, body, headers: {cookie}};
}

test('oauth1 verify accepts a correctly signed launch and rejects tampering', () => {
  const params = signedLaunchParams();
  assert.equal(oauth1.verify('POST', LAUNCH_URL, params, SHARED_SECRET), true);
  const tampered = {...params, lis_person_contact_email_primary: 'attacker@evil.com'};
  assert.equal(oauth1.verify('POST', LAUNCH_URL, tampered, SHARED_SECRET), false);
  const wrongUrl = oauth1.verify('POST', 'https://other.host/api/lti/launch', params, SHARED_SECRET);
  assert.equal(wrongUrl, false);
  assert.equal(oauth1.verify('POST', LAUNCH_URL, params, 'wrong-secret'), false);
});

test('allowlist matches exact emails and domain wildcards, denies everyone on empty', () => {
  const raw = 'a@x.com, *@eng.cmu.ac.th';
  assert.equal(isAllowed('a@x.com', raw), true);
  assert.equal(isAllowed('A@X.com', raw), true);
  assert.equal(isAllowed('b@eng.cmu.ac.th', raw), true);
  assert.equal(isAllowed('b@cmu.ac.th', raw), false);
  assert.equal(isAllowed('a@x.com', ''), false);
  assert.equal(isAllowed('', raw), false);
});

test('session tokens round-trip and reject tampering and expiry', () => {
  const token = signSession({email: 'a@b.c', name: 'A'}, SESSION_SECRET);
  const payload = verifySession(token, SESSION_SECRET);
  assert.equal(payload.email, 'a@b.c');
  assert.equal(verifySession(token + 'x', SESSION_SECRET), null);
  assert.equal(verifySession(token, 'other-secret'), null);
  const expired = signSession({email: 'a@b.c'}, SESSION_SECRET, -10);
  assert.equal(verifySession(expired, SESSION_SECRET), null);
});

test('in-memory nonce store flags replays', async () => {
  clearMemoryStore();
  assert.equal(await nonceSeen('n1', 60), false);
  assert.equal(await nonceSeen('n1', 60), true);
  assert.equal(await nonceSeen('n2', 60), false);
});

test('launch: valid signed request issues a session cookie and redirects', async () => {
  baseEnv();
  clearMemoryStore();
  const res = mockRes();
  await launch(mockReq({body: signedLaunchParams()}), res);
  assert.equal(res.statusCode, 302);
  assert.equal(res.headers['location'], '/');
  const cookie = res.headers['set-cookie'];
  assert.match(cookie, new RegExp(`^${COOKIE_NAME}=`));
  assert.match(cookie, /HttpOnly/);
  assert.match(cookie, /Secure/);
  const token = cookie.split(';')[0].split('=')[1];
  const session = verifySession(token, SESSION_SECRET);
  assert.equal(session.email, 'student@cmu.ac.th');
});

test('launch: forged signature is rejected', async () => {
  baseEnv();
  clearMemoryStore();
  const params = signedLaunchParams();
  params.oauth_signature = 'forged';
  const res = mockRes();
  await launch(mockReq({body: params}), res);
  assert.equal(res.statusCode, 401);
  assert.equal(res.headers['set-cookie'], undefined);
});

test('launch: replayed nonce is rejected', async () => {
  baseEnv();
  clearMemoryStore();
  const params = signedLaunchParams();
  const first = mockRes();
  await launch(mockReq({body: params}), first);
  assert.equal(first.statusCode, 302);
  const second = mockRes();
  await launch(mockReq({body: params}), second);
  assert.equal(second.statusCode, 401);
});

test('launch: stale timestamp is rejected even when correctly signed', async () => {
  baseEnv();
  clearMemoryStore();
  const stale = signedLaunchParams({
    oauth_timestamp: String(Math.floor(Date.now() / 1000) - 3600)
  });
  const res = mockRes();
  await launch(mockReq({body: stale}), res);
  assert.equal(res.statusCode, 401);
});

test('launch: email outside the allowlist is denied', async () => {
  baseEnv();
  clearMemoryStore();
  const outsider = signedLaunchParams({
    lis_person_contact_email_primary: 'outsider@gmail.com'
  });
  const res = mockRes();
  await launch(mockReq({body: outsider}), res);
  assert.equal(res.statusCode, 403);
  assert.equal(res.headers['set-cookie'], undefined);
});

test('launch: missing email explains the Canvas Privacy setting', async () => {
  baseEnv();
  clearMemoryStore();
  const noEmail = signedLaunchParams({lis_person_contact_email_primary: ''});
  const res = mockRes();
  await launch(mockReq({body: noEmail}), res);
  assert.equal(res.statusCode, 400);
  assert.match(res.body, /Public\/Email/);
});

test('launch: direct GET access is rejected', async () => {
  baseEnv();
  const res = mockRes();
  await launch(mockReq({method: 'GET'}), res);
  assert.equal(res.statusCode, 405);
});

test('me: reports identity with a valid cookie, anonymous without', () => {
  baseEnv();
  const token = signSession({email: 'student@cmu.ac.th', name: 'S'}, SESSION_SECRET);
  const authed = mockRes();
  me(mockReq({method: 'GET', cookie: `${COOKIE_NAME}=${token}`}), authed);
  assert.deepEqual(JSON.parse(authed.body), {
    authenticated: true, email: 'student@cmu.ac.th', name: 'S'
  });
  const anon = mockRes();
  me(mockReq({method: 'GET'}), anon);
  assert.deepEqual(JSON.parse(anon.body), {authenticated: false});
});

test('submit: default-denies without a session', async () => {
  baseEnv();
  const submit = require('../api/submit');
  const res = mockRes();
  await submit(mockReq({body: {placement: 2}}), res);
  assert.equal(res.statusCode, 401);
  assert.equal(JSON.parse(res.body).ok, false);
});

test('submission receipts are deterministic, short, and secret-bound', () => {
  const {makeReceipt} = require('../api/_lib/receipt');
  const a = makeReceipt('secret-1', 'a@b.c', '2026-08-06T03:00:00.000Z');
  assert.match(a, /^[0-9A-F]{8}$/);
  assert.equal(a, makeReceipt('secret-1', 'a@b.c', '2026-08-06T03:00:00.000Z'));
  assert.notEqual(a, makeReceipt('secret-2', 'a@b.c', '2026-08-06T03:00:00.000Z'));
  assert.notEqual(a, makeReceipt('secret-1', 'x@b.c', '2026-08-06T03:00:00.000Z'));
  assert.notEqual(a, makeReceipt('secret-1', 'a@b.c', '2026-08-06T03:00:01.000Z'));
});

test('readSession pulls a session out of the cookie header', () => {
  const token = signSession({email: 'x@y.z'}, SESSION_SECRET);
  const session = readSession({headers: {cookie: `other=1; ${COOKIE_NAME}=${token}`}}, SESSION_SECRET);
  assert.equal(session.email, 'x@y.z');
  assert.equal(readSession({headers: {}}, SESSION_SECRET), null);
});

test('session cookie carries the hardening flags', () => {
  const cookie = sessionCookie('tok');
  assert.match(cookie, /HttpOnly/);
  assert.match(cookie, /Secure/);
  assert.match(cookie, /SameSite=None/);
  assert.match(cookie, /Path=\//);
});
