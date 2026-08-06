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
  date: "entry.370420129"
},
// ปุ่ม "ทำแบบประเมินความพึงพอใจ" บนหน้าผล — เปิดฟอร์มใน tab ใหม่
// params: prefill จากข้อมูลผู้ทำ (key = ชื่อ field ใน payload, ค่า = entry ID)
feedback: {
  url: "https://docs.google.com/forms/d/e/1FAIpQLSdufO_eon5oOSCQKHIdpDRTK4cVWtBsoSZuGB4qz4CiHDhWkw/viewform",
  params: {
    studentid: "entry.1095727791",
    email: "entry.1860979212"
  }
}
  };
});
