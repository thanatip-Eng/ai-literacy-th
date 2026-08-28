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

แบบประเมินตนเอง 24 ข้อ ใช้เวลาประมาณ 5–7 นาที วัดสองมิติคือ "ทักษะ AI"
และ "ความร่วมมือระหว่างคนกับ AI" แล้วสรุปออกมาเป็นรูปแบบการใช้ AI 1 ใน 4 แบบ
พร้อมคำแนะนำที่เหมาะกับสายงานที่คุณเลือก

⚠️ ไม่มีคำตอบถูกหรือผิด — ตอบตามที่คุณทำจริง ๆ ผลจะได้สะท้อนตัวคุณและใช้พัฒนาต่อได้
คะแนนของกิจกรรมนี้ให้จาก "การทำครบและส่งผล" ไม่ได้ให้ตามระดับทักษะที่ได้

ขั้นตอน
1. กดลิงก์ด้านล่างเพื่อเริ่ม (จะเปิดในแท็บใหม่)
2. ทำแบบประเมินจนจบและดูผลของคุณ
3. ให้ดาวประเมินความคิดเห็นสั้น ๆ 3 ข้อ (จำเป็น)
4. กดปุ่ม "📤 ส่งผลให้ผู้สอน" — ระบบจะขึ้นรหัสยืนยัน แคปหน้าจอเก็บไว้เป็นหลักฐาน

หมายเหตุ: ผลของคุณถูกส่งให้ผู้สอนพร้อมอีเมลที่ Canvas ยืนยันแล้ว
ส่วนคะแนนดาวความคิดเห็นส่งแบบไม่ระบุตัวตน แยกจากผลประเมิน
```

English version:

```
AiStyle Assessment — How I work with AI

A 24-item self-assessment (about 5–7 minutes) measuring two dimensions —
AI skill and human–AI partnership — and mapping you to one of four AI-use
patterns, with guidance matched to the role you pick.

⚠️ There are no right or wrong answers. Answer honestly: your score here comes
from completing and submitting, not from the level you land on.

Steps
1. Open the link below (it opens in a new tab)
2. Complete the assessment and review your result
3. Rate the three short feedback questions (required)
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

## เช็กลิสต์ต่อ 1 วิชา

- [ ] `ALLOWLIST` ครอบคลุมนักศึกษาวิชานี้ (ถ้าใช้ `*@โดเมน` ข้ามได้)
- [ ] เพิ่ม App แบบ Manual Entry — Key / Secret / Launch URL ถูกต้อง
- [ ] **Privacy = Public**
- [ ] สร้าง Assignment · **Submission Type = External Tool** · Find → เลือกแอป
- [ ] ✅ **Load This Tool In A New Tab**
- [ ] ตั้ง Points แล้ว **Save & Publish**
- [ ] วางคำอธิบาย assignment
- [ ] ทดสอบด้วยบัญชีจริง 1 คน → เห็นใบยืนยัน + บรรทัดคะแนน + คะแนนใน Grades
