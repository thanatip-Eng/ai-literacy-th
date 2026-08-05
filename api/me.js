'use strict';
// Session probe for the client: tells the page whether a verified Canvas
// identity is present. Never exposes secrets — only the identity itself.
const {readSession} = require('./_lib/session');

module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.setHeader('Allow', 'GET');
    res.end(JSON.stringify({ok: false, error: 'method_not_allowed'}));
    return;
  }
  const session = readSession(req, process.env.SESSION_SECRET);
  if (!session) {
    res.statusCode = 200;
    res.end(JSON.stringify({authenticated: false}));
    return;
  }
  res.statusCode = 200;
  res.end(JSON.stringify({
    authenticated: true,
    email: session.email || '',
    name: session.name || ''
  }));
};
