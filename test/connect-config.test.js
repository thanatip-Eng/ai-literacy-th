const test = require('node:test');
const assert = require('node:assert/strict');
const config = require('../content/connect-config');

const EXPECTED_FIELDS = [
  'name', 'studentId', 'email', 'role', 'lang', 'placement',
  'l1', 'l2', 'l3', 'partnershipComposite',
  'verify', 'restraint', 'humanLead', 'direction',
  'quadrant', 'weakTags', 'rawAnswers', 'date'
];

test('connect config ships disabled so public deployments stay zero-data', () => {
  assert.equal(config.enabled, false);
  assert.equal(config.formUrl, '');
});

test('connect config declares a mapping slot for every submitted dimension', () => {
  assert.deepEqual(Object.keys(config.fields).sort(), [...EXPECTED_FIELDS].sort());
  for (const [field, entryId] of Object.entries(config.fields)) {
    assert.equal(typeof entryId, 'string', `${field} mapping must be a string`);
    if (entryId) assert.match(entryId, /^entry\.\d+$/, `${field} must look like entry.123456`);
  }
});

test('connect config mode is a known value', () => {
  assert.ok(['lti', 'form'].includes(config.mode));
});
