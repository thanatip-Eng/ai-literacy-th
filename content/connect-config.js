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
    enabled: false,
    mode: "lti",
    formUrl: "", // https://docs.google.com/forms/d/e/XXXX/formResponse
    fields: {
      name: "",
      studentId: "",
      email: "",
      role: "",
      lang: "",
      placement: "",
      l1: "",
      l2: "",
      l3: "",
      partnershipComposite: "",
      verify: "",
      restraint: "",
      humanLead: "",
      direction: "",
      quadrant: "",
      weakTags: "",
      rawAnswers: "",
      date: ""
    }
  };
});
