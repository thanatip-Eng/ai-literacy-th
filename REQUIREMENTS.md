# REQUIREMENTS — AI Literacy Assessment (Open Platform)

> **Version**: v3.0 FINAL · supersedes v1.0, v2.0
> **Goal**: bilingual open platform for AI Literacy self-assessment
> **Based on**: LinkedIn AI Upskilling Framework (5 levels)
> **Philosophy**: zero-data — runs entirely in browser, no backend, no tracking
> **Created by**: Asst. Prof. Dr. Thanatip Jankhong (ผศ.ดร.ธนาทิพย์ จันทร์คง)
> Department of Computer Engineering, Faculty of Engineering, Chiang Mai University
> **License**: CC BY-NC-SA 4.0

---

## 1. Architecture

**Pure static. Zero backend. Zero database. Zero data collection.**

```
[Browser only]
   ├── HTML/CSS/JS (single file)
   ├── Quiz state → in memory
   ├── Name + scores → in memory
   ├── Language toggle → in memory (no localStorage)
   └── Image generation → on <canvas>, downloaded directly
```

---

## 2. Bilingual System (NEW in v3.0)

### 2.1 Approach
- **Toggle button** ที่ header (มุมขวาบน) เช่น `[TH | EN]`
- Default language: **TH**
- ไม่มี localStorage — รีเฟรชหน้ากลับเป็น TH (เพราะ no-data policy)
- ทุก visible string ต้องมีคู่ TH/EN

### 2.2 Implementation
- ใช้ object `LANG = { th: {...}, en: {...} }` เก็บ string ทั้งหมด
- ใช้ function `t(key)` ดึง string ตามภาษาปัจจุบัน
- ทุก text node ใน HTML ใส่ `data-i18n="key"` แล้วใช้ JS render
- ภาษาปัจจุบันส่งผลต่อ:
  - UI text ทั้งหมด
  - คำถามใน quiz (TH/EN paired)
  - Result text
  - **Date format** ในภาพ (TH→ พ.ศ., EN→ AD)
  - **Author credit format** ในภาพ + footer
  - PDF print labels

### 2.3 Quiz items — ต้องเป็นคู่ TH/EN ทั้งหมด

ตัวอย่าง structure:
```js
items: [
  {
    th: "ฉันอธิบายได้ว่า Generative AI คืออะไร...",
    en: "I can explain what Generative AI is..."
  },
  ...
]
```

---

## 3. Workshop Recommendations (NEW in v3.0)

### 3.1 หลักการ
แต่ละระดับมี **2-3 workshop topics** สั้น กระชับ ที่:
- ผู้ใช้เห็นเป็นแนวทางพัฒนาตนเอง
- ปรากฏใน downloadable image (สำคัญ!)
- ผู้รับผิดชอบขององค์กรเห็นใน pattern หากพนักงานส่งรีพอร์ทเข้ามา → ช่วยจัดกิจกรรม

### 3.2 Data model
แทนที่ `paths[]` เดิม ด้วย `workshops[]` — ใน `LEVELS` object ของแต่ละระดับ:

```js
workshops: [
  { th: "พื้นฐาน AI สำหรับทุกคน", en: "AI Foundations for Everyone" },
  { th: "การใช้ AI อย่างมีความรับผิดชอบ", en: "Responsible AI Practices" },
  { th: "Prompt พื้นฐานในชีวิตประจำวัน", en: "Everyday Prompting Basics" }
]
```

### 3.3 Initial workshop topic list

**Level 1 → 2** (Understanding → Applying):
- TH: "พื้นฐาน AI สำหรับทุกคน" / EN: "AI Foundations for Everyone"
- TH: "การใช้ AI อย่างมีความรับผิดชอบ" / EN: "Responsible AI Practices"
- TH: "Prompt พื้นฐานในชีวิตประจำวัน" / EN: "Everyday Prompting Basics"

**Level 2 → 3** (Applying → Building):
- TH: "Prompt Engineering ขั้นกลาง" / EN: "Intermediate Prompt Engineering"
- TH: "AI กับเวิร์กโฟลว์ในงานประจำ" / EN: "AI Workflows in Daily Work"
- TH: "No-Code Automation พื้นฐาน" / EN: "No-Code Automation Basics"

**Level 3 → 4** (Building → Training):
- TH: "สร้างแอปด้วย AI API" / EN: "Building Apps with AI APIs"
- TH: "พื้นฐาน Machine Learning" / EN: "Introduction to Machine Learning"
- TH: "LLM Application Development" / EN: "LLM Application Development"

**Level 4 → 5** (Training → Specializing):
- TH: "MLOps ขั้นสูง" / EN: "Advanced MLOps"
- TH: "Deep Learning เฉพาะทาง" / EN: "Specialized Deep Learning"
- TH: "Responsible & Trustworthy AI" / EN: "Responsible & Trustworthy AI"

**Level 5 (already at top — focus on leadership)**:
- TH: "AI Research & Frontier Models" / EN: "AI Research & Frontier Models"
- TH: "AI Strategy Leadership" / EN: "Leading AI Strategy"

**Level 0 (below L1)**:
- ใช้ชุดเดียวกับ L1→L2 (เริ่มต้นด้วยพื้นฐาน)

### 3.4 Where workshops appear
1. **Result screen** — section "หัวข้อ workshop ที่ขอแนะนำ" / "Recommended Workshops"
2. **Downloadable image** — แสดง 2-3 หัวข้อแบบ chip/pill
3. **PDF print** — แสดงเป็น list

---

## 4. Framework Reference Diagram (NEW in v3.0)

### 4.1 หลักการ
- **ห้ามใช้รูปจาก LinkedIn โดยตรง** (ลิขสิทธิ์)
- วาด SVG diagram **ขึ้นใหม่ทั้งหมด** ในสไตล์ของเว็บเรา (warm paper aesthetic)
- ใส่ disclaimer ชัด: "Structure adapted from LinkedIn AI Upskilling Framework"

### 4.2 Diagram specification
- **Style**: 5-step ladder/staircase หรือ horizontal flow
- **เนื้อหา**: ระดับ 1-5 พร้อมชื่อ TH/EN และ short description
- **สี**: ใช้ palette เดียวกับเว็บ (teal → green → amber → orange gradient)
- **Format**: inline SVG ใน HTML (ไม่ใช่ภาพ raster)
- **Responsive**: scale ตาม viewport, อ่านได้บนมือถือ

### 4.3 Where the diagram appears
- **Intro page** — section "เกี่ยวกับ framework" / "About the Framework"
- **About/credit page** — ใส่ในส่วนเครดิต
- พิจารณาใส่ใน image download ด้วยถ้ายังมีที่ว่าง (optional)

---

## 5. Credits, Copyright & Attribution (NEW in v3.0)

### 5.1 License: CC BY-NC-SA 4.0
- ใส่ link ไป `https://creativecommons.org/licenses/by-nc-sa/4.0/`
- แสดง icon ของ Creative Commons (SVG inline)

### 5.2 Attribution structure
- **Author**: ผศ.ดร.ธนาทิพย์ จันทร์คง (TH) / Asst. Prof. Dr. Thanatip Jankhong (EN)
- **Affiliation**: ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่ / Department of Computer Engineering, Faculty of Engineering, Chiang Mai University
- **Framework source**: LinkedIn AI Upskilling Framework (with link to original article)

### 5.3 Where attribution appears

1. **Footer ของทุกหน้า**:
   - TH: "© 2026 ผศ.ดร.ธนาทิพย์ จันทร์คง · ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่"
   - EN: "© 2026 Asst. Prof. Dr. Thanatip Jankhong · Department of Computer Engineering, Faculty of Engineering, Chiang Mai University"
   - + "Licensed under CC BY-NC-SA 4.0" (with icon)
   - + "Based on LinkedIn AI Upskilling Framework"

2. **About section (intro page)**:
   - Acknowledge LinkedIn AI Upskilling Framework
   - อธิบายว่า structure อิงจาก framework, translation/adaptation/implementation เป็นของอแจว
   - ลิงก์ไปบทความ LinkedIn ต้นฉบับ

3. **Downloadable image (footer)**:
   - บรรทัดเล็ก ๆ ล่างสุด:
   - TH version: "© 2026 ผศ.ดร.ธนาทิพย์ จันทร์คง · CMU · อิง LinkedIn AI Upskilling Framework"
   - EN version: "© 2026 Asst. Prof. Dr. Thanatip Jankhong · CMU · Based on LinkedIn AI Upskilling Framework"

4. **PDF print version**: เหมือน footer

### 5.4 README/repo
- ใส่ `LICENSE` file (CC BY-NC-SA 4.0 full text)
- ใส่ credit section ใน README

---

## 6. User Flow (updated for v3.0)

```
[Welcome + Framework Diagram + About]
       ↓
[Name input (optional)]
       ↓
[Quiz 20 items — bilingual]
       ↓
[Result screen]
   ├─→ Download portrait image (1080×1920)
   ├─→ Print PDF
   └─→ Restart
```

Language toggle อยู่ใน header — กดได้ทุกหน้า (state แบบ in-memory)

---

## 7. Image Specification (UPDATED for v3.0)

### 7.1 ข้อกำหนดทางเทคนิค (เหมือน v2.0)
- Size: 1080 × 1920 px (9:16 portrait)
- Format: PNG
- Filename: `AI-Literacy-Level-{n}-{YYYY-MM-DD}-{lang}.png`
- Technique: Native Canvas API
- Background: warm paper (#F3EEE4)
- Fonts: preload IBM Plex Sans Thai + Chakra Petch + IBM Plex Sans (for EN)

### 7.2 Layout (revised — ตัด quote ออก เพิ่ม workshops + copyright)

```
┌─────────────────────────────────────┐
│  AI LITERACY ASSESSMENT             │   80px
├─────────────────────────────────────┤
│  [Hero — your level]                │   520px
│       ระดับโดยรวมของคุณ              │
│          ┌──────┐                   │
│          │  3   │                   │
│          └──────┘                   │
│      สร้างด้วย AI · Building         │
├─────────────────────────────────────┤
│  [Name + Date]                      │   100px
│  อแจว                                │
│  29 พฤษภาคม 2569                     │
├─────────────────────────────────────┤
│  [Per-level bars × 5]                │   460px
│  1. เข้าใจพื้นฐาน         85%        │
│  ... (5 bars)                       │
├─────────────────────────────────────┤
│  [Recommended workshops]             │   480px
│  🎯 หัวข้อ workshop ที่ขอแนะนำ        │
│                                     │
│   ┌──────────────────────┐          │
│   │ สร้างแอปด้วย AI API   │          │
│   └──────────────────────┘          │
│   ┌──────────────────────┐          │
│   │ พื้นฐาน Machine       │          │
│   │ Learning             │          │
│   └──────────────────────┘          │
│   ┌──────────────────────┐          │
│   │ LLM Application Dev  │          │
│   └──────────────────────┘          │
├─────────────────────────────────────┤
│  [Copyright + Attribution]           │   280px
│  © 2026 ผศ.ดร.ธนาทิพย์ จันทร์คง       │
│  ภาควิชาวิศวกรรมคอมพิวเตอร์           │
│  คณะวิศวกรรมศาสตร์ ม.เชียงใหม่         │
│                                     │
│  Licensed CC BY-NC-SA 4.0           │
│  Based on LinkedIn AI Upskilling    │
│  Framework                          │
└─────────────────────────────────────┘
```

### 7.3 Image language follows current UI language
- If user is on TH UI when downloading → all image text is TH (date in BE)
- If on EN UI → all image text is EN (date in AD)
- Workshop topics shown in matching language

### 7.4 Typography (slight adjustment for new content density)
- Level number: 200px (reduced from 240px)
- Workshop chips: IBM Plex Sans Thai 500 / IBM Plex Sans 500, ~28px
- Copyright block: IBM Plex Sans Thai 400 / IBM Plex Sans 400, ~22px
- Other elements: same as v2.0

---

## 8. Functional Requirements (consolidated)

### F1. Quiz (existing — keep)
- 20 items × 5-point Likert
- Progress bar, back navigation
- ✅ มีอยู่แล้ว — ต้องเพิ่ม EN translation ทุกข้อ

### F2. Language toggle (new)
- Button ใน header: `[TH | EN]`
- เปลี่ยน text ทั้งหน้าจอแบบ realtime
- ไม่ persist (memory only)

### F3. Name input (carry over from v2.0)
- Optional 100%
- รับทุก input รวม emoji

### F4. Framework diagram (new)
- SVG inline diagram 5 levels
- แสดงในหน้า intro
- Bilingual labels (สลับตาม language toggle)

### F5. Result screen (updated)
- ระดับ + ชื่อ + วันที่ (BE/AD ตาม lang)
- Per-level bars
- Strengths / Growth areas
- Next steps (general guidance)
- **Recommended workshops (2-3 topics)** — NEW
- Action buttons: download image, print PDF, restart

### F6. Image generation (updated for v3.0)
- Layout per §7.2
- รวม workshops + copyright + attribution
- ภาษาในภาพตามภาษา UI ปัจจุบัน

### F7. Date formatting
- TH: `Intl.DateTimeFormat('th-TH-u-ca-buddhist', { dateStyle: 'long' })` → `29 พฤษภาคม 2569`
- EN: `Intl.DateTimeFormat('en-US', { dateStyle: 'long' })` → `May 29, 2026`

### F8. Print PDF version (existing)
- Browser print, A4 portrait
- Include workshops + copyright + attribution

### F9. Footer (every screen)
- Copyright + license + framework source
- Language-aware

### F10. About section (new)
- Brief acknowledgment of LinkedIn AI Upskilling Framework
- Link to original article
- License info + CC icon
- Author credit

---

## 9. Privacy Statement (carry over from v2.0)

> **TH**: เครื่องมือนี้ทำงานในเบราว์เซอร์ของคุณทั้งหมด เราไม่เก็บข้อมูลใด ๆ ไม่มีเซิร์ฟเวอร์ ไม่มีคุกกี้ ไม่มี analytics

> **EN**: This tool runs entirely in your browser. We don't collect any data. No server, no cookies, no analytics.

---

## 10. Non-Functional Requirements (carry over from v2.0)

- First load < 2s on 4G
- Image generation < 3s
- Modern browsers (Chrome/Safari/Edge/Firefox last 2 versions)
- iOS Safari 14+, Chrome Android 90+
- WCAG AA color contrast
- Keyboard navigable
- HTTPS only, static hosting

---

## 11. Out of Scope (อย่าทำ)

- ❌ Backend / database / API
- ❌ Email sending (ทุกรูปแบบ)
- ❌ localStorage / cookies / sessionStorage / IndexedDB
- ❌ Analytics / tracking / telemetry
- ❌ Login / SSO
- ❌ Department/role/tenure fields
- ❌ Aggregation dashboard
- ❌ Share to social media buttons (ผู้ใช้ดาวน์โหลดภาพแล้วโพสต์เอง)
- ❌ ใช้รูปจาก LinkedIn เว็บไซต์โดยตรง (ลิขสิทธิ์ — ต้องวาด SVG เอง)
- ❌ ภาษาที่ 3 (Phase 1 เอาแค่ TH/EN)

---

## 12. Implementation Order

ทำตามลำดับนี้ — แต่ละ step มี checkpoint:

### Step 1 — Bilingual infrastructure
1. สร้าง `LANG = { th: {...}, en: {...} }` containing all UI strings + quiz items
2. Implement `t(key)` and `setLang(lang)` functions
3. เพิ่ม language toggle ใน header
4. ทดสอบ: toggle เปลี่ยน text ทั้งหน้า (ยังไม่ต้องทำ feature ใหม่)
5. **Commit**: `feat: add bilingual TH/EN infrastructure`
6. **Checkpoint**: review

### Step 2 — Update data model (workshops, EN translations)
1. แทนที่ `paths[]` ด้วย `workshops[]` ใน LEVELS
2. ใส่ EN translation ของ items, blurbs, next steps, workshops
3. อัปเดต result screen ให้แสดง workshops section
4. **Commit**: `feat: add workshop recommendations and EN translations`
5. **Checkpoint**: review

### Step 3 — Framework diagram + about section
1. ออกแบบและวาด SVG diagram 5 ระดับ
2. เพิ่ม "About" section ในหน้า intro (พร้อม diagram)
3. ใส่ acknowledgment of LinkedIn framework + link
4. ทำเป็น bilingual
5. **Commit**: `feat: add SVG framework diagram and about section`
6. **Checkpoint**: review

### Step 4 — Name input + BE/AD date
1. Name input page (carry from v2.0 plan)
2. Show name + date (BE for TH, AD for EN) in result
3. **Commit**: `feat: add name input and bilingual date display`
4. **Checkpoint**: review

### Step 5 — Canvas image generation
1. สร้าง `generateResultImage(state, lang)` function
2. Layout per §7.2 (including workshops + copyright)
3. Font preloading (FontFace API)
4. ทดสอบ edge cases (no name, long name, emoji, L0)
5. ทดสอบทั้ง TH และ EN
6. **Commit**: `feat: canvas image generation with workshops and copyright`
7. **Checkpoint**: review บน DESKTOP

### Step 6 — Download UX + mobile testing
1. Download button (primary action) ใน result
2. Loading state ระหว่าง render
3. iOS Safari fallback (open in new tab)
4. ทดสอบบนมือถือจริง
5. **Commit**: `feat: image download with iOS Safari fallback`
6. **Checkpoint**: ทดสอบบน iPhone จริง

### Step 7 — Footer, copyright, license
1. Footer with copyright + license + framework source (bilingual)
2. เพิ่ม LICENSE file ใน repo (CC BY-NC-SA 4.0)
3. อัปเดต README พร้อม credits
4. **Commit**: `chore: add license, footer attribution, README credits`

### Step 8 — Polish
1. Review copy/wording ทั้งสองภาษา
2. Accessibility check (keyboard, contrast, aria-label)
3. Final cross-browser test
4. **Commit**: `polish: accessibility and copy refinements`

---

## 13. Acceptance Criteria

จะถือว่า "เสร็จ" เมื่อ:

**Functionality**
- [ ] Quiz 20 ข้อทำได้ปกติทั้ง TH และ EN
- [ ] Toggle TH/EN เปลี่ยน text ทุกที่ (รวม quiz items, result, footer)
- [ ] Result แสดงชื่อ + วันที่ (BE สำหรับ TH, AD สำหรับ EN)
- [ ] แสดง workshops 2-3 หัวข้อในระดับที่เหมาะสม
- [ ] Framework SVG diagram แสดงในหน้า intro
- [ ] ดาวน์โหลดภาพ 1080×1920 PNG ได้ทั้ง desktop และ mobile
- [ ] ภาพมี: ระดับ, ชื่อ, วันที่, bars, workshops, copyright/attribution
- [ ] ภาษาในภาพตรงกับภาษา UI ปัจจุบัน

**Privacy**
- [ ] 0 network requests หลังโหลดหน้าเว็บเสร็จ (DevTools Network)
- [ ] 0 cookies / localStorage / sessionStorage ถูกเขียน (DevTools Application)

**Legal/Credit**
- [ ] Copyright ผศ.ดร.ธนาทิพย์ ใน footer ทุกหน้า + ในภาพ + ใน PDF
- [ ] CC BY-NC-SA 4.0 license ระบุชัด + link
- [ ] LICENSE file ใน repo
- [ ] LinkedIn framework attribution อยู่ใน about section + footer + ภาพ
- [ ] ไม่มีรูปจาก LinkedIn ในเว็บ (ใช้ SVG ที่วาดเอง)

**Cross-platform**
- [ ] ทดสอบผ่าน: iOS Safari, Chrome Android, Chrome desktop, Firefox, Edge
- [ ] ภาษาไทยใน image render ครบ ไม่มี tofu/กล่อง

---

## 14. Claude Code starter prompt

```
อ่าน REQUIREMENTS.md ทั้งหมด แล้วเริ่ม Step 1 ของ Implementation Order
(Bilingual infrastructure)

ทำเฉพาะ Step 1 ให้เสร็จก่อน อย่าข้ามไปทำ step อื่น
- สร้าง LANG object สำหรับ TH/EN
- ย้าย UI strings ปัจจุบันทั้งหมดเข้าไป (ตอนนี้ภาษาไทยอย่างเดียว ให้แปล EN ภายหลังใน Step 2)
- เพิ่ม language toggle ใน header
- ใช้ in-memory state (ห้ามใช้ localStorage)

เมื่อเสร็จ commit แล้วรอให้ฉัน approve ก่อนเริ่ม Step 2
```
