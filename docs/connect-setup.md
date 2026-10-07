# คู่มือตั้งค่าโหมดเชื่อมต่อ (Canvas LMS + Google Form)

## โปรเจกต์เดียว สองโดเมน

deployment เดียวให้บริการได้ทั้งสองแบบ — โหมดเชื่อมต่อทำงานเฉพาะโดเมนที่อยู่ใน
`connectHosts` ของ `content/connect-config.js` ส่วน**โดเมนอื่นทุกโดเมนของโปรเจกต์
เดียวกันเป็นโหมด public (zero-data) โดยอัตโนมัติ** วิธีเพิ่มโดเมนสาธารณะ:
Vercel → Project → Settings → Domains → Add (เช่น `testyouraistyle.vercel.app`) —
เพิ่มแล้วใช้ได้ทันที ไม่ต้องแก้ config

นอกจากนี้ `copyOverrides` ใน config ใช้ปรับข้อความบางจุดให้กระชับสำหรับผู้เรียน
ฝั่ง Canvas โดยไม่กระทบฉบับเต็มบนโดเมน public (override ได้เฉพาะ key ที่มีอยู่ใน
`content/app-content.js` — มีเทสตรวจ)

ระบบมี 3 โหมดการทำงาน — เลือกตามบริบทของคุณ:

| โหมด | ใครทำได้ | ตัวตนผู้ทำ | ผลไปที่ไหน |
|---|---|---|---|
| **public** (ค่าเริ่มต้น) | ทุกคน | ไม่ระบุ | อยู่ในเบราว์เซอร์เท่านั้น (zero-data) |
| **form** | ทุกคนที่มีลิงก์ | ชื่อ + รหัส นศ. ที่กรอกเอง | Google Form → Google Sheet |
| **lti** | เฉพาะอีเมลใน allowlist ที่เข้าผ่าน Canvas | อีเมลที่ Canvas ยืนยันแล้ว | Google Form → Google Sheet (ผ่าน server) |

โหมด public ไม่ต้องตั้งค่าอะไร — ไฟล์ `content/connect-config.js` ตั้ง `enabled: false` ไว้แล้ว

---

## ขั้นที่ 1 — สร้าง Google Form รองรับผล

1. สร้าง Google Form ใหม่ ตั้งคำถามชนิด **Short answer** ตามรายการด้านล่าง (ไม่ต้องครบทุกข้อ — ข้อไหนไม่ต้องการให้ข้าม แล้วเว้น mapping ว่างในขั้นที่ 2)

   | Field | ความหมาย |
   |---|---|
   | name | ชื่อผู้ทำ |
   | studentId (หรือ studentid) | รหัสนักศึกษา (โหมด form) |
   | email | อีเมลที่ยืนยันจาก Canvas (โหมด lti) |
   | role | รหัสบทบาท (admin / student / …) — เฉพาะเวอร์ชันสาธารณะ |
   | discipline | กลุ่มสาขาของนักศึกษา (health / engtech / scienat / bizpol / humsoc / artdes) — เฉพาะเวอร์ชันนักศึกษา |
   | fieldScore | คะแนนชุดสถานการณ์ตามสาย 0–100 — ไม่ได้รวมอยู่ในคะแนนหลัก |
   | lang | ภาษาที่ใช้ทำ (th / en) |
   | placement (หรือ level_cumulative) | ระดับทักษะสะสม 0–3 |
   | l1, l2, l3 | คะแนนรายระดับทักษะ 0–100 (3 ช่องแยก) |
   | score_skill | คะแนนทักษะรวมช่องเดียว เช่น `L1:100 L2:75 L3:25` |
   | partnershipComposite (หรือ score_partnership) | คะแนนรวม Partnership 0–100 |
   | verify, restraint, humanLead, direction, learning, privacy | คะแนนราย subtrait 0–100 (6 ช่องแยก) |
   | score_subtrait | คะแนน subtrait รวมช่องเดียว เช่น `verify:13 restraint:75 human_lead:100 direction:75 learning:63 privacy:50` |
   | quadrant | novice / coach / autopilot / director |
   | weakTags | subtrait ที่ < 50% (คั่นด้วย comma) |
   | rawAnswers | คำตอบดิบ (0–4 คั่นด้วย comma) — ใช้วิเคราะห์รายข้อ · ความยาว 20 = v1, 22 = v2, 24 = v3, 28/34 = v4, **30 = v5 (แกนกลาง), 36 = v5 + ชุดสถานการณ์ตามสาย** |
   | version | เวอร์ชันชุดข้อคำถาม (เช่น v3) |
   | date | เวลาที่ทำเสร็จ (ISO) |

   ใช้ชุดช่องแยก (l1/l2/l3, verify/…) หรือชุดรวมช่องเดียว (score_skill, score_subtrait)
   อย่างใดอย่างหนึ่งก็ได้ตามการออกแบบฟอร์ม — ระบบส่งให้ทั้งสองแบบ map เฉพาะที่ฟอร์มมี

2. ใน Form ตั้ง **Settings → Responses → Limit to 1 response = OFF** (ระบบส่งแทนผู้ใช้ การบังคับ login Google จะทำให้ส่งไม่ได้) และกด **Link to Sheets** เพื่อให้ผลไหลเข้า Google Sheet

3. **หา entry ID ของแต่ละคำถาม**: กด ⋮ → **Get pre-filled link** → กรอกค่าอะไรก็ได้ทุกช่อง → **Get link** → คัดลอกลิงก์มาดู จะเห็น `entry.123456789=...` ของแต่ละคำถามเรียงตามลำดับ

4. **ช่องที่ฟอร์มปัจจุบันยังไม่มี** — `discipline`, `role` และ `version` ยังไม่เคยถูก map
   ใน `content/connect-config.js` แปลว่าค่าเหล่านี้ถูกส่งออกจากเบราว์เซอร์แต่ไม่มีคำถาม
   รองรับ จึงไม่ถึง Sheet · ถ้าต้องการวิเคราะห์แยกตามกลุ่มสาขา (เช่น "นักศึกษาสาย
   วิทยาศาสตร์และเทคโนโลยีเป็น autopilot มากกว่าสายอื่นไหม") ให้เพิ่มคำถาม Short answer
   ชื่อ `discipline` ในฟอร์มหลัก → ทำขั้นตอน Get pre-filled link ซ้ำ → นำ entry ID ที่ได้
   ไปใส่ใน `fields.discipline` (ตอนนี้เว้นเป็น `""` ไว้แล้ว) · คำถามที่เพิ่มทีหลังจะอยู่
   ท้ายลิงก์ prefill เสมอ จึงหาไม่ยาก

## ขั้นที่ 2 — ตั้งค่า `content/connect-config.js`

```js
enabled: true,
mode: "lti",           // หรือ "form" ถ้าไม่ใช้ Canvas
formUrl: "https://docs.google.com/forms/d/e/XXXX/formResponse",
                       // นำมาจากลิงก์ฟอร์ม เปลี่ยน /viewform เป็น /formResponse
fields: {
  name: "entry.111111",
  email: "entry.222222",
  placement: "entry.333333",
  // ... ใส่ entry ID ที่ได้จากขั้นที่ 1 · ข้อที่ไม่ใช้เว้นเป็น "" (จะไม่ถูกส่ง)
}
```

จากนั้นรัน `npm test` เพื่อตรวจรูปแบบ แล้ว deploy

**โหมด form จบแค่นี้** — เบราว์เซอร์ของผู้ทำจะส่งผลเข้า Google Form โดยตรงเมื่อทำเสร็จ พร้อมช่องกรอกรหัสนักศึกษาในหน้ากรอกชื่อ · โหมด lti ทำต่อขั้นที่ 3

---

> **โหลดจริงคือสองเท่าของจำนวนนักศึกษา**: แต่ละคนยิง Google Form **สองใบ** —
> micro-feedback ยิงก่อน แล้วค่อยผลหลักตาม (โหมด Canvas บังคับให้ดาวครบก่อนส่ง)
> นักศึกษา 3,000 คน = **6,000 ครั้ง** เวลาประเมินโหลดอย่าคิดแค่ครั้งเดียว

## งานสะท้อนคิด (assignment ตัวที่สอง)

หน้าผลสร้าง **คำถามสะท้อนคิดจากผลของนักศึกษาเอง** เสมอ (กดคัดลอกได้) และหลังกดส่งผล
**ในกล่องรหัสยืนยันจะมีปุ่ม "เปิดแบบสะท้อนคิด"** ซึ่งพาไปยังฟอร์มภายนอกพร้อม prefill
รหัสยืนยัน · ปุ่มจะแสดงเมื่อใส่ `reflect.url` ใน `content/connect-config.js` เท่านั้น

แนะนำ **Microsoft Forms** ของมหาวิทยาลัยมากกว่า Canvas Text Entry เพราะกด Export เป็น
Excel ได้ทันที (แถวละคน คอลัมน์ละคำถาม) ส่วน Canvas ต้องดึงผ่าน API หรือดาวน์โหลดทีละไฟล์
และข้อมูลอยู่ใน tenant ของมหาวิทยาลัยซึ่งตอบโจทย์ PDPA มากกว่า

### ชื่อฟอร์มและคำอธิบาย (คัดลอกไปวางได้เลย)

**Title:** `งานสะท้อนคิด AiStyle — สิ่งที่ AI ทำแทนฉันไม่ได้`

**Description:**

> ตอบจากผลแบบประเมิน AiStyle ของคุณเอง · ใช้เวลาประมาณ 15–20 นาที
>
> งานนี้ไม่มีคำตอบที่ถูก และไม่ได้ให้คะแนนจากการที่คุณดูดี — คะแนนมาจากความตรงไปตรงมา
> และความเฉพาะเจาะจง คำตอบของคุณผู้สอนอ่าน ไม่เผยแพร่ และไม่นำไปเทียบกับเพื่อนในชั้น

### คำถามในฟอร์ม (คัดลอกไปใช้ได้เลย)

| # | คำถาม | ชนิด | หมายเหตุ |
|---|---|---|---|
| 1 | รหัสยืนยันการส่งผล (8 ตัวอักษร จากหน้าผล) | Short answer · บังคับ | prefill อัตโนมัติ → `reflect.params.receipt` |
| 2 | รูปแบบการใช้ AI ของคุณ | Short answer | prefill → `quadrant` |
| 3 | ระดับทักษะ (0–3) | Short answer | prefill → `placement` |
| 4 | กลุ่มสาขา | Short answer | prefill → `discipline` |
| 5 | รหัสชุดคำถามสะท้อนคิดของคุณ (ระบบเติมให้ ไม่ต้องแก้) | Short answer | prefill → `promptKeys` — ดูหมายเหตุใต้ตาราง |
| 6 | คำตอบของคุณต่อคำถามเหล่านั้น | Long answer · บังคับ | |
| 7 | **แนวทางพัฒนาตัวเอง** (ข้อความเต็มด้านล่าง) | Long answer · บังคับ | ข้อที่ตั้งใจให้สะดุด |

### ข้อไหนต้องตั้ง required — บังคับเฉพาะ 1, 6, 7

**ข้อ 2–5 ต้องไม่บังคับ** — อย่าเผลอไปติ้ก ด้วยสองเหตุผล:

1. **ค่าว่างเกิดขึ้นได้จริง** — หน้าเลือกสาขามีปุ่ม "ข้าม / ไม่ระบุ"
   ที่แสดงในโหมดนักศึกษาด้วย ใครกดข้าม `discipline` จะว่าง และ `buildReflectUrl`
   ตัดพารามิเตอร์ที่ว่างทิ้ง → **ข้อ 4 มาถึงแบบว่าง** ถ้าตั้ง required นักศึกษาคนนั้นส่งงานไม่ได้
2. **assignment 2 ใน Canvas เป็น External URL ชี้ไปที่ฟอร์มเปล่า** ใครกดจากตรงนั้น
   แทนการกดปุ่มในกล่องรหัสยืนยัน จะได้ฟอร์มว่างทั้งใบ — ถ้า 2–5 บังคับ
   เขาต้องนั่งพิมพ์ชื่อ quadrant ระดับทักษะ รหัสสาขา และรหัสชุดคำถามเองทั้งหมด

และการบังคับข้อ 2–5 ไม่ได้ความถูกต้องเพิ่มเลย — **ค่าทุกตัวอยู่ใน Google Sheet อยู่แล้ว**
เขียนโดยเซิร์ฟเวอร์ แก้ไม่ได้ จับคู่ด้วยรหัสยืนยันก็ได้ครบ ข้อ 2–5 มีไว้ให้นักศึกษา
เห็นบริบทของตัวเองขณะเขียนเท่านั้น

**ข้อ 7 — ฉบับภาษาไทย** (ใส่ย่อหน้าแรกเป็นคำอธิบายใต้หัวข้อคำถาม):

> ถ้าสิ่งที่คุณทำได้ คือการส่งคำสั่งให้ AI แล้วส่งงานต่อ — องค์กรก็จ้าง AI ตรง ๆ ได้ ไม่ต้องจ้างคุณ
> และถ้าคุณมานั่งเรียนแล้วให้ AI ทำทุกอย่างแทน อาจารย์ก็สอน AI ก็ได้ ไม่ต้องสอนคุณ
>
> อีกไม่กี่ปีตอนคุณเรียนจบ **อะไรคือสิ่งที่คุณทำได้ซึ่ง AI ทำแทนไม่ได้** — เขียนมาหนึ่งอย่าง
> ที่คุณจะเริ่มสร้างในเทอมนี้ บอกให้ชัดว่าจะทำอะไร สัปดาห์ละกี่ครั้ง และจะรู้ได้อย่างไรว่า
> คุณทำได้จริงแล้ว (ไม่ใช่แค่รู้สึกว่าทำได้)
>
> ไม่ต้องคิดขึ้นใหม่จากหน้าว่าง — ย้อนไปดูหน้าผลของคุณก่อน การ์ด **🎓 ถ้าวันนี้ไม่มี AI**
> ด้านที่คะแนนต่ำสุด คือสิ่งที่ AI ทำแทนคุณไปแล้ว และการ์ด **🎓 คำแนะนำสำหรับสายของคุณ**
> เลือกจากตรงนั้น ไม่ใช่จากสิ่งที่ฟังดูดี
>
> ❌ ยังไม่ผ่าน: *“จะฝึกคิดวิเคราะห์ให้มากขึ้น ไม่พึ่ง AI มากเกินไป”*
>
> ✅ ผ่าน: *“วาดมือเปล่าจากของจริงสัปดาห์ละ 2 ครั้ง ครั้งละ 30 นาที ไม่ใช้ภาพอ้างอิงจาก AI ·
> ทุกวันอังคารกับวันเสาร์ · รู้ว่าทำได้เมื่อวาดมือคนจากการมองจริงได้ใน 10 นาทีโดยสัดส่วนไม่เพี้ยน”*
>
> (ตัวอย่างข้างบนมาจากสายวิจิตรศิลป์ — มีไว้ให้เห็นว่าคำตอบที่ใช้ได้หน้าตาเป็นอย่างไร ของคุณต้องมาจากสายคุณเอง)

**ข้อ 7 — English version:**

> If all you can do is pass instructions to AI and hand in what comes back, an
> employer can hire the AI directly — there is no reason to hire you. And if you
> sit in class and let AI do the work, your lecturer could just teach the AI
> instead of teaching you.
>
> In a few years, when you graduate, **what will you be able to do that AI cannot
> do for you?** Name one thing you will start building this term: what exactly you
> will do, how often, and how you will know you can actually do it — not just feel
> that you can.
>
> You do not have to invent this from nothing — go back to your own result. On the
> **🎓 If AI were switched off today** card, the lowest bar is what AI has taken over
> for you; the **🎓 Guidance for your field** card is the other place to look. Pick
> from there, not from what sounds impressive.
>
> ❌ Not enough: *“I will practise critical thinking more and rely on AI less.”*
>
> ✅ Enough: *“Draw from life by hand twice a week, 30 minutes, no AI reference
> images · Tuesdays and Saturdays · I will know when I can draw a human hand from
> observation in 10 minutes with the proportions right.”*
>
> (That example is from fine arts — it is there to show the shape of a usable
> answer. Yours has to come from your own field.)

### ขั้นตอนตั้งค่า

1. สร้าง MS Form ตามตารางด้านบน · ตั้งให้ตอบได้เฉพาะคนในองค์กร (บันทึกอีเมลอัตโนมัติ)
2. กด **Collect responses → Get a link to prefill answers** กรอกค่าอะไรก็ได้ในข้อ 1–5
   แล้วคัดลอกลิงก์ จะเห็นรหัสรูปแบบ `rXXXXXXXX=` ของแต่ละข้อ
3. ใส่ลิงก์ (ตัดส่วน `&rXXXX=...` ออกให้หมด) ลงใน `reflect.url` และใส่รหัสแต่ละตัวใน
   `reflect.params` → `receipt`, `quadrant`, `placement`, `discipline`, `promptKeys`, `lang`

   รหัสในลิงก์เรียงตามข้อในฟอร์ม — ถ้าข้อไหนไม่ขึ้น ให้เทียบลำดับรหัสกับลำดับข้อก่อน
   ข้อที่เป็น **Choice** จะ prefill ได้ก็ต่อเมื่อค่าตรงกับชื่อตัวเลือกเป๊ะ ๆ — ข้อ 3 จึงควรเป็น Short answer

### ทำไมข้อ 5 จึงเป็นรหัส ไม่ใช่ตัวคำถาม

MS Forms หยุดอ่าน prefill URL ที่ราว **2,000 ตัวอักษร** ส่วนคำถามสะท้อนคิดสามข้อ
เมื่อ percent-encode ภาษาไทยแล้วยาว **2,400–3,000 ตัวอักษร** — ใส่ไปลิงก์พังทั้งเส้น
(นักศึกษาเปิดฟอร์มไม่ได้เลย) ระบบจึงส่ง **รหัสชุดคำถาม** แทน เช่น `effort+selfTrust+always`
เรียงจากด้านที่คะแนนต่ำสุดก่อน รหัสที่เป็นได้:

| รหัส | คำถามเกี่ยวกับ |
|---|---|
| `selfReliance` | สิ่งที่ทำเองได้เมื่อไม่มี AI |
| `selfTrust` | การเชื่อคำตอบ AI มากกว่าความคิดตัวเอง |
| `verify` | การตรวจสอบสิ่งที่ AI ตอบ |
| `effort` | การอยู่กับงานยากโดยไม่ขอทางลัด |
| `strong` | (ไม่มีด้านไหนต่ำกว่าเกณฑ์) |
| `always` | คำถามปิดท้ายที่ทุกคนได้เหมือนกัน |

ตัวคำถามเต็ม ๆ ยังอยู่บนหน้าผลและกดปุ่ม "คัดลอกคำถาม" ได้เหมือนเดิม
4. ใน Canvas สร้าง assignment ตัวที่สองแบบ **External URL** ชี้ไปที่ฟอร์ม — คะแนนการทำ
   แบบประเมินยังมาจาก assignment ตัวแรก (External Tool) ที่ส่งคะแนนกลับอัตโนมัติอยู่แล้ว

> **ข้อควรรู้ — ล็อกช่อง prefill ไม่ได้**: MS Forms ไม่มีโหมด read-only รายข้อ
> ค่าที่เติมมาให้เป็นแค่ค่าตั้งต้น นักศึกษาลบและพิมพ์ใหม่ได้เสมอ ไม่ว่าจะตั้งค่าอย่างไร
>
> ทางแก้คือ **อย่าใช้ช่องเหล่านี้เป็นหลักฐานในการให้คะแนน** — คะแนนจริงอยู่ใน Google Sheet
> ที่เซิร์ฟเวอร์เขียนเอง นักศึกษาแก้ไม่ได้ เวลาตรวจให้ **จับคู่ด้วยรหัสยืนยัน (ข้อ 1)**
> แล้วอ่านคะแนนจากแถวใน Sheet ข้อ 2–5 มีไว้เพื่อให้นักศึกษาเห็นบริบทของตัวเองขณะเขียน เท่านั้น
>
> ถ้าไม่อยากให้มีช่องที่แก้ได้เลย ลบข้อ 2–5 ออกจากฟอร์มได้ เหลือแค่ข้อ 1 กับข้อเขียน —
> รหัสยืนยันตัวเดียวก็ดึงค่าทุกอย่างจาก Sheet ได้อยู่แล้ว

`reflect.url` ว่าง = ไม่มีปุ่ม (คำถามยังขึ้นและคัดลอกได้) — โดเมนสาธารณะไม่แสดงปุ่มนี้อยู่แล้ว

---

## ขั้นที่ 3 — ตั้งค่า LTI 1.1 (เฉพาะโหมด lti)

โหมดนี้ต้อง deploy บน **Vercel** (ใช้ serverless functions ใน `api/` — origin เดียวกับหน้าเว็บ)

### 3.1 Environment variables บน Vercel

ตั้งใน **Vercel → Project → Settings → Environment Variables** (ห้าม commit ค่าเหล่านี้ลง repo เด็ดขาด):

| ตัวแปร | ค่า |
|---|---|
| `LTI_CONSUMER_KEY` | สตริงที่คุณตั้งเอง เช่น `ailit-2026` (ใช้กรอกใน Canvas ด้วย) |
| `LTI_SHARED_SECRET` | สตริงสุ่มยาว ๆ (เช่นจาก `openssl rand -hex 32`) — **อยู่บน server เท่านั้น** |
| `LTI_LAUNCH_URL` | URL เต็มของ endpoint เช่น `https://your-app.vercel.app/api/lti/launch` — ต้องตรงกับที่กรอกใน Canvas ทุกตัวอักษร |
| `SESSION_SECRET` | สตริงสุ่มอีกชุด ใช้เซ็น session cookie |
| `ALLOWLIST` | รายชื่ออีเมลผู้มีสิทธิ์ คั่นด้วย comma เช่น `a@cmu.ac.th, b@cmu.ac.th` — รองรับทั้งโดเมนด้วย `*@eng.cmu.ac.th` · **ไม่อยู่ในรายชื่อ = ถูกปฏิเสธ** |
| `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` | (แนะนำ) จาก [Upstash](https://upstash.com) ฟรี — ใช้กัน replay attack แบบถาวร ถ้าไม่ตั้ง ระบบใช้หน่วยความจำชั่วคราวแทน (กันได้เฉพาะภายใน instance เดิม) |

การเพิ่ม/ลบอีเมล: แก้ค่า `ALLOWLIST` ใน Vercel แล้ว redeploy (หรือใช้ *@โดเมน แล้วคุมสิทธิ์ที่ระดับรายวิชาใน Canvas แทน)

### 3.2 เพิ่มแอปใน Canvas (ระดับรายวิชา — ไม่ต้องเป็น admin)

> 📘 **ทำหลายวิชา?** ดู [`canvas-course-setup.md`](canvas-course-setup.md) —
> คู่มือทีละขั้นพร้อมเช็กลิสต์ ตารางแก้ปัญหา และคำอธิบาย assignment ให้ก๊อปวาง

1. เข้ารายวิชา → **Settings → Apps → View App Configurations → + App**
2. **Configuration Type = Manual Entry** แล้วกรอก:
   - **Name**: AiStyle Assessment
   - **Consumer Key**: ค่าเดียวกับ `LTI_CONSUMER_KEY`
   - **Shared Secret**: ค่าเดียวกับ `LTI_SHARED_SECRET`
   - **Launch URL**: ค่าเดียวกับ `LTI_LAUNCH_URL`
   - **Privacy**: **Public** (หรือ E-Mail Only) — *สำคัญมาก ถ้าไม่ตั้ง Canvas จะไม่ส่งอีเมล และระบบจะปฏิเสธทุกคน*
3. เพิ่มเข้า Module หรือ Assignment (ชนิด External Tool) แล้วติ๊ก **"Load in a new tab"** — จำเป็นเพราะเบราว์เซอร์สมัยใหม่บล็อก third-party cookies ใน iframe

### 3.3 พฤติกรรมที่ได้

- นศ. กดลิงก์ใน Canvas → Canvas ส่ง launch ที่เซ็นลายเซ็นมา → server ตรวจลายเซ็น + กัน replay + เช็ค allowlist → ออก session cookie → เข้าแบบประเมิน
- คนที่เปิด URL ตรง ๆ (ไม่ผ่าน Canvas) จะเจอหน้า "กรุณาเข้าผ่าน Canvas" และ `/api/submit` ปฏิเสธทุกคำขอที่ไม่มี session (default-deny)
- เมื่อทำเสร็จ นศ. ดูผลก่อน แล้ว**กดปุ่ม "ส่งผลให้ผู้สอน" เอง** → ระบบส่งคะแนนทุกด้าน + อีเมลที่ Canvas ยืนยันแล้ว เข้า Google Form → Google Sheet (มีปุ่ม "ส่งอีกครั้ง" ถ้าล้มเหลว)

### 3.4 ใบยืนยันการส่ง (submission receipt)

เมื่อส่งสำเร็จ นศ. จะเห็น**กล่องยืนยันสีเขียว** แสดงชื่อ/อีเมล เวลา และ**รหัสยืนยัน 8 หลัก**
พร้อมคำแนะนำให้แคปหน้าจอเก็บไว้เป็นหลักฐาน — รหัสนี้ server คำนวณจาก
`HMAC-SHA256(SESSION_SECRET, "อีเมล|เวลา ISO")` (ตัด 8 ตัวแรก ตัวพิมพ์ใหญ่)
ปลอมไม่ได้ถ้าไม่รู้ secret

**วิธีตรวจสอบรหัสจาก screenshot ของ นศ.** (กรณีแถวหายจาก Sheet):

```bash
SESSION_SECRET=ค่าจริง node -e "
const c = require('crypto');
const [email, stamp] = ['somchai@cmu.ac.th', '2026-08-06T03:00:00.000Z']; // จาก screenshot
console.log(c.createHmac('sha256', process.env.SESSION_SECRET)
  .update(email + '|' + stamp).digest('hex').slice(0, 8).toUpperCase());
"
```

ถ้าผลตรงกับรหัสในภาพ = ส่งจริง · แนะนำเพิ่มคำถาม "receipt" ใน Google Form แล้ว map
`receipt: "entry.NNN"` ใน config ด้วย — รหัสจะถูกบันทึกลง Sheet คู่กับข้อมูล ทำให้ค้นเจอทันที

### 3.5 ส่งคะแนนกลับเข้า Canvas อัตโนมัติ (grade passback)

เมื่อ นศ. กด "ส่งผลให้ผู้สอน" ระบบจะบันทึก**คะแนนเต็ม**ลง Canvas gradebook ให้ทันที
(แบบประเมินตนเองไม่มีคำตอบถูก/ผิด คะแนนจึงหมายถึง "ทำครบแล้ว" ไม่ใช่ระดับทักษะ —
ถ้าให้คะแนนตามระดับ นศ. จะถูกจูงใจให้ตอบไม่ตรงความจริง)

**เงื่อนไขสำคัญ:** Canvas จะส่งข้อมูลที่ใช้บันทึกคะแนน (`lis_outcome_service_url` +
`lis_result_sourcedid`) มาให้**เฉพาะเมื่อ นศ. เปิดเครื่องมือจาก Assignment** เท่านั้น
ถ้าเปิดจากลิงก์ใน Module หรือเมนูรายวิชาเฉย ๆ จะไม่มีคะแนนเข้า gradebook
(ผลยังเข้า Google Sheet ครบเหมือนเดิม ระบบข้ามส่วนคะแนนไปเงียบ ๆ)

วิธีตั้งค่า: **Assignments → + Assignment** → ตั้ง **Submission Type = External Tool** →
**Find** → เลือกแอป AiStyle → ติ๊ก **Load This Tool In A New Tab** → ตั้ง **Points**
(เช่น 100 — คะแนนเต็มจะถูกบันทึกเป็นค่านี้) → Save

- ทำซ้ำหลายรอบ = **ทับคะแนนเดิม** (มาตรฐาน `replaceResult` ของ LTI) ส่วน Google Sheet
  ยังเก็บทุกแถวไว้ดูย้อนหลังได้
- ถ้าบันทึกคะแนนสำเร็จ นศ. จะเห็นบรรทัด "✓ บันทึกคะแนนใน Canvas ให้อัตโนมัติแล้ว"
  ในกล่องใบยืนยัน
- **การส่งคะแนนล้มเหลวจะไม่ทำให้การส่งผลล้มเหลว** — ผลใน Sheet คือแหล่งข้อมูลหลักเสมอ
  ถ้าคะแนนไม่ขึ้น ให้ตรวจว่า (ก) เปิดจาก Assignment แบบ External Tool จริง
  (ข) `LTI_CONSUMER_KEY` / `LTI_SHARED_SECRET` บน Vercel ตรงกับที่ตั้งใน Canvas
  (ค) ดู log ของ function `api/submit` ใน Vercel จะมีบรรทัดขึ้นต้นด้วย `outcomes:`

---

## micro-feedback (ความพึงพอใจสั้น ๆ ในหน้าผล)

widget ถามความพึงพอใจ (ให้ดาว 3 ข้อ: ความพอใจรวม / ผลตรงกับตัวเอง / คำแนะนำมีประโยชน์
+ ช่องแนะนำ ส่งแบบไม่ระบุตัวตนเสมอ) ทำงานทั้งสองโหมด:

- **เวอร์ชันสาธารณะ**: อยู่ท้ายหน้าผล **ไม่บังคับตอบ**
- **Canvas**: อยู่เหนือปุ่ม "ส่งผลให้ผู้สอน" และ**บังคับให้ดาวครบ 3 ข้อก่อน**
  ปุ่มส่งผลจึงจะกดได้ (ช่องแนะนำไม่บังคับ) — คำตอบถูกส่งอัตโนมัติพร้อมตอนกดส่งผล
  และใช้แทนแบบประเมินความพึงพอใจฉบับใหญ่เดิม (`feedback.url` ตั้งเป็นค่าว่างแล้ว
  ใส่ URL กลับเมื่อไรก็เปิดฟอร์มใหญ่ใช้ใหม่ได้)

การเปิดใช้:

1. สร้าง Google Form ใหม่ มีคำถาม **Short answer 8 ข้อ ไม่บังคับทั้งหมด**:
   `rating` (1–5), `fit` (1–5), `useful` (1–5), `note`, `quadrant`, `lang`, `version`,
   `aud` (แหล่งคำตอบ: ระบบส่ง "canvas" หรือ "public" ให้เอง ไว้แยกกลุ่มตอนวิเคราะห์)
2. Publish + ตั้ง "Collect email = Do not collect" + Limit to 1 response = OFF + Link to Sheets
3. หา entry ID (Get pre-filled link) แล้วเติมใน `content/connect-config.js → microFeedback`
   (formUrl ใช้ /formResponse) — เติมแล้ว widget แสดงเองทันที formUrl ว่าง = ซ่อน
4. widget ไม่แสดงในโหมด ?demo · ถ้า config ว่าง/ผิดรูป ฝั่ง Canvas จะไม่ล็อกปุ่มส่งผล
   (นักศึกษาส่งผลได้เสมอ)

## การทดสอบก่อนใช้จริง

1. `npm test` — รวมเทสลายเซ็น LTI, nonce, allowlist, session
2. โหมด form: ทำแบบประเมิน 1 รอบ แล้วดูแถวใหม่ใน Google Sheet
3. โหมด lti: เข้าผ่าน Canvas ด้วยบัญชี นศ. ทดสอบที่อยู่ใน allowlist 1 บัญชี + ลองเปิด URL ตรงเพื่อยืนยันว่าถูกบล็อก + ลองบัญชีนอก allowlist ต้องเจอหน้า "ไม่ได้รับอนุญาต"

## หมายเหตุความเป็นส่วนตัว

เมื่อเปิดโหมดเชื่อมต่อ หน้าเว็บจะแสดง banner แจ้งผู้ทำแบบประเมินว่าผลจะถูกส่งให้ผู้สอนโดยอัตโนมัติ และซ่อนข้อความ "ไม่ส่งให้ใคร" ของโหมด public — deployment สาธารณะ (config ปิด) ยังคง zero-data เหมือนเดิมทุกประการ
