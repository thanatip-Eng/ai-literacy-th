# แบบประเมิน AI Literacy (ภาษาไทย)

เครื่องมือประเมินตนเองด้าน AI Literacy ภาษาไทย อิงโครงสร้าง **LinkedIn AI Upskilling Framework** (5 ระดับ)
- ระดับ 1 — Understanding · เข้าใจพื้นฐาน AI
- ระดับ 2 — Applying · นำ AI ไปใช้ในงานประจำวัน
- ระดับ 3 — Building · สร้างด้วย AI
- ระดับ 4 — Training & Maintaining Models · ฝึกและดูแลโมเดล
- ระดับ 5 — Deeply Specializing · เชี่ยวชาญเฉพาะทางขั้นสูง

20 ข้อ (ระดับละ 4) · มาตรวัด 5 ระดับ · ผลลัพธ์: ระดับโดยรวม + โปรไฟล์รายระดับ + ขั้นต่อไป

## โครงสร้างโปรเจกต์

```
ai-literacy-th/
├── index.html        # ตัวแบบประเมิน (single-file: HTML + CSS + JS)
├── CLAUDE.md         # context สำหรับ Claude Code
├── README.md
└── netlify.toml      # config สำหรับ deploy บน Netlify
```

## รัน local

เปิดไฟล์ได้เลย:
```bash
open index.html
```

หรือใช้ dev server ใด ๆ ก็ได้:
```bash
npx serve .
# หรือ
python3 -m http.server 8080
```

## Deploy

### Netlify (drag & drop)
ลากโฟลเดอร์นี้เข้า https://app.netlify.com/drop ได้เลย

### Netlify CLI
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### GitHub Pages
```bash
git init && git add . && git commit -m "init: AI literacy assessment TH"
gh repo create ai-literacy-th --public --source=. --push
# Settings → Pages → Deploy from branch: main / root
```

### Vercel
```bash
npx vercel --prod
```

## การแก้/ต่อยอดด้วย Claude Code

ดู `CLAUDE.md` สำหรับ context ที่ Claude Code ใช้ตอนแก้โค้ด

ตัวอย่างคำสั่ง:
- `เพิ่มหน้ากรอกชื่อ-อีเมลก่อนเริ่ม แล้วส่งผลไป Google Sheet`
- `แปลงเป็น Canvas LTI assignment`
- `เพิ่มชุดคำถามแบบ objective (มีถูก-ผิด) คั่นในระดับ 1-2`
- `เพิ่มภาษาอังกฤษเป็นทางเลือก toggle`
