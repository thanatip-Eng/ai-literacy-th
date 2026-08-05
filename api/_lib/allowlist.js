'use strict';
// The allowlist is authoritative for authorization (per spec). It lives in
// the ALLOWLIST env var: comma/space/newline-separated emails. An entry of
// the form *@example.ac.th allows a whole domain.

function parseAllowlist(raw) {
  return String(raw || '')
    .split(/[\s,;]+/)
    .map(entry => entry.trim().toLowerCase())
    .filter(Boolean);
}

function isAllowed(email, raw) {
  const list = parseAllowlist(raw);
  if (!list.length) return false; // empty allowlist = deny everyone
  const normalized = String(email || '').trim().toLowerCase();
  if (!normalized || !normalized.includes('@')) return false;
  const domain = normalized.split('@').pop();
  return list.some(entry =>
    entry === normalized || (entry.startsWith('*@') && entry.slice(2) === domain)
  );
}

module.exports = {parseAllowlist, isAllowed};
