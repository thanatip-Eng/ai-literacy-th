'use strict';
// Replay protection for LTI launches. Uses Upstash Redis (REST API) when
// UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN are configured — the
// recommended, persisted setup. Falls back to a per-instance in-memory map,
// which on serverless only guards replays hitting the same warm instance
// (documented limitation; the oauth_timestamp window still bounds exposure).
const memory = new Map();

function pruneMemory(now) {
  for (const [key, expiry] of memory) {
    if (expiry < now) memory.delete(key);
  }
}

// Returns true when the nonce was already used (i.e. the launch must be rejected).
async function nonceSeen(nonce, ttlSeconds) {
  const key = `ails:nonce:${nonce}`;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (url && token) {
    const res = await fetch(
      `${url.replace(/\/$/, '')}/set/${encodeURIComponent(key)}/1?NX=true&EX=${ttlSeconds}`,
      {headers: {Authorization: `Bearer ${token}`}}
    );
    if (!res.ok) throw new Error(`nonce store error: HTTP ${res.status}`);
    const body = await res.json();
    return body.result !== 'OK'; // null result = key already existed = replay
  }
  const now = Date.now();
  pruneMemory(now);
  if (memory.has(key)) return true;
  memory.set(key, now + ttlSeconds * 1000);
  return false;
}

function clearMemoryStore() {
  memory.clear();
}

module.exports = {nonceSeen, clearMemoryStore};
