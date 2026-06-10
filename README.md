# แบบประเมิน AI Literacy

เครื่องมือประเมินตนเองสองภาษา (ไทย/อังกฤษ) ตามโครงสร้าง LinkedIn AI Upskilling Framework 5 ระดับ มีคำถาม 20 ข้อ ผลรายระดับ คำแนะนำ workshop และดาวน์โหลดผลเป็นภาพ

## โครงสร้าง

```text
index.html                 UI และ browser behavior
content/app-content.js     เนื้อหาที่แก้ไขได้ทั้งหมด รวมคำถาม TH/EN
js/assessment-core.js      การสร้างรายการคำถาม การคำนวณคะแนน และ placement
tools/                     export/apply เนื้อหาจากไฟล์ข้อความ
test/                      automated regression tests
vercel.json                deployment headers
LICENSE                    CC BY-NC-SA 4.0 notice
```

## รัน Local

เปิดไฟล์โดยตรงได้:

```bash
open index.html
```

หรือรัน local server:

```bash
python3 -m http.server 8080
```

จากนั้นเปิด `http://localhost:8080`

## อัปเดตคำถามและเนื้อหา

`content/app-content.js` เป็น canonical content source ห้ามย้ายคำถามกลับเข้า `index.html`

สร้างไฟล์ข้อความสำหรับแก้ไข:

```bash
npm run content:export
```

แก้ `content.txt` โดยคง key และ section marker เดิมไว้ แล้วนำกลับเข้าโปรเจกต์:

```bash
npm run content:apply
npm test
```

Importer จะไม่เขียนไฟล์หากพบ key ที่ไม่รู้จัก บรรทัดผิดรูปแบบ หรือโครงสร้าง TH/EN ไม่ครบ

## Visual Editor

เปิด `index.html?edit=1` หรือ `http://localhost:8080/?edit=1` เพื่อแก้ข้อความผ่าน side panel

- draft บันทึกใน `localStorage` เฉพาะ authoring mode นี้
- ปุ่ม export ดาวน์โหลด `app-content.js`
- นำไฟล์ไปแทน `content/app-content.js` แล้วรัน `npm test`

หน้า assessment ปกติไม่เขียน cookies, `localStorage` หรือ `sessionStorage`

## Tests

```bash
npm test
```

ชุดทดสอบครอบคลุม scoring, cumulative placement, bilingual content validation, text round trip, malformed-input rejection และ static regression guards

## Deploy

เป็น static site ไม่มี build step สามารถ deploy ไป Vercel, GitHub Pages, Netlify หรือ static host อื่นได้

Vercel:

```bash
npx vercel --prod
```

## Credit And License

Copyright © 2026 Student Talent Development, Faculty of Engineering, Chiang Mai University.

Licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). The five-level structure is adapted from the LinkedIn AI Upskilling Framework.
