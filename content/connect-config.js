// การตั้งค่าโหมดเชื่อมต่อ (Canvas LMS / Google Form)
// ---------------------------------------------------
// ค่า default คือปิด (enabled: false) — โหมดสาธารณะทำงานเหมือนเดิม 100%
// และไม่ส่งข้อมูลใด ๆ ออกจากเบราว์เซอร์
//
// วิธีตั้งค่า: ดู docs/connect-setup.md
// - mode "lti"  = นักศึกษาเข้าผ่าน Canvas (LTI 1.1) → ผลถูกส่งผ่าน /api/submit
//                 พร้อมอีเมลที่ยืนยันแล้ว (ต้องตั้ง env vars ฝั่ง server ด้วย)
// - mode "form" = ไม่ใช้ Canvas — เบราว์เซอร์ส่งผลตรงเข้า Google Form
//                 และแสดงช่องกรอกรหัสนักศึกษาในหน้ากรอกชื่อ
//
// fields: จับคู่ข้อมูลแต่ละด้านกับ entry ID ของ Google Form (เช่น "entry.123456")
// เว้นว่าง = ไม่ส่ง field นั้น
(function(root, factory) {
  const config = factory();
  if (typeof module === 'object' && module.exports) module.exports = config;
  root.AI_LITERACY_CONNECT = config;
})(typeof globalThis !== 'undefined' ? globalThis : this, function() {
  return {
    enabled: true,
// โหมดเชื่อมต่อทำงานเฉพาะโดเมนในรายการนี้ — โดเมนอื่นของโปรเจกต์เดียวกัน
// (เช่นโดเมน public ที่เพิ่มใน Vercel → Settings → Domains) จะเป็นโหมด
// สาธารณะ zero-data โดยอัตโนมัติ ("localhost" ไว้สำหรับพัฒนา/ทดสอบ)
connectHosts: ["ai-literacy-th.vercel.app", "localhost"],
mode: "lti",           // หรือ "form" ถ้าไม่ใช้ Canvas
formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdesg67G-mbJng9f9PwkUbbiDiuuPIyA7CnhSfiGPe3uj0h6A/formResponse",
                       // นำมาจากลิงก์ฟอร์ม เปลี่ยน /viewform เป็น /formResponse
fields: {
  name: "entry.638643263",
  studentid: "entry.537559243",
  email: "entry.370642560",
  level_cumulative: "entry.1254065153",
  score_skill: "entry.2031091558",
  score_partnership: "entry.721553404",
  score_subtrait: "entry.1286433031",
  quadrant: "entry.1221995085",
  weakTags: "entry.36105660",
  rawAnswers: "entry.425412520",
  date: "entry.370420129",
  receipt: "entry.1083670918"
},
// ปุ่ม "ทำแบบประเมินความพึงพอใจ" บนหน้าผล — เปิดฟอร์มใน tab ใหม่
// params: prefill จากข้อมูลผู้ทำ (key = ชื่อ field ใน payload, ค่า = entry ID)
// *เลิกใช้แล้ว* — เปลี่ยนไปใช้ microFeedback (บังคับตอบก่อนส่งผล) แทน
// url ว่าง = ปุ่ม/ป็อปอัปไม่แสดง; ใส่ url กลับเมื่อไรก็เปิดใช้ใหม่ได้ทันที
feedback: {
  url: "",
  params: {
    studentid: "entry.1095727791",
    email: "entry.1860979212"
  }
},
// micro-feedback widget บนหน้าผล (ไม่ระบุตัวตนทั้งสองโหมด)
// - โดเมนสาธารณะ: ไม่บังคับตอบ อยู่ท้ายหน้า
// - Canvas: บังคับให้ดาวครบ 2 ข้อก่อนจึงจะกดส่งผลให้ผู้สอนได้ (ช่องแนะนำไม่บังคับ)
// สร้างจาก Google Form ที่มีคำถาม Short answer: rating, fit, useful, note,
// quadrant, lang, version, aud แล้วเติม formUrl + entry ID ด้านล่าง
// formUrl ว่าง = ปิด widget · ช่องที่ยังไม่มี entry ID จะไม่ถูกส่ง
// aud = แหล่งคำตอบ ("canvas" หรือ "public") ไว้แยกกลุ่มตอนวิเคราะห์
microFeedback: {
  formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf7dnrpxzgSz-_-ruGA2Mt06NGZlEP-1GntWqQWVcVtpJCvpA/formResponse",
  fields: {
    rating: "entry.1545245341",
    fit: "entry.179077316",
    useful: "",
    note: "entry.1063626964",
    quadrant: "entry.158752728",
    lang: "entry.448667513",
    version: "entry.964770858",
    aud: ""
  }
},
// ข้อความฉบับกระชับสำหรับผู้เรียนใน Canvas — override เฉพาะ key ที่ระบุ
// (key ต้องมีอยู่ใน content/app-content.js → lang) โดเมน public ใช้ฉบับเต็มเสมอ
copyOverrides: {
  th: {
    nameSub: "ใส่ชื่อเล่นก็ได้ เพื่อให้ผลและภาพสรุปเป็นของคุณ",
    roleSub: "เลือกที่ใกล้เคียงที่สุด เพื่อคำแนะนำที่ตรงกับคุณ",
    dimRoleDesc: "เลือกบทบาทที่ใกล้ตัวคุณที่สุด",
    dimSkillDesc: "เข้าใจ → ใช้ → สร้าง",
    dimPartnershipDesc: "คุณนำ AI หรือ AI นำคุณ?",
    dimensionsNote: "ผลรวมออกมาเป็นรูปแบบการใช้ AI 1 ใน 4 แบบ — ดูด้านล่างเลย"
  },
  en: {
    nameSub: "A nickname works too — it makes the result and image yours",
    roleSub: "Pick the closest match for advice that fits you",
    dimRoleDesc: "Pick the role closest to you",
    dimSkillDesc: "Understand → Apply → Build",
    dimPartnershipDesc: "Do you lead AI, or does AI lead you?",
    dimensionsNote: "It all adds up to 1 of 4 AI-use patterns — see below"
  }
}
  };
});
