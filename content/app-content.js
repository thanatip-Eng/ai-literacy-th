(function(root, factory) {
  const content = factory();
  if (typeof module === 'object' && module.exports) module.exports = content;
  root.AI_LITERACY_CONTENT = content;
})(typeof globalThis !== 'undefined' ? globalThis : this, function() {
  return {
    lang: {
      th: {
        documentTitle: "AI Literacy & Partnership Profile — แบบประเมินตนเอง",
        badgeSelfTest: "AI Literacy Assessment — Skill × Partnership",
        badgeBrand: "สไตล์การใช้ AI ของคุณ",
        heroTitle: "คุณคือคนแบบไหน<br>เมื่อใช้ <span class=\"hl\">AI</span>?",
        lead: "แบบประเมินตนเองที่มอง 3 มิติพร้อมกัน — <b>บทบาทงาน · ทักษะการใช้ AI · ความสัมพันธ์ของคุณกับ AI</b> ตอบ 30–36 ข้อ แล้วรับผลวิเคราะห์พร้อมขั้นตอนพัฒนาต่อไปเป็นรายบุคคล",
        credit: "โครงสร้าง 5 ระดับอ้างอิงจาก LinkedIn AI Upskilling Framework · ออกแบบเป็นเครื่องมือประเมินตนเองสำหรับบริบทไทย",
        aboutHead: "เกี่ยวกับ framework",
        aboutSub: "โครงสร้าง 4 ระดับ — ภาพรวมโดยย่อ",
        aboutBody: "framework นี้จัดกลุ่มทักษะ AI ออกเป็น <b>4 ระดับ</b> ปรับมาจาก <b>LinkedIn AI Upskilling Framework</b> (5 ระดับ) โดยรวมระดับ 4–5 เข้าเป็น “ผู้เชี่ยวชาญขั้นสูง” แบบประเมินครอบคลุมระดับ 1–3 และเพิ่มแกน <b>ความสัมพันธ์กับ AI</b> (Human-in-the-Loop mindset) ที่ผู้พัฒนาเพิ่มเข้ามา เพื่อสะท้อนวิธีที่คุณทำงานกับ AI — ไม่ใช่แค่ทักษะ แต่รวมถึงสไตล์การตรวจสอบ ตั้งคำถาม และนำ AI",
        linkedinLinkText: "อ่านเกี่ยวกับ LinkedIn AI Upskilling Framework →",
        aboutAuthor: "© 2026 <b>Student Talent Development</b><br>Faculty of Engineering, Chiang Mai University",
        startBtn: "เริ่มทำแบบประเมิน →",
        metaNote: "30–36 ข้อ · 2 ส่วน · ไม่มีถูกผิด · ตอบตามความเป็นจริงของคุณ",
        nameStepPill: "ก่อนเริ่ม",
        nameHead: "คุณชื่ออะไร? (ไม่บังคับ)",
        nameSub: "ใส่ชื่อเพื่อให้ผลและภาพดาวน์โหลดแสดงชื่อของคุณ ข้ามได้ถ้าไม่ต้องการ",
        namePlaceholder: "ชื่อของคุณ",
        namePrivacy: "ชื่อนี้อยู่ในเบราว์เซอร์ของคุณเท่านั้น · ไม่ส่งให้ใคร",
        nameSkip: "ข้าม",
        nameContinue: "ถัดไป →",
        backBtn: "← ย้อน",
        rHero: "ตอนนี้คุณอยู่ตรงไหน",
        profileHead: "ทักษะการใช้ AI ของคุณ",
        profileMini: "แถบยาวกว่า = คุณคล่องในด้านนั้นมากกว่า · ระดับโดยรวมสะสมจากด้านพื้นฐานขึ้นไปทีละขั้น",
        nextSubSkillLabel: "พัฒนาทักษะ AI",
        nextSubPartnershipLabel: "พัฒนาสไตล์การใช้ AI",
        workshopsLabel: "🛠 workshop ที่แนะนำสำหรับคุณ",
        copyBtn: "คัดลอกสรุปผล",
        copyDone: "คัดลอกแล้ว ✓",
        printBtn: "บันทึก / พิมพ์ผล (PDF)",
        restartBtn: "ทำแบบประเมินใหม่",
        mfbHead: "ช่วยบอกเราหน่อย — ไม่บังคับ ใช้เวลา 15 วินาที",
        mfbHeadConnect: "ก่อนส่งผลให้ผู้สอน ช่วยตอบสั้น ๆ 3 ข้อ (จำเป็น)",
        mfbGateHint: "ให้ดาวครบทั้ง 3 ข้อก่อน ปุ่มส่งผลจึงจะกดได้",
        mfbQ1: "ให้คะแนนแบบประเมินนี้",
        mfbQ2: "ผลที่ได้ตรงกับตัวคุณแค่ไหน",
        mfbQ3: "คำแนะนำที่ได้มีประโยชน์กับคุณแค่ไหน",
        mfbQ4: "อยากบอกอะไรเพิ่มเติมไหม (ไม่บังคับ)",
        mfbNotePh: "เขียนสั้น ๆ ได้เลย — ข้อเสนอแนะ สิ่งที่ยังติดใจ หรืออยากให้ปรับตรงไหน",
        mfbSend: "ส่งความเห็น",
        mfbPrivacy: "ส่งแบบไม่ระบุตัวตน — เฉพาะคำตอบในกล่องนี้ + รูปแบบผล/ภาษา เท่านั้น",
        mfbPrivacyConnect: "ความเห็นส่วนนี้ส่งแบบไม่ระบุตัวตน แยกจากผลประเมินที่ส่งให้ผู้สอน",
        mfbThanks: "ขอบคุณมากค่ะ 🙏 ความเห็นของคุณช่วยพัฒนาระบบนี้ต่อ",
        foot: "อิงจาก LinkedIn AI Upskilling Framework (5 ระดับ) · เครื่องมือประเมินตนเอง",
        footerCopy: "© 2026 Student Talent Development · Faculty of Engineering, Chiang Mai University",
        p0Name: "กำลังเริ่มต้นสำรวจ AI",
        p0Blurb: "ยินดีต้อนรับสู่เส้นทาง AI — เราจะเริ่มจากการทำความเข้าใจพื้นฐานก่อน แล้วค่อย ๆ ต่อยอดทีละขั้นไปด้วยกัน",
        p0NextH: "ก้าวแรก — ทำความเข้าใจพื้นฐาน AI",
        p0Next: [
          "ทำความเข้าใจว่า Generative AI คืออะไร ทำได้ดีในเรื่องใด และมีข้อจำกัด/ความเสี่ยงอย่างไร",
          "เรียนรู้แนวปฏิบัติการใช้ AI อย่างมีความรับผิดชอบ",
          "ทดลองใช้เครื่องมือ AI กับงานง่าย ๆ เพื่อสร้างความคุ้นเคย"
        ],
        copyHeader: "ผล AI Literacy & Partnership Profile",
        copyProfileHead: "โปรไฟล์รายระดับ:",
        copyWorkshopsHead: "หัวข้อ workshop ที่ขอแนะนำ:",
        downloadBtn: "ดาวน์โหลดเป็นรูปภาพ",
        downloading: "กำลังสร้างภาพ…",
        iosHint: "แตะค้างที่ภาพแล้วเลือก \"บันทึกในรูปภาพ\" เพื่อเก็บไว้ในเครื่อง",
        modalClose: "ปิด",
        imgAlt: "ผลประเมิน AI Literacy & Partnership ของคุณ",
        imgBrand: "AI LITERACY & PARTNERSHIP PROFILE",
        imgOverall: "รูปแบบการใช้ AI ของคุณ",
        imgP0Name: "กำลังเริ่มต้นสำรวจ AI",
        imgPartnershipHead: "ภาพรวมความสัมพันธ์กับ AI",
        imgPartnershipCompositeTpl: "คะแนนรวม: {p}%",
        imgChartSkillHead: "ทักษะ AI",
        imgChartPartnershipHead: "ความสัมพันธ์กับ AI",
        imgWorkshopsHead: "หัวข้อ workshop ที่ขอแนะนำ",
        imgDisclaimer: "ผลนี้มาจากการประเมินตนเอง เป็นไกด์ไลน์ ไม่ใช่คะแนนสอบ",
        imgLicense: "เผยแพร่ภายใต้สัญญาอนุญาต CC BY-NC-SA 4.0",
        imgFrameworkSource: "อิง LinkedIn AI Upskilling Framework",
        roleStepPill: "เลือกบทบาท",
        roleHead: "งานหลักของคุณคือ?",
        roleSub: "เลือก 1 ข้อที่ใกล้เคียงที่สุด เพื่อให้คำแนะนำตรงกับงานของคุณ ข้ามได้ถ้าไม่ต้องการ",
        roleSkip: "ข้าม / ไม่ระบุ",
        roleGuideLink: "เพดานทักษะของแต่ละสายงานตั้งจากอะไร? →",
        disciplineStepPill: "เลือกกลุ่มสาขา",
        disciplineHead: "คุณเรียนอยู่กลุ่มสาขาใด?",
        disciplineSub: "เลือก 1 ข้อ เพื่อให้ตัวอย่างระหว่างทำและคำแนะนำท้ายผลตรงกับศาสตร์ของคุณ ทั้งหกกลุ่มครอบทุกคณะ เลือกที่ใกล้เคียงที่สุดได้เลย",
        disciplineInsightLabel: "🎓 สาขาของคุณ",
        qExampleTag: "ตัวอย่างสถานการณ์",
        fieldPill: "สถานการณ์ในสายของคุณ",
        fieldCheckHead: "📌 สถานการณ์ในสาขาที่คุณเรียน",
        fieldCheckScoreLabel: "คะแนนสถานการณ์ตามสาขาที่เรียน",
        evidenceLine: "งานวิจัยปี 2025 กับผู้ทำงาน 319 คน พบว่า ยิ่งเชื่อมั่นใน AI มาก ยิ่งคิดวิเคราะห์น้อยลง — ส่วนคนที่มั่นใจในความสามารถของตัวเอง กลับคิดวิเคราะห์มากขึ้น",
        evidenceLink: "ดูหลักฐานทั้งหมด →",
        partnershipGroupHead: "ความสัมพันธ์ของคุณกับ AI — 3 กลุ่ม",
        partnershipDetailToggle: "ดูรายด้าน",
        partnershipDetailNote: "อีก 3 ด้าน (ทำเองได้เมื่อไม่มี AI · ยอมลำบากเพื่อให้เก่งขึ้น · เชื่อตัวเองพอ ๆ กับเชื่อ AI) ดูได้ที่การ์ดด้านบน",
        receiptReflectHint: "ขั้นต่อไป: ส่งงานสะท้อนคิด โดยใช้รหัสยืนยันด้านบน",
        outsideViewHead: "🪞 คนอื่นมองคุณอย่างไร",
        outsideViewIntro: "เมื่อคนอื่นมองคุณ",
        outsideExamLabel: "ในห้องสอบ",
        outsideTeacherLabel: "ในสายตาอาจารย์",
        outsideHiringLabel: "ตอนสมัครงาน",
        reflectHead: "✍️ คำถามสะท้อนคิดของคุณ",
        reflectIntro: "คำถามเหล่านี้สร้างจากผลของคุณเอง ใช้ตอบในงานสะท้อนคิดได้เลย",
        reflectCopy: "คัดลอกคำถาม",
        reflectCopied: "คัดลอกแล้ว ✓",
        reflectOpen: "เปิดแบบสะท้อนคิด →",
        withoutAiHead: "🎓 ถ้าวันนี้ไม่มี AI",
        withoutAiIntro: "สามด้านนี้ชี้ให้เห็นว่า คุณจะเหลืออะไรอยู่บ้าง ถ้าหากไม่มี AI ให้คุณใช้ — เช่น ในห้องสอบ",
        withoutAiLow: "ตอนนี้งานของคุณเดินได้เพราะ AI เป็นหลัก พอถึงห้องสอบหรือเวลาที่ไม่มีเครื่องมือ คุณจะทำได้น้อยกว่าที่เกรดบอกไว้ ลองเลือกหนึ่งเรื่องที่คุณต้องเก่งให้ได้จริง แล้วทำเองจนจบสักครั้งโดยไม่ใช้ AI ช่วย",
        withoutAiMid: "คุณยังทำเองได้ในหลายเรื่อง แต่มีบางส่วนที่คุณพึ่ง AI จนไม่แน่ใจว่าตัวเองทำเองได้ไหม ชวนคุณลองทดสอบโดย: หยิบงานที่เพิ่งส่งไป แล้วอธิบายหรือทำใหม่โดยไม่เปิด AI จุดไหนที่ติดขัดทำไม่ได้ นั่นคือสิ่งที่คุณต้องฝึกฝนพัฒนา",
        withoutAiHigh: "คุณใช้ AI โดยที่ทักษะยังเป็นของคุณจริง ๆ นี่คือสิ่งที่ทำให้คุณต่างจากคนที่ใช้ AI เก่งแต่ถ้าต้องทำเองเขาทำไม่ได้: ขอให้รักษาไว้ แล้วใช้ AI ดันศักยภาพตัวเองให้สูงขึ้นไปอีก",
        disciplineAdviceHead: "🎓 คำแนะนำสำหรับสายของคุณ",
        disciplineAdviceIntro: "อิงจากกลุ่มสาขาที่คุณเลือก และรูปแบบการใช้ AI ที่ออกมา",
        verdictHead: "บทบาทกับสไตล์การใช้ AI ของคุณ",
        verdictRoleLineTpl: "บทบาท: {role} · เป้าหมาย ระดับ {ceiling}",
        verdictBelowFloor: "เริ่มจากสำรวจพื้นฐานก่อน — เส้นทางข้างหน้าจะเดินสบายขึ้น",
        verdictOnTrack: "อยู่ในเส้นทางที่ดี ขยับอีกนิดให้แข็งแรง",
        verdictRoleFit: "ทักษะของคุณพอดีกับบทบาทแล้ว",
        verdictAboveCeiling: "ทักษะคุณเกินที่บทบาทต้องการ ดูทางต่อด้านล่าง",
        stretchHead: "🚀 มีโอกาสน่าสนุกรออยู่",
        stretchSubTpl: "บทบาทปัจจุบันต้องการระดับ {ceiling} · คุณไปถึงระดับ {placement} แล้ว",
        stretchIntro: "ทักษะของคุณไปไกลกว่าบทบาทปัจจุบันแล้ว มีสองทางต่อที่ทั้งคู่น่าสนุก ลองดูว่าทางไหนตรงใจที่สุด",
        stretchPathAHead: "ทางที่ A · เป็น AI Champion ในงานเดิม",
        stretchPathBHead: "ทางที่ B · ขยับสายงานให้ตรงสกิล",
        stretchNote: "ทั้งคู่ไม่ผิด — เลือกเส้นทางที่ตรงกับใจคุณได้เลย",
        roleAgnosticNote: "คุณข้ามคำถามเรื่องบทบาท — ผลแสดงเฉพาะภาพรวมทักษะ",
        roleSkippedShort: "ไม่ระบุบทบาท",
        nextMilestoneTpl: "เป้าหมายถัดไป: ระดับ {n} · {name}",
        nextMilestoneDone: "คุณไปถึงเพดานของแบบประเมินนี้แล้ว — ระดับ 4–5 เป็นทักษะเฉพาะทาง ดูแนวทางต่อในส่วน 'เกี่ยวกับ framework'",
        verdictAtCapTpl: "เป้าหมายของบทบาทเป็นทักษะเฉพาะทาง (ระดับ {target})",
        assessmentScopeNote: "แบบประเมินนี้ออกแบบสำหรับผู้ใช้ทั่วไป ครอบคลุมระดับ 1–3 ของ framework · ระดับ 4 (ผู้เชี่ยวชาญขั้นสูง) อยู่นอกกลุ่มเป้าหมายของแบบประเมิน",
        partnershipSectionPill: "ส่วนที่ 2 · ความสัมพันธ์กับ AI",
        partnershipIntroBanner: "แบบประเมินมี 2 ส่วน · ส่วนที่ 1 ทักษะ (12 ข้อ) · ส่วนที่ 2 ความสัมพันธ์กับ AI (12 ข้อ)",
        partnershipHead: "ภาพรวมความสัมพันธ์ของคุณกับ AI",
        partnershipSub: "ทักษะ = \"คุณใช้ AI ทำอะไรได้\" · ความสัมพันธ์ = \"คุณใช้ AI ยังไง\"",
        partnershipStrengthLabel: "💪 จุดแข็ง",
        partnershipGapLabel: "🎯 จุดที่ฉุด",
        resultDisclaimer: "ตัวเลขพวกนี้ไม่ใช่คะแนนสอบ — มันสะท้อนสิ่งที่คุณตอบเกี่ยวกับตัวเองในวันนี้ ใช้เป็นจุดตั้งต้นในการมองตัวเอง ไม่ใช่เป้าที่ต้องไล่ให้สูงขึ้น ถ้าทำใหม่แล้วตอบตรงกว่าเดิมจนตัวเลขลดลง นั่นแปลว่าแบบประเมินกำลังทำงาน",
        insightHead: "สรุปของคุณอย่างย่อ",
        demoBanner: "🔍 โหมดตัวอย่าง — ผลด้านล่างเป็นข้อมูลจำลอง ไม่ใช่ผลจริง",
        firstStepLabel: "👉 ก้าวแรก",
        roleInsightLabel: "🏁 บทบาท",
        roleInsightLink: "หลักคิดเพดาน →",
        workshopsAllLink: "ดูรายการ workshop ทั้งหมด พร้อมรายละเอียด →",
        learnMoreHead: "📚 เรียนรู้เพิ่มเติม",
        learnMoreSub: "เจาะลึกหลักคิดเบื้องหลังแบบประเมินนี้",
        learnLinkFw: "แหล่งที่มา framework",
        learnLinkFwSub: "3 กรอบแนวคิด + นโยบาย Gen AI ของ มช.",
        learnLinkRoles: "เพดานทักษะรายสายงาน",
        learnLinkRolesSub: "หลักคิด floor/ceiling ของ 9 สายงาน",
        learnLinkWs: "รายการ workshop",
        learnLinkWsSub: "ทุกหัวข้อทั้งแทร็กทักษะและสไตล์",
        learnLinkTags: "คู่มือแท็กองค์กร",
        learnLinkTagsSub: "สำหรับผู้สอน / ทีม L&D",
        learnLinkAiT: "ความร่วมมือมนุษย์ × AI",
        learnLinkAiTSub: "ความโปร่งใสการใช้ AI สร้างระบบนี้",
        learnLinkCc: "สัญญาอนุญาต CC BY-NC-SA 4.0",
        learnLinkCcSub: "เงื่อนไขการนำระบบไปใช้ต่อ",
        accScoresHead: "📊 คะแนนละเอียดของคุณ",
        accNextHead: "🧭 เส้นทางถัดไปแบบเต็ม",
        accTagsHead: "🏷️ แท็กสำหรับองค์กร / ผู้สอน",
        partnershipVarianceHigh: "คุณมีจุดเด่นและจุดอ่อนชัดเจน — โฟกัสตัวฉุดก่อนจะทำให้ภาพรวมขยับเร็วที่สุด",
        partnershipCompositeLabel: "คะแนนรวม Partnership",
        partnershipMini: "แถบยาวกว่า = คุณตรวจสอบ ตั้งคำถาม และนำ AI ได้ดีกว่า · เป้าหมาย: สมดุลกับทักษะ",
        quadrantHead: "รูปแบบการใช้ AI ของคุณ",
        quadrantSubTpl: "ทักษะ: {skill} · ความสัมพันธ์: {p}%",
        skillLevelTpl: "ระดับ {n}",
        skillLevelP0: "กำลังเริ่มสำรวจ",
        quadrantsExplainedHead: "4 รูปแบบการใช้ AI",
        quadrantsExplainedSub: "เกิดจากการตัดกันของ \"ทักษะ AI\" และ \"ความสัมพันธ์กับ AI\" — มาลองดูคนแต่ละแบบ",
        quadrantTapHint: "แตะการ์ดเพื่อดูรายละเอียดของแต่ละแบบ",
        quadrantAxisSkill: "ทักษะ AI",
        quadrantAxisPartnership: "ความสัมพันธ์กับ AI",
        quadrantPersonaWhoHead: "คนแบบนี้คือใคร",
        quadrantStrengthsHead: "จุดแข็ง",
        quadrantWatchoutsHead: "สิ่งที่ต้องระวัง",
        quadrantWorkshopsHead: "Workshop ที่เหมาะ",
        quadrantsExplainedResultToggle: "⚖️ เปรียบเทียบทั้ง 4 รูปแบบ",
        dimensionsHead: "แบบประเมินมอง 3 มิติ",
        dimensionsBrief: "บทบาทงาน · ทักษะ AI · ความสัมพันธ์กับ AI — แตะเพื่อดูรายละเอียด",
        dimRoleName: "บทบาทงาน",
        dimRoleDesc: "เลือก 1 จาก 9 บทบาท เพื่อรับคำแนะนำตรงงาน",
        dimSkillName: "ทักษะการใช้ AI",
        dimSkillDesc: "3 ระดับ: เข้าใจ → ใช้ → สร้าง",
        dimPartnershipName: "ความสัมพันธ์กับ AI",
        dimPartnershipDesc: "6 มิติ Human-in-the-Loop: ตรวจสอบ · เลือกใช้ · ทักษะมนุษย์ · นำ AI · เรียนรู้ · ปกป้องข้อมูล",
        dimensionsNote: "ผลลัพธ์สังเคราะห์เป็น 1 ใน 4 รูปแบบการใช้ AI (ดูด้านล่าง)",
        tagBlockHead: "แท็กสรุปสำหรับองค์กร",
        tagBlockHint: "(คัดลอกหรือถ่ายภาพไปรวมเป็นภาพรวมทีม — ทีม L&D ใช้วิเคราะห์ภาพรวมได้)",
        tagGuideCTA: "อยากได้คำแนะนำการใช้แท็กสำหรับองค์กร? ลงทะเบียนได้ที่ <a href=\"https://cmu.to/AILit-Tag\" target=\"_blank\" rel=\"noopener noreferrer\">https://cmu.to/AILit-Tag</a>",
        partnershipAboutNote: "แกน 'ความสัมพันธ์กับ AI' เป็นการต่อยอดจาก framework ต้นฉบับ — ผู้พัฒนาเพิ่มเข้ามาเพื่อสะท้อนแนวคิด Human-in-the-Loop ที่สำคัญกับการใช้ AI อย่างมีสติ",
        rHeroQuadrant: "รูปแบบการใช้ AI ของคุณ",
        rSkillSummaryHead: "ระดับทักษะ AI สะสมของคุณ",
        orgGuideToggle: "วิธีใช้แท็กสำหรับองค์กร (สำหรับ L&D / ผู้นำทีม)",
        orgGuideIntro: "แท็กสรุปด้านบนคือผลของแต่ละคน เพื่อให้ทีม L&D / ผู้นำองค์กรนำไปวิเคราะห์ภาพรวมและออกแบบ workshop ตามจุดอ่อนของกลุ่ม",
        orgGuideTagsHead: "ความหมายของแท็ก",
        orgGuideTagsBody: [
          "#L{n}-{name} = ระดับทักษะสะสม (L0 = เริ่มต้น, L1–L3 = ระดับที่ผ่านแล้ว)",
          "#P{n} = คะแนน Partnership composite 0–100",
          "#Q-{key} = quadrant: novice / coach / autopilot / director",
          "#L{n}:{pct} = คะแนนรายระดับทักษะ 0–100 (เช่น #L1:85 #L2:70 #L3:40)",
          "#{key}:{pct} = คะแนนราย subtrait 0–100 (verify / restraint / human_lead / direction / learning / privacy)",
          "#weak:{key} = subtrait ที่ได้ < 50% (verify / restraint / human_lead / direction / learning / privacy)",
          "#role-{code} = บทบาทที่ผู้เข้าอบรมเลือก (ถ้าไม่ข้าม)"
        ],
        orgGuideCollectHead: "วิธีเก็บข้อมูล",
        orgGuideCollectBody: "ขอให้ผู้เข้าอบรมคัดลอกหรือถ่าย screenshot บล็อกแท็ก แล้วส่งเข้า Google Sheet / Excel ของทีม — ใช้รหัสนามแฝงแทนชื่อจริงได้เพื่อรักษาความเป็นส่วนตัว",
        orgGuideColumnsHead: "คอลัมน์ที่แนะนำใน spreadsheet",
        orgGuideColumnsBody: "ผู้เข้าอบรม · ระดับทักษะ · L1% · L2% · L3% · Partnership % · verify% · restraint% · human_lead% · direction% · learning% · privacy% · Quadrant · weak1 · weak2 · บทบาท",
        orgGuidePatternsHead: "ตัวอย่างการอ่าน pattern ของทีม",
        orgGuidePatternsBody: [
          "Q-autopilot เยอะ → workshop เรื่อง critical AI use + verification (ทีมใช้ AI คล่องแต่ขาดสติ)",
          "#weak:verify ซ้ำ → workshop fact-check / hallucination awareness",
          "#weak:human_lead เยอะ → workshop empathy / creative thinking / human-centered design",
          "#weak:restraint เยอะ → workshop AI mindfulness / รู้จักเลือกใช้ AI",
          "#weak:direction เยอะ → workshop prompt engineering / นำ AI",
          "#weak:learning เยอะ → workshop การใช้ AI เพื่อการเรียนรู้ (ใช้เป็นติวเตอร์ ไม่ใช่ทำแทน) — สำคัญมากในบริบทการเรียน",
          "#weak:privacy เยอะ → workshop data privacy / นโยบายการใช้ Gen AI ขององค์กร (ข้อมูลไหนห้ามป้อนให้ AI)",
          "L0/L1 เยอะ → workshop พื้นฐาน AI literacy + responsible AI use",
          "ค่าเฉลี่ยคะแนนรายด้านของกลุ่ม (เช่น verify เฉลี่ย < 60) → จัด workshop ด้านนั้นได้เลย แม้ยังไม่มีใครติด #weak — ใช้คะแนนละเอียดจัดลำดับความสำคัญและวัดผลก่อน-หลังการอบรม",
          "L2% สูงแต่ L3% ต่ำทั้งกลุ่ม → กลุ่มพร้อมยกระดับจาก 'ผู้ใช้' เป็น 'ผู้สร้าง' — จัด workshop no-code automation / AI API"
        ],
        connectBanner: "โหมดเชื่อมต่อ: เมื่อดูผลเสร็จแล้ว อย่าลืมกดปุ่ม 'ส่งผลให้ผู้สอน' ท้ายหน้าผลลัพธ์",
        connectSignedInTpl: "· เข้าสู่ระบบผ่าน Canvas: {email}",
        gatePill: "เข้าผ่าน Canvas",
        gateHead: "กรุณาเข้าผ่าน Canvas",
        gateBody: "แบบประเมินรอบนี้เปิดเฉพาะผู้ที่ได้รับสิทธิ์ในรายวิชา กรุณาเปิดลิงก์แบบประเมินจากหน้ารายวิชาใน Canvas เพื่อยืนยันตัวตนก่อนเริ่มทำ",
        studentIdLabel: "รหัสนักศึกษา (ใช้ส่งผลให้ผู้สอน)",
        studentIdPlaceholder: "รหัสนักศึกษา",
        sendStatusSending: "กำลังส่งผลให้ผู้สอน…",
        sendStatusDone: "ส่งผลให้ผู้สอนเรียบร้อยแล้ว ✓",
        sendStatusFail: "ส่งผลไม่สำเร็จ — ตรวจสอบอินเทอร์เน็ตแล้วลองส่งอีกครั้ง",
        sendRetryBtn: "ส่งอีกครั้ง",
        submitCtaHint: "ขั้นตอนสำคัญ: ดูผลเสร็จแล้ว กดปุ่มนี้เพื่อส่งผลให้ผู้สอน",
        submitCtaBtn: "📤 ส่งผลให้ผู้สอน",
        receiptHead: "✅ ส่งผลให้ผู้สอนเรียบร้อยแล้ว",
        receiptWhoLabel: "ผู้ส่ง",
        receiptTimeLabel: "เวลา",
        receiptCodeLabel: "รหัสยืนยัน",
        receiptGraded: "✓ บันทึกคะแนนใน Canvas ให้อัตโนมัติแล้ว",
        receiptHint: "📸 แคปหน้าจอกล่องนี้เก็บไว้เป็นหลักฐานการส่งของคุณ",
        receiptDownloadBtn: "💾 ดาวน์โหลดภาพยืนยัน",
        feedbackBtn: "ทำแบบประเมินความพึงพอใจ →",
        feedbackModalHead: "ส่งผลเรียบร้อย! เหลือขั้นตอนสุดท้าย 🎉",
        feedbackModalBody: "ช่วยตอบแบบประเมินความพึงพอใจสั้น ๆ ประมาณ 2 นาที (เปิดในหน้านี้เลย ทำเสร็จแล้วกลับมาดูผลและดาวน์โหลดภาพต่อได้ ผลของคุณไม่หายไปไหน)",
        surveyBackBtn: "✓ เสร็จแล้ว กลับไปหน้าผล",
        surveyOpenNewTab: "เปิดในแท็บใหม่ ↗",
        feedbackModalGo: "ทำแบบประเมินความพึงพอใจ →",
        feedbackModalLater: "ขอดูผลก่อน",
        partnershipBalancedTpl: "โปรไฟล์ของคุณสมดุลทุกด้าน — ทุกด้านได้ {p}% เท่ากัน รักษาสมดุลนี้ไว้แล้วยกระดับทุกด้านไปพร้อมกัน"
      },
      en: {
        documentTitle: "AI Literacy & Partnership Profile — Self-Assessment",
        badgeSelfTest: "AI Literacy Assessment — Skill × Partnership",
        badgeBrand: "Your AI style",
        heroTitle: "What kind of <span class=\"hl\">AI</span><br>user are you?",
        lead: "A self-assessment that looks at three dimensions together — <b>your role, your AI skills, and how you partner with AI</b>. Answer 30–36 questions to get a personalized result with next steps.",
        credit: "Five-level structure adapted from the LinkedIn AI Upskilling Framework · designed as a self-assessment tool.",
        aboutHead: "About the framework",
        aboutSub: "The 4 levels — at a glance",
        aboutBody: "This framework groups AI skills into <b>4 levels</b>, adapted from the <b>LinkedIn AI Upskilling Framework</b> (which has 5 levels) by merging the original Levels 4–5 into a single “Advanced Specialist” tier. This assessment covers Levels 1–3, and adds an <b>AI Partnership</b> axis (Human-in-the-Loop mindset) to capture how you work with AI — not just what you can do with it, but your style of verifying, questioning, and leading AI.",
        linkedinLinkText: "Read about the LinkedIn AI Upskilling Framework →",
        aboutAuthor: "© 2026 <b>Student Talent Development</b><br>Faculty of Engineering, Chiang Mai University",
        startBtn: "Start the assessment →",
        metaNote: "30–36 questions · 2 parts · no right or wrong · answer honestly",
        nameStepPill: "Before we start",
        nameHead: "What's your name? (optional)",
        nameSub: "Add your name so the result and downloadable image show it. You can skip this if you prefer.",
        namePlaceholder: "Your name",
        namePrivacy: "Your name stays in your browser only · never sent anywhere",
        nameSkip: "Skip",
        nameContinue: "Continue →",
        backBtn: "← Back",
        rHero: "Where you are right now",
        profileHead: "Your AI skills",
        profileMini: "Longer bars = areas you feel more fluent in · your overall stage builds up from the foundation, one step at a time.",
        nextSubSkillLabel: "Grow your AI skill",
        nextSubPartnershipLabel: "Grow your AI partnership style",
        workshopsLabel: "🛠 Workshops recommended for you",
        copyBtn: "Copy summary",
        copyDone: "Copied ✓",
        printBtn: "Save / Print (PDF)",
        restartBtn: "Restart assessment",
        mfbHead: "Tell us what you think — optional, takes 15 seconds",
        mfbHeadConnect: "Before sending your result, please answer 3 quick questions (required)",
        mfbGateHint: "Rate all three questions to unlock the send button",
        mfbQ1: "Rate this assessment",
        mfbQ2: "How well did the result fit you?",
        mfbQ3: "How useful were the recommendations?",
        mfbQ4: "Anything else you would like to tell us? (optional)",
        mfbNotePh: "A sentence or two is plenty — a suggestion, a gripe, anything to fix",
        mfbSend: "Send feedback",
        mfbPrivacy: "Sent anonymously — only the answers in this box plus your result pattern/language",
        mfbPrivacyConnect: "This feedback is sent anonymously, separately from the result your instructor receives",
        mfbThanks: "Thank you 🙏 your feedback helps this system improve",
        foot: "Based on the LinkedIn AI Upskilling Framework (5 levels) · self-assessment tool",
        footerCopy: "© 2026 Student Talent Development · Faculty of Engineering, Chiang Mai University",
        p0Name: "Just starting your AI journey",
        p0Blurb: "Welcome to your AI journey — we'll start by building a basic understanding together, then grow step by step.",
        p0NextH: "First step — building AI foundations",
        p0Next: [
          "Understand what Generative AI is, where it works well, and what its limits and risks are",
          "Learn responsible AI practices",
          "Try AI tools on small everyday tasks to build familiarity"
        ],
        copyHeader: "AI Literacy & Partnership Profile — Results",
        copyProfileHead: "Level profile:",
        copyWorkshopsHead: "Recommended workshops:",
        downloadBtn: "Download as image",
        downloading: "Generating image…",
        iosHint: "Long-press the image and choose \"Save to Photos\" to keep it on your device",
        modalClose: "Close",
        imgAlt: "Your AI Literacy & Partnership profile",
        imgBrand: "AI LITERACY & PARTNERSHIP PROFILE",
        imgOverall: "YOUR AI PARTNERSHIP STYLE",
        imgP0Name: "JUST STARTING THE JOURNEY",
        imgPartnershipHead: "Your AI partnership profile",
        imgPartnershipCompositeTpl: "Overall: {p}%",
        imgChartSkillHead: "AI Skill",
        imgChartPartnershipHead: "AI Partnership",
        imgWorkshopsHead: "Recommended Workshops",
        imgDisclaimer: "A self-report snapshot — a guide, not a test score",
        imgLicense: "Licensed under CC BY-NC-SA 4.0",
        imgFrameworkSource: "Based on the LinkedIn AI Upskilling Framework",
        roleStepPill: "Pick a role",
        roleHead: "What's your primary role?",
        roleSub: "Pick the closest match so we can tailor advice to your work. You can skip this if you prefer.",
        roleSkip: "Skip / prefer not to say",
        roleGuideLink: "How are each role's skill ceilings set? →",
        disciplineStepPill: "Pick your field",
        disciplineHead: "Which field are you studying?",
        disciplineSub: "Pick one so the examples during the assessment and the guidance at the end match your field. The six groups cover every faculty — pick the closest.",
        disciplineInsightLabel: "🎓 Your field",
        qExampleTag: "EXAMPLE SITUATION",
        fieldPill: "A situation in your field",
        fieldCheckHead: "📌 Situations in your field of study",
        fieldCheckScoreLabel: "Field scenario score",
        evidenceLine: "A 2025 study of 319 workers found that more confidence in AI went with less critical thinking — while people confident in their own ability thought harder, not less",
        evidenceLink: "See the evidence →",
        partnershipGroupHead: "Your partnership with AI — 3 groups",
        partnershipDetailToggle: "See each dimension",
        partnershipDetailNote: "The other three (standing on your own, willingness to struggle, trusting your own judgment) are in the card above",
        receiptReflectHint: "Next: hand in your reflection, using the code above",
        outsideViewHead: "🪞 How other people see you",
        outsideViewIntro: "When other people look at you",
        outsideExamLabel: "In an exam",
        outsideTeacherLabel: "To your teachers",
        outsideHiringLabel: "When you apply for work",
        reflectHead: "✍️ Your reflection questions",
        reflectIntro: "These come from your own result — answer them in your reflection task",
        reflectCopy: "Copy the questions",
        reflectCopied: "Copied ✓",
        reflectOpen: "Open the reflection form →",
        withoutAiHead: "🎓 If AI were switched off today",
        withoutAiIntro: "These three say what would still be yours when the tools are gone — in an exam room, for instance",
        withoutAiLow: "Right now most of your work moves because AI is moving it. In an exam, or anywhere the tools are not available, you will have less to draw on than your grades suggest. Pick one thing you genuinely need to be good at and do it end to end without opening AI.",
        withoutAiMid: "You can still do plenty yourself, but parts of your work lean on AI enough that you are not sure. Test it: take something you just handed in and explain it, or redo it, with AI closed. Wherever you get stuck is what needs practice.",
        withoutAiHigh: "You use AI and the skill is still genuinely yours. That is the difference between you and someone who is good with AI but cannot work without it — keep it, and use AI to push your own ceiling higher.",
        disciplineAdviceHead: "🎓 Guidance for your field",
        disciplineAdviceIntro: "Based on the field you picked and the AI-use pattern in your result",
        verdictHead: "How AI fits your role",
        verdictRoleLineTpl: "Role: {role} · target Level {ceiling}",
        verdictBelowFloor: "Start by exploring the foundations — the path ahead gets easier",
        verdictOnTrack: "You're on a good path — stretch a bit more to feel solid",
        verdictRoleFit: "Your skills fit your role",
        verdictAboveCeiling: "Your skills exceed your role — see the paths below",
        stretchHead: "🚀 An exciting opportunity ahead",
        stretchSubTpl: "Your role usually lands at Level {ceiling} · You've reached Level {placement}",
        stretchIntro: "Your skills have gone beyond what your current role asks for. Here are two fun directions — see which one feels right for you.",
        stretchPathAHead: "Path A · Become an AI champion in your role",
        stretchPathBHead: "Path B · Pivot or expand scope",
        stretchNote: "Neither is wrong — pick the path that resonates with you",
        roleAgnosticNote: "You skipped the role question — results show your overall skill picture only",
        roleSkippedShort: "Role not specified",
        nextMilestoneTpl: "Next milestone: Level {n} · {name}",
        nextMilestoneDone: "You've reached the top of this assessment — Levels 4–5 are deeper specializations described in 'About the framework'",
        verdictAtCapTpl: "Your role targets a deeper specialization (Level {target})",
        assessmentScopeNote: "This assessment is designed for everyday users and covers Levels 1–3 of the framework · Level 4 (Advanced Specialist) is outside the assessment's target audience",
        partnershipSectionPill: "Part 2 · AI Partnership",
        partnershipIntroBanner: "Assessment has 2 parts · Part 1 Skill (12 questions) · Part 2 AI Partnership (12 questions)",
        partnershipHead: "Your AI partnership profile",
        partnershipSub: "Skill = \"what you can do with AI\" · Partnership = \"how you use AI\"",
        partnershipStrengthLabel: "💪 Strength",
        partnershipGapLabel: "🎯 Drag point",
        resultDisclaimer: "These numbers are not a test score — they reflect what you said about yourself today. Use them as a place to start looking at yourself, not a target to push up: if you take it again, answer more honestly and the number drops, that is the assessment working.",
        insightHead: "Your quick summary",
        demoBanner: "🔍 Demo mode — the result below is simulated, not a real assessment",
        firstStepLabel: "👉 First step",
        roleInsightLabel: "🏁 Role",
        roleInsightLink: "How ceilings work →",
        workshopsAllLink: "See the full workshop catalog with details →",
        learnMoreHead: "📚 Learn more",
        learnMoreSub: "Dig into the thinking behind this assessment",
        learnLinkFw: "Framework sources",
        learnLinkFwSub: "3 frameworks + CMU's Gen AI policy",
        learnLinkRoles: "Per-role skill ceilings",
        learnLinkRolesSub: "The floor/ceiling logic for 9 roles",
        learnLinkWs: "Workshop catalog",
        learnLinkWsSub: "Every topic across both tracks",
        learnLinkTags: "Org tag guide",
        learnLinkTagsSub: "For instructors / L&D teams",
        learnLinkAiT: "Human × AI collaboration",
        learnLinkAiTSub: "How AI was used to build this system",
        learnLinkCc: "CC BY-NC-SA 4.0 license",
        learnLinkCcSub: "Terms for reusing this system",
        accScoresHead: "📊 Your detailed scores",
        accNextHead: "🧭 Your full next-step path",
        accTagsHead: "🏷️ Tags for organizations / instructors",
        partnershipVarianceHigh: "Your profile is uneven — focusing on the gap first will lift the overall pattern fastest",
        partnershipCompositeLabel: "Partnership composite",
        partnershipMini: "Longer bars = stronger at verifying, questioning, and leading AI · aim for balance with skill",
        quadrantHead: "Your AI partnership pattern",
        quadrantSubTpl: "Skill: {skill} · Partnership: {p}%",
        skillLevelTpl: "Level {n}",
        skillLevelP0: "Starting to explore",
        quadrantsExplainedHead: "The 4 patterns of AI use",
        quadrantsExplainedSub: "Formed by the intersection of \"AI skill\" and \"AI partnership\" — meet each pattern",
        quadrantTapHint: "Tap a card to see its details",
        quadrantAxisSkill: "AI skill",
        quadrantAxisPartnership: "AI partnership",
        quadrantPersonaWhoHead: "Who they are",
        quadrantStrengthsHead: "Strengths",
        quadrantWatchoutsHead: "Watchouts",
        quadrantWorkshopsHead: "Suggested workshops",
        quadrantsExplainedResultToggle: "⚖️ Compare all 4 patterns",
        dimensionsHead: "We measure 3 dimensions",
        dimensionsBrief: "Job role · AI skill · AI partnership — tap for details",
        dimRoleName: "Your role",
        dimRoleDesc: "Pick 1 from 9 roles for tailored guidance",
        dimSkillName: "AI skills",
        dimSkillDesc: "3 levels: Understand → Apply → Build",
        dimPartnershipName: "AI partnership",
        dimPartnershipDesc: "6 Human-in-the-Loop dimensions: verify · restraint · human-lead · direction · learning · privacy",
        dimensionsNote: "Results synthesize into 1 of 4 AI use patterns (see below)",
        tagBlockHead: "Summary tags for org leaders",
        tagBlockHint: "(copy or screenshot for cohort review — L&D teams can aggregate at the cohort level)",
        tagGuideCTA: "Want guidance on using these tags for your org? Register at <a href=\"https://cmu.to/AILit-Tag\" target=\"_blank\" rel=\"noopener noreferrer\">https://cmu.to/AILit-Tag</a>",
        partnershipAboutNote: "The 'AI Partnership' axis extends the original framework — added by the author to reflect the Human-in-the-Loop mindset essential to thoughtful AI use.",
        rHeroQuadrant: "Your AI partnership pattern",
        rSkillSummaryHead: "Your cumulative AI skill level",
        orgGuideToggle: "How orgs can use these tags (for L&D / team leads)",
        orgGuideIntro: "The tag block above summarizes each individual's result. L&D teams and org leaders can aggregate them to spot group patterns and design workshops targeted at the team's weakest areas.",
        orgGuideTagsHead: "What the tags mean",
        orgGuideTagsBody: [
          "#L{n}-{name} = cumulative skill level (L0 = starting, L1–L3 = passed levels)",
          "#P{n} = Partnership composite score 0–100",
          "#Q-{key} = quadrant: novice / coach / autopilot / director",
          "#L{n}:{pct} = per-level skill score 0–100 (e.g. #L1:85 #L2:70 #L3:40)",
          "#{key}:{pct} = per-subtrait score 0–100 (verify / restraint / human_lead / direction / learning / privacy)",
          "#weak:{key} = subtrait scoring < 50% (verify / restraint / human_lead / direction / learning / privacy)",
          "#role-{code} = the role the participant selected (if not skipped)"
        ],
        orgGuideCollectHead: "How to collect the data",
        orgGuideCollectBody: "Ask participants to copy or screenshot the tag block and submit it to a shared Google Sheet / Excel — pseudonyms can be used to preserve privacy.",
        orgGuideColumnsHead: "Suggested spreadsheet columns",
        orgGuideColumnsBody: "Participant · Skill level · L1% · L2% · L3% · Partnership % · verify% · restraint% · human_lead% · direction% · learning% · privacy% · Quadrant · weak1 · weak2 · Role",
        orgGuidePatternsHead: "Reading team-level patterns",
        orgGuidePatternsBody: [
          "Many Q-autopilot → workshop on critical AI use + verification (team uses AI fluently but lacks judgment)",
          "Repeated #weak:verify → workshop on fact-checking / hallucination awareness",
          "Many #weak:human_lead → workshop on empathy / creative thinking / human-centered design",
          "Many #weak:restraint → workshop on AI mindfulness / knowing when not to use AI",
          "Many #weak:direction → workshop on prompt engineering / leading AI",
          "Many #weak:learning → workshop on using AI to learn (tutor, not stand-in) — critical in study contexts",
          "Many #weak:privacy → workshop on data privacy / your org's Gen AI policy (what must never go into AI)",
          "Many L0/L1 → workshop on AI literacy foundations + responsible AI use",
          "Group averages per dimension (e.g. mean verify < 60) → run that workshop even before anyone hits #weak — use the detailed scores to prioritize and to measure pre/post training impact",
          "High L2% but low L3% across the group → the group is ready to move from 'user' to 'builder' — run no-code automation / AI API workshops"
        ],
        connectBanner: "Connected mode: after reviewing your results, remember to press 'Send results to instructor' at the bottom of the result page",
        connectSignedInTpl: "· Signed in via Canvas: {email}",
        gatePill: "Canvas access",
        gateHead: "Please open this from Canvas",
        gateBody: "This assessment is open to authorized course members only. Please open the assessment link from your Canvas course page to verify your identity first.",
        studentIdLabel: "Student ID (used to submit your results to your instructor)",
        studentIdPlaceholder: "Student ID",
        sendStatusSending: "Sending your results to your instructor…",
        sendStatusDone: "Results sent to your instructor ✓",
        sendStatusFail: "Sending failed — check your connection and try again",
        sendRetryBtn: "Send again",
        submitCtaHint: "Important: once you've reviewed your results, press this button to send them to your instructor",
        submitCtaBtn: "📤 Send results to instructor",
        receiptHead: "✅ Results sent to your instructor",
        receiptWhoLabel: "Sent by",
        receiptTimeLabel: "Time",
        receiptCodeLabel: "Confirmation code",
        receiptGraded: "✓ Your score was recorded in Canvas automatically",
        receiptHint: "📸 Screenshot this box and keep it as your proof of submission",
        receiptDownloadBtn: "💾 Download receipt image",
        feedbackBtn: "Give feedback →",
        feedbackModalHead: "Results sent! One last step 🎉",
        feedbackModalBody: "Please answer a short 2-minute satisfaction survey (it opens right here — when you finish you'll be back at your results, nothing is lost)",
        surveyBackBtn: "✓ Done — back to my results",
        surveyOpenNewTab: "Open in new tab ↗",
        feedbackModalGo: "Take the survey →",
        feedbackModalLater: "Let me see my results first",
        partnershipBalancedTpl: "Your profile is balanced — all 6 dimensions scored {p}%. Keep the balance and grow them together"
      }
    },
    levels: [
      {
        n: 1,
        assessable: true,
        name: {th: "เข้าใจพื้นฐาน AI", en: "Understanding"},
        short: {th: "ความรู้พื้นฐานที่ทุกคนควรมี", en: "Foundational knowledge everyone should have"},
        desc: {th: "รู้ว่า AI คืออะไร ทำอะไรได้/ไม่ได้ และใช้อย่างมีความรับผิดชอบ", en: "Know what AI is, what it can and can't do, and how to use it responsibly"},
        color: "#0E6E63",
        items: [
          {th: "เมื่อมีคนถามว่า AI อย่าง ChatGPT ทำงานอย่างไร ฉันอธิบายได้ว่ามันสร้างคำตอบจากรูปแบบในข้อมูล ไม่ได้ \"คิดหรือเข้าใจ\" แบบมนุษย์", en: "When someone asks how an AI like ChatGPT works, I can explain that it generates answers from patterns in data — it doesn't \"think\" or \"understand\" like a human", examples: {
              health: {th: "เพื่อนร่วมวอร์ดเจอ AI ตอบขนาดยาผิด ฉันอธิบายได้ว่าทำไมมันถึงตอบผิดแบบนั้น", en: "A ward-mate gets a wrong dose out of AI, and I can explain why that happens"},
              engtech: {th: "AI เขียนโค้ดเรียกฟังก์ชันที่ไม่มีอยู่จริง ฉันอธิบายได้ว่าทำไมมันถึงแต่งขึ้นมา", en: "AI writes code calling a function that doesn't exist, and I can explain why it invented one"},
              scienat: {th: "AI ให้ค่าคงที่ที่ดูถูกแต่ผิดมา ฉันอธิบายได้ว่าทำไมมันถึงมั่นใจทั้งที่ผิด", en: "AI gives a constant that looks right but isn't, and I can explain why it sounded so sure"},
              bizpol: {th: "AI อ้างเลขคดีที่ไม่มีอยู่จริง ฉันอธิบายให้เพื่อนในกลุ่มฟังได้ว่ามันมาจากไหน", en: "AI cites a case number that doesn't exist, and I can tell my group where it came from"},
              humsoc: {th: "AI อ้างงานวิจัยที่ตามหาต้นฉบับไม่เจอ ฉันอธิบายได้ว่าทำไมมันถึงแต่งชื่อขึ้นมา", en: "AI cites a study I can't trace, and I can explain why it made the title up"},
              artdes: {th: "ภาพที่ AI สร้างมีนิ้วเกินมา ฉันอธิบายได้ว่าทำไมโมเดลถึงวาดออกมาแบบนั้น", en: "An AI image comes out with extra fingers, and I can explain why the model draws that way"}
            }},
          {th: "เมื่อมีงานเข้ามา ฉันมักเลือกได้ว่างานไหนลองให้ AI ช่วยน่าจะได้ผลดี และงานไหนควรทำเอง", en: "When a task comes up, I can usually tell which ones to try with AI and which to handle myself", examples: {
              health: {th: "ได้เคสมาหนึ่งเคส ฉันให้ AI ช่วยสรุปงานวิจัยที่เกี่ยวข้อง แต่ประเมินผู้ป่วยเอง", en: "A case comes in: I let AI summarize the relevant papers, but I assess the patient myself"},
              engtech: {th: "เริ่มโปรเจกต์ใหม่ ฉันให้ AI ร่างโค้ดต้นแบบ แต่ออกแบบตรรกะหลักของระบบเอง", en: "Starting a project, I let AI draft prototype code but design the core logic myself"},
              scienat: {th: "จะเริ่มการทดลอง ฉันให้ AI ช่วยเขียนสคริปต์วิเคราะห์ แต่ออกแบบการทดลองเอง", en: "Before an experiment, I let AI write the analysis script but design the experiment myself"},
              bizpol: {th: "ประชุมจบ ฉันให้ AI ร่างสรุปให้ แต่ข้อเสนอเชิงนโยบายฉันคิดเอง", en: "A meeting ends: I let AI draft the notes, but the recommendation is mine"},
              humsoc: {th: "ก่อนลงพื้นที่ ฉันให้ AI ช่วยระดมประเด็นสัมภาษณ์ แต่ตีความคำให้การเอง", en: "Before fieldwork, I let AI brainstorm interview angles but interpret the testimony myself"},
              artdes: {th: "รับโจทย์ใหม่ ฉันให้ AI ช่วยหา reference แต่คอนเซ็ปต์ของงานฉันคิดเอง", en: "A new brief arrives: I let AI find references, but the concept is mine"}
            }},
          {th: "ฉันรู้ว่าฟีดโซเชียลและระบบแนะนำที่ใช้อยู่ทุกวันขับเคลื่อนด้วย AI ซึ่งเลือกและจัดลำดับสิ่งที่ฉันเห็น — และอาจสะท้อนอคติจากข้อมูลที่ใช้ฝึก", en: "I know the social feeds and recommendation systems I use daily are driven by AI that selects and ranks what I see — and can reflect biases in its training data", examples: {
              health: {th: "ฉันเลื่อนฟีดเจอคำแนะนำสุขภาพที่ดูน่าเชื่อ แล้วนึกได้ว่าอัลกอริทึมเลือกมาให้ ไม่ใช่หลักฐาน", en: "I scroll past convincing health advice and remember an algorithm chose it, not the evidence"},
              engtech: {th: "ฉันค้นวิธีแก้โค้ด แล้วนึกได้ว่าผลที่ขึ้นก่อนถูกจัดอันดับมา ไม่ได้แปลว่าดีที่สุด", en: "I search for a fix and remember the top result was ranked there, not proven best"},
              scienat: {th: "ฉันค้นงานวิจัย แล้วนึกได้ว่าเปเปอร์ที่ขึ้นก่อนไม่ได้แปลว่าเป็นงานที่ดีที่สุด", en: "I search for papers and remember the first hit is not the best paper"},
              bizpol: {th: "ฉันอ่านข่าวเศรษฐกิจในฟีด แล้วนึกได้ว่าเพื่อนอีกคนเห็นข่าวคนละชุดกับฉัน", en: "I read economic news in my feed and remember a classmate sees a different set entirely"},
              humsoc: {th: "ฉันเห็นประเด็นสังคมเดือดในฟีด แล้วนึกได้ว่ามันถูกคัดมาให้ฉันโดยเฉพาะ", en: "A social issue blows up in my feed and I remember it was selected for me specifically"},
              artdes: {th: "ฉันดูงานออกแบบในฟีดทุกวัน แล้วนึกได้ว่ามันกำลังหล่อหลอมรสนิยมฉันอยู่", en: "I scroll design work every day and notice it is quietly shaping my taste"}
            }},
          {th: "ก่อนจะวางข้อมูลงานหรือข้อมูลส่วนตัวลงในแชต AI ฉันมักหยุดคิดก่อนว่าอะไรแชร์ได้หรือไม่ได้", en: "Before pasting work or personal information into an AI chat, I tend to pause and consider what is and isn't OK to share", examples: {
              health: {th: "ก่อนวางเคสจากการฝึกปฏิบัติลงแชต ฉันหยุดคิดว่าตัดชื่อแล้วก็ยังอ่อนไหวอยู่ดี", en: "Before pasting a case from my rotation, I stop: even de-identified it is still sensitive"},
              engtech: {th: "ก่อนวางไฟล์ตั้งค่าของที่ฝึกงาน ฉันหยุดดูว่ามีคีย์ API ติดมาด้วยหรือเปล่า", en: "Before pasting a config file from my internship, I stop to check for API keys"},
              scienat: {th: "ก่อนวางข้อมูลดิบของแล็บลงแชต ฉันหยุดคิดว่ามันยังไม่ตีพิมพ์", en: "Before pasting raw lab data into a chat, I stop: it hasn't been published yet"},
              bizpol: {th: "ก่อนวางงบการเงินของบริษัทที่ฝึกงาน ฉันหยุดคิดว่านี่เป็นข้อมูลภายใน", en: "Before pasting my internship's financials, I stop: this is internal"},
              humsoc: {th: "ก่อนวางบทถอดเทปสัมภาษณ์ ฉันหยุดคิดว่าในนั้นมีคนจริงที่ระบุตัวได้", en: "Before pasting an interview transcript, I stop: real, identifiable people are in it"},
              artdes: {th: "ก่อนอัปไฟล์งานของลูกค้า ฉันหยุดคิดว่ามันยังไม่เปิดตัว", en: "Before uploading a client's files, I stop: it hasn't launched yet"}
            }}
        ],
        blurb: {th: "คุณมีพื้นฐานความเข้าใจ AI ที่ดี รู้ว่า AI ทำอะไรได้และมีข้อจำกัดอย่างไร พร้อมก้าวสู่การลงมือใช้จริง", en: "You have a solid foundation in AI — you know what it can do and where its limits lie, and you're ready to start applying it."},
        nextH: {th: "พัฒนาสู่ระดับ 2 — นำ AI ไปใช้จริง", en: "Grow into Level 2 — Applying AI"},
        next: [
          {th: "เริ่มใช้เครื่องมือ AI (ChatGPT / Claude / Copilot / Gemini) กับงานจริงสัปดาห์ละ 1–2 อย่าง", en: "Start using AI tools (ChatGPT / Claude / Copilot / Gemini) on real tasks 1–2 times a week"},
          {th: "ฝึกเขียน prompt ให้ชัดเจน ระบุบริบท บทบาท และรูปแบบผลลัพธ์ที่ต้องการ", en: "Practice writing clear prompts that specify context, role, and the output format you want"},
          {th: "สร้างนิสัยตรวจสอบ (verify) ผลลัพธ์ของ AI ก่อนนำไปใช้ทุกครั้ง", en: "Build the habit of verifying AI output every time before you use it"}
        ],
        workshops: [
          {th: "พื้นฐาน AI สำหรับทุกคน", en: "AI Foundations for Everyone"},
          {th: "การใช้ AI อย่างมีความรับผิดชอบ", en: "Responsible AI Practices"},
          {th: "Prompt พื้นฐานในชีวิตประจำวัน", en: "Everyday Prompting Basics"}
        ]
      },
      {
        n: 2,
        assessable: true,
        name: {th: "นำ AI ไปใช้ในงานประจำวัน", en: "Applying"},
        short: {th: "ใช้เครื่องมือ AI เพิ่มประสิทธิภาพงาน", en: "Use AI tools to boost everyday work"},
        desc: {th: "ใช้ AI ช่วยร่าง สรุป ระดมความคิด วิเคราะห์ และเขียน prompt ได้ดี", en: "Use AI to draft, summarize, brainstorm, analyze, and write effective prompts"},
        color: "#15827A",
        items: [
          {th: "เมื่อคำตอบแรกจาก AI ยังไม่ตรงใจ ฉันมักปรับ prompt (เพิ่มบริบท บทบาท ตัวอย่าง) แล้วลองใหม่จนได้ผลดีขึ้น", en: "When AI's first answer isn't quite right, I usually adjust my prompt (add context, role, examples) and try again until it improves", examples: {
              health: {th: "คำตอบแรกกว้างเกินไป ฉันเพิ่มว่าเป็นผู้ป่วยกลุ่มไหน แล้วถามใหม่", en: "The first answer is too general, so I name the patient group and ask again"},
              engtech: {th: "คำตอบแรกแก้บั๊กไม่ได้ ฉันแปะ error จริงกับเวอร์ชันไลบรารีไปด้วย แล้วถามใหม่", en: "The first answer doesn't fix the bug, so I paste the real error and library version and ask again"},
              scienat: {th: "คำตอบแรกใช้กับข้อมูลฉันไม่ได้ ฉันบอกชนิดข้อมูลและสมมติฐานที่ใช้ แล้วถามใหม่", en: "The first answer doesn't fit my data, so I state the data type and assumptions and ask again"},
              bizpol: {th: "คำตอบแรกไม่ตรงบริบทไทย ฉันบอกกรอบกฎหมายที่ใช้จริง แล้วถามใหม่", en: "The first answer misses the Thai context, so I name the legal framework and ask again"},
              humsoc: {th: "คำตอบแรกตื้นเกินไป ฉันบอกกรอบทฤษฎีและกลุ่มผู้อ่าน แล้วถามใหม่", en: "The first answer is too shallow, so I name the theoretical frame and the audience and ask again"},
              artdes: {th: "ภาพแรกไม่ตรงโจทย์ ฉันบอกสไตล์ สัดส่วน และข้อจำกัดของวัสดุ แล้วลองใหม่", en: "The first image misses the brief, so I name the style, proportions and material limits and try again"}
            }},
          {th: "ในเดือนที่ผ่านมา ฉันใช้ AI ช่วยงานหลายแบบ เช่น ร่างอีเมล สรุปเอกสารยาว ๆ ระดมไอเดีย หรือช่วยวิเคราะห์ข้อมูล", en: "In the past month, I've used AI for several different things — drafting emails, summarizing long documents, brainstorming, or analyzing data", examples: {
              health: {th: "เดือนนี้ฉันใช้ AI สรุปเปเปอร์ ทำสไลด์ journal club และซ้อมตอบคำถามก่อนสอบ", en: "This month I used AI to summarize papers, build journal-club slides and rehearse exam questions"},
              engtech: {th: "เดือนนี้ฉันใช้ AI ดีบักโค้ด เขียนสคริปต์ และร่างเอกสารของโปรเจกต์", en: "This month I used AI to debug code, write scripts and draft project documentation"},
              scienat: {th: "เดือนนี้ฉันใช้ AI สรุปงานวิจัย เขียนสคริปต์วิเคราะห์ และร่างรายงานแล็บ", en: "This month I used AI to summarize studies, write analysis scripts and draft lab reports"},
              bizpol: {th: "เดือนนี้ฉันใช้ AI สรุปเคส ทำสไลด์นำเสนอ และร่างบทวิเคราะห์ตลาด", en: "This month I used AI to summarize cases, build slides and draft a market brief"},
              humsoc: {th: "เดือนนี้ฉันใช้ AI ร่างแนวคำถามสัมภาษณ์ สรุปเอกสารชั้นต้น และทำสไลด์นำเสนอ", en: "This month I used AI to draft interview guides, summarize primary sources and build slides"},
              artdes: {th: "เดือนนี้ฉันใช้ AI ทำ mood board ร่างคำอธิบายผลงาน และลองหลายแนวทางออกแบบ", en: "This month I used AI for mood boards, an artist statement and several design directions"}
            }},
          {th: "เมื่อได้ผลลัพธ์จาก AI ฉันมักปรับแต่งให้เข้ากับบริบท น้ำเสียง และผู้รับของงานจริง ไม่ใช้แบบดิบ ๆ", en: "When I get output from AI, I usually adapt it to the real task's context, tone and audience rather than using it raw", examples: {
              health: {th: "AI ร่างคำอธิบายโรคมาเป็นภาษาตำรา ฉันเขียนใหม่ให้ผู้ป่วยฟังแล้วเข้าใจ", en: "AI drafts a textbook-style explanation, and I rewrite it so the patient understands"},
              engtech: {th: "AI ให้โค้ดที่ใช้ได้มา ฉันปรับให้เข้ากับโครงสร้างและสไตล์ของโปรเจกต์ก่อนใช้", en: "AI gives me working code, and I reshape it to my project's structure and style before using it"},
              scienat: {th: "AI สร้างกราฟกับคำอธิบายผลมาให้ ฉันแก้ให้ตรงกับข้อมูลจริงของฉันก่อนส่ง", en: "AI produces a chart and caption, and I rework them to match my actual data before handing in"},
              bizpol: {th: "AI ร่างบทวิเคราะห์มาเป็นภาษาวิชาการ ฉันเขียนใหม่ให้ผู้บริหารอ่านรู้เรื่อง", en: "AI drafts in academic language, and I rewrite it for a decision-maker"},
              humsoc: {th: "AI ร่างย่อหน้ามาให้ ฉันปรับสำนวนและรูปแบบอ้างอิงให้ตรงกับสาขาก่อนส่ง", en: "AI drafts a paragraph, and I adjust the voice and citation style to my field before handing in"},
              artdes: {th: "AI สร้างงานมาให้ ฉันปรับให้เข้ากับลายเส้นและทิศทางของโปรเจกต์ก่อนส่ง", en: "AI produces a piece, and I rework it to my own line and the project's direction before submitting"}
            }},
          {th: "ฉันเลือกใช้เครื่องมือ AI ให้เหมาะกับงานแต่ละประเภท แทนที่จะใช้เครื่องมือเดียวสำหรับทุกงาน", en: "I pick the right AI tool for each kind of task instead of using one tool for everything", examples: {
              health: {th: "ต้องหาหลักฐานทางคลินิก ฉันเลือกใช้ตัวที่อ้างอิงแหล่งได้ ไม่ใช่แชตทั่วไป", en: "I need clinical evidence, so I pick a tool that cites sources, not a general chat"},
              engtech: {th: "ตอนเขียนโค้ดฉันใช้ผู้ช่วยในเอดิเตอร์ แต่ตอนคิดโครงสร้างระบบฉันย้ายไปใช้แชต", en: "I use an in-editor assistant to write code, but move to a chat to think about architecture"},
              scienat: {th: "ต้องวิเคราะห์ข้อมูลจริง ฉันเลือกตัวที่รันโค้ดได้ ไม่ใช่ตัวที่เดาผลลัพธ์ให้", en: "I need real analysis, so I pick a tool that runs code rather than one that guesses the output"},
              bizpol: {th: "ต้องอ้างตัวเลขล่าสุด ฉันเลือกใช้ตัวที่ค้นข้อมูลปัจจุบันได้", en: "I need current figures, so I pick a tool that can look things up"},
              humsoc: {th: "ต้องทำงานกับเอกสารชั้นต้นยาว ๆ ฉันเลือกใช้ตัวที่อ่านไฟล์ยาวได้", en: "Working with long primary sources, I pick a tool that can read long documents"},
              artdes: {th: "ตอนคิดงานฉันใช้เครื่องมือสร้างภาพ แต่งานที่ส่งจริงฉันทำในโปรแกรมออกแบบ", en: "I use image tools to think, but build the actual deliverable in my design software"}
            }}
        ],
        blurb: {th: "คุณใช้ AI เป็นผู้ช่วยในงานประจำวันได้คล่อง และรู้วิธีสื่อสารกับ AI ให้ได้ผลลัพธ์ที่มีคุณภาพ", en: "You use AI fluently as an everyday assistant and know how to communicate with it to get quality results."},
        nextH: {th: "พัฒนาสู่ระดับ 3 — สร้างด้วย AI", en: "Grow into Level 3 — Building with AI"},
        next: [
          {th: "ลองเครื่องมือ no-code / automation (เช่น GPTs/Projects, Zapier, Make) เพื่อต่อยอดงานซ้ำ ๆ", en: "Try no-code / automation tools (GPTs/Projects, Zapier, Make) to extend repetitive work"},
          {th: "ออกแบบ workflow ที่ผสาน AI หลายขั้นเพื่อแก้ปัญหาเฉพาะของคุณ", en: "Design multi-step workflows that combine AI to solve your specific problems"},
          {th: "เรียนรู้แนวคิด API เพื่อเข้าใจว่าจะเชื่อม AI เข้ากับระบบงานได้อย่างไร", en: "Learn the basics of APIs to understand how AI connects into systems"}
        ],
        workshops: [
          {th: "Prompt Engineering ขั้นกลาง", en: "Intermediate Prompt Engineering"},
          {th: "AI กับเวิร์กโฟลว์ในงานประจำ", en: "AI Workflows in Daily Work"},
          {th: "No-Code Automation พื้นฐาน", en: "No-Code Automation Basics"}
        ]
      },
      {
        n: 3,
        assessable: true,
        name: {th: "สร้างด้วย AI", en: "Building"},
        short: {th: "สร้างโซลูชันและเวิร์กโฟลว์ที่ขับเคลื่อนด้วย AI", en: "Build AI-powered solutions and workflows"},
        desc: {th: "ใช้ no-code/low-code หรือ API สร้างแอป แชตบอต หรือ workflow", en: "Use no-code/low-code tools or APIs to build apps, chatbots, or workflows"},
        color: "#1E8E63",
        items: [
          {th: "เมื่อเจอปัญหางานซ้ำ ๆ ฉันมักวางแผนได้ว่าจะออกแบบ workflow ที่ให้ AI ทำงานหลายขั้นต่อเนื่องเพื่อแก้ปัญหานั้นอย่างไร", en: "When I hit a repetitive problem, I can usually map out a multi-step workflow where AI handles several stages to solve it", examples: {
              health: {th: "ต้องทบทวนวรรณกรรมเป็นร้อยเปเปอร์ ฉันวางขั้นตอนคัดกรองให้ AI ทำต่อกันเป็นชุด", en: "Facing hundreds of papers, I design a screening pipeline AI runs as one chain"},
              engtech: {th: "งานเดิมซ้ำทุกสัปดาห์ ฉันต่อขั้นตอนดึงข้อมูล ทำความสะอาด สรุปผล ให้ทำงานต่อกัน", en: "Facing the same job every week, I chain fetch, clean and summarize into one flow"},
              scienat: {th: "ข้อมูลเข้ามาทุกสัปดาห์ ฉันวางขั้นตอนข้อมูลดิบ ตรวจคุณภาพ วิเคราะห์ ให้ทำซ้ำได้", en: "With data arriving every week, I build a repeatable raw, quality-check, analysis chain"},
              bizpol: {th: "ต้องออกบทวิเคราะห์ทุกเดือน ฉันวางขั้นตอนรวบรวมข่าว สรุปประเด็น ร่างบทวิเคราะห์", en: "With a brief due every month, I design a gather, extract, draft chain"},
              humsoc: {th: "มีเทปสัมภาษณ์หลายสิบชั่วโมง ฉันวางขั้นตอนถอดเทป ให้รหัส สรุปธีม ให้ทำต่อกัน", en: "With dozens of hours of interviews, I chain transcribe, code and theme-summarize"},
              artdes: {th: "ต้องส่งงานหลายแบบในรอบเดียว ฉันวางขั้นตอนคอนเซ็ปต์ ร่างหลายแบบ จัดชุดนำเสนอ", en: "With several variations due at once, I chain concept, variations and presentation set"}
            }},
          {th: "ฉันสามารถเชื่อมต่อ AI เข้ากับแอปหรือระบบผ่าน API ได้ด้วยตนเอง", en: "I can connect AI to an app or system via API on my own", examples: {
              health: {th: "ฉันเขียนโค้ดเรียก AI ให้สรุปชุดข้อมูลสุขภาพทีละชุดโดยอัตโนมัติ", en: "I write code that calls AI to summarize health datasets automatically"},
              engtech: {th: "ฉันเรียก API ของโมเดลจากโค้ดที่เขียนเอง ไม่ใช่นั่งพิมพ์ทีละครั้งในหน้าแชต", en: "I call the model's API from my own code instead of typing in a chat window"},
              scienat: {th: "ฉันเขียนสคริปต์เรียกโมเดลให้ประมวลผลข้อมูลทีละชุดจนครบ", en: "I write a script that calls a model to process my data batch by batch"},
              bizpol: {th: "ฉันต่อ AI เข้ากับข้อมูลยอดขายหรือข้อมูลเปิดของภาครัฐด้วยตัวเอง", en: "I wire AI to sales figures or open government data myself"},
              humsoc: {th: "ฉันต่อ AI เข้ากับข้อมูลแบบสอบถาม เพื่อจัดกลุ่มคำตอบปลายเปิดเป็นร้อยข้อ", en: "I connect AI to survey data to cluster hundreds of open-ended answers"},
              artdes: {th: "ฉันเขียนสคริปต์เรียกโมเดลสร้างภาพ ให้ลองหลายแบบพร้อมกันในรอบเดียว", en: "I script an image model to try many variations in one run"}
            }},
          {th: "ฉันสามารถสร้างต้นแบบของแอปหรือระบบที่ใช้งานได้จริง ด้วยวิธีใดวิธีหนึ่ง — ให้ AI ช่วยวางแผน/เขียนโค้ด หรือใช้เครื่องมือ no-code/low-code", en: "I can build a working prototype of an app or system in at least one way — using AI to help plan or code, or with no-code/low-code tools", examples: {
              health: {th: "ฉันทำต้นแบบแอปเตือนกินยาที่กดใช้ได้จริง ไม่ใช่แค่ภาพในสไลด์", en: "I build a medication-reminder prototype people can actually tap, not a slide mock-up"},
              engtech: {th: "ฉันทำต้นแบบเว็บหรือเครื่องมือที่เปิดแล้วรันได้จริง ไม่ใช่แค่สไลด์", en: "I build a web app or tool that actually runs, not just slides"},
              scienat: {th: "ฉันทำต้นแบบเครื่องมือคำนวณหรือแดชบอร์ดของแล็บที่กดใช้ได้จริง", en: "I build a calculator or a lab dashboard that actually works"},
              bizpol: {th: "ฉันทำต้นแบบเครื่องมือประเมินความเสี่ยงที่กรอกข้อมูลแล้วได้ผลออกมาจริง", en: "I build a risk-scoring tool that gives a real answer when I feed it data"},
              humsoc: {th: "ฉันทำต้นแบบเว็บเก็บแบบสอบถามหรือสื่อการสอนที่คนเข้าไปใช้ได้จริง", en: "I build a survey site or teaching material people can actually use"},
              artdes: {th: "ฉันทำต้นแบบเว็บจัดนิทรรศการที่ผู้ชมเข้าไปคลิกดูได้จริง", en: "I build an online exhibition visitors can actually click through"}
            }},
          {th: "ฉันเคยใช้ AI เป็นส่วนหนึ่งของการพัฒนาผลงานหรือระบบที่มีผู้อื่นได้ทดลองหรือใช้งานจริง (เช่น เพื่อน เพื่อนร่วมงาน หรือลูกค้ากลุ่มเล็ก ๆ)", en: "I've used AI as part of building something that other people — friends, colleagues, or a small group of users — have actually tried or used", examples: {
              health: {th: "สื่อให้ความรู้ผู้ป่วยที่ฉันทำ ถูกเอาไปใช้จริงในหอผู้ป่วยหรือในชุมชน", en: "Patient-education material I made was actually used on a ward or in a community"},
              engtech: {th: "โปรเจกต์ที่ฉันทำมีคนอื่นเอาไปลองใช้จริง ไม่ใช่แค่ส่งอาจารย์แล้วจบ", en: "A project I built was tried by real users, not just handed in and done"},
              scienat: {th: "เครื่องมือหรือชุดข้อมูลที่ฉันทำ มีคนในแล็บเอาไปใช้ต่อ", en: "A tool or dataset I made was picked up and used by others in the lab"},
              bizpol: {th: "ข้อเสนอหรือเครื่องมือที่ฉันทำ ถูกองค์กรหรือชุมชนนำไปใช้จริง", en: "A proposal or tool I made was actually adopted by an organization or community"},
              humsoc: {th: "กิจกรรมหรือสื่อรณรงค์ที่ฉันทำ กลุ่มเป้าหมายได้ใช้จริง", en: "An event or campaign material I made was actually used by my target audience"},
              artdes: {th: "งานที่ฉันทำถูกจัดแสดง ตีพิมพ์ หรือส่งมอบให้ลูกค้าจริง", en: "Work I made was exhibited, published or delivered to a real client"}
            }}
        ],
        blurb: {th: "คุณไม่ได้แค่ใช้ AI แต่สร้างสิ่งใหม่ด้วย AI ได้ ทั้งเวิร์กโฟลว์ ต้นแบบ และการเชื่อมต่อระบบ", en: "You don't just use AI — you build new things with it: workflows, prototypes, and integrations."},
        nextH: {th: "พัฒนาสู่ระดับ 4 — ฝึกและดูแลโมเดล", en: "Grow into Level 4 — Training & maintaining models"},
        next: [
          {th: "เรียนรู้วงจรชีวิตของ ML: การเตรียมข้อมูล การฝึก การประเมิน และการ deploy", en: "Learn the ML lifecycle: data prep, training, evaluation, and deployment"},
          {th: "ศึกษาการ fine-tune โมเดล และการวัดผล (accuracy, bias, robustness)", en: "Study model fine-tuning and evaluation metrics (accuracy, bias, robustness)"},
          {th: "ทำความเข้าใจพื้นฐาน MLOps สำหรับการดูแลระบบ AI ที่ใช้งานจริง", en: "Understand MLOps basics for running AI systems in production"}
        ],
        workshops: [
          {th: "สร้างแอปด้วย AI API", en: "Building Apps with AI APIs"},
          {th: "พื้นฐาน Machine Learning", en: "Introduction to Machine Learning"},
          {th: "LLM Application Development", en: "LLM Application Development"}
        ]
      },
      {
        n: 4,
        assessable: false,
        name: {th: "ฝึกและดูแลรักษาโมเดล AI", en: "Training & Maintaining Models"},
        short: {th: "จัดการ ฝึก ปรับแต่ง และดูแลระบบ AI", en: "Manage, train, fine-tune, and maintain AI systems"},
        desc: {th: "สำหรับวิศวกร/นักวิทยาศาสตร์ข้อมูลที่สร้างและดูแลโมเดล", en: "For engineers and data scientists who build and maintain models"},
        color: "#9A6A1F",
        items: [
          {th: "เมื่อทีมต้องตัดสินใจว่าจะ fine-tune โมเดลเองหรือใช้ของสำเร็จ ฉันมักร่วมวิเคราะห์ข้อดีข้อเสียและให้ทิศทางได้", en: "When the team decides whether to fine-tune a model or use an existing one, I help analyze the trade-offs and give direction"},
          {th: "เมื่อได้ข้อมูลดิบมา ฉันลงมือเตรียมชุดข้อมูล (ทำความสะอาด แบ่ง train/test ติดป้ายกำกับ) และประเมินผลโมเดลด้วยเมตริกที่เหมาะสมได้", en: "Given raw data, I prepare a dataset (clean, split train/test, label) and evaluate a model with appropriate metrics"},
          {th: "ฉันดูแลระบบ AI ที่ขึ้นใช้งานจริง คอยมอนิเตอร์ และจัดการเมื่อผลของโมเดลเริ่มเพี้ยนไปตามเวลา", en: "I look after AI systems in production — monitoring them and stepping in when a model's performance starts to drift over time"}
        ],
        blurb: {th: "คุณทำงานในระดับวิศวกรรมของ AI ได้ ทั้งการฝึก ปรับแต่ง ประเมิน และดูแลโมเดลในการใช้งานจริง", en: "You work at the engineering level of AI — training, fine-tuning, evaluating, and maintaining models in production."},
        nextH: {th: "พัฒนาสู่ระดับ 5 — เชี่ยวชาญเฉพาะทาง", en: "Grow into Level 5 — Deep specialization"},
        next: [
          {th: "เจาะลึกสาขาเฉพาะ เช่น NLP, computer vision, deep learning หรือ AI security", en: "Go deep in a specific area like NLP, computer vision, deep learning, or AI security"},
          {th: "ติดตามและอ่านงานวิจัยล่าสุด แล้วทดลองนำเทคนิคใหม่มาใช้", en: "Follow and read recent research, and experiment with new techniques"},
          {th: "เริ่มเป็นพี่เลี้ยง/ผู้ชี้นำทิศทางเทคนิคให้ทีม", en: "Start mentoring others and setting technical direction for your team"}
        ],
        workshops: [
          {th: "MLOps ขั้นสูง", en: "Advanced MLOps"},
          {th: "Deep Learning เฉพาะทาง", en: "Specialized Deep Learning"},
          {th: "Responsible & Trustworthy AI", en: "Responsible & Trustworthy AI"}
        ]
      },
      {
        n: 5,
        assessable: false,
        name: {th: "เชี่ยวชาญเฉพาะทางขั้นสูง", en: "Deeply Specializing"},
        short: {th: "ผู้เชี่ยวชาญ R&D และเทคนิคขั้นสูง", en: "R&D experts and advanced specialists"},
        desc: {th: "พัฒนาสถาปัตยกรรมใหม่ ติดตามงานวิจัย และชี้นำทิศทาง AI", en: "Build new architectures, follow research, and set AI direction"},
        color: "#B5642A",
        items: [
          {th: "ในสาขา AI เฉพาะทางของฉัน (เช่น NLP, vision, deep learning, AI security) เพื่อนร่วมงานมักมาปรึกษาฉันเป็นคนแรก ๆ เมื่อเจอปัญหายาก", en: "In my specialized AI area (NLP, vision, deep learning, AI security), colleagues tend to come to me first when they hit a hard problem"},
          {th: "ฉันเคยออกแบบหรือดัดแปลงสถาปัตยกรรม/อัลกอริทึมใหม่ และมีส่วนกำหนดทิศทางเทคนิค AI ขั้นสูงให้ทีมหรือองค์กร", en: "I've designed or modified new architectures/algorithms and helped set the advanced AI technical direction for a team or organization"}
        ],
        blurb: {th: "คุณอยู่แนวหน้าของสาขา AI สามารถสร้างองค์ความรู้ใหม่ และชี้นำทิศทางเชิงเทคนิคให้ผู้อื่นได้", en: "You're at the frontier of AI — creating new knowledge and setting technical direction for others."},
        nextH: {th: "รักษาความเป็นผู้นำ — เรียนรู้ต่อเนื่อง", en: "Maintain leadership — keep learning"},
        next: [
          {th: "ตีพิมพ์/แบ่งปันงาน และมีส่วนร่วมในชุมชนวิชาการและอุตสาหกรรม", en: "Publish and share your work, and engage with academic and industry communities"},
          {th: "ทำโปรเจกต์ R&D ที่ผลักดันขอบเขตของสาขา", en: "Run R&D projects that push the boundary of the field"},
          {th: "สร้างคนรุ่นต่อไป — เป็นพี่เลี้ยงและออกแบบเส้นทางการเรียนรู้ให้องค์กร", en: "Grow the next generation — mentor people and design learning paths for the organization"}
        ],
        workshops: [
          {th: "AI Research & Frontier Models", en: "AI Research & Frontier Models"},
          {th: "AI Strategy Leadership", en: "Leading AI Strategy"}
        ]
      }
    ],
    // Percent a level must reach before the next one is even looked at, and the
    // same cut roleVerdict reads. A level is 4 items x 0-4, so only 17 scores
    // exist and nothing sits between 69% and 75%: any value from 64 to 69 means
    // "11 of 16", i.e. three strong answers and one weak one still passes, while
    // answering down the middle (8/16) still does not.
    skillThreshold: 65,
    scale: [
      {v: 0, display: 1, lab: {th: "ไม่ตรงกับฉันเลย", en: "Not me at all"}, sub: {th: "ยังไม่เคยทำหรือทำไม่ได้", en: "Never done it or can't do it"}},
      {v: 1, display: 2, lab: {th: "ตรงกับฉันเล็กน้อย", en: "A little like me"}, sub: {th: "พอทำได้แต่ยังไม่คล่อง", en: "I can do it a bit, but not fluent"}},
      {v: 2, display: 3, lab: {th: "ตรงกับฉันปานกลาง", en: "Somewhat like me"}, sub: {th: "ทำได้ในบางสถานการณ์", en: "I can do it in some situations"}},
      {v: 3, display: 4, lab: {th: "ค่อนข้างตรงกับฉัน", en: "Mostly like me"}, sub: {th: "ทำได้ดีเป็นส่วนใหญ่", en: "I do this well most of the time"}},
      {v: 4, display: 5, lab: {th: "ตรงกับฉันมากที่สุด", en: "Very much like me"}, sub: {th: "ทำได้อย่างสม่ำเสมอ", en: "I can do this consistently"}}
    ],
    roles: [
      {code: "admin",    floor: 1, ceiling: 2, label: {th: "ธุรการ / สนับสนุน",                       en: "Admin / Support"}},
      {code: "ops_cs",   floor: 1, ceiling: 2, label: {th: "ปฏิบัติการ / ลูกค้าสัมพันธ์ / เซลส์",        en: "Ops / Customer-facing / Sales"}},
      {code: "creative", floor: 2, ceiling: 3, label: {th: "งานสร้างสรรค์ / คอนเทนต์ / การตลาด",          en: "Creative / Content / Marketing"}},
      {code: "analyst",  floor: 2, ceiling: 3, label: {th: "นักวิเคราะห์ / วางแผน / PM",                en: "Analyst / Planner / PM"}},
      {code: "tech",     floor: 2, ceiling: 4, label: {th: "วิศวกรซอฟต์แวร์ / ดาต้า",                   en: "Engineer / Developer / Data"}},
      {code: "ai",       floor: 3, ceiling: 5, label: {th: "AI / ML / นักวิจัย",                       en: "AI / ML / Research"}},
      {code: "leader",   floor: 2, ceiling: 3, label: {th: "ผู้บริหาร / หัวหน้า / ผู้ก่อตั้ง",             en: "Leader / Executive / Founder"}},
      {code: "educator", floor: 2, ceiling: 3, label: {th: "ครู / อาจารย์ / ผู้ฝึกอบรม / L&D",          en: "Educator / Trainer / L&D"}},
      {code: "student",  floor: 1, ceiling: 3, label: {th: "นักเรียน / นักศึกษา / เปลี่ยนสายงาน",         en: "Student / Career-change"}}
    ],
    roleStretch: {
      admin: {
        champion: {
          th: "สร้าง template / SOP ที่ใช้ AI ให้ทั้งแผนกใช้ร่วมกัน แล้วสอนเพื่อนร่วมงานอย่างน้อย 3 คน",
          en: "Build AI-powered templates / SOPs the whole team can use, then teach at least 3 colleagues"
        },
        pivot: {
          th: "ลงมือทำ automation 1 ตัวที่ช่วยประหยัดเวลางานจริง แล้วคุยกับหัวหน้าเพื่อขอ scope งานใหม่ที่ใช้สกิลคุณได้เต็มที่",
          en: "Ship one real automation that saves time, then propose a new role/scope to your manager that uses your skills fully"
        }
      },
      ops_cs: {
        champion: {
          th: "สร้าง AI playbook สำหรับตอบลูกค้า/จัดการเคสที่ทีมใช้ได้ทุกคน วัดผลก่อน-หลังภายใน 1 เดือน",
          en: "Create an AI playbook for customer responses / case handling the whole team can use; measure impact within a month"
        },
        pivot: {
          th: "ใช้ AI วิเคราะห์ข้อมูลลูกค้าและเสนอ insight ที่ทีมไม่เคยเห็น เพื่อขยับเข้าสาย analyst / RevOps",
          en: "Use AI to analyze customer data and surface insights no one had — a step toward analyst / RevOps roles"
        }
      },
      creative: {
        champion: {
          th: "ออกแบบ AI brand guideline ของทีม แล้วนำทีมทดลอง workflow ใหม่ใน 1 แคมเปญจริง",
          en: "Design an AI brand/style guideline for your team, then lead one real campaign with the new workflow"
        },
        pivot: {
          th: "ทำ AI side-project แบบเปิดสาธารณะ (เช่น GPT/Project, custom assistant) เพื่อสร้าง portfolio สำหรับสาย AI product",
          en: "Ship a public AI side-project (custom GPT/Project, assistant) to build a portfolio for AI product roles"
        }
      },
      analyst: {
        champion: {
          th: "สร้าง internal AI tool / dashboard ที่ทีมใช้จริง และเสนอ PM ให้นำเข้าระบบงาน",
          en: "Build an internal AI tool / dashboard your team actually uses; propose adoption to the PM"
        },
        pivot: {
          th: "เรียน SQL + Python เพิ่ม ทำ end-to-end data project 1 ชิ้นเพื่อขยับสายเป็น data / tech",
          en: "Add SQL + Python skills, ship one end-to-end data project to move into a data / tech role"
        }
      },
      tech: {
        champion: {
          th: "นำทีมทำระบบที่ใช้ LLM หรือ agent ภายในองค์กร 1 ชิ้น พร้อมแนวทาง evaluation และ guardrail",
          en: "Lead an internal LLM/agent system at work, with evaluation and guardrail practices in place"
        },
        pivot: {
          th: "ลงมือ fine-tune หรือ deploy โมเดล LLM 1 ตัว และเขียน technical post เพื่อก้าวสู่สาย AI/ML",
          en: "Fine-tune or deploy one LLM yourself and write a technical post — a path toward AI/ML roles"
        }
      },
      ai: {
        champion: {
          th: "ดันโปรเจกต์ R&D ภายในทีมที่ผลักดันขอบเขตของสาขา และเป็นพี่เลี้ยงให้คนรุ่นถัดไป",
          en: "Drive an internal R&D project that pushes the boundary of your area, and mentor the next generation"
        },
        pivot: {
          th: "ตีพิมพ์งานหรือ open-source contribution เพื่อขยับสู่บทบาท thought leader / AI strategy ขององค์กร",
          en: "Publish work or contribute to open source to move into a thought-leader / AI strategy role"
        }
      },
      leader: {
        champion: {
          th: "ตั้ง AI policy + backlog ของ use case ทั้งทีม วัด ROI ภายใน 1 ไตรมาส",
          en: "Set AI policy + a use-case backlog for the team; measure ROI within a quarter"
        },
        pivot: {
          th: "นำ AI transformation 1 โปรเจกต์จริง และทำ case study เพื่อก้าวสู่บทบาท AI strategy lead",
          en: "Lead one real AI transformation project and publish a case study — toward an AI strategy lead role"
        }
      },
      educator: {
        champion: {
          th: "ออกแบบคอร์ส AI literacy ในองค์กร / โรงเรียน และวัดผลผู้เรียนก่อน-หลัง",
          en: "Design an AI literacy course for your school/org and measure pre/post outcomes"
        },
        pivot: {
          th: "สร้างเนื้อหา / เครื่องมือ AI ที่เผยแพร่สาธารณะ เพื่อขยับสู่สาย AI L&D หรือ EdTech",
          en: "Publish AI content/tools publicly to move toward an AI L&D or EdTech role"
        }
      },
      student: {
        champion: {
          th: "ทำโปรเจกต์ส่วนตัว 1 ชิ้นที่คนอื่นใช้จริง และนำเสนอในชุมชน/เพื่อน",
          en: "Ship one personal project real people use, and present it in a community or to peers"
        },
        pivot: {
          th: "สร้าง portfolio ที่โชว์ระดับจริงของคุณ และสมัครงาน/internship สาย AI ที่ตรงกับสกิล",
          en: "Build a portfolio that reflects your real level and apply for AI-track jobs/internships that match"
        }
      }
    },
    partnershipGroups: [
      {
        key: "own",
        name: {th: "รับผิดชอบผลงานของตัวเอง", en: "Owning your output"},
        subtraits: ["verify", "privacy"]
      },
      {
        key: "lead",
        name: {th: "เดินนำ AI ไม่ใช่เดินตามมัน", en: "Lead it, don't follow it"},
        subtraits: ["restraint", "human_lead", "direction"]
      },
      {
        key: "yours",
        name: {th: "ทักษะยังเป็นของคุณ", en: "The skill is still yours"},
        subtraits: ["learning", "self_reliance", "effort", "self_trust"]
      }
    ],
    outsideView: {
      low: {
        exam: {th: "สิ่งที่คุณส่งตลอดเทอม กับสิ่งที่คุณทำเองได้จริง ตอนนี้ยังห่างกันอยู่ — และวันสอบคือวันที่คุณจะเจอทุกเรื่องที่คุณยังทำเองไม่ได้พร้อมกัน", en: "What you can hand in all term and what you can do on your own are not the same thing yet — and exam day is when you meet everything you still can't do, all at once"},
        teacher: {th: "งานที่ดีแต่เจ้าของงานอธิบายไม่ได้ เป็นสิ่งที่ผู้สอนดูออกตั้งแต่คำถามแรก เพราะเขาได้เห็นนักศึกษาหลากหลายระดับ และรู้ว่าใครลงมือทำจริง ใครเข้าใจทำได้จริง", en: "Work that outruns what its author can explain is clear to a teacher from the first question — they have taught students at every level and can tell who did the work and who actually understands it"},
        hiring: {th: "ถ้าสิ่งที่คุณทำได้คือสิ่งที่ AI ทำได้อยู่แล้ว คำถามที่คนจ้างต้องตอบให้ได้คือ “แล้วทำไมเขาต้องจ้างคุณ” — ข่าวดีคือคุณยังมีเวลาทั้งหลักสูตรที่จะทำให้คำตอบนั้นชัด", en: "If what you can do is what AI already does, the person hiring has to answer “then why you?” — the good news is you still have a whole degree to make that answer obvious"}
      },
      mid: {
        exam: {th: "หลายเรื่องคุณทำเองได้ แต่มีบางส่วนที่ยังไม่แน่ใจว่าทำได้ไหมถ้าไม่มี AI — ลองหาให้เจอว่าส่วนไหนให้ทันก่อนสอบ", en: "You can do plenty yourself, but some of it you are not sure about without AI — find which parts before an exam finds them for you"},
        teacher: {th: "ตอนนี้คุณยังอธิบายงานของตัวเองได้เป็นส่วนใหญ่ ซึ่งทำให้สิ่งที่คุณพูดในห้องน่าเชื่อถือ — ถ้ามีตรงไหนที่อธิบายไม่ได้ ให้กลับไปทำความเข้าใจส่วนนั้นใหม่", en: "You can still account for most of your work, which is what makes what you say in class worth hearing — if there is a part you can't account for, go back and work through it until you understand it"},
        hiring: {th: "สิ่งที่ทำให้คุณต่างจากคนอื่นไม่ใช่การใช้ AI คล่อง เพราะอีกไม่นานทุกคนก็ใช้คล่องกันทั่วโลก แต่จุดเด่นของคุณคือการที่คุณวิเคราะห์และระบุได้ว่าตอนไหนที่ AI ทำผิดและไม่น่าเชื่อถือ", en: "What sets you apart won't be being fluent with AI, because soon everyone everywhere will be — it will be that you can work out and point to where AI got it wrong and cannot be trusted"}
      },
      high: {
        exam: {th: "คุณไม่ต้องกลัวเรื่องไม่มี AI ใช้ เพราะสิ่งที่คุณทำได้เป็นทักษะของคุณจริง ๆ ไม่ได้ขึ้นกับใคร", en: "You have nothing to fear from a day without AI, because what you can do is genuinely your own skill and depends on no one else"},
        teacher: {th: "คนที่อธิบายงานของตัวเองได้ทุกบรรทัด คือคนที่อาจารย์นึกถึงเวลามีโอกาสดี ๆ เข้ามา", en: "The student who can account for every line of their work is the one a teacher thinks of when an opportunity comes up"},
        hiring: {th: "บริษัท/ผู้จ้างงานอยากเลือกคุณเข้าทำงาน เพราะ \"คุณใช้ AI ได้โดยที่เหตุผลยังเป็นของตัวเอง\" ซึ่งเป็นทักษะที่ผู้จ้างงานต้องการมากจากนักศึกษา", en: "An employer wants to hire you because you use AI and the reasoning stays yours — which is exactly the skill they are looking for in graduates"}
      }
    },
    reflectPrompts: {
      selfReliance: {th: "นึกถึงงานชิ้นล่าสุดที่คุณให้ AI ช่วยมากที่สุด ถ้าต้องทำใหม่ในห้องสอบโดยไม่มี AI คุณจะติดตรงไหน และจะฝึกตรงนั้นอย่างไรภายในสองสัปดาห์นี้", en: "Think of the last piece of work you leaned on AI for most. If you had to redo it in an exam room with no AI, where would you get stuck — and how will you practise that part in the next two weeks?"},
      selfTrust: {th: "เล่าครั้งที่คุณไม่เห็นด้วยกับ AI แต่สุดท้ายก็เชื่อมัน ตอนนั้นคุณคิดอะไรอยู่ และถ้าย้อนกลับไปได้จะทำต่างออกไปอย่างไร", en: "Describe a time you disagreed with AI and went along with it anyway. What were you thinking at that moment, and what would you do differently now?"},
      verify: {th: "ยกตัวอย่างสิ่งที่ AI ให้คุณมาแล้วคุณใช้ต่อโดยไม่ได้ตรวจ ถ้ามันผิดขึ้นมา ผลจะตกอยู่กับใครบ้าง", en: "Give an example of something AI gave you that you used without checking. If it had been wrong, who would have carried the consequences?"},
      effort: {th: "มีเรื่องไหนที่คุณรู้ว่าต้องเก่งให้ได้ในสายของคุณ แต่ทุกครั้งที่มันยากคุณก็ส่งต่อให้ AI — เลือกมาหนึ่งเรื่อง แล้วบอกว่าจะเริ่มฝึกเองอย่างไร", en: "Name something you know you need to be good at in your field but hand to AI whenever it gets hard. Pick one, and say how you will start practising it yourself."},
      strong: {th: "สิ่งที่คุณทำอยู่ตอนนี้ — ตรวจสอบ ตั้งคำถาม และลงมือเองในส่วนที่สำคัญ — มาจากนิสัยหรือวิธีคิดแบบไหน และคุณจะส่งต่อให้เพื่อนในกลุ่มได้อย่างไร", en: "What you already do — checking, questioning, doing the important parts yourself — comes from some habit or way of thinking. What is it, and how could you pass it on to your group?"},
      always: {th: "มีอะไรในผลนี้ที่ตรงกับตัวคุณจนสะดุดไหม และเทอมนี้คุณจะเปลี่ยนอะไรหนึ่งอย่าง", en: "Was there anything in this result that landed a little too close? And what is the one thing you will change this term?"}
    },
    disciplines: [
      {
        code: "health",
        label: {th: "สุขภาพและการแพทย์", en: "Health & Medicine"},
        hint: {th: "แพทยศาสตร์ · ทันตแพทยศาสตร์ · เภสัชศาสตร์ · พยาบาลศาสตร์ · เทคนิคการแพทย์ · สัตวแพทยศาสตร์ · สาธารณสุขศาสตร์", en: "Medicine · Dentistry · Pharmacy · Nursing · Associated Medical Sciences (AMS) · Veterinary Medicine · Public Health"}
      },
      {
        code: "engtech",
        label: {th: "วิศวกรรมและเทคโนโลยีดิจิทัล", en: "Engineering & Digital Technology"},
        hint: {th: "วิศวกรรมศาสตร์ · วิทยาลัยศิลปะ สื่อ และเทคโนโลยี (CAMT) · วิทยาลัยนานาชาตินวัตกรรมดิจิทัล (ICDI)", en: "Engineering · College of Arts, Media & Technology (CAMT) · International College of Digital Innovation (ICDI)"}
      },
      {
        code: "scienat",
        label: {th: "วิทยาศาสตร์และเกษตร", en: "Science & Agriculture"},
        hint: {th: "วิทยาศาสตร์ · เกษตรศาสตร์ · อุตสาหกรรมเกษตร", en: "Science · Agriculture · Agro-Industry"}
      },
      {
        code: "bizpol",
        label: {th: "ธุรกิจ เศรษฐศาสตร์ และนโยบาย", en: "Business, Economics & Policy"},
        hint: {th: "บริหารธุรกิจ · เศรษฐศาสตร์ · รัฐศาสตร์และรัฐประศาสนศาสตร์ · นิติศาสตร์", en: "Business Administration · Economics · Political Science & Public Administration · Law"}
      },
      {
        code: "humsoc",
        label: {th: "มนุษยศาสตร์ สังคมศาสตร์ และการศึกษา", en: "Humanities, Social Sciences & Education"},
        hint: {th: "มนุษยศาสตร์ · สังคมศาสตร์ · ศึกษาศาสตร์ · การสื่อสารมวลชน", en: "Humanities · Social Sciences · Education · Mass Communication"}
      },
      {
        code: "artdes",
        label: {th: "ศิลปะและการออกแบบ", en: "Art & Design"},
        hint: {th: "วิจิตรศิลป์ · สถาปัตยกรรมศาสตร์", en: "Fine Arts · Architecture"}
      }
    ],
    fieldItems: {
      health: [
        {th: "ถ้า AI สรุปข้อมูลผู้ป่วยผิดไปหนึ่งจุด ฉันน่าจะจับได้ก่อนนำไปใช้", en: "If AI got one detail of a patient summary wrong, I would probably catch it before acting on it", reverse: false},
        {th: "ฉันแยกได้ว่าคำแนะนำของ AI อันไหนมีหลักฐานทางคลินิกรองรับ อันไหนแค่ฟังดูดี", en: "I can tell which AI advice has clinical evidence behind it and which merely sounds right", reverse: false},
        {th: "ฉันรู้ว่าข้อมูลผู้ป่วยแบบไหนห้ามพิมพ์ลงแชต AI แม้จะตัดชื่อออกแล้ว", en: "I know which patient data must never go into an AI chat, even with the name removed", reverse: false},
        {th: "เวลาผู้ป่วยหรือญาติถาม ฉันตอบจากความเข้าใจของตัวเอง ไม่ใช่เปิด AI ตอบให้", en: "When a patient or a relative asks me something, I answer from my own understanding, not by opening AI", reverse: false},
        {th: "ถ้าวันนี้ต้องดูแลเคสโดยไม่มี AI ช่วยเลย ฉันคงไม่มั่นใจเท่าที่ควร", en: "If I had to handle a case today with no AI at all, I would be less confident than I should be", reverse: true},
        {th: "ฉันเคยใช้ข้อมูลจาก AI ในงานที่เกี่ยวกับผู้ป่วย โดยไม่ได้ตรวจกับแหล่งอ้างอิง", en: "I have used AI-sourced information in patient-related work without checking it against a reference", reverse: true}
      ],
      engtech: [
        {th: "ถ้า AI เขียนโค้ดผิดตรรกะ (ไม่ใช่ error) ฉันน่าจะจับได้จากการอ่าน", en: "If AI wrote code with a logic error rather than a crash, I would probably catch it by reading", reverse: false},
        {th: "ก่อนเอาโค้ดที่ AI เขียนไปใช้ ฉันอธิบายได้ว่ามันทำงานอย่างไรทุกบรรทัด", en: "Before I use AI-written code, I can explain what every line of it does", reverse: false},
        {th: "ฉันรู้ว่าโค้ดหรือข้อมูลแบบไหนห้ามแปะลงแชต AI — คีย์ ข้อมูลผู้ใช้จริง โค้ดขององค์กร", en: "I know which code and data must never be pasted into an AI chat — keys, real user data, employer code", reverse: false},
        {th: "ฉันทดสอบ edge case ด้วยตัวเองเสมอ ไม่ได้เชื่อแค่ว่ามันรันผ่าน", en: "I test the edge cases myself — I don't take 'it runs' as proof", reverse: false},
        {th: "ถ้าต้องเขียนโค้ดสำคัญโดยไม่มีผู้ช่วย AI เลย ฉันคงช้าลงมากจนส่งไม่ทัน", en: "If I had to write something important with no AI assistant, I would slow down enough to miss the deadline", reverse: true},
        {th: "มีโค้ดอยู่ในโปรเจกต์ของฉันที่ฉันอธิบายไม่ได้ว่ามันทำงานอย่างไร", en: "There is code in my project that I cannot explain the workings of", reverse: true}
      ],
      scienat: [
        {th: "ถ้า AI เลือกวิธีวิเคราะห์ที่ไม่เหมาะกับข้อมูลของฉัน ฉันน่าจะรู้ตัว", en: "If AI chose an analysis method that didn't suit my data, I would probably notice", reverse: false},
        {th: "ฉันตรวจสมมติฐานทางสถิติด้วยตัวเองก่อนเชื่อผลที่ AI คำนวณให้", en: "I check the statistical assumptions myself before trusting a result AI computed", reverse: false},
        {th: "ฉันอธิบายได้ว่าตัวเลขทุกตัวในรายงานของฉันมาจากขั้นตอนอะไร", en: "I can account for every number in my report and the step it came from", reverse: false},
        {th: "ฉันรู้ว่าข้อมูลดิบแบบไหนยังไม่ควรอัปโหลดให้ AI", en: "I know which raw data should not be uploaded to AI yet", reverse: false},
        {th: "ถ้าต้องวิเคราะห์ข้อมูลเองทั้งหมดโดยไม่มี AI ฉันคงทำได้ไม่ถึงครึ่งของที่เคยส่ง", en: "If I had to run the whole analysis without AI, I couldn't produce half of what I have handed in", reverse: true},
        {th: "ฉันเคยใส่ผลที่ AI วิเคราะห์ลงในรายงาน โดยไม่ได้ตรวจวิธีที่มันใช้", en: "I have put an AI-produced result into a report without checking the method behind it", reverse: true}
      ],
      bizpol: [
        {th: "ถ้า AI อ้างตัวเลขหรือข้อกฎหมายผิด ฉันน่าจะจับได้จากการตามไปดูต้นฉบับ", en: "If AI cited a figure or a legal provision wrongly, I would probably catch it by checking the source", reverse: false},
        {th: "ฉันตอบคำถามเจาะลึกเรื่องข้อเสนอของตัวเองได้ โดยไม่ต้องเปิดสคริปต์", en: "I can answer hard questions about my own recommendation without opening my notes", reverse: false},
        {th: "ฉันรู้ว่าข้อมูลขององค์กรหรือลูกค้าแบบไหนห้ามให้ AI แตะ", en: "I know which company or client information AI must not touch", reverse: false},
        {th: "ก่อนเชื่อบทวิเคราะห์ของ AI ฉันมักลองหาเหตุผลของฝั่งตรงข้ามด้วย", en: "Before trusting an AI analysis, I look for the case against it", reverse: false},
        {th: "ถ้าต้องวิเคราะห์เคสสดโดยไม่มี AI ผลงานคงไม่ดีเท่าที่เคยส่งไป", en: "If I had to analyze a case live without AI, my work would not match what I have handed in", reverse: true},
        {th: "ฉันเคยใช้ตัวเลขหรือข้ออ้างอิงจาก AI โดยไม่ได้ตามไปดูแหล่งที่มา", en: "I have used figures or citations from AI without following them back to the source", reverse: true}
      ],
      humsoc: [
        {th: "ถ้า AI อ้างงานวิจัยหรือผู้แต่งที่ไม่มีอยู่จริง ฉันน่าจะจับได้", en: "If AI cited a study or an author that doesn't exist, I would probably catch it", reverse: false},
        {th: "ข้อโต้แย้งหลักในงานเขียนของฉันมาจากการอ่านและการคิดของตัวเอง", en: "The central argument in my writing comes from my own reading and thinking", reverse: false},
        {th: "ฉันปกป้องข้อมูลของผู้ให้ข้อมูลหรือผู้เรียนเสมอ ก่อนให้ AI แตะ", en: "I protect informants' or learners' data before AI touches any of it", reverse: false},
        {th: "ฉันอธิบายทฤษฎีที่อ้างในงานด้วยคำของตัวเองได้", en: "I can explain the theory I cite in my own words", reverse: false},
        {th: "ถ้าต้องเขียนงานวิเคราะห์สดในห้องสอบ คงเขียนได้ไม่ดีเท่างานที่ส่ง", en: "If I had to write an analysis live in an exam, it would not match the work I hand in", reverse: true},
        {th: "ฉันเคยส่งงานที่ AI เรียบเรียงให้ ทั้งที่ยังไม่ได้อ่านต้นฉบับที่มันอ้าง", en: "I have handed in work AI composed without reading the sources it cited", reverse: true}
      ],
      artdes: [
        {th: "ฉันแยกออกว่างานชิ้นไหนที่ AI สร้างให้ ใช้ส่งเป็นผลงานของตัวเองไม่ได้", en: "I can tell which AI-generated pieces cannot be submitted as my own work", reverse: false},
        {th: "คอนเซ็ปต์ของงานที่ฉันส่ง มาจากความคิดของฉันเอง", en: "The concept behind the work I submit comes from my own thinking", reverse: false},
        {th: "ฉันบอกได้ชัดเจนว่าในงานแต่ละชิ้นใช้ AI ช่วยตรงไหนบ้าง", en: "I can say plainly where AI helped in each piece", reverse: false},
        {th: "ฉันยังฝึกทักษะพื้นฐานอย่างสม่ำเสมอ — วาด เขียนแบบ องค์ประกอบ", en: "I still practise the fundamentals regularly — drawing, drafting, composition", reverse: false},
        {th: "ถ้าต้องร่างงานสดโดยไม่มี AI ฝีมือจริงของฉันจะต่างจากพอร์ตพอสมควร", en: "If I had to sketch live without AI, my real hand would differ noticeably from my portfolio", reverse: true},
        {th: "ฉันเคยใช้ภาพหรือแบบที่ AI สร้างในงานส่ง โดยไม่ได้บอกใคร", en: "I have used AI-generated images or drawings in submitted work without telling anyone", reverse: true}
      ]
    },
    fieldVerdict: {
      health: {
        high: {th: "ในสถานการณ์จริงของสายสุขภาพ คุณยังเป็นคนตัดสินใจและ AI เป็นเครื่องมือ — รักษาระยะนี้ไว้ เพราะความผิดพลาดในสาขานี้จะเกิดผลกระทบกับคนจริง ๆ", en: "In real clinical situations you are still the one deciding and AI is the tool — hold that line, because in this field someone else lives with the mistakes"},
        low: {th: "ในสถานการณ์จริงของสายสุขภาพ คุณยังพึ่ง AI มากเกินไป ลองเลือกหนึ่งเรื่อง เช่น การตรวจขนาดยา หรือการซักประวัติ แล้วลองฝึกจนมั่นใจโดยไม่ต้องเปิด AI", en: "In real clinical situations you lean on AI more than is safe. Pick one thing — checking a dose, taking a history — and practise it until you are confident without AI"}
      },
      engtech: {
        high: {th: "คุณอ่านและตรวจสิ่งที่ AI เขียนได้จริง ซึ่งเป็นสิ่งที่แยกคนที่ทำงานเก่งจริงออกจากคนที่ใช้งานได้ แต่ทำเองไม่เป็น: จงใช้ AI ช่วยดันศักยภาพคุณให้ทำงานที่ยากขึ้นไปได้อีกขั้น", en: "You can actually read and check what AI writes, which is what separates someone genuinely good at the work from someone who can only operate the tool — use it to take on harder work"},
        low: {th: "ในงานจริงของสายคุณ โค้ดที่รันผ่านไม่ได้แปลว่ามีประสิทธิภาพ ลองฝึกหยิบโค้ดที่ AI เขียนให้ล่าสุดมาอ่านทีละบรรทัดจนคุณอธิบายได้ทั้งหมด", en: "In your field, code that runs is not code that is any good. Take the last thing AI wrote for you and read it line by line until you can explain all of it"}
      },
      scienat: {
        high: {th: "คุณตรวจสิ่งที่ได้ก่อนเชื่อผล ซึ่งเป็นหัวใจของคนสายวิทย์: ใช้ AI ทุ่นแรงต่อไปได้โดยมีคุณเป็นผู้ตัดสินใจและยืนยันความน่าเชื่อถือ", en: "You check what you get before you trust the result, which is the heart of working in science — keep letting AI carry the load, with you as the one who decides and vouches for it"},
        low: {th: "ผลที่ออกมาดูสวยจาก AI ไม่ได้แปลว่าวิธีการที่ใช้ถูกต้องเสมอไป ลองฝึกด้วยการย้อนกลับไปดูงาน/การบ้านที่เคยส่งล่าสุด แล้วไล่ตรวจว่าตัวเลขทุกตัวในโจทย์มาจากขั้นตอนอะไร คุณตอบได้ไหมว่าทำไมจึงเป็นแบบนั้น", en: "A clean-looking result from AI does not always mean the method was right. Go back to the last piece of work you handed in and trace where every number came from — can you say why it is what it is?"}
      },
      bizpol: {
        high: {th: "คุณตรวจแหล่งที่มาและกล้าถามค้านข้อเสนอของตัวเอง ซึ่งเป็นสิ่งที่ทำให้คำแนะนำของคุณเชื่อถือได้", en: "You check your sources and are willing to argue against your own recommendation — that is what makes your advice trustworthy"},
        low: {th: "ข้อเสนอที่ฟังดูดีแต่ตัวเลขผิด คือความเสี่ยงที่แพงที่สุดในสายนี้ ลองฝึกด้วยการย้อนกลับไปดูงาน/การบ้านที่เคยส่งล่าสุด แล้วไล่ตรวจว่าตัวเลขทุกตัวในโจทย์มาจากขั้นตอนอะไร คุณตอบได้ไหมว่าทำไมจึงเป็นแบบนั้น", en: "A proposal that reads well with the numbers wrong is the costliest risk in your field. Go back to the last piece of work you handed in and trace where every number came from — can you say why it is what it is?"}
      },
      humsoc: {
        high: {th: "ความคิดในงานของคุณยังเป็นของคุณ และคุณตรวจสิ่งที่ AI อ้างได้ — นั่นคือสิ่งที่ทำให้คุณทำได้ดีในห้องสอบและในการนำเสนอ", en: "The thinking in your work is still yours and you check what AI claims — that is what lets you do well in an exam and in a presentation"},
        low: {th: "งานที่เขียนสวยแต่ไม่ใช่ความคิดคุณ จะอยู่ไม่ได้เมื่อมีคนตั้งคำถามคุณ ลองฝึกโดย ในงาน/การบ้านครั้งหน้า ลองเขียนย่อหน้าสำคัญของงานด้วยตัวเองก่อน แล้วค่อยให้ AI ช่วยเกลา", en: "Work that reads beautifully but isn't your thinking will not survive being questioned. In your next piece of work, write the key paragraphs yourself first, then let AI polish them"}
      },
      artdes: {
        high: {th: "งานยังเป็นของคุณ และคุณบอกได้ว่า AI ช่วยตรงไหน ซึ่งเป็นสิ่งที่ทำให้พอร์ตของคุณเชื่อถือได้", en: "The work is still yours and you can say where AI helped — that is what keeps a portfolio credible"},
        low: {th: "ถ้าพอร์ตสวยกว่าฝีมือจริง วันที่ต้องทำสดจะเป็นวันที่ลำบาก ลองกลับไปฝึกพื้นฐานสม่ำเสมอ และแยกให้ชัดว่าชิ้นไหนเป็นฝีมือคุณ", en: "If the portfolio outshines the hand, the day you have to work live will be a hard one. Go back to the fundamentals, and keep it clear which pieces are yours"}
      }
    },
    disciplineAdvice: {
      health: {
        novice: {
          focus: {th: "เริ่มจากงานที่ไม่มีข้อมูลผู้ป่วยอยู่ในนั้น", en: "Start with tasks that contain no patient data"},
          steps: [
            {th: "ลองให้ AI ช่วยสรุปบทความวิชาการหรืออธิบายศัพท์ทางคลินิกที่ยังไม่คุ้น แล้วเทียบกับตำราเรียน", en: "Have AI summarize a paper or explain unfamiliar clinical terms, then check it against your textbook"},
            {th: "ตั้งกฎของตัวเองให้ชัดตั้งแต่วันนี้ว่าอะไรห้ามพิมพ์ลงแชต AI เด็ดขาด — ชื่อ เลขประจำตัวผู้ป่วย ผลแล็บ ภาพถ่าย", en: "Set your rule now for what never goes into an AI chat — names, hospital numbers, lab results, images"}
          ]
        },
        coach: {
          focus: {th: "คุณระวังดีอยู่แล้ว เหลือเพิ่มความคล่องในการใช้", en: "Your judgment is already sound — now build fluency"},
          steps: [
            {th: "ลองใช้ AI ช่วยร่างสื่อให้ความรู้ผู้ป่วยภาษาชาวบ้าน แล้วตรวจเนื้อหากับแนวทางเวชปฏิบัติก่อนใช้", en: "Draft patient-education material with AI in plain language, then check it against clinical guidelines"},
            {th: "ฝึกใช้ AI ช่วยอ่านงานวิจัยเป็นชุด เช่น เปรียบเทียบผลของหลายการศึกษา แล้วสรุปด้วยคำของตัวเอง", en: "Use AI to read papers in batches — compare several studies, then write the conclusion in your own words"}
          ]
        },
        autopilot: {
          focus: {th: "คุณใช้คล่องแล้ว แต่สายนี้ความผิดพลาดมีคนรับผลจริง", en: "You are fluent — but in this field someone else lives with the mistakes"},
          steps: [
            {th: "ทุกครั้งที่ AI ให้ตัวเลข (ขนาดยา ค่าอ้างอิง อุบัติการณ์) ให้ถือว่ายังไม่จริงจนกว่าจะเช็คกับแหล่งปฐมภูมิ", en: "Treat every number AI gives you — doses, reference ranges, incidence — as unverified until you check a primary source"},
            {th: "ก่อนส่งงาน ลองปิดหน้าจอแล้วเล่าเหตุผลทางคลินิกให้เพื่อนฟัง ถ้าเล่าไม่ได้แปลว่ายังไม่ใช่ความเข้าใจของคุณ", en: "Before handing in, close the screen and explain the clinical reasoning to a friend — if you can't, it isn't yours yet"}
          ]
        },
        director: {
          focus: {th: "คุณพร้อมเป็นคนที่ตั้งมาตรฐานการใช้ AI ให้รุ่นน้อง", en: "You are ready to set the standard others in your field follow"},
          steps: [
            {th: "ลองทำแนวทางสั้น ๆ ให้กลุ่มเรียนว่าใช้ AI กับเคสผู้ป่วยได้แค่ไหน และตรงไหนต้องหยุด", en: "Write a short guideline for your study group on how far AI may go with patient cases, and where it must stop"},
            {th: "ใช้ AI ช่วยงานที่เกินกำลังคนเดียว เช่น คัดกรองวรรณกรรมสำหรับงานวิจัย โดยคุมเกณฑ์คัดเข้า-ออกเอง", en: "Use AI on work one person can't do alone — literature screening — while you own the inclusion criteria"}
          ]
        }
      },
      engtech: {
        novice: {
          focus: {th: "คุณอยู่ในสายที่ AI เข้ามาเร็วที่สุด เริ่มใช้ให้เป็นตั้งแต่ยังเรียน", en: "AI is landing on your field fastest — start using it properly while you still have time to learn"},
          steps: [
            {th: "ลองให้ AI อธิบายโค้ดหรือคอนเซ็ปต์ที่ยังไม่เข้าใจทีละบรรทัด แล้วลองเขียนใหม่เองโดยไม่ดู", en: "Have AI explain unfamiliar code or concepts line by line, then rewrite it yourself without looking"},
            {th: "เริ่มใช้ผู้ช่วยในเอดิเตอร์กับงานจริง แต่ทุกครั้งที่รับโค้ดมา ให้อ่านจนเข้าใจก่อนกด commit", en: "Start using an in-editor assistant on real work, but read every accepted suggestion until you understand it before committing"}
          ]
        },
        coach: {
          focus: {th: "คุณตรวจสอบเป็น เหลือยกระดับจากผู้ใช้เป็นผู้สร้าง", en: "You verify well — now move from using tools to building with them"},
          steps: [
            {th: "ลองต่อ API ของโมเดลเข้ากับโปรเจกต์เล็ก ๆ ของตัวเอง แทนการใช้ผ่านหน้าแชตอย่างเดียว", en: "Wire a model's API into a small project of your own instead of only using it through a chat window"},
            {th: "ออกแบบ workflow ที่ AI ทำหลายขั้นต่อกัน แล้ววัดผลว่ามันพลาดตรงไหนบ้าง", en: "Design a multi-step AI workflow, then measure where it actually fails"}
          ]
        },
        autopilot: {
          focus: {th: "คุณใช้ AI เก่งจนเริ่มไม่ได้ตรวจสิ่งที่มันให้มา", en: "You are good enough with AI that you have stopped checking what it hands you"},
          steps: [
            {th: "ก่อนส่งหรือ commit ต้องอธิบายได้ทุกบรรทัดว่าโค้ดทำอะไร ถ้าอธิบายไม่ได้แปลว่ายังใช้ไม่ได้ ไม่ใช่ว่ามันเสร็จแล้ว", en: "Before you commit, be able to explain every line — if you can't, it isn't done, it's just written"},
            {th: "ทดสอบ edge case ด้วยตัวเอง โค้ดที่รันผ่านไม่ได้แปลว่าถูก และผลวิเคราะห์ที่ดูสวยไม่ได้แปลว่าวิธีถูก", en: "Test the edge cases yourself — code that runs isn't code that's correct, and a clean-looking analysis isn't a sound method"}
          ]
        },
        director: {
          focus: {th: "คุณคือคนที่ทีมจะลอกวิธีใช้ AI ไปใช้ต่อ", en: "Your team will copy how you use AI, so make it worth copying"},
          steps: [
            {th: "วางมาตรฐานให้โปรเจกต์กลุ่ม: โค้ดจาก AI ต้องผ่าน review และต้องมีเทสต์ก่อนเข้า main", en: "Set the standard for your group project: AI-written code gets reviewed and tested before it lands"},
            {th: "ฝึกแยกให้ออกว่างานไหนควรให้ AI ทำ และงานไหนคือทักษะที่คุณต้องเก่งเองเพื่ออยู่ในสายนี้ต่อ", en: "Keep drawing the line between what AI should do and what you must stay good at to have a career in this field"}
          ]
        }
      },
      scienat: {
        novice: {
          focus: {th: "เริ่มจากงานอ่านและสรุป ก่อนไปงานที่ต้องตัดสินด้วยข้อมูล", en: "Start with reading and summarizing before you let it near your data"},
          steps: [
            {th: "ให้ AI ช่วยสรุปเปเปอร์หรืออธิบายวิธีวิเคราะห์ที่ยังไม่คุ้น แล้วเทียบกับที่อาจารย์สอน", en: "Have AI summarize a paper or explain an unfamiliar method, then compare it with what your lecturer taught"},
            {th: "ลองให้ช่วยร่างขั้นตอนการทดลองหรือแผนเก็บข้อมูล แล้วตรวจความเป็นไปได้จริงในพื้นที่/ห้องแล็บเอง", en: "Ask it to draft a protocol or sampling plan, then check yourself whether it is feasible in your lab or field site"}
          ]
        },
        coach: {
          focus: {th: "คุณระวังข้อมูลดี เหลือใช้ AI ให้ทุ่นแรงงานวิเคราะห์", en: "You are careful with data — now let AI take the grind out of the analysis"},
          steps: [
            {th: "ลองให้ AI เขียนสคริปต์วิเคราะห์หรือทำกราฟให้ แล้วตรวจสมมติฐานทางสถิติด้วยตัวเอง", en: "Have AI write the analysis script or the plots, then check the statistical assumptions yourself"},
            {th: "ใช้ AI ช่วยเปรียบเทียบผลของคุณกับงานที่ตีพิมพ์แล้ว แล้วไล่อ่านต้นฉบับที่มันอ้างทุกชิ้น", en: "Use AI to compare your results with published work — then read every source it cites"}
          ]
        },
        autopilot: {
          focus: {th: "ข้อมูลไม่เถียงคุณ แต่มันก็ไม่บอกด้วยว่าคุณวิเคราะห์ผิด", en: "Data won't argue back — and it won't tell you your analysis was wrong either"},
          steps: [
            {th: "ตรวจว่าวิธีที่ AI เลือกให้เหมาะกับข้อมูลจริงไหม ก่อนดูว่าผลออกมาสวยไหม", en: "Check that the method AI chose actually fits your data before you look at whether the result is pretty"},
            {th: "ลองคำนวณหรือพล็อตซ้ำด้วยมือหนึ่งรอบในงานสำคัญ ความคลาดเคลื่อนที่เจอมักอยู่ตรงขั้นที่ข้ามไป", en: "Redo one important calculation or plot by hand — the error is usually in the step you skipped"}
          ]
        },
        director: {
          focus: {th: "คุณใช้ AI อย่างมีระเบียบวิธี ทำให้มันตรวจสอบย้อนได้", en: "You use AI methodically — now make it reproducible"},
          steps: [
            {th: "บันทึกไว้ในงานว่า AI ช่วยขั้นไหนบ้าง ใช้ prompt อะไร เพื่อให้คนอื่นทำซ้ำได้", en: "Record which steps AI helped with and what you prompted, so others can reproduce it"},
            {th: "ใช้ AI กับงานที่ใหญ่เกินกำลังคนเดียว เช่น คัดกรองข้อมูลจำนวนมาก โดยคุมเกณฑ์เอง", en: "Point AI at work too large for one person — screening large datasets — while you own the criteria"}
          ]
        }
      },
      bizpol: {
        novice: {
          focus: {th: "สายนี้ AI ช่วยได้เยอะ แต่คนที่เซ็นชื่อรับผิดชอบคือคุณ", en: "AI can do a lot in your field, but the name on the decision is still yours"},
          steps: [
            {th: "ลองให้ช่วยสรุปเคส ร่างสไลด์ หรืออธิบายศัพท์กฎหมาย/เศรษฐศาสตร์ที่ยังไม่คุ้น แล้วเทียบกับตัวบทจริง", en: "Ask it to summarize a case, draft slides, or explain legal/economic terms — then check the actual text"},
            {th: "อย่าเพิ่งให้มันแตะข้อมูลจริงขององค์กรหรือลูกค้า จนกว่าจะรู้ว่าอะไรเป็นความลับ", en: "Keep real company or client data out of it until you are clear on what is confidential"}
          ]
        },
        coach: {
          focus: {th: "คุณตรวจสอบดี เหลือใช้ AI กับงานวิเคราะห์ที่ซับซ้อนขึ้น", en: "You check your sources — now aim AI at harder analysis"},
          steps: [
            {th: "ลองให้ช่วยวิเคราะห์ข้อมูลตลาด/นโยบาย แล้วท้ามันด้วยข้อโต้แย้งฝั่งตรงข้ามก่อนเชื่อ", en: "Have it analyze market or policy data, then argue the opposite case against it before you believe it"},
            {th: "ใช้ AI ร่างเอกสารหลายเวอร์ชันสำหรับผู้ฟังต่างกลุ่ม แล้วเลือกด้วยวิจารณญาณของคุณเอง", en: "Use it to draft several versions for different audiences, then choose with your own judgment"}
          ]
        },
        autopilot: {
          focus: {th: "ข้อเสนอที่ฟังดูดีแต่ตัวเลขผิด คือความเสี่ยงที่แพงที่สุดในสายนี้", en: "A proposal that reads well but has the numbers wrong is the costliest failure in your field"},
          steps: [
            {th: "ตัวเลข ข้อกฎหมาย และคำพิพากษาที่ AI อ้าง ต้องตามไปดูต้นฉบับทุกครั้ง — มันแต่งเลขคดีได้เนียนมาก", en: "Trace every number, statute and case AI cites back to the source — it invents citations convincingly"},
            {th: "ก่อนนำเสนอ ลองตอบคำถามที่ยากที่สุดของงานด้วยตัวเองโดยไม่เปิดสคริปต์", en: "Before you present, answer the hardest question about your work yourself, without the script"}
          ]
        },
        director: {
          focus: {th: "คุณนำ AI ได้ ถึงเวลาวางกติกาให้คนอื่นด้วย", en: "You lead AI well — now set the rules others will work under"},
          steps: [
            {th: "ร่างแนวปฏิบัติสั้น ๆ ให้ทีมว่างานแบบไหนใช้ AI ได้ และต้องเปิดเผยอย่างไร", en: "Draft a short team policy on which work may use AI and how it must be disclosed"},
            {th: "ใช้ AI จำลองสถานการณ์หลายทาง (scenario) แล้วตัดสินใจด้วยเกณฑ์ที่คุณกำหนดเอง", en: "Use AI to model several scenarios, then decide against criteria you set yourself"}
          ]
        }
      },
      humsoc: {
        novice: {
          focus: {th: "สายคุณทำงานกับคนและความหมาย AI ช่วยได้แต่แทนไม่ได้", en: "Your field works with people and meaning — AI can assist, it cannot stand in"},
          steps: [
            {th: "ลองให้ช่วยสรุปเอกสารชั้นต้นหรืออธิบายทฤษฎีที่ยังไม่เข้าใจ แล้วกลับไปอ่านต้นฉบับเอง", en: "Have it summarize a primary source or explain a theory, then go read the original yourself"},
            {th: "ปกปิดชื่อและข้อมูลผู้ให้ข้อมูลทุกครั้งก่อนให้ AI แตะข้อมูลภาคสนาม", en: "Anonymize names and informant details before AI touches any field data"}
          ]
        },
        coach: {
          focus: {th: "คุณรักษาเสียงของตัวเองไว้ได้ เหลือใช้ AI ให้ทุ่นแรงงานอ่าน", en: "You keep your own voice — now let AI carry the reading load"},
          steps: [
            {th: "ลองใช้ AI ช่วยให้รหัส (coding) ข้อมูลเชิงคุณภาพรอบแรก แล้วตรวจและตั้งธีมด้วยตัวเอง", en: "Let AI do a first pass at coding qualitative data, then review and name the themes yourself"},
            {th: "ใช้ AI เปิดมุมมองที่ยังไม่ได้คิด แล้วเลือกเองว่ามุมไหนมีน้ำหนักทางวิชาการ", en: "Use AI to surface angles you hadn't considered, then judge which ones hold up academically"}
          ]
        },
        autopilot: {
          focus: {th: "งานที่เขียนสวยแต่ไม่ใช่ความคิดคุณ คืองานที่ผู้ฟังจับทางได้ไม่ยากว่าทำเองหรือใช้ AI", en: "Work that reads beautifully but isn't your thinking is work an audience can tell you didn't do yourself"},
          steps: [
            {th: "ตรวจทุกการอ้างอิงที่ AI ให้มา ชื่อผู้แต่ง ปี และข้อความที่ยกมา เพราะสร้างงานวิจัยปลอมได้", en: "Verify every citation AI gives you — author, year, quotation; it fabricates references"},
            {th: "เขียนย่อหน้าสำคัญของงานด้วยตัวเองก่อนเสมอ แล้วค่อยให้ AI ช่วยขัดสำนวน", en: "Write the key paragraphs yourself first, and only then let AI polish the prose"}
          ]
        },
        director: {
          focus: {th: "คุณใช้ AI โดยไม่เสียความเป็นเจ้าของงาน", en: "You use AI without giving up authorship"},
          steps: [
            {th: "ระบุในงานให้ชัดว่า AI ช่วยส่วนไหน ตามแนวปฏิบัติของมหาวิทยาลัย", en: "State plainly which parts AI assisted with, following the university's guidance"},
            {th: "ใช้ AI กับงานที่เกินกำลัง เช่น อ่านเอกสารจำนวนมาก โดยคุณเป็นคนตีความเอง", en: "Point AI at volume — large document sets — while the interpretation stays yours"}
          ]
        }
      },
      artdes: {
        novice: {
          focus: {th: "เริ่มใช้ AI เป็นเครื่องมือคิดงาน ไม่ใช่เครื่องผลิตงานแทน", en: "Use AI as a thinking tool, not a machine that makes the work for you"},
          steps: [
            {th: "ลองใช้ AI ช่วยระดมแนวคิดหรือหา reference แล้วลงมือร่างด้วยฝีมือตัวเอง", en: "Use AI to brainstorm directions or find references, then draft it with your own hand"},
            {th: "ศึกษาว่างานที่ AI สร้างมีข้อจำกัดเรื่องลิขสิทธิ์และการส่งเป็นผลงานของตัวเองอย่างไร", en: "Learn where AI-generated work stands on copyright and on being submitted as your own"}
          ]
        },
        coach: {
          focus: {th: "คุณยังรักษาเอกลักษณ์ของตัวเองไว้ได้ เหลือใช้ AI ให้เร็วขึ้นในขั้นคิด", en: "Your own identity is still in the work — now let AI speed up the thinking stage"},
          steps: [
            {th: "ใช้ AI ทำ mood board หรือลองหลายทางเลือกของงานออกแบบ ก่อนเลือกทางที่จะทำจริง", en: "Use AI for mood boards or to try many design directions before you commit to one"},
            {th: "ให้ AI ช่วยเขียนคำอธิบายผลงาน (artist statement) แล้วเขียนทับด้วยเสียงของตัวเอง", en: "Let AI draft an artist statement, then rewrite it in your own voice"}
          ]
        },
        autopilot: {
          focus: {th: "ถ้าเอาท์พุตสวยแต่คุณทำเองไม่ได้ พอร์ตของคุณจะไม่ตรงกับฝีมือจริง", en: "If the output is beautiful but you couldn't make it yourself, your portfolio no longer matches your hand"},
          steps: [
            {th: "แยกให้ชัดว่าชิ้นไหนคือฝีมือคุณ ชิ้นไหน AI ทำ และอย่าให้สองอย่างปนกันในพอร์ต", en: "Keep it clear which pieces are your hand and which AI made — never blur the two in a portfolio"},
            {th: "ฝึกทักษะพื้นฐาน (drawing, composition, การเขียนแบบ) ต่อไป เพราะนี่คือสิ่งที่ตรวจได้ในห้องสอบและในสตูดิโอ", en: "Keep drilling fundamentals — drawing, composition, technical drafting — they are what gets tested in a studio"}
          ]
        },
        director: {
          focus: {th: "คุณใช้ AI โดยที่งานยังเป็นของคุณ", en: "You use AI and the work is still yours"},
          steps: [
            {th: "บอกให้ชัดในทุกงานว่าใช้ AI ตรงไหน เพื่อรักษาความน่าเชื่อถือของพอร์ต", en: "Say where AI was used in each piece — that is what keeps a portfolio credible"},
            {th: "ลองผลักไปถึงงานที่ต้องใช้ทั้งฝีมือและระบบ เช่น งานออกแบบที่ปรับตามข้อมูลจริง", en: "Push into work that needs both craft and systems — design that responds to real data"}
          ]
        }
      }
    },
    partnership: {
      name: {th: "ความสัมพันธ์กับ AI", en: "Human–AI Partnership"},
      desc: {th: "วิธีที่คุณทำงานกับ AI — ตรวจสอบ ตั้งคำถาม ใช้ทักษะมนุษย์ของคุณเป็นแกน และนำ AI ไม่ใช่ตามมัน", en: "How you work with AI — verifying, questioning, leading with human skills, and steering AI rather than following it"},
      color: "#B5642A",
      threshold: 60,
      subtraits: [
        {
          key: "verify",
          name: {th: "ตรวจสอบและรับผิดชอบ", en: "Verify & Own"},
          desc: {th: "ตรวจสอบผลของ AI และรับผิดชอบในผลงานของตัวเอง", en: "Check AI output and take responsibility for your work"},
          items: [
            {th: "ฉันเคยจับได้ว่า AI ตอบอย่างมั่นใจแต่ผิด เพราะฉันตรวจสอบกับแหล่งอื่นก่อนนำไปใช้", en: "I've caught AI being confidently wrong — because I checked against another source before using its answer", reverse: false, examples: {
                health: {th: "AI บอกขนาดยามาอย่างมั่นใจ ฉันไปเปิดแนวทางเวชปฏิบัติแล้วพบว่าไม่ตรง", en: "AI states a dose confidently, I open the clinical guideline, and it doesn't match"},
                engtech: {th: "AI อ้างว่าไลบรารีมีฟังก์ชันนี้ ฉันเปิดเอกสารแล้วไม่เจอ", en: "AI claims the library has this function, I open the docs, and it isn't there"},
                scienat: {th: "AI ให้ค่าคงที่มา ฉันคำนวณซ้ำเองแล้วพบว่าหน่วยผิด", en: "AI gives me a constant, I redo the calculation, and the unit is wrong"},
                bizpol: {th: "AI อ้างมาตรากฎหมายมา ฉันตามไปเปิดตัวบทจริงแล้วไม่ตรงกับที่มันบอก", en: "AI cites a statute, I go to the actual text, and it doesn't say that"},
                humsoc: {th: "AI อ้างชื่อผู้แต่งกับปีมา ฉันตามหาต้นฉบับแล้วไม่มีงานชิ้นนั้นอยู่จริง", en: "AI cites an author and year, I go looking, and the work doesn't exist"},
                artdes: {th: "AI บอกชื่อศิลปินกับยุคสมัยมา ฉันค้นจริงแล้วพบว่าไม่ตรง", en: "AI names an artist and period, I look it up, and it doesn't check out"}
              }},
            {th: "ถ้า AI ตอบเร็วและฟังดูสมเหตุสมผล ฉันมักนำไปใช้ทันที", en: "When AI answers quickly and sounds reasonable, I usually use it as-is", reverse: true, examples: {
                health: {th: "AI อธิบายกลไกของโรคมาฟังดูเข้าท่า ฉันใส่ลงรายงานเลยโดยไม่ได้เช็ค", en: "AI explains a disease mechanism plausibly, and I put it in the report without checking"},
                engtech: {th: "โค้ดที่ AI ให้มาคอมไพล์ผ่าน ฉันก็ถือว่าใช้ได้แล้วส่งเลย", en: "The code AI gave me compiles, so I take it as correct and ship it"},
                scienat: {th: "กราฟที่ได้ออกมาสวย ฉันก็ถือว่าผลถูกแล้วใส่ลงรายงาน", en: "The chart comes out clean, so I call the result right and put it in the report"},
                bizpol: {th: "บทวิเคราะห์ที่ AI ร่างมาอ่านแล้วดูเป็นมืออาชีพ ฉันส่งต่อเลย", en: "The analysis AI drafted reads professionally, so I pass it straight on"},
                humsoc: {th: "ย่อหน้าวิเคราะห์ที่ได้มาสำนวนดี ฉันก็เชื่อแล้ววางลงเปเปอร์เลย", en: "The analysis paragraph reads well, so I trust it and drop it into my paper"},
                artdes: {th: "ภาพที่ได้ออกมาสวยมาก ฉันส่งเลยโดยไม่ได้ย้อนดูว่าตรงโจทย์ไหม", en: "The image comes out beautiful, so I submit it without checking it against the brief"}
              }}
          ]
        },
        {
          key: "restraint",
          name: {th: "เลือกใช้อย่างมีสติ", en: "Restraint"},
          desc: {th: "รู้ว่าเมื่อใดควรใช้ AI และเมื่อใดควรลงมือเอง", en: "Know when to use AI and when to do it yourself"},
          items: [
            {th: "มีบางงานที่ฉันเลือกทำเองโดยไม่เปิด AI เพราะอยากให้ออกมาเป็นแบบที่ฉันคิดจริง ๆ", en: "There are tasks I choose to do without AI because I want the result to truly reflect my own thinking", reverse: false, examples: {
                health: {th: "ถึงเวลาเขียนบันทึกสะท้อนคิดหลังออกฝึก ฉันเลือกเขียนเองโดยไม่เปิด AI", en: "Time to write my post-rotation reflection, and I choose to write it without opening AI"},
                engtech: {th: "เจอโจทย์อัลกอริทึม ฉันเลือกแก้เองโดยไม่เปิด AI เพราะอยากเข้าใจจริง ๆ", en: "Faced with an algorithm problem, I solve it without AI because I want to really understand it"},
                scienat: {th: "เจอโจทย์พิสูจน์ ฉันเลือกไล่ด้วยมือเองจนจบโดยไม่เปิด AI", en: "Faced with a proof, I work it through by hand without opening AI"},
                bizpol: {th: "ได้เคสมาใหม่ ฉันคิดข้อเสนอและเหตุผลของตัวเองให้เสร็จก่อน ค่อยเปิด AI", en: "Given a new case, I form my own recommendation and reasons before opening AI"},
                humsoc: {th: "ต้องเขียนเรียงความแสดงจุดยืน ฉันเลือกเขียนเอง เพราะอยากให้เป็นความคิดฉันจริง ๆ", en: "Writing an essay that takes a position, I write it myself so the view is genuinely mine"},
                artdes: {th: "เริ่มงานใหม่ ฉันเลือกร่างด้วยมือเองก่อน เพื่อรักษาลายเส้นของตัวเอง", en: "Starting a new piece, I sketch by hand first to keep my own line"}
              }},
            {th: "ช่วงหลัง ๆ แทบทุกงานฉันจะเปิด AI ก่อนเป็นอย่างแรก แม้แต่งานที่ฉันทำเองได้เร็วกว่า", en: "Lately I open AI first for almost every task — even ones I could do faster myself", reverse: true, examples: {
                health: {th: "เลกเชอร์เพิ่งจบ ฉันเปิด AI ให้สรุปทันที ทั้งที่จดเองก็เร็วกว่า", en: "The lecture just ended and I open AI to summarize it, though noting it myself is faster"},
                engtech: {th: "ต้องเขียนโค้ดสั้น ๆ ที่ทำเองได้ในห้านาที ฉันก็ยังเปิด AI ก่อน", en: "For a snippet I could write in five minutes, I still open AI first"},
                scienat: {th: "ต้องคำนวณเลขง่าย ๆ ที่กดเครื่องคิดเลขก็เสร็จ ฉันก็ยังไปถาม AI", en: "For arithmetic a calculator would finish, I still go and ask AI"},
                bizpol: {th: "ต้องร่างอีเมลสั้น ๆ ถึงอาจารย์ ฉันก็ยังเปิด AI ให้ร่างให้ก่อน", en: "For a short email to a lecturer, I still have AI draft it first"},
                humsoc: {th: "ต้องพิมพ์ข้อความสั้น ๆ ถึงเพื่อนร่วมทีม ฉันก็ยังให้ AI ร่างให้ก่อน", en: "For a short message to a teammate, I still have AI draft it first"},
                artdes: {th: "ได้โจทย์ใหม่มา ฉันเปิด AI หาไอเดียแรกทันที ทั้งที่เมื่อก่อนคิดเองได้", en: "A new brief arrives and I open AI for the first idea, though I used to find it myself"}
              }}
          ]
        },
        {
          key: "human_lead",
          name: {th: "ใช้ทักษะมนุษย์เป็นแกน", en: "Human-skill lead"},
          desc: {th: "ใช้ empathy ความคิดสร้างสรรค์ และวิจารณญาณของตัวเองเป็นแกน AI เป็นตัวช่วย", en: "Lead with empathy, creativity, and judgment — AI assists"},
          items: [
            {th: "เวลาคุยกับลูกค้า/เพื่อนร่วมงาน/ผู้ใช้ ฉันใช้การฟังและการสังเกตของตัวเองเป็นหลักในการทำความเข้าใจ ไม่ใช่ให้ AI สรุปแทน", en: "When talking with customers/colleagues/users, I rely on my own listening and observation to understand them — not on AI summaries", reverse: false, examples: {
                health: {th: "ก่อนจะสรุปอาการ ฉันซักประวัติและสังเกตผู้ป่วยด้วยตัวเองก่อนเสมอ", en: "Before forming a picture, I take the history and observe the patient myself"},
                engtech: {th: "ก่อนออกแบบฟีเจอร์ ฉันไปนั่งคุยกับผู้ใช้จริงด้วยตัวเอง", en: "Before designing a feature, I go and talk to real users myself"},
                scienat: {th: "ก่อนสรุปผล ฉันลงแปลงหรือเข้าแล็บไปดูด้วยตาตัวเองก่อน", en: "Before drawing a conclusion, I go to the plot or the bench and look myself"},
                bizpol: {th: "ก่อนเขียนข้อเสนอ ฉันไปคุยกับลูกค้าหรือผู้มีส่วนได้ส่วนเสียด้วยตัวเอง", en: "Before writing a recommendation, I talk to the clients or stakeholders myself"},
                humsoc: {th: "ก่อนวิเคราะห์ ฉันลงพื้นที่ไปฟังผู้ให้ข้อมูลด้วยตัวเองก่อน", en: "Before analyzing, I go into the field and listen to my informants myself"},
                artdes: {th: "ก่อนเริ่มออกแบบ ฉันไปฟังโจทย์และดูพื้นที่จริงด้วยตัวเอง", en: "Before designing, I hear the brief and see the real space myself"}
              }},
            {th: "หลายครั้งงานที่ฉันส่งออกไป แนวคิดหลักมาจาก AI มากกว่ามาจากตัวฉันเอง", en: "Often, the core ideas in work I hand in come more from AI than from me", reverse: true, examples: {
                health: {th: "แผนการดูแลผู้ป่วยที่ฉันส่ง แนวคิดหลักมาจาก AI มากกว่ามาจากที่ฉันตรวจมาเอง", en: "In the care plan I hand in, the thinking is more AI's than what I observed myself"},
                engtech: {th: "แนวทางออกแบบระบบในโปรเจกต์ที่ฉันส่ง มาจาก AI มากกว่ามาจากที่ฉันคิดเอง", en: "In the project I submit, the system design is more AI's than mine"},
                scienat: {th: "สมมติฐานกับวิธีวิเคราะห์ในรายงานที่ฉันส่ง มาจาก AI มากกว่ามาจากข้อมูลที่ฉันเห็น", en: "In the report I hand in, the hypothesis and method came from AI more than from my data"},
                bizpol: {th: "ข้อเสนอเชิงนโยบายในงานที่ฉันส่ง มาจาก AI มากกว่ามาจากที่ฉันอ่านมาเอง", en: "In what I hand in, the recommendation came from AI more than from my own reading"},
                humsoc: {th: "ประเด็นหลักในเปเปอร์ที่ฉันส่ง มาจาก AI มากกว่ามาจากที่ฉันตีความเอง", en: "In the paper I hand in, the central argument is AI's more than my own reading"},
                artdes: {th: "คอนเซ็ปต์ของงานที่ฉันเอาเข้าคริติก มาจาก AI มากกว่ามาจากตัวฉันเอง", en: "The concept of the piece I bring to crit came from AI more than from me"}
              }}
          ]
        },
        {
          key: "direction",
          name: {th: "นำการทำงานของ AI", en: "Direction"},
          desc: {th: "คุณนำ AI ไม่ใช่ AI นำคุณ", en: "You steer AI, not AI steers you"},
          items: [
            {th: "ก่อนถาม AI ฉันมักประเมินก่อนว่าตอนนี้ตัวเองรู้อะไรและยังไม่รู้อะไร แล้วเลือกวิธีใช้ให้เหมาะ — สั่งงานตรง ๆ ให้ช่วยระดมไอเดีย หรือให้ช่วยค้นเปิดมุมใหม่", en: "Before asking AI, I usually assess what I already know and don't know, then choose how to use it — direct instructions, brainstorming help, or open-ended research", reverse: false, examples: {
                health: {th: "ก่อนถาม AI ฉันรู้ตัวว่าติดตรงกลไกของโรค ไม่ใช่ตรงชื่อยา แล้วถามให้ตรงจุดนั้น", en: "Before asking, I know I'm stuck on the mechanism, not the drug name, and ask about that"},
                engtech: {th: "ก่อนถาม AI ฉันรู้ตัวว่าติดตรงตรรกะ ไม่ใช่ตรงไวยากรณ์ แล้วถามให้ตรงจุดนั้น", en: "Before asking, I know I'm stuck on the logic, not the syntax, and ask about that"},
                scienat: {th: "ก่อนถาม AI ฉันรู้ตัวว่าติดตรงการเลือกวิธี ไม่ใช่ตรงการคำนวณ แล้วถามให้ตรงจุดนั้น", en: "Before asking, I know I'm stuck on choosing the method, not the arithmetic, and ask about that"},
                bizpol: {th: "ก่อนถาม AI ฉันรู้ตัวว่าติดตรงการตีความข้อกฎหมาย ไม่ใช่ตรงข้อเท็จจริง แล้วถามให้ตรงจุด", en: "Before asking, I know I'm stuck on interpreting the rule, not the facts, and ask about that"},
                humsoc: {th: "ก่อนถาม AI ฉันรู้ตัวว่าติดตรงกรอบวิเคราะห์ ไม่ใช่ตรงตัวข้อมูล แล้วถามให้ตรงจุดนั้น", en: "Before asking, I know I'm stuck on the framework, not the data, and ask about that"},
                artdes: {th: "ก่อนถาม AI ฉันรู้ตัวว่าติดตรงคอนเซ็ปต์ ไม่ใช่ตรงเทคนิค แล้วถามให้ตรงจุดนั้น", en: "Before asking, I know I'm stuck on the concept, not the technique, and ask about that"}
              }},
            {th: "ฉันมักพิมพ์ถาม AI ก่อน แล้วค่อยคิดตามแนวทางที่มันเสนอมา", en: "I usually ask AI first, then shape my thinking around whatever it suggests", reverse: true, examples: {
                health: {th: "ได้เคสมา ฉันให้ AI ไล่การวินิจฉัยแยกโรคก่อน แล้วค่อยคิดตามที่มันเสนอ", en: "A case arrives and I have AI list the differentials first, then think along its lines"},
                engtech: {th: "เจอบั๊ก ฉันให้ AI เสนอวิธีแก้ก่อน แล้วค่อยคิดตามที่มันเสนอ", en: "A bug appears and I have AI propose a fix first, then think along its lines"},
                scienat: {th: "ได้ข้อมูลมา ฉันให้ AI เลือกวิธีวิเคราะห์ก่อน แล้วค่อยคิดตามที่มันเสนอ", en: "Data arrives and I let AI pick the analysis first, then think along its lines"},
                bizpol: {th: "ได้เคสมา ฉันให้ AI ตั้งข้อเสนอก่อน แล้วค่อยอ่านข้อมูลตามกรอบที่มันให้", en: "A case arrives and I let AI form the recommendation first, then read the evidence its way"},
                humsoc: {th: "เริ่มเปเปอร์ ฉันให้ AI ตั้งประเด็นก่อน แล้วค่อยคิดตามกรอบที่มันให้", en: "Starting a paper, I let AI frame the thesis first, then think inside its frame"},
                artdes: {th: "ได้โจทย์มา ฉันให้ AI เสนอคอนเซ็ปต์ก่อน แล้วค่อยร่างตามที่มันให้", en: "A brief arrives and I let AI propose the concept first, then sketch along its lines"}
              }}
          ]
        },
        {
          key: "learning",
          name: {th: "เรียนรู้ ไม่ใช่แค่ได้คำตอบ", en: "Learn, not just answers"},
          desc: {th: "ใช้ AI เป็นติวเตอร์ที่ทำให้เข้าใจมากขึ้น ไม่ใช่คนทำงานแทน", en: "Use AI as a tutor that deepens understanding — not a stand-in that does the work"},
          items: [
            {th: "เวลาใช้ AI กับเรื่องที่ต้องเรียนรู้ ฉันมักให้มันช่วยอธิบายและถามต่อ จนตัวเองเข้าใจพอที่จะอธิบายเองได้", en: "When I use AI on something I need to learn, I usually have it explain and take follow-up questions until I understand well enough to explain it myself", reverse: false, examples: {
                health: {th: "ไม่เข้าใจกลไกของยา ฉันถาม AI ต่อไปเรื่อย ๆ จนอธิบายให้เพื่อนฟังเองได้", en: "I don't follow a drug's mechanism, so I keep asking until I can explain it to a friend"},
                engtech: {th: "ไม่เข้าใจโค้ดที่ได้มา ฉันถามต่อไปเรื่อย ๆ จนอธิบายได้ว่าแต่ละบรรทัดทำอะไร", en: "I don't follow the code I got, so I keep asking until I can explain every line"},
                scienat: {th: "ไม่แน่ใจว่าทำไมต้องใช้วิธีนี้ ฉันถามต่อจนอธิบายได้ว่ามันเหมาะกับข้อมูลชุดนี้อย่างไร", en: "Unsure why this method, I keep asking until I can say why it fits this data"},
                bizpol: {th: "ไม่เข้าใจที่มาของข้อเสนอ ฉันถามต่อจนอธิบายเหตุผลเบื้องหลังได้ด้วยตัวเอง", en: "Unclear where a recommendation came from, I keep asking until I can defend its reasoning"},
                humsoc: {th: "อ่านทฤษฎีแล้วยังงง ฉันถามต่อจนอธิบายมันด้วยคำของตัวเองได้", en: "Still lost in a theory, I keep asking until I can explain it in my own words"},
                artdes: {th: "ไม่รู้ว่าทำไมองค์ประกอบนี้ถึงเวิร์ก ฉันถามต่อจนอธิบายได้ด้วยตัวเอง", en: "Unsure why a composition works, I keep asking until I can say why myself"}
              }},
            {th: "หลายครั้งฉันส่งงานที่ AI ทำให้ ทั้งที่ยังอธิบายเองไม่ได้ว่าเนื้อหาในนั้นถูกต้องหรือมาได้อย่างไร", en: "I often hand in work AI produced even though I couldn't yet explain whether its content is right or how it got there", reverse: true, examples: {
                health: {th: "ฉันส่งรายงานกรณีศึกษาไปแล้ว ทั้งที่อธิบายเหตุผลทางคลินิกในนั้นเองไม่ได้", en: "I hand in a case report whose clinical reasoning I can't explain"},
                engtech: {th: "ฉันส่งโค้ดที่รันผ่านไปแล้ว ทั้งที่อธิบายไม่ได้ว่ามันทำงานอย่างไร", en: "I hand in code that runs, though I can't say how it works"},
                scienat: {th: "ฉันส่งผลวิเคราะห์ไปแล้ว ทั้งที่อธิบายไม่ได้ว่าได้ตัวเลขนี้มาอย่างไร", en: "I hand in results I can't say how I arrived at"},
                bizpol: {th: "ฉันส่งบทวิเคราะห์ไปแล้ว ทั้งที่ถ้าอาจารย์ถามเจาะลึกก็ตอบไม่ได้", en: "I hand in an analysis I couldn't defend if my lecturer pushed"},
                humsoc: {th: "ฉันส่งบทวิเคราะห์ที่อ้างทฤษฎีไปแล้ว ทั้งที่ตัวเองยังไม่เข้าใจทฤษฎีนั้น", en: "I hand in an analysis citing theory I don't yet understand"},
                artdes: {th: "ฉันเอาผลงานเข้าคริติกไปแล้ว ทั้งที่อธิบายเหตุผลของการตัดสินใจไม่ได้", en: "I bring a piece to crit whose decisions I can't account for"}
              }}
          ]
        },
        {
          key: "privacy",
          name: {th: "ปกป้องข้อมูล", en: "Data privacy"},
          desc: {th: "รู้ว่าข้อมูลไหนไม่ควรป้อนให้ AI และปกป้องข้อมูลของตัวเองและผู้อื่น", en: "Know what should never go into AI — and protect your own and others' data"},
          items: [
            {th: "ก่อนป้อนอะไรให้ AI ฉันเช็คก่อนว่าไม่มีข้อมูลส่วนตัวของตัวเองหรือผู้อื่น หรือข้อมูลลับของงาน/องค์กร ปนอยู่ในนั้น", en: "Before feeding anything into AI, I check that it contains no personal data — mine or other people's — and no confidential work or organizational information", reverse: false, examples: {
                health: {th: "ก่อนให้ AI ช่วยสรุปเคส ฉันตัดชื่อ เลขประจำตัวผู้ป่วย และรายละเอียดที่ระบุตัวได้ออกก่อน", en: "Before asking AI to summarize a case, I strip names, hospital numbers and identifying details"},
                engtech: {th: "ก่อนแปะโค้ดให้ AI ดู ฉันเอาคีย์ API และข้อมูลผู้ใช้จริงออกก่อน", en: "Before pasting code for AI, I remove API keys and real user data"},
                scienat: {th: "ก่อนให้ AI ช่วยวิเคราะห์ ฉันตรวจว่าข้อมูลดิบที่ยังไม่ตีพิมพ์ไม่หลุดไปอยู่ในแชต", en: "Before asking AI to analyze, I check that unpublished raw data isn't going into the chat"},
                bizpol: {th: "ก่อนให้ AI ช่วยร่าง ฉันตรวจว่าไม่มีข้อมูลลูกค้าหรือตัวเลขภายในองค์กรปนอยู่", en: "Before asking AI to draft, I check that no client data or internal figures are mixed in"},
                humsoc: {th: "ก่อนให้ AI ช่วยวิเคราะห์บทสัมภาษณ์ ฉันปกปิดชื่อผู้ให้สัมภาษณ์ก่อน", en: "Before asking AI to analyze interviews, I anonymize the interviewees first"},
                artdes: {th: "ก่อนอัปไฟล์ให้ AI ดู ฉันตรวจว่างานลูกค้าที่ยังไม่เปิดตัวไม่ติดไปด้วย", en: "Before uploading files for AI, I check that an unreleased client project isn't going with them"}
              }},
            {th: "ฉันเคยวางข้อความหรือไฟล์งานจริงลงในแชต AI โดยไม่ได้หยุดคิดว่าในนั้นมีข้อมูลส่วนตัวหรือข้อมูลลับหรือเปล่า", en: "I've pasted real work text or files into an AI chat without stopping to think whether they contained personal or confidential information", reverse: true, examples: {
                health: {th: "ฉันเคยวางภาพหรือบันทึกจากหอผู้ป่วยลงแชต โดยไม่ได้หยุดคิดว่ามีข้อมูลผู้ป่วยอยู่ในนั้น", en: "I once pasted ward images or notes into a chat without stopping to think whose data was in them"},
                engtech: {th: "ฉันเคยวางไฟล์โปรเจกต์ของที่ฝึกงานทั้งไฟล์ลงแชต โดยไม่ได้ดูว่ามีอะไรอยู่ในนั้น", en: "I once pasted a whole internship project file into a chat without looking at what was inside"},
                scienat: {th: "ฉันเคยวางไฟล์ข้อมูลดิบของแล็บทั้งไฟล์ลงแชต โดยไม่ได้คิดว่ามันยังไม่ตีพิมพ์", en: "I once pasted a whole raw lab file into a chat without thinking that it was unpublished"},
                bizpol: {th: "ฉันเคยวางไฟล์สัญญาหรืองบการเงินทั้งไฟล์ลงแชต โดยไม่ได้คิดว่าเป็นข้อมูลภายใน", en: "I once pasted a whole contract or financial statement into a chat without thinking it was internal"},
                humsoc: {th: "ฉันเคยวางไฟล์ถอดเทปหรือรายชื่อผู้เข้าร่วมวิจัยลงแชต โดยไม่ได้หยุดคิดก่อน", en: "I once pasted a transcript or a participant list into a chat without stopping to think"},
                artdes: {th: "ฉันเคยอัปไฟล์งานออกแบบของลูกค้าที่ยังไม่เปิดตัว โดยไม่ได้คิดว่าทำได้หรือเปล่า", en: "I once uploaded a client's unreleased design files without asking whether I could"}
              }}
          ]
        },
        {
          key: "self_reliance",
          name: {th: "ทำเองได้เมื่อไม่มี AI", en: "Stands on your own"},
          desc: {th: "ถ้าวันนี้ไม่มี AI คุณยังทำงานและสอบได้ด้วยตัวเอง", en: "With AI switched off, you can still do the work and sit the exam"},
          items: [
            {th: "ถ้าพรุ่งนี้ต้องสอบโดยไม่ให้ใช้ AI ฉันมั่นใจว่าทำเรื่องที่เคยให้ AI ช่วยได้ด้วยตัวเอง", en: "If tomorrow's exam banned AI, I'm confident I could do the things I usually get AI's help with", reverse: false, examples: {
                  health: {th: "ถ้าพรุ่งนี้ต้องซักประวัติผู้ป่วยจริงโดยไม่มีตัวช่วย ฉันมั่นใจว่าทำได้", en: "If tomorrow I had to take a real patient history with no help, I am confident I could"},
                  engtech: {th: "ถ้าพรุ่งนี้ต้องเขียนโค้ดในห้องสอบโดยไม่มี autocomplete ฉันมั่นใจว่าทำได้", en: "If tomorrow I had to code in an exam with no autocomplete, I am confident I could"},
                  scienat: {th: "ถ้าพรุ่งนี้ต้องคำนวณและแปลผลการทดลองเองในห้องสอบ ฉันมั่นใจว่าทำได้", en: "If tomorrow I had to calculate and interpret a result in an exam, I am confident I could"},
                  bizpol: {th: "ถ้าพรุ่งนี้ต้องวิเคราะห์เคสสดในเวลาที่จำกัด ฉันมั่นใจว่าทำได้", en: "If tomorrow I had to analyze a case live under time, I am confident I could"},
                  humsoc: {th: "ถ้าพรุ่งนี้ต้องเขียนเรียงความวิเคราะห์สดในห้องสอบ ฉันมั่นใจว่าทำได้", en: "If tomorrow I had to write an analytical essay live in an exam, I am confident I could"},
                  artdes: {th: "ถ้าพรุ่งนี้ต้องร่างแบบหรือวาดสดต่อหน้าคณะกรรมการ ฉันมั่นใจว่าทำได้", en: "If tomorrow I had to sketch live in front of a jury, I am confident I could"}
                }},
            {th: "มีงานที่ฉันส่งผ่านมาได้เพราะ AI แต่ถ้าต้องทำสดในห้องสอบคงทำไม่ได้", en: "There is work I got through because of AI that I could not produce on my own in an exam room", reverse: true, examples: {
                  health: {th: "ฉันนำเสนอเคสผ่านมาได้ แต่พอถูกถามรายละเอียดก็ตอบไม่ได้", en: "I got through a case presentation, but couldn't answer when asked for details"},
                  engtech: {th: "สไลด์โปรเจกต์ของฉันผ่านมาได้ แต่ฉันอธิบายสถาปัตยกรรมในสไลด์ตัวเองไม่ได้", en: "My project slides passed, but I couldn't explain the architecture on my own slide"},
                  scienat: {th: "สไลด์ผลการทดลองของฉันผ่านมาได้ แต่ฉันอธิบายวิธีวิเคราะห์ในนั้นไม่ได้", en: "My result slides passed, but I couldn't explain the method on them"},
                  bizpol: {th: "สไลด์วิเคราะห์ของฉันผ่านมาได้ แต่พอถูกถามที่มาของตัวเลขก็ตอบไม่ได้", en: "My analysis deck passed, but I couldn't account for the numbers when asked"},
                  humsoc: {th: "สไลด์ที่ฉันอ้างทฤษฎีผ่านมาได้ แต่ตอบคำถามอาจารย์เรื่องทฤษฎีนั้นไม่ได้", en: "My slides citing theory passed, but I couldn't answer questions on the theory"},
                  artdes: {th: "งานของฉันผ่านคริติกมาได้ แต่ฉันอธิบายเหตุผลของการออกแบบไม่ได้", en: "My piece got through crit, but I couldn't justify the design decisions"}
                }}
          ]
        },
        {
          key: "effort",
          name: {th: "ยอมลำบากเพื่อให้เก่งขึ้น", en: "Willing to struggle"},
          desc: {th: "ยอมใช้เวลาและความยาก เพื่อให้ทักษะเป็นของตัวเองจริง ๆ", en: "You accept time and difficulty so the skill becomes genuinely yours"},
          items: [
            {th: "ฉันยอมใช้เวลานานขึ้นทำเอง ในเรื่องที่รู้ว่าตัวเองต้องเก่งให้ได้", en: "I take the slower route and do it myself on the things I know I need to be good at", reverse: false, examples: {
                  health: {th: "ฉันนั่งทำความเข้าใจกลไกของโรคเองจนเข้าใจ ทั้งที่ถาม AI แล้วจบในนาทีเดียว", en: "I work out a disease mechanism myself, though asking AI would end it in a minute"},
                  engtech: {th: "ฉันไล่ดีบักเองจนเจอสาเหตุ ทั้งที่โยนให้ AI แก้ก็จบไปแล้ว", en: "I debug until I find the cause, though handing it to AI would have ended it"},
                  scienat: {th: "ฉันไล่คำนวณหรือพิสูจน์เองจนจบ ทั้งที่ให้ AI ทำก็เสร็จเร็วกว่า", en: "I work a calculation or proof through myself, though AI would finish it faster"},
                  bizpol: {th: "ฉันอ่านตัวบทหรืองบการเงินเองทั้งฉบับ ทั้งที่ให้ AI สรุปให้ก็ได้", en: "I read the statute or the financial statement in full, though AI could summarize it"},
                  humsoc: {th: "ฉันอ่านต้นฉบับเองทั้งเล่ม ทั้งที่อ่านฉบับย่อก็สอบผ่านแล้ว", en: "I read the original in full, though the summary would have got me through the exam"},
                  artdes: {th: "ฉันฝึกวาดหรือเขียนแบบเองซ้ำ ๆ จนมือขึ้น ทั้งที่ให้ AI สร้างให้ก็ได้งานแล้ว", en: "I draw or draft again and again until my hand knows it, though AI could just make it"}
                }},
            {th: "พอเริ่มรู้สึกยาก ฉันมักเปลี่ยนไปให้ AI ทำให้จบ ๆ", en: "As soon as it starts to feel hard, I tend to hand it to AI just to get it done", reverse: true, examples: {
                  health: {th: "พอเจอเคสที่ซับซ้อนจนเริ่มงง ฉันก็เปลี่ยนไปให้ AI สรุปให้เลย", en: "As soon as a case gets complex enough to confuse me, I switch to letting AI summarize it"},
                  engtech: {th: "พอบั๊กหายากจนเริ่มหงุดหงิด ฉันก็โยนโค้ดทั้งไฟล์ให้ AI แก้", en: "As soon as a bug gets frustrating, I throw the whole file at AI"},
                  scienat: {th: "พอสถิติเริ่มยากจนไม่แน่ใจ ฉันก็ให้ AI เลือกวิธีให้เลย", en: "As soon as the statistics get uncertain, I let AI pick the method"},
                  bizpol: {th: "พอประเด็นกฎหมายเริ่มซับซ้อนจนตามไม่ทัน ฉันก็ให้ AI ตอบให้เลย", en: "As soon as the legal issue gets tangled, I let AI answer it"},
                  humsoc: {th: "พอทฤษฎีเริ่มยากจนอ่านไม่ไหว ฉันก็ให้ AI สรุปแทนการอ่านเอง", en: "As soon as the theory gets heavy, I let AI summarize instead of reading it"},
                  artdes: {th: "พอร่างไม่ออกจนเริ่มท้อ ฉันก็ให้ AI สร้างภาพให้แล้วใช้เลย", en: "As soon as the sketch won't come, I have AI generate one and use it"}
                }}
          ]
        },
        {
          key: "self_trust",
          name: {th: "เชื่อตัวเองพอ ๆ กับเชื่อ AI", en: "Trust your own judgment"},
          desc: {th: "เวลาที่คุณกับ AI เห็นไม่ตรงกัน คุณยังให้น้ำหนักกับความคิดตัวเอง", en: "When you and AI disagree, your own thinking still carries weight"},
          items: [
            {th: "เวลาที่ความเห็นของฉันต่างจาก AI ฉันหาข้อมูลเพิ่มก่อนตัดสิน ไม่ใช่เปลี่ยนตามมันทันที", en: "When my view differs from AI's, I look into it before deciding — I don't just switch to its answer", reverse: false, examples: {
                  health: {th: "AI แนะนำต่างจากที่เรียนมา ฉันไม่เปลี่ยนตามทันที แต่ไปเปิดแนวทางเวชปฏิบัติดูเอง", en: "AI suggests something different from what I was taught; I don't switch, I check the guideline myself"},
                  engtech: {th: "AI บอกว่าโค้ดฉันผิด ฉันไม่แก้ตามทันที แต่ไล่ดูทีละขั้นด้วยตัวเองก่อน", en: "AI says my code is wrong; I don't change it, I trace it myself first"},
                  scienat: {th: "AI เสนอวิธีที่ฉันรู้สึกว่าไม่เหมาะกับข้อมูล ฉันไปตรวจเงื่อนไขเองก่อนตัดสิน", en: "AI proposes a method I doubt fits my data; I check the assumptions myself before deciding"},
                  bizpol: {th: "AI สรุปข้อกฎหมายต่างจากที่ฉันเข้าใจ ฉันไปเปิดตัวบทอ่านเองก่อน", en: "AI reads a provision differently from me; I open the text and read it myself first"},
                  humsoc: {th: "AI ตีความข้อมูลต่างจากที่ฉันเห็นในพื้นที่ ฉันกลับไปอ่านบันทึกของตัวเองก่อน", en: "AI reads my data differently from what I saw in the field; I go back to my own notes first"},
                  artdes: {th: "AI บอกว่างานควรไปอีกทาง ฉันลองทำทั้งสองแบบมาเทียบก่อนตัดสิน", en: "AI says the piece should go another way; I make both and compare before deciding"}
                }},
            {th: "ถึงจะรู้สึกว่าไม่น่าใช่ แต่สุดท้ายฉันก็มักเชื่อ AI เพราะคิดว่ามันเก่งกว่าฉัน", en: "Even when something feels off, I usually go with AI because I assume it knows better than me", reverse: true, examples: {
                  health: {th: "ฉันรู้สึกว่าคำอธิบายไม่น่าใช่ แต่ก็ใช้ตาม เพราะคิดว่า AI รู้มากกว่าฉัน", en: "It felt off, but I used it anyway, because AI must know more than me"},
                  engtech: {th: "ฉันคิดว่าวิธีของตัวเองถูก แต่สุดท้ายก็แก้ตามที่ AI บอก", en: "I thought my own approach was right, but changed it to AI's in the end"},
                  scienat: {th: "ฉันสงสัยในผลที่ได้ แต่ไม่กล้าค้าน เลยรายงานตามที่ AI สรุปมา", en: "I doubted the result but didn't push back, so I reported AI's conclusion"},
                  bizpol: {th: "ฉันไม่เห็นด้วยกับข้อสรุป แต่ก็ใส่ลงสไลด์ไปตามนั้น", en: "I disagreed with the conclusion but put it on the slide anyway"},
                  humsoc: {th: "ฉันรู้สึกว่าการตีความไม่ตรงกับที่อ่านมา แต่ก็เขียนตาม AI", en: "The reading felt wrong against what I had read, but I wrote AI's version"},
                  artdes: {th: "ฉันไม่ชอบทิศทางที่ AI เสนอ แต่ก็ทำตาม เพราะคิดว่ามันรู้ว่าอะไรดีกว่า", en: "I didn't like AI's direction but followed it, assuming it knew better"}
                }}
          ]
        }
      ],
      quadrants: {
        novice: {
          name: {th: "น้องใหม่ยุค AI", en: "AI-Era Newcomer"},
          short: {th: "ทักษะพื้นฐาน+กำลังเรียนรู้การใช้งาน AI", en: "Foundational skills — still learning how to work with AI"},
          color: "#9A8C5A",
          blurb: {
            th: "คุณกำลังเริ่มต้นทั้งทักษะการใช้ AI และสไตล์การใช้งาน เปิดใจเรียนรู้สองด้านไปพร้อมๆกัน คือ พื้นฐาน AI และพร้อมฝึกตั้งคำถามและตรวจสอบ",
            en: "You are at the start of both your AI skills and your style of using them. Keep learning the two together: the basics of AI, and the habit of questioning and checking what it gives you."
          },
          nudge: {
            th: "เริ่มจากรู้จักการใช้ AI และฝึกตั้งคำถาม 'เอ๊ะ!' 'ทำไม?' 'จริงไหม?' กับคำตอบที่ได้ AI ทุกครั้ง",
            en: "Start by getting to know AI, and practise asking 'wait — why? is that true?' of every answer it gives you"
          },
          partnershipNextH: {th: "ขยับสไตล์การใช้ AI", en: "Grow your AI partnership style"},
          partnershipNext: [
            {th: "ทุกครั้งที่ AI ตอบ ฝึกถาม 'ทำไม' และหาแหล่งยืนยันอย่างน้อย 1 แหล่ง", en: "Every time AI answers, practice asking 'why' and verify with at least one other source"},
            {th: "ก่อนเปิด AI ลองคิดคำตอบของตัวเองก่อน 1 นาที — สร้างนิสัยคิดเองก่อน", en: "Before opening AI, try your own answer for 1 minute — build the habit of thinking first"},
            {th: "เริ่มใช้ AI ในงานเล็ก ๆ ก่อน อย่ารีบใช้กับงานสำคัญ", en: "Start with small tasks before using AI on critical work"}
          ],
          persona: {
            who: {
              th: "คนที่เพิ่งเริ่มทำความรู้จัก AI — อาจเป็นนักเรียน นิสิต หรือคนทำงานที่ยังไม่ได้ใช้ AI จริงจัง รู้จักแต่ยังไม่มั่นใจ / ยังไม่รู้จะเริ่มยังไง",
              en: "Someone just getting acquainted with AI — students or workers who haven't actively used AI yet. They've heard about it but aren't sure where to start."
            },
            strengths: [
              {th: "เปิดใจเรียนรู้ ไม่ติดนิสัยการใช้แบบผิด ๆ ตั้งแต่ต้น", en: "Open to learning — no bad habits formed yet"},
              {th: "พร้อมตั้งคำถามและสำรวจไปด้วยกัน", en: "Ready to question and explore"}
            ],
            watchouts: [
              {th: "อาจกลัวจนไม่กล้าลอง — ความก้าวหน้าจะช้า", en: "May freeze and avoid trying, slowing growth"},
              {th: "ถ้าเริ่มใช้แบบไม่มีคนแนะนำ อาจเปลี่ยนเป็น Auto-pilot ได้ในอนาคต", en: "Without guidance, may slip into Auto-pilot habits later"}
            ],
            workshops: [
              {th: "พื้นฐาน AI สำหรับทุกคน", en: "AI Foundations for Everyone"},
              {th: "การใช้ AI อย่างมีความรับผิดชอบ", en: "Responsible AI Practices"},
              {th: "Prompt พื้นฐานในชีวิตประจำวัน", en: "Everyday Prompting Basics"}
            ]
          }
        },
        coach: {
          name: {th: "ผู้ตั้งคำถาม", en: "Thoughtful Learner"},
          short: {th: "สไตล์การใช้ AI ดีอยู่แล้ว แค่ขยับทักษะให้คล่องขึ้น", en: "Already partnering well — just build tool fluency"},
          color: "#0E6E63",
          blurb: {
            th: "คุณมีสไตล์การใช้ AI ที่ดี: ตรวจสอบ ตั้งคำถาม และใช้ความคิดของตัวเองเป็นแกน เหลือแค่ขยับทักษะ AI ให้คล่องขึ้น สไตล์ดี ๆ ของคุณจะเป็นเกราะป้องกันไม่ให้คุณพลาดเมื่อใช้ AI มากขึ้น",
            en: "You already partner thoughtfully with AI — verifying, questioning, and keeping your own thinking at the center. Now build tool fluency. Your strong mindset will protect you as your usage grows."
          },
          nudge: {
            th: "ลองเครื่องมือ AI ใหม่ ๆ ในงานประจำสัปดาห์ละ 1–2 ครั้ง เพราะสไตล์ดี ๆ ของคุณพร้อมรับการขยับทักษะแล้ว",
            en: "Try new AI tools on real tasks 1–2 times a week — your thoughtful style is ready for tool fluency"
          },
          partnershipNextH: {th: "รักษาสไตล์ดี ๆ และต่อยอด", en: "Keep your style and extend it"},
          partnershipNext: [
            {th: "รักษานิสัยตรวจสอบและตั้งคำถาม — สไตล์นี้คือเกราะป้องกันคุณตอนใช้ AI มากขึ้น", en: "Keep verifying and questioning — that style protects you as your AI usage grows"},
            {th: "แบ่งปันวิธีคิดของคุณให้คนรอบข้าง — คุณเป็น role model ได้", en: "Share your thinking style with people around you — you can be a role model"},
            {th: "ก้าวออกจาก comfort zone ลองใช้ AI ในงานที่ท้าทายมากขึ้น", en: "Step out of your comfort zone — try AI on more challenging work"}
          ],
          persona: {
            who: {
              th: "คนที่เพิ่งเริ่มใช้ AI แต่มีสติ — ตรวจสอบ ตั้งคำถาม และใช้ความคิดของตัวเองเป็นแกน ทักษะยังไม่คล่อง แต่ mindset ดีอยู่แล้ว",
              en: "Someone newer to AI but already thoughtful — verifies, questions, and keeps their own thinking at the center. Skills aren't fluent yet, but the mindset is already strong."
            },
            strengths: [
              {th: "สไตล์การใช้ AI ดีอยู่แล้ว — ใช้มากขึ้นไม่น่ากังวล", en: "Strong AI partnership style — safe to grow usage"},
              {th: "มีโอกาสเป็น role model เรื่องการใช้ AI อย่างมีสติ", en: "Potential role model for thoughtful AI use"}
            ],
            watchouts: [
              {th: "อาจระมัดระวังเกินจนพลาดโอกาส", en: "May be over-cautious and miss opportunities"},
              {th: "ทักษะที่ยังน้อยอาจทำให้รู้สึกไม่มั่นใจ (imposter)", en: "Lower skill may cause imposter feelings"}
            ],
            workshops: [
              {th: "Prompt Engineering ขั้นกลาง", en: "Intermediate Prompt Engineering"},
              {th: "AI กับเวิร์กโฟลว์ในงานประจำ", en: "AI Workflows in Daily Work"},
              {th: "AI Mindfulness — รู้จักเลือกใช้และไม่ใช้", en: "AI Mindfulness — choosing when to use vs. not"}
            ]
          }
        },
        autopilot: {
          name: {th: "ผู้ใช้โหมดอัตโนมัติ", en: "Auto-pilot User"},
          short: {th: "ใช้ AI คล่อง แต่บางครั้งอาจปล่อยให้ AI คิดแทน", en: "Fluent with AI, but sometimes lets AI do the thinking"},
          color: "#C8862E",
          blurb: {
            th: "คุณใช้ AI ได้เก่ง: ใช้บ่อย ใช้คล่อง แต่ลองชวนให้คุณหยุดคิดสักนิดก่อนทำตาม AI เพราะทักษะการคิด ความสร้างสรรค์ และวิจารณญาณของคุณคือสิ่งที่ AI ทดแทนไม่ได้",
            en: "You're skilled with AI — using it often and fluently. But pause before you follow what it says, because your thinking, creativity and judgment are what AI cannot replace."
          },
          nudge: {
            th: "ลองคิดคำตอบของตัวเองก่อนเริ่มถาม AI สัก 1–2 นาที และตรวจสอบคำตอบที่ได้จาก AI ทุกครั้งในงานสำคัญ จำไว้ว่า \"คุณคือคนควบคุมเครื่องมือ คุณไม่ใช่ messenger ที่แค่ส่งและรับข้อความจาก AI โดยไม่ได้ใช้ความคิดตัวเองเลย\"",
            en: "Try thinking your own answer for 1–2 minutes before you start asking AI, and check what it gives you every time on work that matters. Remember: you are the one operating the tool — not a messenger who just passes messages to and from AI without using your own mind."
          },
          partnershipNextH: {th: "ดึงตัวเองกลับมาเป็นผู้ขับ", en: "Take the driver's seat back"},
          partnershipNext: [
            {th: "ก่อนเปิด AI ลองคิดคำตอบของตัวเองก่อน 1–2 นาทีทุกครั้ง", en: "Before opening AI, try your own answer for 1–2 minutes every time"},
            {th: "งานสำคัญ ตรวจสอบผลของ AI กับแหล่งอื่นอย่างน้อย 1 แหล่ง", en: "For important work, verify AI output against at least one other source"},
            {th: "เก็บงานบางอย่างไว้ทำเอง — รักษาทักษะคิดวิเคราะห์และความสร้างสรรค์", en: "Keep some tasks AI-free — preserve your critical thinking and creativity"}
          ],
          persona: {
            who: {
              th: "คนที่ใช้ AI ได้คล่องแล้วในชีวิตประจำวัน แต่บางครั้งใช้แบบ 'ทำตาม AI' โดยไม่ตรวจสอบ ปล่อยให้ AI คิดแทน อาจสังเกตว่าตัวเองคิดเองน้อยลงเรื่อย ๆ",
              en: "Skilled and fluent with AI, but sometimes follows what AI says without checking. Lets AI think for them — and may notice their own thinking muscles weakening over time."
            },
            strengths: [
              {th: "ใช้ AI เร็วและคล่อง", en: "Fast and fluent with AI tools"},
              {th: "เข้าใจเครื่องมือและ workflow ดี", en: "Strong grasp of tools and workflows"}
            ],
            watchouts: [
              {th: "เสี่ยงเชื่อข้อมูลผิดของ AI โดยไม่ตรวจสอบ (hallucination)", en: "May trust wrong AI info without checking (hallucination)"},
              {th: "ทักษะคิดวิเคราะห์และความสร้างสรรค์ของตัวเองอาจลดลง", en: "Own critical thinking and creativity may decline"},
              {th: "นานวันเข้าอาจสูญเสียมุมมองที่เป็นของตัวเองในงาน", en: "Over time may lose your own distinctive voice in work"}
            ],
            workshops: [
              {th: "Critical AI Use & Verification", en: "Critical AI Use & Verification"},
              {th: "AI Mindfulness — รู้จักเลือกใช้และไม่ใช้", en: "AI Mindfulness — choosing when to use vs. not"},
              {th: "Prompt Engineering ขั้นกลาง", en: "Intermediate Prompt Engineering"}
            ]
          }
        },
        director: {
          name: {th: "ผู้นำ AI", en: "AI Director"},
          short: {th: "ทักษะการใช้ AI กับสไตล์การใช้งานมีความสมดุล พาไปสู่เป้าหมายที่อยากไปถึงได้", en: "Skill and style in balance — enough to take you where you want to go"},
          color: "#15827A",
          blurb: {
            th: "คุณใช้ AI ได้เก่งและนำ AI ได้ดี: ทักษะกับสไตล์การใช้งานของคุณสมดุลกัน ขอให้รักษาสไตล์นี้ไว้ และเป็นต้นแบบให้คนรอบข้างได้เห็นว่าใช้ AI อย่างมีสติเป็นยังไง",
            en: "You're skilled with AI and lead it well — your fluency and partnership style are in balance. Keep this style and become a model for others on what thoughtful AI use looks like."
          },
          nudge: {
            th: "แบ่งปันสไตล์การใช้ AI ของคุณให้ทีม / คนรอบข้าง — เป็น AI champion ที่ช่วยให้คนอื่นใช้ AI ได้ดีขึ้น",
            en: "Share your AI partnership style with your team — become a champion who helps others use AI better"
          },
          partnershipNextH: {th: "ส่งต่อสไตล์ดี ๆ ให้คนรอบข้าง", en: "Pass your style on to others"},
          partnershipNext: [
            {th: "เป็น AI champion ในทีม โค้ชคนรอบข้างให้ใช้ AI อย่างมีสติ", en: "Be an AI champion on your team — coach others to use AI mindfully"},
            {th: "ทบทวนสไตล์ของตัวเองสม่ำเสมอ — อย่าคิดว่า 'จบแล้ว' เพราะ AI เปลี่ยนเร็ว", en: "Review your own style regularly — don't assume you're 'done'; AI evolves fast"},
            {th: "ลองใช้ AI ในรูปแบบใหม่ ๆ ที่ยังไม่เคยทำ — ขยายสไตล์การใช้งาน", en: "Try AI in new ways you haven't used before — keep evolving your style"}
          ],
          persona: {
            who: {
              th: "คนที่ใช้ AI ได้คล่องและนำ AI ได้ดี — ตรวจสอบ ตั้งคำถาม และใช้ความคิดของตัวเองเป็นแกน ทักษะกับสไตล์การใช้งานสมดุล เป็นต้นแบบของการใช้ AI อย่างมีคุณภาพ",
              en: "Skilled with AI and leads it well — verifies, questions, and keeps their own thinking at the center. Skill and partnership style in balance. A model of thoughtful AI use."
            },
            strengths: [
              {th: "ทักษะ AI กับวิจารณญาณสมดุล", en: "Balanced AI skill + judgment"},
              {th: "เป็นแรงบันดาลใจให้คนรอบข้าง", en: "Inspires others around them"},
              {th: "นำ AI ได้ ไม่ใช่ตามมัน", en: "Leads AI, doesn't follow it"}
            ],
            watchouts: [
              {th: "อาจคิดว่าตัวเอง 'จบแล้ว' — AI เปลี่ยนเร็ว ต้องเรียนรู้ต่อ", en: "May feel 'done learning' — but AI evolves fast, keep going"},
              {th: "พลาดโอกาสในการสอน/แบ่งปันให้คนอื่น", en: "May miss the chance to teach and share with others"}
            ],
            workshops: [
              {th: "AI Champion Coaching", en: "AI Champion Coaching"},
              {th: "Leading AI Adoption ในทีม / องค์กร", en: "Leading AI Adoption in teams"},
              {th: "AI กับเวิร์กโฟลว์ในงานประจำ", en: "AI Workflows in Daily Work"}
            ]
          }
        }
      }
    }
  };
});
