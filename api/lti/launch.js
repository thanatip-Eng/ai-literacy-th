'use strict';
// LTI 1.1 launch endpoint.
// Order of checks (per spec): signature → replay (nonce + timestamp) →
// email → allowlist → issue session → redirect into the app.
const oauth1 = require('../_lib/oauth1');
const {signSession, sessionCookie, DEFAULT_MAX_AGE} = require('../_lib/session');
const {nonceSeen} = require('../_lib/nonce-store');
const {isAllowed} = require('../_lib/allowlist');
const {readFormBody} = require('../_lib/body');

const TIMESTAMP_WINDOW_SECONDS = 300;
const NONCE_TTL_SECONDS = 600;

function htmlPage(res, status, {titleTh, titleEn, bodyTh, bodyEn}) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(`<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${titleTh}</title>
<style>
  body{margin:0;background:#F3EEE4;color:#211C16;font-family:"IBM Plex Sans Thai","IBM Plex Sans",sans-serif;
    display:flex;align-items:center;justify-content:center;min-height:100vh;padding:24px}
  .card{background:#FCFAF5;border:1px solid #DCD3C2;border-radius:18px;max-width:480px;
    padding:28px 30px;box-shadow:0 14px 30px -22px rgba(33,28,22,.4)}
  h1{font-size:1.2rem;color:#0A4F47;margin:0 0 10px}
  p{font-size:.95rem;line-height:1.65;margin:0 0 8px}
  .en{color:#736A5C;font-size:.85rem}
</style>
</head>
<body>
  <div class="card">
    <h1>${titleTh}</h1>
    <p>${bodyTh}</p>
    <p class="en"><b>${titleEn}</b> — ${bodyEn}</p>
  </div>
</body>
</html>`);
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const consumerKey = process.env.LTI_CONSUMER_KEY;
  const sharedSecret = process.env.LTI_SHARED_SECRET;
  // Forced from config — never reconstructed from proxy headers, so the
  // signature base string always matches what Canvas signed.
  const launchUrl = process.env.LTI_LAUNCH_URL;
  const sessionSecret = process.env.SESSION_SECRET;
  if (!consumerKey || !sharedSecret || !launchUrl || !sessionSecret) {
    htmlPage(res, 500, {
      titleTh: 'ระบบยังไม่ได้ตั้งค่า',
      titleEn: 'Not configured',
      bodyTh: 'ผู้ดูแลยังตั้งค่า LTI ไม่ครบ (LTI_CONSUMER_KEY / LTI_SHARED_SECRET / LTI_LAUNCH_URL / SESSION_SECRET)',
      bodyEn: 'The administrator has not finished configuring LTI environment variables.'
    });
    return;
  }

  let params;
  try {
    params = await readFormBody(req);
  } catch {
    params = null;
  }
  if (!params || params.lti_message_type !== 'basic-lti-launch-request' ||
      params.oauth_consumer_key !== consumerKey) {
    htmlPage(res, 400, {
      titleTh: 'คำขอไม่ถูกต้อง',
      titleEn: 'Invalid launch request',
      bodyTh: 'คำขอนี้ไม่ใช่ LTI launch ที่ถูกต้องจาก Canvas',
      bodyEn: 'This request is not a valid LTI launch from Canvas.'
    });
    return;
  }

  // a. Verify the OAuth 1.0 HMAC-SHA1 signature — server-side only.
  if (!oauth1.verify('POST', launchUrl, params, sharedSecret)) {
    htmlPage(res, 401, {
      titleTh: 'ตรวจสอบลายเซ็นไม่ผ่าน',
      titleEn: 'Signature verification failed',
      bodyTh: 'คำขอนี้ไม่ได้มาจาก Canvas ที่ตั้งค่าไว้ กรุณาเข้าผ่านลิงก์ในรายวิชา Canvas',
      bodyEn: 'This request did not come from the configured Canvas course. Please launch from Canvas.'
    });
    return;
  }

  // b. Replay prevention: timestamp window + persisted nonce.
  const timestamp = Number(params.oauth_timestamp);
  const now = Math.floor(Date.now() / 1000);
  if (!Number.isFinite(timestamp) || Math.abs(now - timestamp) > TIMESTAMP_WINDOW_SECONDS) {
    htmlPage(res, 401, {
      titleTh: 'คำขอหมดอายุ',
      titleEn: 'Launch expired',
      bodyTh: 'ลิงก์เปิดใช้งานหมดอายุแล้ว กรุณากดเปิดจาก Canvas อีกครั้ง',
      bodyEn: 'The launch expired. Please open the link from Canvas again.'
    });
    return;
  }
  const nonce = String(params.oauth_nonce || '');
  let replayed = true;
  try {
    replayed = !nonce || (await nonceSeen(nonce, NONCE_TTL_SECONDS));
  } catch {
    replayed = true; // nonce store unavailable → fail closed
  }
  if (replayed) {
    htmlPage(res, 401, {
      titleTh: 'คำขอซ้ำ',
      titleEn: 'Duplicate launch',
      bodyTh: 'คำขอนี้ถูกใช้ไปแล้ว กรุณากดเปิดจาก Canvas อีกครั้ง',
      bodyEn: 'This launch was already used. Please open the link from Canvas again.'
    });
    return;
  }

  // c. Verified identity from Canvas (requires Privacy = Public/Email).
  const email = String(params.lis_person_contact_email_primary || '').trim();
  if (!email) {
    htmlPage(res, 400, {
      titleTh: 'Canvas ไม่ได้ส่งอีเมล',
      titleEn: 'Canvas did not send an email',
      bodyTh: 'ผู้สอนต้องตั้งค่าแอปใน Canvas เป็น Privacy = Public/Email เพื่อให้ระบบรู้ว่าใครทำแบบประเมิน',
      bodyEn: 'The Canvas app must be configured with Privacy = Public/Email.'
    });
    return;
  }

  // d. Allowlist is the decision-maker.
  if (!isAllowed(email, process.env.ALLOWLIST)) {
    htmlPage(res, 403, {
      titleTh: 'ไม่ได้รับอนุญาต',
      titleEn: 'Not authorized',
      bodyTh: `อีเมล ${email} ไม่อยู่ในรายชื่อผู้มีสิทธิ์ทำแบบประเมินนี้ กรุณาติดต่อผู้สอน`,
      bodyEn: 'This email is not on the allowlist for this assessment. Please contact your instructor.'
    });
    return;
  }

  // e. Issue an authenticated session and hand off into the app (same origin).
  const token = signSession({
    email,
    name: String(params.lis_person_name_full || '').trim(),
    roles: String(params.roles || '')
  }, sessionSecret);
  res.statusCode = 302;
  res.setHeader('Set-Cookie', sessionCookie(token, DEFAULT_MAX_AGE));
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Location', '/');
  res.end();
};
