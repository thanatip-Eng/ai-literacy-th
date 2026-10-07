// ข้อความของหน้า assignment.html (วิธีทำงาน 13 ขั้นตอน) — แก้ที่นี่ที่เดียว
// หน้าเว็บโหลดไฟล์นี้เป็น global ส่วน tools/canvas-snippet.js require เข้าไปใช้
// จึงไม่ต้องแกะ dictionary ออกจาก HTML ด้วย eval
//
// ชื่อปุ่มที่นักศึกษาต้องหาบนจอ ครอบด้วย {ui:…} — มีเทสต์ตรวจว่าทุกชื่อยังมี
// อยู่จริงใน content/app-content.js → lang.th / lang.en
(function(root, factory) {
  const copy = factory();
  if (typeof module === 'object' && module.exports) module.exports = copy;
  root.AISTYLE_ASSIGNMENT_COPY = copy;
})(typeof globalThis !== 'undefined' ? globalThis : this, function() {
  return {
th: {
  back: "← กลับไปหน้าแบบประเมิน",
  title: "วิธีทำงาน AiStyle",
  lead: "งานนี้มี 2 ช่วงต่อกัน รวมประมาณ 25–30 นาที ทำจบในครั้งเดียวได้ อ่านหน้านี้ให้จบก่อนเริ่ม จะได้ไม่ต้องย้อนกลับมาทำใหม่",
  half1Tag: "ช่วงที่ 1", half1Head: "ทำแบบประเมินในแอป", half1Time: "8–10 นาที · 36 ข้อ",
  half2Tag: "ช่วงที่ 2", half2Head: "เขียนสะท้อนคิดใน MS Form", half2Time: "15–20 นาที",

  gradeHead: "⚠️ คะแนนมาจากอะไร — อ่านก่อน",
  grade1: "ไม่มีคำตอบถูกหรือผิด และคะแนนไม่ได้ให้ตามระดับที่คุณได้",
  grade2: "ช่วงที่ 1 ให้คะแนนจากการทำครบและกดส่ง · ช่วงที่ 2 ให้คะแนนจากความตรงไปตรงมาและความเฉพาะเจาะจง ไม่ใช่ความสวยงามของภาษา",
  grade3: "คำตอบกว้าง ๆ แบบที่ใครก็เขียนได้ (หรือให้ AI เขียนให้) จะได้คะแนนน้อยกว่าคำตอบสั้น ๆ ที่เป็นเรื่องของคุณจริง",

  phase1Head: "ช่วงที่ 1 · ทำแบบประเมินและส่งผล",
  phase1Sub: "ตั้งแต่เปิดแอป จนได้รหัสยืนยันมาเก็บไว้",
  phase2Head: "ช่วงที่ 2 · ส่งงานสะท้อนคิด",
  phase2Sub: "ใช้รหัสยืนยันจากช่วงที่ 1 — ทำต่อได้เลยจากหน้าผล",

  steps1: [
    {h: "เปิดแอปจากลิงก์ในหน้า assignment",
     p: "จะเปิดในแท็บใหม่",
     warn: "ต้องเข้าจาก Canvas เท่านั้น ถ้าเปิดลิงก์จากที่อื่นจะเจอหน้า “กรุณาเข้าผ่าน Canvas” เพราะระบบใช้ Canvas ยืนยันว่าคุณเป็นนักศึกษาในวิชานี้"},
    {h: "กด {ui:เริ่มทำแบบประเมิน →} แล้วใส่ชื่อ",
     p: "ชื่อไม่บังคับ ใส่ไว้เพื่อให้ผลและภาพที่ดาวน์โหลดเป็นของคุณ · ถ้ามีช่อง {ui:รหัสนักศึกษา} ให้กรอกให้ถูกต้อง"},
    {h: "เลือกกลุ่มสาขาที่คุณเรียน",
     p: "หน้า {ui:คุณเรียนอยู่กลุ่มสาขาใด?} เลือกให้ตรงกับคณะที่เรียนจริง",
     chips: ["สุขภาพและการแพทย์","วิศวกรรมและเทคโนโลยีดิจิทัล","วิทยาศาสตร์และเกษตร","ธุรกิจ เศรษฐศาสตร์ และนโยบาย","มนุษยศาสตร์ สังคมศาสตร์ และการศึกษา","ศิลปะและการออกแบบ"],
     note: "ข้อนี้สำคัญกว่าที่คิด เพราะเปลี่ยนตัวอย่างใต้คำถามทุกข้อ เพิ่มชุดสถานการณ์ในสาขาของคุณอีก 6 ข้อ และเปลี่ยนคำแนะนำท้ายผล เลือกผิดกลุ่มผลจะอ่านไม่ตรงตัว"},
    {h: "ตอบ 36 ข้อ",
     p: "แตะสเกล 1–5 แนวนอน (บนคอมพิวเตอร์กดคีย์ 1–5 ได้) ระบบเลื่อนข้อให้เอง",
     note: "ตอบตามที่คุณทำจริง ไม่ใช่ตามที่ควรจะเป็น — ตอบให้ดูดีแล้วผลจะสวย แต่ไม่มีประโยชน์กับตัวเอง"},
    {h: "อ่านหน้าผลให้ครบก่อนกดอะไร",
     p: "โดยเฉพาะสามการ์ดนี้:",
     list: ["🎓 ถ้าวันนี้ไม่มี AI — อะไรจะเหลืออยู่กับคุณเมื่อไม่มีเครื่องมือ",
            "📌 สถานการณ์ในสาขาที่คุณเรียน",
            "🪞 คนอื่นมองคุณอย่างไร — ผลแบบนี้ อาจารย์และคนที่รับเข้าทำงานอ่านออกมาเป็นอะไร"]},
    {h: "กด {ui:คัดลอกคำถาม} ในการ์ด ✍️ คำถามสะท้อนคิดของคุณ",
     p: "เก็บไว้ใช้ในช่วงที่ 2",
     note: "คำถามของแต่ละคนไม่เหมือนกัน ระบบเลือกจากด้านที่คะแนนของคุณยังต่ำ ลอกของเพื่อนไม่ได้ และถ้าลอกมาก็จะตอบไม่ได้ เพราะไม่ใช่เรื่องของตัวเอง"},
    {h: "ให้ดาวครบ 3 ข้อในกล่องให้คะแนน",
     p: "{ui:ให้คะแนนแบบประเมินนี้} · {ui:ผลที่ได้ตรงกับตัวคุณแค่ไหน} · {ui:คำแนะนำที่ได้มีประโยชน์กับคุณแค่ไหน}",
     note: "ส่วน “อยากบอกอะไรเพิ่มเติมไหม” ไม่บังคับ · ถ้ายังให้ดาวไม่ครบ ปุ่มส่งจะกดไม่ได้"},
    {h: "กด {ui:📤 ส่งผลให้ผู้สอน} แล้วเก็บรหัสยืนยัน",
     p: "จะขึ้นกล่อง “✅ ส่งผลให้ผู้สอนเรียบร้อยแล้ว” พร้อม <b>รหัสยืนยัน 8 ตัวอักษร</b>",
     p2: "📸 แคปหน้าจอกล่องนี้ หรือกด {ui:💾 ดาวน์โหลดภาพยืนยัน} เก็บไว้เป็นหลักฐาน",
     warn: "รหัสยืนยันมีหลังกดส่งเท่านั้น ก่อนกดส่งยังไม่มี — หาไม่เจอไม่ใช่ความผิดพลาด"}
  ],

  steps2: [
    {h: "กด {ui:เปิดแบบสะท้อนคิด →} ในกล่องยืนยันเดียวกัน",
     p: "ฟอร์มจะเปิดขึ้นโดยกรอก <b>รหัสยืนยัน · รูปแบบการใช้ AI · ระดับทักษะ · กลุ่มสาขา</b> มาให้แล้วอัตโนมัติ — อย่าแก้ค่าที่กรอกมาให้",
     note: "ถ้าปิดหน้าผลไปแล้ว: เปิดลิงก์ฟอร์มในหน้า assignment แล้วพิมพ์รหัสยืนยันจากที่แคปไว้เอง ช่องอื่นเว้นว่างได้"},
    {h: "วางคำถามที่คัดลอกไว้",
     p: "เอาคำถามจากข้อ 6 มาวางในช่องคำถามชวนคิด"},
    {h: "ตอบคำถามเหล่านั้น",
     p: "ในช่องถัดมา เขียนเท่าที่คุณคิดจริง ๆ"},
    {h: "ตอบข้อสุดท้าย — หัวใจของงาน",
     bigq: true,
     note: "ให้เวลากับข้อนี้มากที่สุด"},
    {h: "กดส่งฟอร์ม",
     p: "เก็บหน้ายืนยันของฟอร์มไว้ด้วย"}
  ],

  bigqLabel: "คำถามข้อสุดท้าย",
  bigqQ: "อีกไม่กี่ปีตอนคุณเรียนจบ อะไรคือสิ่งที่คุณทำได้ซึ่ง AI ทำแทนไม่ได้",
  bigqHow: "เขียนมาหนึ่งอย่างที่จะเริ่มสร้างในเทอมนี้ บอกให้ชัดว่า จะทำอะไร · สัปดาห์ละกี่ครั้ง · จะรู้ได้อย่างไรว่าทำได้จริงแล้ว (ไม่ใช่แค่รู้สึกว่าทำได้)",

  troubleHead: "ติดปัญหา",
  troubleCol1: "อาการ", troubleCol2: "ทำยังไง",
  trouble: [
    ["เจอหน้า “กรุณาเข้าผ่าน Canvas”", "เปิดลิงก์ตรงจากที่อื่น ให้กลับไปเปิดจากหน้า assignment ใน Canvas"],
    ["หารหัสยืนยันไม่เจอ", "ยังไม่ได้กด “📤 ส่งผลให้ผู้สอน” — รหัสมีหลังกดส่งเท่านั้น"],
    ["กดปุ่มส่งไม่ได้", "ยังให้ดาวไม่ครบ 3 ข้อในกล่องให้คะแนน"],
    ["ไม่เห็นปุ่ม “เปิดแบบสะท้อนคิด”", "เปิดลิงก์ฟอร์มจากหน้า assignment แล้วพิมพ์รหัสเอง"],
    ["ปิดหน้าผลไปแล้ว ยังไม่ได้จดรหัส", "ทำใหม่แล้วกดส่งอีกครั้ง จะได้รหัสใหม่ ใช้รหัสล่าสุด"],
    ["เลือกกลุ่มสาขาผิด", "ทำใหม่ได้ และใช้รหัสล่าสุดในฟอร์ม"]
  ],

  footNote: "เขียนเป็นภาษาไทยหรืออังกฤษก็ได้ ไม่มีกำหนดความยาวขั้นต่ำ — ขอแค่ชัดพอที่คนอ่านจะรู้ว่าคุณจะทำอะไรจริง ๆ · คำตอบของคุณผู้สอนอ่าน ไม่เผยแพร่ และไม่นำไปเทียบกับเพื่อนในชั้น · ผลถูกส่งพร้อมอีเมลที่ Canvas ยืนยันแล้ว ส่วนคะแนนดาวส่งแบบไม่ระบุตัวตน แยกจากผลประเมิน"
},
en: {
  back: "← Back to the assessment",
  title: "How to do the AiStyle assignment",
  lead: "Two parts, about 25–30 minutes in total. You can finish both in one sitting. Read this page before you start so you don't have to redo anything.",
  half1Tag: "Part 1", half1Head: "The assessment in the app", half1Time: "8–10 min · 36 items",
  half2Tag: "Part 2", half2Head: "A written reflection in MS Forms", half2Time: "15–20 min",

  gradeHead: "⚠️ What you are marked on — read first",
  grade1: "There are no right answers, and your mark does not depend on the level you land on.",
  grade2: "Part 1 is marked on completing and submitting. Part 2 is marked on honesty and specificity, not on polished writing.",
  grade3: "A general answer anyone could have written (or had AI write) scores lower than a short one that is clearly about you.",

  phase1Head: "Part 1 · Take the assessment and submit",
  phase1Sub: "From opening the app to holding your confirmation code",
  phase2Head: "Part 2 · Submit the reflection",
  phase2Sub: "Uses the code from Part 1 — carry straight on from the result page",

  steps1: [
    {h: "Open the app from the link on the assignment page",
     p: "It opens in a new tab.",
     warn: "You must enter from Canvas. Opening the link anywhere else shows “Please open this from Canvas”, because Canvas is what verifies you are in this course."},
    {h: "Press {ui:Start the assessment →} and add your name",
     p: "Your name is optional — it makes the result and the downloadable image yours. If a {ui:Student ID} field appears, fill it in correctly."},
    {h: "Pick the field group you study in",
     p: "On {ui:Which field are you studying?}, choose the group your faculty belongs to.",
     chips: ["Health & Medicine","Engineering & Digital Technology","Science & Agriculture","Business, Economics & Policy","Humanities, Social Sciences & Education","Art & Design"],
     note: "This matters more than it looks: it changes the example under every question, adds six scenarios from your own field, and changes the advice at the end. Pick the wrong group and the result reads off-target."},
    {h: "Answer 36 items",
     p: "Tap the 1–5 scale (keys 1–5 work on a computer); it advances itself.",
     note: "Answer how you actually work, not how you think you should — answering to look good gives you a flattering result and nothing useful."},
    {h: "Read the whole result before pressing anything",
     p: "Especially these three cards:",
     list: ["🎓 If AI were switched off today — what would still be yours",
            "📌 Situations in your field of study",
            "🪞 How other people see you — how a result like this reads to a teacher and to someone hiring"]},
    {h: "Press {ui:Copy the questions} in the ✍️ Your reflection questions card",
     p: "Keep them for Part 2.",
     note: "Everyone's questions differ — they come from your own lowest dimensions. You can't use a classmate's, and if you did you couldn't answer them, because they aren't about you."},
    {h: "Rate all three feedback questions",
     p: "{ui:Rate this assessment} · {ui:How well did the result fit you?} · {ui:How useful were the recommendations?}",
     note: "The open comment is optional. The submit button stays disabled until all three are rated."},
    {h: "Press {ui:📤 Send results to instructor} and keep your code",
     p: "A box appears saying “Sent to your instructor”, with an <b>8-character confirmation code</b>.",
     p2: "📸 Screenshot it, or press {ui:💾 Download receipt image}.",
     warn: "The code only exists after you submit. Not finding it beforehand is not a mistake."}
  ],

  steps2: [
    {h: "Press {ui:Open the reflection form →} in that same box",
     p: "The form opens with your <b>code, usage pattern, skill level and field group</b> already filled in — do not change them.",
     note: "If you closed the page: open the form link on the assignment page and type your code in. The other fields can stay empty."},
    {h: "Paste the questions you copied",
     p: "From step 6, into the reflection questions field."},
    {h: "Answer them",
     p: "In the next field. Write what you actually think."},
    {h: "Answer the last question — the heart of the assignment",
     bigq: true,
     note: "Give this one the most time."},
    {h: "Submit the form",
     p: "Keep its confirmation page too."}
  ],

  bigqLabel: "The last question",
  bigqQ: "In a few years, when you graduate, what will you be able to do that AI cannot do for you?",
  bigqHow: "Name one thing you will start building this term: what exactly you will do, how often, and how you will know you can actually do it — not just feel that you can.",

  troubleHead: "If something goes wrong",
  troubleCol1: "What you see", troubleCol2: "What to do",
  trouble: [
    ["“Please open this from Canvas”", "You opened the link directly — go back and open it from the assignment page in Canvas"],
    ["Can't find the confirmation code", "You haven't pressed “Send results to instructor” yet — the code only exists after that"],
    ["The submit button won't press", "You haven't rated all three feedback questions"],
    ["No “Open the reflection form” button", "Open the form link from the assignment page and type your code in"],
    ["Closed the page without the code", "Take it again and submit — you'll get a new code; use the latest one"],
    ["Picked the wrong field group", "Take it again, and use the latest code in the form"]
  ],

  footNote: "Write in Thai or English. There is no minimum length — just be specific enough that a reader knows what you will actually do. Your answers are read by your instructor, not published, and not compared with your classmates. Your result is sent with the email Canvas verified; the star ratings are sent anonymously, separately from your result."
}
};
});
