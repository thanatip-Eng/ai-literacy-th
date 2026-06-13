const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CONTENT_PATH = path.join(ROOT, 'content', 'app-content.js');

function loadContent() {
  delete require.cache[require.resolve(CONTENT_PATH)];
  return require(CONTENT_PATH);
}

function assertBilingual(value, label, errors) {
  if (!value || typeof value !== 'object') {
    errors.push(`${label} must be a bilingual object`);
    return;
  }
  for (const lang of ['th', 'en']) {
    if (typeof value[lang] !== 'string' || !value[lang].trim()) {
      errors.push(`${label}.${lang} must be a non-empty string`);
    }
  }
}

function validateContent(content) {
  const errors = [];
  if (!content || typeof content !== 'object') return ['content must be an object'];

  for (const lang of ['th', 'en']) {
    if (!content.lang || !content.lang[lang]) {
      errors.push(`lang.${lang} is required`);
    }
  }

  const thKeys = Object.keys((content.lang && content.lang.th) || {}).sort();
  const enKeys = Object.keys((content.lang && content.lang.en) || {}).sort();
  if (JSON.stringify(thKeys) !== JSON.stringify(enKeys)) {
    errors.push('Thai and English UI string keys must match');
  }
  for (const key of thKeys) {
    const th = content.lang.th[key];
    const en = content.lang.en[key];
    if (Array.isArray(th) || Array.isArray(en)) {
      if (!Array.isArray(th) || !Array.isArray(en) || th.length !== en.length) {
        errors.push(`lang.${key} arrays must exist in both languages with equal lengths`);
      }
    } else if (typeof th !== 'string' || typeof en !== 'string') {
      errors.push(`lang.${key} must be a string in both languages`);
    }
  }

  if (!Array.isArray(content.levels) || !content.levels.length) {
    errors.push('levels must be a non-empty array');
  } else {
    content.levels.forEach((level, index) => {
      const label = `levels[${index}]`;
      if (level.n !== index + 1) errors.push(`${label}.n must be ${index + 1}`);
      if (!/^#[0-9A-Fa-f]{6}$/.test(level.color || '')) errors.push(`${label}.color must be a hex color`);
      for (const key of ['name', 'short', 'desc', 'blurb', 'nextH']) {
        assertBilingual(level[key], `${label}.${key}`, errors);
      }
      for (const key of ['items', 'next', 'workshops']) {
        if (!Array.isArray(level[key]) || !level[key].length) {
          errors.push(`${label}.${key} must be a non-empty array`);
          continue;
        }
        level[key].forEach((value, itemIndex) =>
          assertBilingual(value, `${label}.${key}[${itemIndex}]`, errors)
        );
      }
    });
  }

  if (content.partnership) {
    const p = content.partnership;
    for (const key of ['name', 'desc']) {
      assertBilingual(p[key], `partnership.${key}`, errors);
    }
    if (!/^#[0-9A-Fa-f]{6}$/.test(p.color || '')) {
      errors.push('partnership.color must be a hex color');
    }
    if (typeof p.threshold !== 'number' || p.threshold < 0 || p.threshold > 100) {
      errors.push('partnership.threshold must be a number between 0 and 100');
    }
    if (!Array.isArray(p.subtraits) || !p.subtraits.length) {
      errors.push('partnership.subtraits must be a non-empty array');
    } else {
      p.subtraits.forEach((sub, index) => {
        const label = `partnership.subtraits[${index}]`;
        if (typeof sub.key !== 'string' || !sub.key.trim()) {
          errors.push(`${label}.key must be a non-empty string`);
        }
        for (const key of ['name', 'desc']) {
          assertBilingual(sub[key], `${label}.${key}`, errors);
        }
        if (!Array.isArray(sub.items) || !sub.items.length) {
          errors.push(`${label}.items must be a non-empty array`);
          return;
        }
        sub.items.forEach((item, itemIndex) => {
          assertBilingual(item, `${label}.items[${itemIndex}]`, errors);
          if (item && typeof item.reverse !== 'boolean') {
            errors.push(`${label}.items[${itemIndex}].reverse must be a boolean`);
          }
        });
      });
    }
    if (!p.quadrants || typeof p.quadrants !== 'object') {
      errors.push('partnership.quadrants must be an object');
    } else {
      for (const qKey of ['novice', 'coach', 'autopilot', 'director']) {
        const q = p.quadrants[qKey];
        const label = `partnership.quadrants.${qKey}`;
        if (!q) {
          errors.push(`${label} is required`);
          continue;
        }
        for (const key of ['name', 'short', 'blurb', 'nudge']) {
          assertBilingual(q[key], `${label}.${key}`, errors);
        }
        if (!/^#[0-9A-Fa-f]{6}$/.test(q.color || '')) {
          errors.push(`${label}.color must be a hex color`);
        }
      }
    }
  }

  if (!Array.isArray(content.scale) || content.scale.length !== 5) {
    errors.push('scale must contain exactly five choices');
  } else {
    content.scale.forEach((choice, index) => {
      if (choice.v !== index) errors.push(`scale[${index}].v must be ${index}`);
      if (choice.display !== index + 1) {
        errors.push(`scale[${index}].display must be ${index + 1}`);
      }
      assertBilingual(choice.lab, `scale[${index}].lab`, errors);
      assertBilingual(choice.sub, `scale[${index}].sub`, errors);
    });
  }

  return errors;
}

function serializeContent(content) {
  return `(function(root, factory) {
  const content = factory();
  if (typeof module === 'object' && module.exports) module.exports = content;
  root.AI_LITERACY_CONTENT = content;
})(typeof globalThis !== 'undefined' ? globalThis : this, function() {
  return ${JSON.stringify(content, null, 2)};
});
`;
}

function writeContent(content) {
  const errors = validateContent(content);
  if (errors.length) throw new Error(`Invalid content:\n- ${errors.join('\n- ')}`);
  fs.writeFileSync(CONTENT_PATH, serializeContent(content));
}

module.exports = {
  CONTENT_PATH,
  loadContent,
  serializeContent,
  validateContent,
  writeContent
};
