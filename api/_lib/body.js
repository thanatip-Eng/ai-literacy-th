'use strict';
// Request-body helpers that work both on Vercel (req.body pre-parsed)
// and in tests (plain objects / raw streams).

async function readRawBody(req) {
  if (req.body != null) return req.body;
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return Buffer.concat(chunks).toString('utf8');
}

async function readFormBody(req) {
  const body = await readRawBody(req);
  if (body && typeof body === 'object' && !Buffer.isBuffer(body)) return body;
  const params = {};
  for (const [key, value] of new URLSearchParams(String(body))) {
    if (params[key] === undefined) params[key] = value;
    else if (Array.isArray(params[key])) params[key].push(value);
    else params[key] = [params[key], value];
  }
  return params;
}

async function readJsonBody(req) {
  const body = await readRawBody(req);
  if (body && typeof body === 'object' && !Buffer.isBuffer(body)) return body;
  try {
    return JSON.parse(String(body));
  } catch {
    return null;
  }
}

module.exports = {readRawBody, readFormBody, readJsonBody};
