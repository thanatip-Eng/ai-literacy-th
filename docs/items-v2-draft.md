# ร่างชุดข้อคำถาม AiStyle v2 (ฉบับเสนอ — ยังไม่ deploy)

> **สถานะ: DRAFT รอตัดสินใจ** · deploy ที่รอยต่อรุ่น (จบการเก็บข้อมูล cohort ปัจจุบันก่อน)
> ที่มา: รายงานรีวิว Tier B/C (docs/question-review.md) + AI Thinking Framework
> (LINE MAN Wongnai, 2026) + OECD/EU AILit Framework (2026, ดู docs/ailit-mapping.md)
>
> โครงร่าง: ทักษะ 12 ข้อ (เท่าเดิม, แก้ 3 ข้อ) + partnership **5 subtraits × 2 = 10 ข้อ**
> (เพิ่ม subtrait "learning") → **รวม 22 ข้อ (~11 นาที)** · ทุก subtrait มี reverse 1 ข้อ
> ในตำแหน่งที่สอง (คงกติกาเทสเดิม) · ข้อที่ไม่ระบุ = คงเดิมจาก v1 ทุกตัวอักษร

## หลักการแก้

1. **ลดความซ้ำซ้อน**: v1 วัด "การตรวจสอบ" 3 จุด (L1.3, L2.3, verify) → v2 ให้การตรวจสอบ
   อยู่ที่ subtrait verify จุดเดียว แล้วใช้ที่ว่างใน L1/L2 เติมช่องว่างจาก AILit
2. **เติมช่องว่าง AILit**: bias, AI ที่มองไม่เห็น (ระบบแนะนำ), anthropomorphism
3. **เพิ่มมิติ learning** (LMWN หลักการ 3 + AILit "metacognitive laziness") — ความเสี่ยง
   เฉพาะของผู้เรียน: ได้งานแต่ไม่ได้เรียนรู้
4. **แก้จุดอ่อนข้อ direction** ด้วยกรอบ 2×2 ของ LMWN (เลิกลงโทษผู้ใช้เชิงสำรวจ)
5. ข้อความใหม่ทุกข้อเขียนเอง ไม่คัดลอกจากต้นทาง — อ้างอิงแนวคิดใน manuscript

---

## แกนทักษะ (12 ข้อ — แก้ 3 ข้อ: L1.1, L1.3, L2.3)

### ระดับ 1 — เข้าใจพื้นฐาน AI

| # | v2 (TH) | v2 (EN) | เดิม/เหตุผล |
|---|---|---|---|
| L1.1 ✏️ | เมื่อมีคนถามว่า AI อย่าง ChatGPT ทำงานอย่างไร ฉันอธิบายได้ว่ามันสร้างคำตอบจากรูปแบบในข้อมูล ไม่ได้ "คิดหรือเข้าใจ" แบบมนุษย์ | When someone asks how an AI like ChatGPT works, I can explain that it generates answers from patterns in data — it doesn't "think" or "understand" like a human | เดิมถามแค่ "อธิบายหลักการได้" — เพิ่มแกน anti-anthropomorphism (AILit EN2, K1.1) ซึ่งเป็น misconception อันดับหนึ่งของวัยรุ่น |
| L1.2 | *(คงเดิม)* เมื่อมีงานเข้ามา ฉันมักเลือกได้ว่างานไหนลองให้ AI ช่วยน่าจะได้ผลดี และงานไหนควรทำเอง | *(คงเดิม)* | ตรง AILit M1 อยู่แล้ว |
| L1.3 ✏️ | ฉันรู้ว่าฟีดโซเชียลและระบบแนะนำที่ใช้อยู่ทุกวันขับเคลื่อนด้วย AI ซึ่งเลือกและจัดลำดับสิ่งที่ฉันเห็น — และอาจสะท้อนอคติจากข้อมูลที่ใช้ฝึก | I know the social feeds and recommendation systems I use daily are driven by AI that selects and ranks what I see — and can reflect biases in its training data | เดิม (ตรวจสอบ hallucination) ย้ายบทบาทไปที่ verify → ใช้ที่ว่างเติม 2 ช่องว่าง AILit พร้อมกัน: invisible AI (EN1/EN4) + bias (EN6/K2.5) และแก้ปัญหาแกนทักษะ-partnership ไม่อิสระที่รีวิว §4.3 ชี้ไว้ |
| L1.4 | *(คงเดิม)* ก่อนจะวางข้อมูลงานหรือข้อมูลส่วนตัวลงในแชต AI ฉันมักหยุดคิดก่อนว่าอะไรแชร์ได้หรือไม่ได้ | *(คงเดิม)* | ตรง AILit K2.2–2.3 |

### ระดับ 2 — นำ AI ไปใช้

| # | v2 (TH) | v2 (EN) | เดิม/เหตุผล |
|---|---|---|---|
| L2.1 | *(คงเดิม)* ปรับ prompt แล้วลองใหม่จนได้ผลดีขึ้น | *(คงเดิม)* | ตรง AILit C3 |
| L2.2 | *(คงเดิม)* เดือนที่ผ่านมาใช้ AI หลายแบบ | *(คงเดิม)* | behavioral anchor ที่ดีอยู่แล้ว |
| L2.3 ✏️ | เมื่อได้ผลลัพธ์จาก AI ฉันมักปรับแต่งให้เข้ากับบริบท น้ำเสียง และผู้รับของงานจริง ไม่ใช้แบบดิบ ๆ | When I get output from AI, I usually adapt it to the real task's context, tone and audience rather than using it raw | เดิม "อ่าน ตรวจ และปรับแก้" ซ้ำกับ verify — v2 เหลือเฉพาะมิติ "ปรับให้เข้าบริบท" (adaptation) ซึ่งเป็นทักษะ ไม่ใช่การตรวจสอบ |
| L2.4 | *(คงเดิม)* เลือกเครื่องมือให้เหมาะกับงาน | *(คงเดิม)* | ตรง AILit M2 |

### ระดับ 3 — สร้างด้วย AI

ทั้ง 4 ข้อ **คงเดิมจาก v1** (ผ่านการแก้ Tier A แล้ว: L3.3 ระบุ any-of ชัดแล้ว)

---

## แกน Partnership (5 subtraits × 2 = 10 ข้อ · reverse อยู่ตำแหน่งที่ 2 เสมอ)

### 1. verify — ตรวจสอบและรับผิดชอบ

| ตำแหน่ง | v2 (TH) | v2 (EN) |
|---|---|---|
| 1 ✏️ | ฉันเคยจับได้ว่า AI ตอบอย่างมั่นใจแต่ผิด เพราะฉันตรวจสอบกับแหล่งอื่นก่อนนำไปใช้ | I've caught AI being confidently wrong — because I checked against another source before using its answer |
| 2 (R) | *(คงเดิม)* ถ้า AI ตอบเร็วและฟังดูสมเหตุสมผล ฉันมักนำไปใช้ทันที | *(คงเดิม)* |

เหตุผลข้อ 1: เปลี่ยนจาก "ฉันมักหาแหล่งยืนยัน" (นิสัยที่ตอบให้ดูดีง่าย) เป็น **ประสบการณ์จริง
ที่เกิดได้เฉพาะกับคนที่ตรวจจริง** (LMWN checklist "ตอบมั่นใจแต่ผิด") — ทน social desirability
กว่า เพราะคนไม่เคยตรวจย่อมไม่เคยจับได้

### 2. restraint — เลือกใช้อย่างมีสติ

ทั้ง 2 ข้อ **คงเดิมจาก v1** (ข้อ 2 reverse "ช่วงหลัง ๆ แทบทุกงานฉันจะเปิด AI ก่อนเป็นอย่างแรก…"
เพิ่งปรับใน Tier A และตรง AILit M1 / "the choice to not use AI" แล้ว)

### 3. human_lead — ใช้ทักษะมนุษย์เป็นแกน

ทั้ง 2 ข้อ **คงเดิมจาก v1** (ผ่าน Tier A แล้ว: ข้อ 1 ตัด double-barrel, ข้อ 2 reverse
"แนวคิดหลักมาจาก AI มากกว่าตัวฉัน")

### 4. direction — นำการทำงานของ AI

| ตำแหน่ง | v2 (TH) | v2 (EN) |
|---|---|---|
| 1 ✏️ | ก่อนถาม AI ฉันมักประเมินก่อนว่าตอนนี้ตัวเองรู้อะไรและยังไม่รู้อะไร แล้วเลือกวิธีใช้ให้เหมาะ — สั่งงานตรง ๆ ให้ช่วยระดมไอเดีย หรือให้ช่วยค้นเปิดมุมใหม่ | Before asking AI, I usually assess what I already know and don't know, then choose how to use it — direct instructions, brainstorming help, or open-ended research |
| 2 (R) | *(คงเดิม)* ฉันมักพิมพ์ถาม AI ก่อน แล้วค่อยคิดตามแนวทางที่มันเสนอมา | *(คงเดิม)* |

เหตุผลข้อ 1: เดิม "รู้แล้วว่าผลลัพธ์หน้าตาเป็นยังไง" ลงโทษผู้ใช้เชิงสำรวจที่เก่งจริง (รีวิว §4.4) —
v2 ใช้กรอบ 2×2 ของ LMWN: ความเป็นผู้นำ = **เลือกวิธีถามให้ตรงกับสถานะความรู้ตัวเอง**

### 5. learning — หาความรู้ ไม่ใช่แค่คำตอบ 🆕

| ตำแหน่ง | v2 (TH) | v2 (EN) |
|---|---|---|
| 1 | เวลาใช้ AI กับเรื่องที่ต้องเรียนรู้ ฉันมักให้มันช่วยอธิบายและถามต่อ จนตัวเองเข้าใจพอที่จะอธิบายเองได้ | When I use AI on something I need to learn, I usually have it explain and take follow-up questions until I understand well enough to explain it myself |
| 2 (R) | หลายครั้งฉันส่งงานที่ AI ทำให้ ทั้งที่ยังอธิบายเองไม่ได้ว่าเนื้อหาในนั้นถูกต้องหรือมาได้อย่างไร | I often hand in work AI produced even though I couldn't yet explain whether its content is right or how it got there |

metadata เสนอ: `key: "learning"` · name TH "เรียนรู้ ไม่ใช่แค่ได้คำตอบ" / EN "Learn, not just answers" ·
desc TH "ใช้ AI เป็นติวเตอร์ที่ทำให้เข้าใจมากขึ้น ไม่ใช่คนทำงานแทน" / EN "Use AI as a tutor that
deepens understanding — not a stand-in that does the work"
ที่มา: LMWN หลักการ 3 + AILit "metacognitive laziness" (Fan et al., 2025) · เหมาะกลุ่ม นศ. ที่สุด
เพราะจับความเสี่ยงหลักของผู้เรียน: **ผลงานดูดี ≠ เราเก่งขึ้น**

---

## ผลกระทบเชิงระบบเมื่อ deploy v2 (checklist)

- [ ] `content/app-content.js`: แก้ 3 ข้อทักษะ + 2 ข้อ partnership + เพิ่ม subtrait learning (คู่ th/en ครบ)
- [ ] เทส: `content.test.js` (subtraits 4→5, รวม items 17→? — partnership 8→10, TOTAL 20→22, reverse 1/subtrait ตำแหน่ง 2 — กติกาเดิมใช้ต่อได้), เทสอื่นที่ fix จำนวนข้อ
- [ ] composite = mean 5 subtraits (โค้ด `partnershipComposite` รองรับอยู่แล้ว ไม่ต้องแก้) · ทบทวนเกณฑ์ 60 กับข้อมูล pilot v1 ก่อนตัดสิน
- [ ] แท็ก: `#learning:{pct}` + `#weak:learning` (renderTags วน subtraits อัตโนมัติ — ไม่ต้องแก้โค้ด) · อัปเดต `orgGuide*` ทั้ง th/en
- [ ] ภาพดาวน์โหลด: กราฟ subtrait 4→5 แท่ง (ตรวจ layout)
- [ ] `score_subtrait` ในชีท: ต่อความยาวอัตโนมัติ · `rawAnswers` ยาว 22 ค่า → **ใช้ความยาวเป็นตัวแยกเวอร์ชันข้อมูล v1(20)/v2(22) ได้ทันที** และควรเพิ่ม field `version` ใน payload
- [ ] `partnershipIntroBanner` (ข้อความ "20 ข้อ · 2 ส่วน") + `metaNote` + Canvas description → 22 ข้อ
- [ ] manuscript: อัปเดตจำนวนข้อ, เพิ่ม subtrait learning + อ้างอิง AILit/LMWN, ตาราง mapping จาก docs/ailit-mapping.md
- [ ] รันจำลอง cut-point แบบเดียวกับ Tier A (all-4 ต้องไม่เป็น director ฯลฯ) ก่อน merge

## เกณฑ์การตัดสินใจก่อน deploy

1. จบการเก็บข้อมูล cohort ปัจจุบัน (ข้อมูล v1 ครบตามแผน)
2. วิเคราะห์ pilot v1: Cronbach's alpha รายด้าน, item-total correlation, สัดส่วน quadrant
   → ถ้า verify/direction ข้อที่เสนอแก้มีค่าสถิติดีอยู่แล้ว อาจคงเดิมได้ (ลดการเปลี่ยนแปลง)
3. ทวนร่างข้อ v2 กับพี่ TA / เพื่อนอาจารย์ 2–3 คน (face validity) ก่อน commit จริง
