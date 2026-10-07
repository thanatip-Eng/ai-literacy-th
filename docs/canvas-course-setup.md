# คู่มือเพิ่ม AiStyle เข้ารายวิชาใน Canvas

คู่มือนี้ใช้ทำซ้ำได้ทุกรายวิชา — ทำตามตั้งแต่ต้นจนจบใช้เวลาประมาณ **10 นาทีต่อวิชา**
(ภาพรวมระบบทั้งหมดอยู่ใน [`connect-setup.md`](connect-setup.md) เล่มนี้เน้นเฉพาะงานที่
ผู้สอนต้องทำหน้าจอ Canvas)

---

## ก่อนเริ่ม — ตรวจ 2 อย่างนี้ (ทำครั้งเดียวทั้งระบบ)

| ตรวจอะไร | ดูที่ไหน | ถ้ายังไม่มี |
|---|---|---|
| ตั้ง env vars ครบ 5 ตัว (`LTI_CONSUMER_KEY`, `LTI_SHARED_SECRET`, `LTI_LAUNCH_URL`, `SESSION_SECRET`, `ALLOWLIST`) | Vercel → Project → Settings → Environment Variables | ทำตาม [`connect-setup.md` §3.1](connect-setup.md) |
| `ALLOWLIST` ครอบคลุมอีเมลนักศึกษาของวิชานี้ | ค่าเดียวกันบน Vercel | ดูหัวข้อถัดไป |

### ⚠️ จุดพลาดที่พบบ่อยที่สุด: allowlist

**ใครไม่อยู่ใน `ALLOWLIST` จะทำแบบประเมินไม่ได้ ต่อให้เปิดจาก Canvas ถูกต้องแล้วก็ตาม**
ระบบตั้งใจให้ปฏิเสธไว้ก่อน (default-deny)

- ถ้าตั้งเป็นทั้งโดเมน เช่น `*@cmu.ac.th` → **เปิดวิชาใหม่ไม่ต้องแก้อะไรเลย** ✅ แนะนำแบบนี้
- ถ้าไล่รายอีเมล → ต้องเพิ่มอีเมลนักศึกษาของวิชาใหม่ **แล้ว redeploy ทุกครั้ง**
  (Vercel → Deployments → ⋯ → Redeploy) มิฉะนั้นค่าใหม่ยังไม่มีผล

---

## ค่าที่ต้องใช้กรอก (เตรียมไว้ก่อน)

เปิด Vercel → Settings → Environment Variables ไว้อีกแท็บ แล้วคัดลอกมาใช้

| ช่องใน Canvas | ใส่ค่าจาก | ค่าของเรา (เติมเอง) |
|---|---|---|
| Name | ตั้งชื่ออะไรก็ได้ที่นักศึกษาเข้าใจ | `AiStyle Assessment` |
| Consumer Key | `LTI_CONSUMER_KEY` | ______________________ |
| Shared Secret | `LTI_SHARED_SECRET` | ______________________ |
| Launch URL | `LTI_LAUNCH_URL` | `https://______.vercel.app/api/lti/launch` |
| Privacy | เลือกจาก dropdown | **Public** |

> **ห้ามพิมพ์ค่า Shared Secret ลงในเอกสาร อีเมล หรือแชต** — เปิดดูจาก Vercel ทุกครั้งที่ใช้
> Launch URL ต้องตรงกับ `LTI_LAUNCH_URL` **ทุกตัวอักษร** (รวม https:// และไม่มี / ปิดท้าย)
> ไม่งั้นลายเซ็นจะไม่ผ่าน

---

## ทำทุกวิชา — 6 ขั้นตอน

### 1. เพิ่มแอปเข้ารายวิชา

เข้ารายวิชา → **Settings → Apps → View App Configurations → + App**

- **Configuration Type**: `Manual Entry`
- กรอก Name / Consumer Key / Shared Secret / Launch URL ตามตารางด้านบน
- **Privacy: `Public`** ← สำคัญมาก ถ้าไม่ตั้ง Canvas จะไม่ส่งอีเมลมา และระบบจะปฏิเสธ
  นักศึกษาทุกคน
- กด **Submit**

> ทำครั้งเดียวต่อวิชา ถ้าสอนหลายวิชาต้องเพิ่มแอปใหม่ในทุกวิชา (หรือขอให้แอดมิน
> ติดตั้งระดับ Account ให้ครั้งเดียวใช้ได้ทุกวิชา)

### 2. สร้าง Assignment

**Assignments → + Assignment**

- ตั้งชื่อ เช่น `แบบประเมิน AiStyle — สไตล์การใช้ AI ของฉัน`
- วางคำอธิบาย (คัดลอกจากหัวข้อถัดไป)
- **Points**: เช่น `100` ← คะแนนที่นักศึกษาจะได้เมื่อทำครบ

### 3. ตั้ง Submission Type ให้ถูก ← ขั้นที่ห้ามพลาด

- **Submission Type**: `External Tool`
- กด **Find** → เลือก **AiStyle Assessment** → **Select**
- ✅ ติ๊ก **Load This Tool In A New Tab**

**ทำไมต้องเป็น External Tool:** Canvas จะส่งข้อมูลที่ใช้บันทึกคะแนนกลับมาให้
เฉพาะการเปิดจาก Assignment แบบนี้เท่านั้น ถ้าเอาไปวางเป็นลิงก์ใน Module หรือ Pages
นักศึกษายังทำแบบประเมินได้และผลยังเข้า Google Sheet ครบ — แต่**คะแนนจะไม่ขึ้น gradebook**

**ทำไมต้องติ๊ก new tab:** เบราว์เซอร์สมัยใหม่บล็อกคุกกี้ของเว็บอื่นเมื่อฝังใน iframe
ถ้าไม่ติ๊ก นักศึกษาจะเจอหน้า "กรุณาเข้าผ่าน Canvas" ทั้งที่กดมาจาก Canvas จริง ๆ

### 4. Save & Publish

กด **Save & Publish** — ถ้ายังไม่ publish นักศึกษาจะมองไม่เห็น

### 5. ทดสอบด้วยบัญชีจริง

เข้าด้วย**บัญชีนักศึกษาจริงที่อยู่ใน allowlist** (ขอความร่วมมือ นศ. 1 คน หรือใช้บัญชี
ทดสอบที่มีอีเมลจริง) → กดเข้า Assignment → ทำแบบประเมิน → ให้ดาว 3 ข้อ → กดส่งผล

ต้องเห็นครบ 3 อย่าง:
1. กล่องใบยืนยันสีเขียว + รหัสยืนยัน 8 หลัก
2. บรรทัด **"✓ บันทึกคะแนนใน Canvas ให้อัตโนมัติแล้ว"**
3. คะแนนขึ้นใน **Grades** ของรายวิชา

> ### ⚠️ อย่าทดสอบด้วย Student View
> ปุ่ม **Student View** ของ Canvas ใช้บัญชี "Test Student" ซึ่ง**ไม่มีอีเมล** ระบบจะขึ้น
> "Canvas ไม่ได้ส่งอีเมล" เสมอ — ไม่ใช่ความผิดพลาดของการตั้งค่า ต้องทดสอบด้วยบัญชีจริง
> เท่านั้น

### 6. แจ้งนักศึกษา

บอกให้ชัดว่า **ต้องกดปุ่ม "ส่งผลให้ผู้สอน" เองเมื่อดูผลเสร็จ** ระบบไม่ส่งอัตโนมัติ
(ตั้งใจออกแบบไว้แบบนี้ เพื่อให้นักศึกษาเห็นก่อนว่ากำลังส่งอะไรให้ใคร)

---

## คำอธิบาย Assignment (คัดลอกไปวางได้เลย)

```
แบบประเมิน AiStyle — สไตล์การใช้ AI ของฉัน

แบบประเมินตนเอง 36 ข้อ ใช้เวลาประมาณ 8–10 นาที วัดสองมิติคือ "ทักษะ AI"
และ "ความร่วมมือระหว่างคนกับ AI" แล้วสรุปออกมาเป็นรูปแบบการใช้ AI 1 ใน 4 แบบ
พร้อมคำแนะนำที่เหมาะกับกลุ่มสาขาที่คุณเรียน

⚠️ ไม่มีคำตอบถูกหรือผิด — ตอบตามที่คุณทำจริง ๆ ผลจะได้สะท้อนตัวคุณและใช้พัฒนาต่อได้
คะแนนของกิจกรรมนี้ให้จาก "การทำครบและส่งผล" ไม่ได้ให้ตามระดับทักษะที่ได้

ขั้นตอน
1. กดลิงก์ด้านล่างเพื่อเริ่ม (จะเปิดในแท็บใหม่)
2. ทำแบบประเมินจนจบและดูผลของคุณ
3. ให้ดาวประเมินความคิดเห็นสั้น ๆ 3 ข้อ (จำเป็น) และข้อเขียนปลายเปิด 1 ข้อ (ไม่บังคับ)
4. กดปุ่ม "📤 ส่งผลให้ผู้สอน" — ระบบจะขึ้นรหัสยืนยัน แคปหน้าจอเก็บไว้เป็นหลักฐาน

หมายเหตุ: ผลของคุณถูกส่งให้ผู้สอนพร้อมอีเมลที่ Canvas ยืนยันแล้ว
ส่วนคะแนนดาวความคิดเห็นส่งแบบไม่ระบุตัวตน แยกจากผลประเมิน
```

English version:

```
AiStyle Assessment — How I work with AI

A 36-item self-assessment (about 8–10 minutes) measuring two dimensions —
AI skill and human–AI partnership — and mapping you to one of four AI-use
patterns, with guidance matched to the field you study.

⚠️ There are no right or wrong answers. Answer honestly: your score here comes
from completing and submitting, not from the level you land on.

Steps
1. Open the link below (it opens in a new tab)
2. Complete the assessment and review your result
3. Rate the three short feedback questions (required) and the one open comment (optional)
4. Press "📤 Send to instructor" — keep a screenshot of the confirmation code
```

---

## ตารางแก้ปัญหา

| นักศึกษาเห็นข้อความ / อาการ | สาเหตุ | วิธีแก้ |
|---|---|---|
| **"ตรวจสอบลายเซ็นไม่ผ่าน"** | Launch URL หรือ Shared Secret ใน Canvas ไม่ตรงกับบน Vercel | เทียบทีละตัวอักษร โดยเฉพาะ `https://` และ `/` ปิดท้าย · แก้ใน Canvas → Settings → Apps → ⚙️ → Edit |
| **"ไม่ได้รับอนุญาต"** (ระบุอีเมลด้วย) | อีเมลนั้นไม่อยู่ใน `ALLOWLIST` | เพิ่มอีเมล/ใช้ `*@โดเมน` ใน Vercel แล้ว **redeploy** |
| **"Canvas ไม่ได้ส่งอีเมล"** | Privacy ไม่ได้ตั้งเป็น Public · หรือกำลังทดสอบด้วย Student View | แก้ Privacy เป็น Public · ทดสอบด้วยบัญชีจริง |
| **"กรุณาเข้าผ่าน Canvas"** ทั้งที่กดมาจาก Canvas | คุกกี้ถูกบล็อกเพราะเปิดใน iframe | เปิด Assignment → Edit → ติ๊ก **Load This Tool In A New Tab** |
| **"คำขอหมดอายุ" / "คำขอซ้ำ"** | กดย้อนกลับ หรือ refresh หน้าเดิม / เวลาเครื่องคลาดเคลื่อน | ให้กดเข้าจาก Canvas ใหม่อีกครั้ง (ลิงก์ launch ใช้ได้ครั้งเดียว) |
| ส่งผลสำเร็จ แต่ **คะแนนไม่ขึ้น gradebook** | ไม่ได้เปิดจาก Assignment แบบ External Tool | สร้าง Assignment ตามขั้นที่ 2–3 (ผลที่ส่งไปแล้วยังอยู่ครบใน Google Sheet) |
| ส่งผลไม่สำเร็จ (ขึ้นปุ่ม "ส่งอีกครั้ง") | เน็ตหลุด หรือ Google Form มีปัญหา | ให้กด "ส่งอีกครั้ง" · ถ้ายังไม่ได้ ดู log ของ `api/submit` ใน Vercel |

**ดู log:** Vercel → Project → Logs → เลือก function `api/submit` — บรรทัดที่ขึ้นต้นด้วย
`outcomes:` คือเรื่องคะแนน ส่วน `submit:` คือเรื่องการบันทึกลง Google Sheet

---

## Assignment ตัวที่สอง — งานสะท้อนคิด (ถ้าใช้)

AiStyle วัดและสะท้อนให้เห็น ส่วน "งานที่ได้คะแนนจากการคิด" คือการเขียนสะท้อนคิด —
แยกเป็น assignment ที่สองเพราะ Canvas เลือก Submission Type ได้แบบเดียวต่อ assignment

1. หน้าผลสร้างคำถามสะท้อนคิดให้นักศึกษาแต่ละคนไม่เหมือนกัน (ตามด้านที่คะแนนต่ำ) และมี
   ปุ่มคัดลอก
2. เมื่อกดส่งผล นักศึกษาจะได้ **รหัสยืนยัน 8 ตัวอักษร** พร้อม**ปุ่มเข้าแบบสะท้อนคิด**ในกล่องเดียวกัน
3. สร้าง assignment ที่สองแบบ **Submission Type = External URL** ชี้ไปที่ MS Form
   (ชุดคำถามพร้อมใช้ + วิธี prefill อยู่ใน `docs/connect-setup.md` หัวข้อ "งานสะท้อนคิด")
4. ตรวจงานจากไฟล์ Excel ที่ export จากฟอร์ม — จับคู่คอลัมน์รหัสยืนยันกับ Google Sheet
   ของผลประเมินเพื่อยืนยันว่าทำจริง

### คำอธิบาย Assignment งานสะท้อนคิด (คัดลอกไปวางได้เลย)

```
งานสะท้อนคิด — สิ่งที่ AI ทำแทนฉันไม่ได้

ต่อจากแบบประเมิน AiStyle คราวนี้เป็นงานที่ได้คะแนนจาก "การคิด" ไม่ใช่การกรอกแบบสอบถาม
หน้าผลของคุณสร้างคำถามสะท้อนคิดขึ้นมาเฉพาะของคุณเอง (ตามด้านที่คะแนนยังต่ำ) —
ของแต่ละคนไม่เหมือนกัน และนั่นคือคำถามที่คุณต้องตอบในงานนี้

⚠️ งานนี้ไม่มีคำตอบที่ถูก และไม่ได้ให้คะแนนจากการที่คุณ "ดูดี"
คะแนนมาจากความตรงไปตรงมาและความเฉพาะเจาะจง — คำตอบที่เขียนกว้าง ๆ แบบที่ใครก็เขียนได้
(หรือให้ AI เขียนให้) จะได้คะแนนน้อยกว่าคำตอบสั้น ๆ ที่เป็นเรื่องของคุณจริง

ต้องทำแบบประเมิน AiStyle (งานก่อนหน้า) ให้เสร็จก่อน เพราะต้องใช้ "รหัสยืนยัน 8 ตัวอักษร"

ขั้นตอน
1. เปิดหน้าผล AiStyle ของคุณ กดปุ่ม "คัดลอกคำถาม" ในการ์ดคำถามสะท้อนคิด
2. ในกล่องรหัสยืนยัน กดปุ่ม "เปิดแบบสะท้อนคิด" (รหัสจะถูกกรอกให้อัตโนมัติ)
   — ถ้าปิดหน้าไปแล้ว ใช้ลิงก์ด้านล่างแล้วพิมพ์รหัสเอง
3. วางคำถามที่คัดลอกมา แล้วตอบคำถามเหล่านั้น
4. ตอบข้อสุดท้ายเรื่องแนวทางพัฒนาตัวเอง — ข้อนี้เป็นหัวใจของงาน ให้เวลากับมัน
5. กดส่ง

เขียนเป็นภาษาไทยหรืออังกฤษก็ได้ ไม่มีกำหนดความยาวขั้นต่ำ — เขียนให้ชัดพอที่คนอ่าน
จะรู้ว่าคุณจะทำอะไรจริง ๆ

คำตอบของคุณผู้สอนอ่าน ไม่เผยแพร่ และไม่นำไปเทียบกับเพื่อนในชั้น
```

English version:

```
Reflection — What AI cannot do for me

The AiStyle assessment measured and showed you something. This assignment is the
one you get marked on for thinking. Your result page generated reflection
questions from your own scores — the dimensions where you came out lowest — so
everyone's questions are different. Those are the questions you answer here.

⚠️ There is no right answer, and no marks for looking good. Marks come from
honesty and specificity: a general answer anyone could have written (or had AI
write) scores lower than a short answer that is clearly about you.

Finish the AiStyle assessment first — you need the 8-character confirmation code.

Steps
1. On your AiStyle result page, press "Copy questions" in the reflection card
2. In the confirmation box, press "Open reflection form" (your code is filled in
   automatically) — if you closed the page, use the link below and type the code
3. Paste the questions, then answer them
4. Answer the last question about how you will develop yourself — this is the
   heart of the assignment, give it time
5. Submit

Write in Thai or English. There is no minimum length — just be specific enough
that a reader knows what you will actually do.

Your answers are read by your instructor, not published, and not compared with
your classmates.
```

## คำอธิบาย Assignment ฉบับรวม — แอป → MS Form (คัดลอกไปวางได้เลย)

ใช้ฉบับนี้เมื่อต้องการให้นักศึกษาเห็นเส้นทางทั้งหมดในหน้าเดียว แล้ววาง
ในคำอธิบายของ assignment ตัวแรก (External Tool) ส่วนลิงก์ MS Form ใส่ไว้
ในหน้าเดียวกันหรือทำเป็น assignment ตัวที่สองแบบ External URL ก็ได้

```
AiStyle — คุณคือคนแบบไหนเมื่อใช้ AI

งานนี้มี 2 ช่วงต่อกัน รวมประมาณ 25–30 นาที ทำจบในครั้งเดียวได้
  ช่วงที่ 1 · ทำแบบประเมินในแอป (8–10 นาที)
  ช่วงที่ 2 · เขียนสะท้อนคิดใน MS Form (15–20 นาที)

⚠️ ไม่มีคำตอบถูกหรือผิด และคะแนนไม่ได้ให้ตามระดับที่คุณได้
   ช่วงที่ 1 ให้คะแนนจากการทำครบและกดส่ง
   ช่วงที่ 2 ให้คะแนนจากความตรงไปตรงมาและความเฉพาะเจาะจง ไม่ใช่ความสวยงามของภาษา
   คำตอบกว้าง ๆ แบบที่ใครก็เขียนได้ (หรือให้ AI เขียนให้) จะได้คะแนนน้อยกว่า
   คำตอบสั้น ๆ ที่เป็นเรื่องของคุณจริง

━━━ ช่วงที่ 1 · ทำแบบประเมินและส่งผล ━━━

1) กดลิงก์ในหน้านี้เพื่อเปิดแอป (เปิดในแท็บใหม่)
   ⚠️ ต้องเข้าจาก Canvas เท่านั้น ถ้าเปิดจากที่อื่นจะเจอหน้า "กรุณาเข้าผ่าน Canvas"
   เพราะระบบใช้ Canvas ยืนยันว่าคุณเป็นนักศึกษาในวิชานี้

2) กด "เริ่มทำแบบประเมิน →" แล้วใส่ชื่อ (ไม่บังคับ)
   ถ้ามีช่อง "รหัสนักศึกษา" ให้กรอกให้ถูกต้อง

3) หน้า "คุณเรียนอยู่กลุ่มสาขาใด?" เลือกให้ตรงกับคณะที่เรียนจริง
   เลือก 1 ใน 6 กลุ่ม: สุขภาพและการแพทย์ · วิศวกรรมและเทคโนโลยีดิจิทัล ·
   วิทยาศาสตร์และเกษตร · ธุรกิจ เศรษฐศาสตร์ และนโยบาย ·
   มนุษยศาสตร์ สังคมศาสตร์ และการศึกษา · ศิลปะและการออกแบบ

   ข้อนี้สำคัญกว่าที่คิด เพราะเปลี่ยนตัวอย่างใต้คำถามทุกข้อ เพิ่มชุดสถานการณ์
   ในสาขาของคุณอีก 6 ข้อ และเปลี่ยนคำแนะนำท้ายผล เลือกผิดกลุ่มผลจะอ่านไม่ตรงตัว

4) ตอบ 36 ข้อ แตะสเกล 1–5 แนวนอน (บนคอมพิวเตอร์กดคีย์ 1–5 ได้) ระบบเลื่อนข้อให้เอง
   ตอบตามที่คุณทำจริง ไม่ใช่ตามที่ควรจะเป็น — ตอบให้ดูดีแล้วผลจะสวยแต่ไม่มีประโยชน์กับตัวเอง

5) อ่านหน้าผลให้ครบก่อนกดอะไร โดยเฉพาะสามการ์ดนี้
   🎓 ถ้าวันนี้ไม่มี AI — อะไรจะเหลืออยู่กับคุณเมื่อไม่มีเครื่องมือ
   📌 สถานการณ์ในสาขาที่คุณเรียน
   🪞 คนอื่นมองคุณอย่างไร — ผลแบบนี้ อาจารย์และคนที่รับเข้าทำงานอ่านออกมาเป็นอะไร

6) ในการ์ด "✍️ คำถามสะท้อนคิดของคุณ" กดปุ่ม "คัดลอกคำถาม"
   คำถามของแต่ละคนไม่เหมือนกัน ระบบเลือกจากด้านที่คะแนนของคุณยังต่ำ
   ลอกของเพื่อนไม่ได้ และถ้าลอกมาก็จะตอบไม่ได้ เพราะไม่ใช่เรื่องของตัวเอง

7) ให้ดาวครบ 3 ข้อในกล่องให้คะแนน (บังคับ)
   "ให้คะแนนแบบประเมินนี้" · "ผลที่ได้ตรงกับตัวคุณแค่ไหน" ·
   "คำแนะนำที่ได้มีประโยชน์กับคุณแค่ไหน"
   ส่วน "อยากบอกอะไรเพิ่มเติมไหม" ไม่บังคับ
   ถ้ายังให้ดาวไม่ครบ ปุ่มส่งจะกดไม่ได้

8) กด "📤 ส่งผลให้ผู้สอน"
   จะขึ้นกล่อง "✅ ส่งผลให้ผู้สอนเรียบร้อยแล้ว" พร้อม รหัสยืนยัน 8 ตัวอักษร
   📸 แคปหน้าจอกล่องนี้ หรือกด "💾 ดาวน์โหลดภาพยืนยัน" เก็บไว้เป็นหลักฐาน

   ⚠️ รหัสยืนยันมีหลังกดส่งเท่านั้น ก่อนกดส่งยังไม่มี — หาไม่เจอไม่ใช่ความผิดพลาด

━━━ ช่วงที่ 2 · ส่งงานสะท้อนคิดใน MS Form ━━━

9) ในกล่องยืนยันเดียวกัน กดปุ่ม "เปิดแบบสะท้อนคิด →"
   ฟอร์มจะเปิดขึ้นโดยกรอก รหัสยืนยัน · รูปแบบการใช้ AI · ระดับทักษะ · กลุ่มสาขา
   มาให้แล้วอัตโนมัติ — อย่าแก้ค่าที่กรอกมาให้

   ถ้าปิดหน้าผลไปแล้ว: เปิดลิงก์ฟอร์มในหน้านี้ แล้วพิมพ์รหัสยืนยันจากที่แคปไว้เอง
   ช่องอื่นเว้นว่างได้

10) วางคำถามที่คัดลอกไว้จากข้อ 6 ลงในช่องคำถามชวนคิด

11) ตอบคำถามเหล่านั้นในช่องถัดมา

12) ตอบข้อสุดท้าย เรื่องแนวทางพัฒนาตัวเอง — ข้อนี้คือหัวใจของงาน ให้เวลากับมันมากที่สุด

    "อีกไม่กี่ปีตอนคุณเรียนจบ อะไรคือสิ่งที่คุณทำได้ซึ่ง AI ทำแทนไม่ได้"

    เขียนมาหนึ่งอย่างที่จะเริ่มสร้างในเทอมนี้ บอกให้ชัดว่า
    จะทำอะไร · สัปดาห์ละกี่ครั้ง · จะรู้ได้อย่างไรว่าทำได้จริงแล้ว
    (ไม่ใช่แค่รู้สึกว่าทำได้)

13) กดส่งฟอร์ม และเก็บหน้ายืนยันของฟอร์มไว้ด้วย

เขียนเป็นภาษาไทยหรืออังกฤษก็ได้ ไม่มีกำหนดความยาวขั้นต่ำ — ขอแค่ชัดพอที่คนอ่าน
จะรู้ว่าคุณจะทำอะไรจริง ๆ
คำตอบของคุณผู้สอนอ่าน ไม่เผยแพร่ และไม่นำไปเทียบกับเพื่อนในชั้น

━━━ ติดปัญหา ━━━

เจอหน้า "กรุณาเข้าผ่าน Canvas"  → เปิดลิงก์ตรง ให้กลับมาเปิดจากหน้านี้
หารหัสยืนยันไม่เจอ              → ยังไม่ได้กด "📤 ส่งผลให้ผู้สอน"
กดปุ่มส่งไม่ได้                 → ยังให้ดาวไม่ครบ 3 ข้อ
ปิดหน้าผลไปแล้วยังไม่ได้จดรหัส   → ทำใหม่แล้วกดส่งอีกครั้ง ใช้รหัสล่าสุด
เลือกกลุ่มสาขาผิด               → ทำใหม่ได้ และใช้รหัสล่าสุดในฟอร์ม

หมายเหตุ: ผลของคุณถูกส่งให้ผู้สอนพร้อมอีเมลที่ Canvas ยืนยันแล้ว
ส่วนคะแนนดาวส่งแบบไม่ระบุตัวตน แยกจากผลประเมิน
```

English version:

```
AiStyle — What kind of AI user are you?

Two parts, about 25–30 minutes in total. You can finish both in one sitting.
  Part 1 · the assessment in the app (8–10 minutes)
  Part 2 · a written reflection in MS Forms (15–20 minutes)

⚠️ There are no right answers, and your mark does not depend on the level you land on.
   Part 1 is marked on completing and submitting.
   Part 2 is marked on honesty and specificity, not on polished writing.
   A general answer anyone could have written (or had AI write) scores lower than
   a short one that is clearly about you.

━━━ PART 1 · Take the assessment and submit ━━━

1) Open the link on this page (it opens in a new tab)
   ⚠️ You must enter from Canvas. Opening the link anywhere else shows
   "Please open this from Canvas", because Canvas is what verifies you are in this course.

2) Press "Start the assessment →", add your name (optional), and fill in your
   Student ID if the field appears.

3) On "Which field are you studying?", pick the group your faculty belongs to:
   Health & Medicine · Engineering & Digital Technology · Science & Agriculture ·
   Business, Economics & Policy · Humanities, Social Sciences & Education ·
   Art & Design

   This matters more than it looks: it changes the example under every question,
   adds six scenarios from your own field, and changes the advice at the end.

4) Answer 36 items on the 1–5 scale (keys 1–5 work on a computer); it advances itself.
   Answer how you actually work, not how you think you should.

5) Read the whole result before pressing anything — especially these three cards:
   🎓 If AI were switched off today
   📌 Situations in your field of study
   🪞 How other people see you

6) In the "✍️ Your reflection questions" card, press "Copy the questions".
   Everyone's questions differ — they come from your own lowest dimensions.

7) Rate all three feedback questions (required). The open comment is optional.
   The submit button stays disabled until all three are rated.

8) Press "📤 Send to instructor".
   A confirmation box appears with an 8-character code.
   📸 Screenshot it, or press "💾 Download the confirmation image".

   ⚠️ The code only exists after you submit.

━━━ PART 2 · Submit the reflection in MS Forms ━━━

9) In the same box, press "Open the reflection form →".
   Your code, usage pattern, skill level and field group are filled in for you —
   do not change them.

   If you closed the page: open the form link on this page and type your code in.

10) Paste the questions you copied in step 6.
11) Answer them.
12) Answer the last question — this is the heart of the assignment:

    "In a few years, when you graduate, what will you be able to do that AI cannot do for you?"

    Name one thing you will start building this term: what exactly you will do,
    how often, and how you will know you can actually do it.

13) Submit the form and keep its confirmation page.

Write in Thai or English. No minimum length — just be specific enough that a reader
knows what you will actually do. Your answers are read by your instructor, not
published, and not compared with your classmates.
```

> **ตั้งค่าใน Canvas**: assignment ตัวแรกต้องเป็น **External Tool** ชี้ไปที่แอป
> (ไม่ใช่ External URL ไม่งั้นระบบจะไม่ได้อีเมลจาก Canvas) · ถ้าจะให้คะแนน
> งานสะท้อนคิดแยก ให้ทำ assignment ตัวที่สองแบบ **External URL** ชี้ไปที่ MS Form
> รายละเอียดอยู่ในหัวข้อ "ทำทุกวิชา — 6 ขั้นตอน" และ "Assignment ตัวที่สอง" ด้านบน

## เช็กลิสต์ต่อ 1 วิชา

- [ ] `ALLOWLIST` ครอบคลุมนักศึกษาวิชานี้ (ถ้าใช้ `*@โดเมน` ข้ามได้)
- [ ] เพิ่ม App แบบ Manual Entry — Key / Secret / Launch URL ถูกต้อง
- [ ] **Privacy = Public**
- [ ] สร้าง Assignment · **Submission Type = External Tool** · Find → เลือกแอป
- [ ] ✅ **Load This Tool In A New Tab**
- [ ] ตั้ง Points แล้ว **Save & Publish**
- [ ] วางคำอธิบาย assignment
- [ ] ทดสอบด้วยบัญชีจริง 1 คน → เห็นใบยืนยัน + บรรทัดคะแนน + คะแนนใน Grades
