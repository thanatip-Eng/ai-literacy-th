'use strict';
// Submission receipt: a short code the server signs with SESSION_SECRET.
// Students screenshot it as proof of submission; the instructor can verify
// a code offline (docs/connect-setup.md) even if the Sheet row went missing.
const crypto = require('crypto');

function makeReceipt(secret, email, stampIso) {
  return crypto.createHmac('sha256', secret)
    .update(`${email}|${stampIso}`)
    .digest('hex')
    .slice(0, 8)
    .toUpperCase();
}

module.exports = {makeReceipt};
