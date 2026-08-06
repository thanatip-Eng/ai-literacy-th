const test = require('node:test');
const assert = require('node:assert/strict');
const config = require('../content/connect-config');

// Every key the payload built in index.html (buildConnectPayload) can supply.
// Config may map any subset of these; unknown keys would be silently dropped
// at submit time, so they fail the test instead.
const ALLOWED_FIELDS = [
  'name', 'studentId', 'studentid', 'email', 'role', 'lang',
  'placement', 'level_cumulative',
  'l1', 'l2', 'l3', 'score_skill',
  'partnershipComposite', 'score_partnership',
  'verify', 'restraint', 'humanLead', 'direction', 'score_subtrait',
  'quadrant', 'weakTags', 'rawAnswers', 'date'
];

test('connect config has a valid shape', () => {
  assert.equal(typeof config.enabled, 'boolean');
  assert.ok(['lti', 'form'].includes(config.mode), 'mode must be lti or form');
  assert.equal(typeof config.formUrl, 'string');
  assert.ok(config.fields && typeof config.fields === 'object');
});

test('every mapped field is a known payload key with a valid entry ID', () => {
  for (const [field, entryId] of Object.entries(config.fields)) {
    assert.ok(ALLOWED_FIELDS.includes(field),
      `unknown field "${field}" — it would be silently dropped; use one of: ${ALLOWED_FIELDS.join(', ')}`);
    assert.equal(typeof entryId, 'string', `${field} mapping must be a string`);
    if (entryId) assert.match(entryId, /^entry\.\d+$/, `${field} must look like entry.123456`);
  }
});

test('feedback block, when present, is a valid prefillable form link', () => {
  if (!config.feedback) return;
  assert.match(config.feedback.url, /^https:\/\/docs\.google\.com\/forms\/.+\/viewform$/,
    'feedback.url must be the /viewform URL of a Google Form');
  for (const [field, entryId] of Object.entries(config.feedback.params || {})) {
    assert.ok(ALLOWED_FIELDS.includes(field),
      `unknown feedback prefill field "${field}" — use one of: ${ALLOWED_FIELDS.join(', ')}`);
    assert.match(entryId, /^entry\.\d+$/, `${field} must look like entry.123456`);
  }
});

test('enabled config points at a real Google Form response endpoint', () => {
  if (!config.enabled) return;
  assert.match(config.formUrl, /^https:\/\/docs\.google\.com\/forms\/.+\/formResponse$/,
    'formUrl must be the /formResponse URL of a Google Form');
  const mapped = Object.values(config.fields).filter(Boolean);
  assert.ok(mapped.length > 0, 'enabled config must map at least one field');
});
