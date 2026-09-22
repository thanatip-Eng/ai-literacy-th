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
        lead: "แบบประเมินตนเองที่มอง 3 มิติพร้อมกัน — <b>บทบาทงาน · ทักษะการใช้ AI · ความสัมพันธ์ของคุณกับ AI</b> ตอบ 24 คำถาม แล้วรับผลวิเคราะห์พร้อมขั้นตอนพัฒนาต่อไปเป็นรายบุคคล",
        credit: "โครงสร้าง 5 ระดับอ้างอิงจาก LinkedIn AI Upskilling Framework · ออกแบบเป็นเครื่องมือประเมินตนเองสำหรับบริบทไทย",
        aboutHead: "เกี่ยวกับ framework",
        aboutSub: "โครงสร้าง 4 ระดับ — ภาพรวมโดยย่อ",
        aboutBody: "framework นี้จัดกลุ่มทักษะ AI ออกเป็น <b>4 ระดับ</b> ปรับมาจาก <b>LinkedIn AI Upskilling Framework</b> (5 ระดับ) โดยรวมระดับ 4–5 เข้าเป็น “ผู้เชี่ยวชาญขั้นสูง” แบบประเมินครอบคลุมระดับ 1–3 และเพิ่มแกน <b>ความสัมพันธ์กับ AI</b> (Human-in-the-Loop mindset) ที่ผู้พัฒนาเพิ่มเข้ามา เพื่อสะท้อนวิธีที่คุณทำงานกับ AI — ไม่ใช่แค่ทักษะ แต่รวมถึงสไตล์การตรวจสอบ ตั้งคำถาม และนำ AI",
        linkedinLinkText: "อ่านเกี่ยวกับ LinkedIn AI Upskilling Framework →",
        aboutAuthor: "© 2026 <b>Student Talent Development</b><br>Faculty of Engineering, Chiang Mai University",
        startBtn: "เริ่มทำแบบประเมิน →",
        metaNote: "24 ข้อ · 2 ส่วน · ไม่มีถูกผิด · ตอบตามความเป็นจริงของคุณ",
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
        mfbNotePh: "ข้อเสนอแนะถึงทีมพัฒนา (ไม่บังคับ)",
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
        imgAuthor: "© 2026 Student Talent Development",
        imgAffiliation: "Faculty of Engineering · Chiang Mai University",
        imgLicense: "เผยแพร่ภายใต้สัญญาอนุญาต CC BY-NC-SA 4.0",
        imgFrameworkSource: "อิง LinkedIn AI Upskilling Framework",
        roleStepPill: "เลือกบทบาท",
        roleHead: "งานหลักของคุณคือ?",
        roleSub: "เลือก 1 ข้อที่ใกล้เคียงที่สุด เพื่อให้คำแนะนำตรงกับงานของคุณ ข้ามได้ถ้าไม่ต้องการ",
        roleSkip: "ข้าม / ไม่ระบุ",
        roleGuideLink: "เพดานทักษะของแต่ละสายงานตั้งจากอะไร? →",
        disciplineStepPill: "เลือกกลุ่มสาขา",
        disciplineHead: "คุณเรียนอยู่กลุ่มสาขาใด?",
        disciplineSub: "เลือก 1 ข้อ เพื่อให้ตัวอย่างระหว่างทำและคำแนะนำท้ายผลตรงกับศาสตร์ของคุณ ข้ามได้ถ้าไม่ต้องการ",
        disciplineInsightLabel: "🎓 สาขาของคุณ",
        qExampleTag: "ในสายของคุณ",
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
        insightHead: "สรุปของคุณแบบสั้น",
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
        lead: "A self-assessment that looks at three dimensions together — <b>your role, your AI skills, and how you partner with AI</b>. Answer 24 questions to get a personalized result with next steps.",
        credit: "Five-level structure adapted from the LinkedIn AI Upskilling Framework · designed as a self-assessment tool.",
        aboutHead: "About the framework",
        aboutSub: "The 4 levels — at a glance",
        aboutBody: "This framework groups AI skills into <b>4 levels</b>, adapted from the <b>LinkedIn AI Upskilling Framework</b> (which has 5 levels) by merging the original Levels 4–5 into a single “Advanced Specialist” tier. This assessment covers Levels 1–3, and adds an <b>AI Partnership</b> axis (Human-in-the-Loop mindset) to capture how you work with AI — not just what you can do with it, but your style of verifying, questioning, and leading AI.",
        linkedinLinkText: "Read about the LinkedIn AI Upskilling Framework →",
        aboutAuthor: "© 2026 <b>Student Talent Development</b><br>Faculty of Engineering, Chiang Mai University",
        startBtn: "Start the assessment →",
        metaNote: "24 questions · 2 parts · no right or wrong · answer honestly",
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
        mfbNotePh: "Suggestions for the team (optional)",
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
        imgAuthor: "© 2026 Student Talent Development",
        imgAffiliation: "Faculty of Engineering · Chiang Mai University",
        imgLicense: "Licensed under CC BY-NC-SA 4.0",
        imgFrameworkSource: "Based on the LinkedIn AI Upskilling Framework",
        roleStepPill: "Pick a role",
        roleHead: "What's your primary role?",
        roleSub: "Pick the closest match so we can tailor advice to your work. You can skip this if you prefer.",
        roleSkip: "Skip / prefer not to say",
        roleGuideLink: "How are each role's skill ceilings set? →",
        disciplineStepPill: "Pick your field",
        disciplineHead: "Which field are you studying?",
        disciplineSub: "Pick one so the examples during the assessment and the guidance at the end match your field. You can skip this if you prefer.",
        disciplineInsightLabel: "🎓 Your field",
        qExampleTag: "IN YOUR FIELD",
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
              health: {th: "อธิบายให้เพื่อนร่วมวอร์ดฟังว่าทำไม AI ตอบเรื่องยาผิดได้", en: "explaining to a ward-mate why AI can get a drug fact wrong"},
              engtech: {th: "อธิบายว่าทำไมโมเดลถึงแต่งชื่อฟังก์ชันที่ไม่มีอยู่จริงขึ้นมา", en: "explaining why a model invents functions that don't exist"},
              scienat: {th: "อธิบายว่าทำไม AI ถึงให้ค่าคงที่หรือสูตรที่ดูถูกแต่ผิด", en: "explaining why AI gives constants or formulas that look right but aren't"},
              bizpol: {th: "อธิบายว่าทำไม AI ถึงอ้างเลขคดีหรือสถิติที่ไม่มีอยู่จริง", en: "explaining why AI cites case numbers or statistics that don't exist"},
              humsoc: {th: "อธิบายว่าทำไม AI ถึงอ้างชื่อหนังสือหรืองานวิจัยที่ไม่มีจริง", en: "explaining why AI cites books or studies that don't exist"},
              artdes: {th: "อธิบายว่าทำไมภาพที่ AI สร้างถึงมีนิ้วเกินหรือโครงสร้างที่เป็นไปไม่ได้", en: "explaining why AI images come out with extra fingers or impossible structures"}
            }},
          {th: "เมื่อมีงานเข้ามา ฉันมักเลือกได้ว่างานไหนลองให้ AI ช่วยน่าจะได้ผลดี และงานไหนควรทำเอง", en: "When a task comes up, I can usually tell which ones to try with AI and which to handle myself", examples: {
              health: {th: "ให้ช่วยสรุปงานวิจัยทางคลินิกได้ แต่การประเมินผู้ป่วยต้องทำเอง", en: "summarizing clinical papers, but assessing a patient yourself"},
              engtech: {th: "ให้ช่วยร่างโค้ดต้นแบบได้ แต่ตรรกะหลักของระบบต้องคิดเอง", en: "drafting prototype code, but designing the core logic yourself"},
              scienat: {th: "ให้ช่วยเขียนสคริปต์วิเคราะห์ได้ แต่การออกแบบการทดลองต้องคิดเอง", en: "writing an analysis script, but designing the experiment yourself"},
              bizpol: {th: "ให้ช่วยร่างสรุปประชุมได้ แต่ข้อเสนอเชิงนโยบายต้องคิดเอง", en: "drafting meeting notes, but forming the recommendation yourself"},
              humsoc: {th: "ให้ช่วยระดมประเด็นสัมภาษณ์ได้ แต่การตีความคำให้การต้องทำเอง", en: "brainstorming interview angles, but interpreting testimony yourself"},
              artdes: {th: "ให้ช่วยหา reference ได้ แต่คอนเซ็ปต์ของงานต้องเป็นของคุณ", en: "finding references, but the concept has to be yours"}
            }},
          {th: "ฉันรู้ว่าฟีดโซเชียลและระบบแนะนำที่ใช้อยู่ทุกวันขับเคลื่อนด้วย AI ซึ่งเลือกและจัดลำดับสิ่งที่ฉันเห็น — และอาจสะท้อนอคติจากข้อมูลที่ใช้ฝึก", en: "I know the social feeds and recommendation systems I use daily are driven by AI that selects and ranks what I see — and can reflect biases in its training data", examples: {
              health: {th: "ข้อมูลสุขภาพที่ฟีดดันขึ้นมา อาจไม่ใช่สิ่งที่มีหลักฐานรองรับ", en: "the health advice your feed pushes may not be evidence-based"},
              engtech: {th: "ผลค้นหาโค้ดและคำแนะนำเครื่องมือก็ถูกจัดอันดับด้วยอัลกอริทึม", en: "code search results and tool recommendations are ranked by algorithms too"},
              scienat: {th: "งานวิจัยที่ขึ้นก่อนในผลค้นหา ไม่ได้แปลว่าเป็นงานที่ดีที่สุด", en: "the papers that rank first are not the best papers"},
              bizpol: {th: "ข่าวเศรษฐกิจและการเมืองที่คุณเห็น ต่างจากที่คนอื่นเห็นคนละชุด", en: "the economic and political news you see differs from what others see"},
              humsoc: {th: "ฟีดข่าวหรือประเด็นสังคมที่คุณเห็น ถูกคัดมาให้คุณโดยเฉพาะ", en: "the news and social issues in your feed were selected for you specifically"},
              artdes: {th: "งานออกแบบที่ฟีดดันขึ้นมา ค่อย ๆ หล่อหลอมรสนิยมของคุณโดยไม่รู้ตัว", en: "the design work your feed pushes quietly shapes your taste"}
            }},
          {th: "ก่อนจะวางข้อมูลงานหรือข้อมูลส่วนตัวลงในแชต AI ฉันมักหยุดคิดก่อนว่าอะไรแชร์ได้หรือไม่ได้", en: "Before pasting work or personal information into an AI chat, I tend to pause and consider what is and isn't OK to share", examples: {
              health: {th: "ข้อมูลผู้ป่วยจากการฝึกปฏิบัติ แม้ตัดชื่อออกแล้วก็ยังอ่อนไหว", en: "patient data from clinical practice stays sensitive even de-identified"},
              engtech: {th: "โค้ดของที่ฝึกงาน หรือคีย์ API ที่ติดมากับไฟล์ตั้งค่า", en: "your internship employer's code, or API keys in a config file"},
              scienat: {th: "ข้อมูลดิบของแล็บหรือแปลงทดลองที่ยังไม่ตีพิมพ์", en: "unpublished raw data from the lab or the field trial"},
              bizpol: {th: "งบการเงินหรือสัญญาของบริษัทที่ฝึกงาน", en: "financial statements or contracts from your internship"},
              humsoc: {th: "บทถอดเทปสัมภาษณ์ หรือข้อมูลผู้ให้ข้อมูลในงานวิจัย", en: "interview transcripts, or informants' details in your research"},
              artdes: {th: "ไฟล์งานของลูกค้าหรือแบบที่ยังไม่เปิดเผย", en: "a client's files or a design that hasn't been released"}
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
              health: {th: "ระบุว่าเป็นผู้ป่วยกลุ่มไหน เพื่อให้คำอธิบายตรงกรณี", en: "naming the patient group so the explanation fits the case"},
              engtech: {th: "แปะข้อความ error จริงและเวอร์ชันไลบรารีไปให้ด้วย", en: "pasting the actual error and the library version"},
              scienat: {th: "บอกชนิดข้อมูลและสมมติฐานทางสถิติที่ใช้", en: "stating the data type and the statistical assumptions"},
              bizpol: {th: "บอกกรอบกฎหมายหรือบริบทตลาดที่กำลังพูดถึง", en: "naming the legal framework or the market context in play"},
              humsoc: {th: "บอกกรอบทฤษฎีที่ใช้และกลุ่มผู้อ่านที่ต้องการ", en: "naming the theoretical frame and the audience you write for"},
              artdes: {th: "บอกสไตล์ สัดส่วน และข้อจำกัดของวัสดุที่ใช้จริง", en: "naming the style, the proportions and the real material limits"}
            }},
          {th: "ในเดือนที่ผ่านมา ฉันใช้ AI ช่วยงานหลายแบบ เช่น ร่างอีเมล สรุปเอกสารยาว ๆ ระดมไอเดีย หรือช่วยวิเคราะห์ข้อมูล", en: "In the past month, I've used AI for several different things — drafting emails, summarizing long documents, brainstorming, or analyzing data", examples: {
              health: {th: "สรุปเปเปอร์ ทำสไลด์ journal club ซ้อมตอบคำถามก่อนสอบ", en: "summarizing papers, journal-club slides, rehearsing exam questions"},
              engtech: {th: "ดีบักโค้ด เขียนสคริปต์ ร่างเอกสารของโปรเจกต์", en: "debugging code, writing scripts, drafting project documentation"},
              scienat: {th: "สรุปงานวิจัย เขียนสคริปต์วิเคราะห์ ร่างรายงานแล็บ", en: "summarizing studies, writing analysis scripts, drafting lab reports"},
              bizpol: {th: "สรุปเคส ทำสไลด์นำเสนอ ร่างบทวิเคราะห์ตลาด", en: "summarizing cases, building slides, drafting a market brief"},
              humsoc: {th: "ร่างแนวคำถามสัมภาษณ์ สรุปเอกสารชั้นต้น ทำสไลด์นำเสนอ", en: "drafting interview guides, summarizing primary sources, building slides"},
              artdes: {th: "ทำ mood board ร่างคำอธิบายผลงาน ลองหลายแนวทางออกแบบ", en: "mood boards, artist statements, trying several design directions"}
            }},
          {th: "เมื่อได้ผลลัพธ์จาก AI ฉันมักปรับแต่งให้เข้ากับบริบท น้ำเสียง และผู้รับของงานจริง ไม่ใช้แบบดิบ ๆ", en: "When I get output from AI, I usually adapt it to the real task's context, tone and audience rather than using it raw", examples: {
              health: {th: "ปรับคำอธิบายโรคให้ผู้ป่วยเข้าใจ ไม่ใช่ภาษาแบบในตำรา", en: "rewording a diagnosis so a patient understands, not textbook language"},
              engtech: {th: "ปรับโค้ดที่ได้ให้เข้ากับโครงสร้างและสไตล์ของโปรเจกต์", en: "reshaping generated code to your project's structure and style"},
              scienat: {th: "ปรับกราฟและคำอธิบายผลให้ตรงกับข้อมูลจริงของคุณ", en: "reworking charts and captions to match your actual data"},
              bizpol: {th: "ปรับภาษาให้เหมาะกับผู้บริหาร ไม่ใช่สำนวนวิชาการ", en: "shifting the language for decision-makers, not an academic reader"},
              humsoc: {th: "ปรับสำนวนให้เข้ากับรูปแบบอ้างอิงและน้ำเสียงทางวิชาการของสาขา", en: "matching your field's citation style and academic voice"},
              artdes: {th: "ปรับงานที่ได้ให้เข้ากับลายเส้นและทิศทางของโปรเจกต์", en: "reworking the output to fit your line and the project's direction"}
            }},
          {th: "ฉันเลือกใช้เครื่องมือ AI ให้เหมาะกับงานแต่ละประเภท แทนที่จะใช้เครื่องมือเดียวสำหรับทุกงาน", en: "I pick the right AI tool for each kind of task instead of using one tool for everything", examples: {
              health: {th: "ใช้ตัวที่อ้างอิงแหล่งได้เวลาต้องหาหลักฐานทางคลินิก", en: "using a tool that cites sources when you need clinical evidence"},
              engtech: {th: "ใช้ผู้ช่วยในเอดิเตอร์ตอนเขียนโค้ด แยกจากแชตตอนคิดโครงสร้าง", en: "an in-editor assistant for code, a chat for design thinking"},
              scienat: {th: "ใช้ตัวที่รันโค้ดได้ตอนวิเคราะห์ข้อมูลจริง", en: "using a tool that can run code when you actually analyze data"},
              bizpol: {th: "ใช้ตัวที่ค้นข้อมูลปัจจุบันได้เวลาต้องอ้างตัวเลขล่าสุด", en: "using a tool that can look things up when you need current figures"},
              humsoc: {th: "ใช้ตัวที่อ่านไฟล์ยาว ๆ ได้ตอนทำงานกับเอกสารชั้นต้น", en: "using a long-document tool when working with primary sources"},
              artdes: {th: "ใช้เครื่องมือสร้างภาพกับงานคิด และโปรแกรมออกแบบจริงกับงานส่ง", en: "image tools for ideation, your real design software for the deliverable"}
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
              health: {th: "วางขั้นตอนคัดกรองงานวิจัยสำหรับการทบทวนวรรณกรรม", en: "a screening pipeline for a systematic literature review"},
              engtech: {th: "ต่อขั้นตอนดึงข้อมูล → ทำความสะอาด → สรุปผล ให้ทำงานต่อกัน", en: "chaining fetch → clean → summarize into one flow"},
              scienat: {th: "วางขั้นตอนข้อมูลดิบ → ตรวจคุณภาพ → วิเคราะห์ ให้ทำซ้ำได้", en: "raw data → quality check → analysis, as a repeatable chain"},
              bizpol: {th: "วางขั้นตอนรวบรวมข่าว → สรุปประเด็น → ร่างบทวิเคราะห์", en: "gather sources → extract the issues → draft the brief"},
              humsoc: {th: "วางขั้นตอนถอดเทป → ให้รหัส → สรุปธีม ของข้อมูลสัมภาษณ์", en: "transcribe → code → theme-summarize your interview data"},
              artdes: {th: "วางขั้นตอนคอนเซ็ปต์ → ร่างหลายแบบ → จัดชุดนำเสนอ", en: "concept → variations → presentation set"}
            }},
          {th: "ฉันสามารถเชื่อมต่อ AI เข้ากับแอปหรือระบบผ่าน API ได้ด้วยตนเอง", en: "I can connect AI to an app or system via API on my own", examples: {
              health: {th: "ต่อ AI เข้ากับชุดข้อมูลสุขภาพเพื่อสรุปผลอัตโนมัติ", en: "wiring AI to a health dataset to summarize it automatically"},
              engtech: {th: "เรียก API ของโมเดลจากโค้ดที่เขียนเอง", en: "calling a model's API from code you wrote yourself"},
              scienat: {th: "เรียกโมเดลจากสคริปต์เพื่อประมวลผลข้อมูลทีละชุด", en: "calling a model from a script to process data in batches"},
              bizpol: {th: "ต่อ AI เข้ากับข้อมูลยอดขายหรือข้อมูลเปิดของภาครัฐ", en: "wiring AI to sales figures or open government data"},
              humsoc: {th: "ต่อ AI เข้ากับข้อมูลแบบสอบถามเพื่อจัดกลุ่มคำตอบปลายเปิด", en: "connecting AI to survey data to cluster open-ended answers"},
              artdes: {th: "เรียกโมเดลสร้างภาพจากสคริปต์เพื่อลองหลายแบบพร้อมกัน", en: "calling an image model from a script to try many variations at once"}
            }},
          {th: "ฉันสามารถสร้างต้นแบบของแอปหรือระบบที่ใช้งานได้จริง ด้วยวิธีใดวิธีหนึ่ง — ให้ AI ช่วยวางแผน/เขียนโค้ด หรือใช้เครื่องมือ no-code/low-code", en: "I can build a working prototype of an app or system in at least one way — using AI to help plan or code, or with no-code/low-code tools", examples: {
              health: {th: "ต้นแบบแอปเตือนกินยา หรือแบบคัดกรองอาการเบื้องต้น", en: "a medication-reminder prototype or a basic symptom screener"},
              engtech: {th: "ต้นแบบเว็บหรือเครื่องมือที่รันได้จริง ไม่ใช่แค่สไลด์", en: "a web app or tool prototype that actually runs, not just slides"},
              scienat: {th: "ต้นแบบเครื่องมือคำนวณหรือแดชบอร์ดข้อมูลของแล็บ", en: "a calculator or a lab data dashboard that works"},
              bizpol: {th: "ต้นแบบเครื่องมือประเมินความเสี่ยงหรือแดชบอร์ดผู้บริหาร", en: "a risk-scoring tool or an executive dashboard prototype"},
              humsoc: {th: "ต้นแบบเว็บเก็บแบบสอบถาม หรือสื่อการสอนที่ใช้ได้จริง", en: "a survey site or teaching material that actually works"},
              artdes: {th: "ต้นแบบเว็บจัดนิทรรศการ หรือแบบจำลองที่ผู้ชมลองใช้ได้", en: "an online exhibition or a model people can actually try"}
            }},
          {th: "ฉันเคยใช้ AI เป็นส่วนหนึ่งของการพัฒนาผลงานหรือระบบที่มีผู้อื่นได้ทดลองหรือใช้งานจริง (เช่น เพื่อน เพื่อนร่วมงาน หรือลูกค้ากลุ่มเล็ก ๆ)", en: "I've used AI as part of building something that other people — friends, colleagues, or a small group of users — have actually tried or used", examples: {
              health: {th: "สื่อให้ความรู้ผู้ป่วยที่มีคนได้ใช้จริงในหอผู้ป่วยหรือชุมชน", en: "patient-education material actually used on a ward or in a community"},
              engtech: {th: "โปรเจกต์ที่มีผู้ใช้จริงได้ลองใช้ ไม่ใช่แค่ส่งอาจารย์", en: "a project real users tried, not just one handed in"},
              scienat: {th: "เครื่องมือหรือชุดข้อมูลที่คนในแล็บได้เอาไปใช้ต่อ", en: "a tool or dataset others in the lab went on to use"},
              bizpol: {th: "ข้อเสนอหรือเครื่องมือที่องค์กรหรือชุมชนได้นำไปใช้จริง", en: "a proposal or tool an organization or community actually adopted"},
              humsoc: {th: "กิจกรรมหรือสื่อรณรงค์ที่กลุ่มเป้าหมายได้ใช้จริง", en: "an event or campaign material your target audience actually used"},
              artdes: {th: "งานที่ถูกจัดแสดง ตีพิมพ์ หรือส่งมอบให้ลูกค้าจริง", en: "work that was exhibited, published or delivered to a real client"}
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
    disciplines: [
      {
        code: "health",
        label: {th: "สุขภาพและการแพทย์", en: "Health & Medicine"},
        hint: {th: "แพทยศาสตร์ · ทันตแพทยศาสตร์ · เภสัชศาสตร์ · พยาบาลศาสตร์ · เทคนิคการแพทย์ · สัตวแพทยศาสตร์ · สาธารณสุขศาสตร์", en: "Medicine · Dentistry · Pharmacy · Nursing · Associated Medical Sciences · Veterinary · Public Health"}
      },
      {
        code: "engtech",
        label: {th: "วิศวกรรมและเทคโนโลยีดิจิทัล", en: "Engineering & Digital Technology"},
        hint: {th: "วิศวกรรมศาสตร์ · วิทยาลัยศิลปะ สื่อ และเทคโนโลยี (CAMT) · วิทยาลัยนานาชาตินวัตกรรมดิจิทัล", en: "Engineering · College of Arts, Media & Technology · International College of Digital Innovation"}
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
          focus: {th: "งานที่เขียนสวยแต่ไม่ใช่ความคิดคุณ คืองานที่สอบปากเปล่าแล้วอยู่ไม่ได้", en: "Work that reads beautifully but isn't your thinking will not survive a viva"},
          steps: [
            {th: "ตรวจทุกการอ้างอิงที่ AI ให้มา ชื่อผู้แต่ง ปี และข้อความที่ยกมา — มันสร้างงานวิจัยปลอมได้", en: "Verify every citation AI gives you — author, year, quotation; it fabricates references"},
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
          focus: {th: "คุณยังรักษาลายมือของตัวเองไว้ได้ เหลือใช้ AI ให้เร็วขึ้นในขั้นคิด", en: "Your hand is still in the work — now let AI speed up the thinking stage"},
          steps: [
            {th: "ใช้ AI ทำ mood board หรือลองหลายทางเลือกของงานออกแบบ ก่อนเลือกทางที่จะทำจริง", en: "Use AI for mood boards or to try many design directions before you commit to one"},
            {th: "ให้ AI ช่วยเขียนคำอธิบายผลงาน (artist statement) แล้วเขียนทับด้วยเสียงของตัวเอง", en: "Let AI draft an artist statement, then rewrite it in your own voice"}
          ]
        },
        autopilot: {
          focus: {th: "ถ้าเอาท์พุตสวยแต่คุณทำเองไม่ได้ พอร์ตของคุณจะไม่ตรงกับฝีมือจริง", en: "If the output is beautiful but you couldn't make it yourself, your portfolio no longer matches your hand"},
          steps: [
            {th: "แยกให้ชัดว่าชิ้นไหนคือฝีมือคุณ ชิ้นไหน AI ทำ และอย่าให้สองอย่างปนกันในพอร์ต", en: "Keep it clear which pieces are your hand and which AI made — never blur the two in a portfolio"},
            {th: "ฝึกทักษะพื้นฐาน (drawing, composition, การเขียนแบบ) ต่อไป เพราะมันคือสิ่งที่ตรวจได้ในห้องสอบและในสตูดิโอ", en: "Keep drilling fundamentals — drawing, composition, technical drafting — they are what gets tested in a studio"}
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
                health: {th: "ขนาดยาหรือค่าอ้างอิงที่ไปเช็คกับแนวทางเวชปฏิบัติแล้วไม่ตรง", en: "a dose or reference range that didn't match the clinical guideline"},
                engtech: {th: "ฟังก์ชันที่ AI อ้างว่ามีในไลบรารี แต่เปิดเอกสารแล้วไม่มี", en: "a library function it claimed exists but the docs don't have"},
                scienat: {th: "ค่าคงที่หรือหน่วยที่ผิด ซึ่งจับได้ตอนคำนวณซ้ำเอง", en: "a wrong constant or unit you caught by redoing the calculation"},
                bizpol: {th: "ตัวเลขหรือมาตรากฎหมายที่อ้าง แล้วตามไปดูต้นฉบับไม่ตรง", en: "a figure or a statute it cited that the source didn't support"},
                humsoc: {th: "ชื่อผู้แต่งหรือปีที่อ้าง แล้วตามหาต้นฉบับจริงไม่เจอ", en: "an author or year it cited that you couldn't trace to a source"},
                artdes: {th: "ชื่อศิลปินหรือยุคสมัยที่ AI อ้าง แล้วค้นจริงแล้วไม่ตรง", en: "an artist or period it named that didn't check out"}
              }},
            {th: "ถ้า AI ตอบเร็วและฟังดูสมเหตุสมผล ฉันมักนำไปใช้ทันที", en: "When AI answers quickly and sounds reasonable, I usually use it as-is", reverse: true, examples: {
                health: {th: "คำอธิบายกลไกของโรคที่ฟังดูเข้าท่า", en: "a plausible-sounding explanation of a disease mechanism"},
                engtech: {th: "โค้ดที่คอมไพล์ผ่านก็ถือว่าใช้ได้เลย", en: "code that compiles, so you take it as correct"},
                scienat: {th: "ผลวิเคราะห์ที่กราฟออกมาสวยก็ถือว่าถูก", en: "an analysis whose chart looks clean, so you call it right"},
                bizpol: {th: "บทวิเคราะห์ที่อ่านแล้วดูเป็นมืออาชีพ", en: "an analysis that reads professionally enough"},
                humsoc: {th: "ย่อหน้าวิเคราะห์ที่สำนวนดีจนดูน่าเชื่อ", en: "an analysis paragraph that reads well enough to trust"},
                artdes: {th: "ภาพที่ออกมาสวยจนไม่ได้ดูว่าตรงโจทย์หรือเปล่า", en: "an image so good-looking you never check it against the brief"}
              }}
          ]
        },
        {
          key: "restraint",
          name: {th: "เลือกใช้อย่างมีสติ", en: "Restraint"},
          desc: {th: "รู้ว่าเมื่อใดควรใช้ AI และเมื่อใดควรลงมือเอง", en: "Know when to use AI and when to do it yourself"},
          items: [
            {th: "มีบางงานที่ฉันเลือกทำเองโดยไม่เปิด AI เพราะอยากให้ออกมาเป็นแบบที่ฉันคิดจริง ๆ", en: "There are tasks I choose to do without AI because I want the result to truly reflect my own thinking", reverse: false, examples: {
                health: {th: "เขียนบันทึกสะท้อนคิดหลังออกฝึกปฏิบัติ", en: "writing your own reflection after clinical practice"},
                engtech: {th: "แก้โจทย์อัลกอริทึมเองเพื่อให้เข้าใจจริง ๆ", en: "solving an algorithm problem yourself to really learn it"},
                scienat: {th: "ไล่คำนวณหรือพิสูจน์ด้วยมือเองจนจบ", en: "working a calculation or a proof through by hand"},
                bizpol: {th: "คิดข้อเสนอและเหตุผลของตัวเองก่อนเปิด AI", en: "forming your own recommendation before opening AI"},
                humsoc: {th: "เขียนเรียงความที่แสดงจุดยืนของตัวเอง", en: "writing an essay that argues your own position"},
                artdes: {th: "ร่างงานด้วยมือเองเพื่อรักษาลายเส้นของตัวเอง", en: "sketching by hand to keep your own line"}
              }},
            {th: "ช่วงหลัง ๆ แทบทุกงานฉันจะเปิด AI ก่อนเป็นอย่างแรก แม้แต่งานที่ฉันทำเองได้เร็วกว่า", en: "Lately I open AI first for almost every task — even ones I could do faster myself", reverse: true, examples: {
                health: {th: "แม้แต่สรุปเลกเชอร์ที่จดเองได้เร็วกว่า", en: "even summarizing a lecture you could note faster yourself"},
                engtech: {th: "แม้แต่โค้ดสั้น ๆ ที่เขียนเองได้ในห้านาที", en: "even a snippet you could write yourself in five minutes"},
                scienat: {th: "แม้แต่การคำนวณง่าย ๆ ที่กดเครื่องคิดเลขก็เสร็จ", en: "even arithmetic a calculator would finish"},
                bizpol: {th: "แม้แต่ร่างอีเมลสั้น ๆ ถึงลูกค้าหรืออาจารย์", en: "even a short email to a client or a lecturer"},
                humsoc: {th: "แม้แต่ร่างข้อความสั้น ๆ ถึงอาจารย์หรือเพื่อนร่วมทีม", en: "even a short message to a lecturer or a teammate"},
                artdes: {th: "แม้แต่ไอเดียแรกของงาน ที่เมื่อก่อนคิดเองได้", en: "even the first idea, which you used to come up with yourself"}
              }}
          ]
        },
        {
          key: "human_lead",
          name: {th: "ใช้ทักษะมนุษย์เป็นแกน", en: "Human-skill lead"},
          desc: {th: "ใช้ empathy ความคิดสร้างสรรค์ และวิจารณญาณของตัวเองเป็นแกน AI เป็นตัวช่วย", en: "Lead with empathy, creativity, and judgment — AI assists"},
          items: [
            {th: "เวลาคุยกับลูกค้า/เพื่อนร่วมงาน/ผู้ใช้ ฉันใช้การฟังและการสังเกตของตัวเองเป็นหลักในการทำความเข้าใจ ไม่ใช่ให้ AI สรุปแทน", en: "When talking with customers/colleagues/users, I rely on my own listening and observation to understand them — not on AI summaries", reverse: false, examples: {
                health: {th: "ซักประวัติและสังเกตอาการผู้ป่วยด้วยตัวเอง", en: "taking a history and observing the patient yourself"},
                engtech: {th: "คุยกับผู้ใช้จริงเองก่อนออกแบบฟีเจอร์", en: "talking to real users yourself before designing a feature"},
                scienat: {th: "ลงแปลงหรือเข้าแล็บสังเกตด้วยตาตัวเอง", en: "going to the plot or the bench and observing it yourself"},
                bizpol: {th: "คุยกับลูกค้าหรือผู้มีส่วนได้ส่วนเสียด้วยตัวเอง", en: "talking to clients or stakeholders yourself"},
                humsoc: {th: "ลงพื้นที่ฟังผู้ให้ข้อมูลด้วยตัวเอง", en: "going into the field and listening to informants yourself"},
                artdes: {th: "ฟังโจทย์และดูพื้นที่จริงด้วยตัวเองก่อนออกแบบ", en: "hearing the brief and seeing the real space yourself first"}
              }},
            {th: "หลายครั้งงานที่ฉันส่งออกไป แนวคิดหลักมาจาก AI มากกว่ามาจากตัวฉันเอง", en: "Often, the core ideas in work I hand in come more from AI than from me", reverse: true, examples: {
                health: {th: "กรณีศึกษาหรือแผนการดูแลผู้ป่วยที่ส่ง", en: "the case study or care plan you hand in"},
                engtech: {th: "แนวทางออกแบบระบบในโปรเจกต์ที่ส่ง", en: "the system design in the project you submit"},
                scienat: {th: "สมมติฐานหรือวิธีวิเคราะห์ในรายงานที่ส่ง", en: "the hypothesis or method in the report you hand in"},
                bizpol: {th: "ข้อเสนอเชิงนโยบายหรือกลยุทธ์ในงานที่ส่ง", en: "the policy or strategy recommendation in your submission"},
                humsoc: {th: "ประเด็นหลักในเปเปอร์หรือข้อเสนอโครงการ", en: "the central argument in your paper or proposal"},
                artdes: {th: "คอนเซ็ปต์ของงานที่ส่งเข้าคริติก", en: "the concept behind the piece you bring to crit"}
              }}
          ]
        },
        {
          key: "direction",
          name: {th: "นำการทำงานของ AI", en: "Direction"},
          desc: {th: "คุณนำ AI ไม่ใช่ AI นำคุณ", en: "You steer AI, not AI steers you"},
          items: [
            {th: "ก่อนถาม AI ฉันมักประเมินก่อนว่าตอนนี้ตัวเองรู้อะไรและยังไม่รู้อะไร แล้วเลือกวิธีใช้ให้เหมาะ — สั่งงานตรง ๆ ให้ช่วยระดมไอเดีย หรือให้ช่วยค้นเปิดมุมใหม่", en: "Before asking AI, I usually assess what I already know and don't know, then choose how to use it — direct instructions, brainstorming help, or open-ended research", reverse: false, examples: {
                health: {th: "รู้ว่าตัวเองติดตรงกลไกของโรค ไม่ใช่ตรงชื่อยา", en: "knowing you're stuck on the mechanism, not the drug name"},
                engtech: {th: "รู้ว่าตัวเองติดตรงตรรกะ ไม่ใช่ตรงไวยากรณ์ของภาษา", en: "knowing you're stuck on the logic, not the syntax"},
                scienat: {th: "รู้ว่าติดตรงการเลือกวิธีวิเคราะห์ ไม่ใช่ตรงการคำนวณ", en: "knowing you're stuck on choosing the method, not the arithmetic"},
                bizpol: {th: "รู้ว่าติดตรงการตีความข้อกฎหมาย ไม่ใช่ตรงข้อเท็จจริง", en: "knowing you're stuck on interpreting the rule, not the facts"},
                humsoc: {th: "รู้ว่าตัวเองติดตรงกรอบวิเคราะห์ ไม่ใช่ตรงตัวข้อมูล", en: "knowing you're stuck on the framework, not the data"},
                artdes: {th: "รู้ว่าติดตรงคอนเซ็ปต์ ไม่ใช่ตรงเทคนิคการทำงาน", en: "knowing you're stuck on the concept, not the technique"}
              }},
            {th: "ฉันมักพิมพ์ถาม AI ก่อน แล้วค่อยคิดตามแนวทางที่มันเสนอมา", en: "I usually ask AI first, then shape my thinking around whatever it suggests", reverse: true, examples: {
                health: {th: "ให้ AI ไล่การวินิจฉัยแยกโรคก่อนที่จะคิดเอง", en: "letting AI list differentials before thinking of your own"},
                engtech: {th: "ให้ AI เสนอวิธีแก้ก่อนที่จะไล่หาสาเหตุเอง", en: "letting AI propose a fix before tracing the cause yourself"},
                scienat: {th: "ให้ AI เลือกวิธีวิเคราะห์ก่อนที่จะคิดเองว่าข้อมูลเหมาะกับอะไร", en: "letting AI pick the analysis before you think about what your data allows"},
                bizpol: {th: "ให้ AI ตั้งข้อเสนอก่อนที่จะอ่านข้อมูลเอง", en: "letting AI form the recommendation before you read the evidence"},
                humsoc: {th: "ให้ AI ตั้งประเด็นของเปเปอร์ก่อนที่จะคิดเอง", en: "letting AI frame your paper's thesis before you do"},
                artdes: {th: "ให้ AI เสนอคอนเซ็ปต์ก่อนที่จะร่างเอง", en: "letting AI propose the concept before you sketch"}
              }}
          ]
        },
        {
          key: "learning",
          name: {th: "เรียนรู้ ไม่ใช่แค่ได้คำตอบ", en: "Learn, not just answers"},
          desc: {th: "ใช้ AI เป็นติวเตอร์ที่ทำให้เข้าใจมากขึ้น ไม่ใช่คนทำงานแทน", en: "Use AI as a tutor that deepens understanding — not a stand-in that does the work"},
          items: [
            {th: "เวลาใช้ AI กับเรื่องที่ต้องเรียนรู้ ฉันมักให้มันช่วยอธิบายและถามต่อ จนตัวเองเข้าใจพอที่จะอธิบายเองได้", en: "When I use AI on something I need to learn, I usually have it explain and take follow-up questions until I understand well enough to explain it myself", reverse: false, examples: {
                health: {th: "ถามจนอธิบายกลไกของยาให้คนอื่นฟังได้", en: "asking until you can explain a drug's mechanism to someone"},
                engtech: {th: "ถามจนอธิบายได้ว่าโค้ดแต่ละบรรทัดทำอะไร", en: "asking until you can explain what each line of code does"},
                scienat: {th: "ถามจนอธิบายได้ว่าทำไมวิธีนี้ถึงเหมาะกับข้อมูลชุดนี้", en: "asking until you can say why this method fits this data"},
                bizpol: {th: "ถามจนอธิบายเหตุผลเบื้องหลังข้อเสนอได้ด้วยตัวเอง", en: "asking until you can defend the reasoning behind the recommendation"},
                humsoc: {th: "ถามจนอธิบายทฤษฎีด้วยคำของตัวเองได้", en: "asking until you can explain the theory in your own words"},
                artdes: {th: "ถามจนอธิบายได้ว่าทำไมองค์ประกอบนี้ถึงทำงาน", en: "asking until you can say why the composition works"}
              }},
            {th: "หลายครั้งฉันส่งงานที่ AI ทำให้ ทั้งที่ยังอธิบายเองไม่ได้ว่าเนื้อหาในนั้นถูกต้องหรือมาได้อย่างไร", en: "I often hand in work AI produced even though I couldn't yet explain whether its content is right or how it got there", reverse: true, examples: {
                health: {th: "รายงานกรณีศึกษาที่อธิบายเหตุผลทางคลินิกเองไม่ได้", en: "a case report whose clinical reasoning you can't explain"},
                engtech: {th: "โค้ดที่รันผ่าน แต่อธิบายไม่ได้ว่ามันทำงานอย่างไร", en: "code that runs but you can't say how it works"},
                scienat: {th: "ผลวิเคราะห์ที่อธิบายไม่ได้ว่าได้ตัวเลขนี้มาอย่างไร", en: "results you can't say how you arrived at"},
                bizpol: {th: "บทวิเคราะห์ที่ตอบคำถามเจาะลึกของอาจารย์ไม่ได้", en: "an analysis you can't defend under questioning"},
                humsoc: {th: "บทวิเคราะห์ที่อ้างทฤษฎีซึ่งตัวเองยังไม่เข้าใจ", en: "an analysis citing theory you don't yet understand"},
                artdes: {th: "ผลงานที่อธิบายเหตุผลของทุกการตัดสินใจไม่ได้", en: "a piece whose decisions you can't account for"}
              }}
          ]
        },
        {
          key: "privacy",
          name: {th: "ปกป้องข้อมูล", en: "Data privacy"},
          desc: {th: "รู้ว่าข้อมูลไหนไม่ควรป้อนให้ AI และปกป้องข้อมูลของตัวเองและผู้อื่น", en: "Know what should never go into AI — and protect your own and others' data"},
          items: [
            {th: "ก่อนป้อนอะไรให้ AI ฉันเช็คก่อนว่าไม่มีข้อมูลส่วนตัวของตัวเองหรือผู้อื่น หรือข้อมูลลับของงาน/องค์กร ปนอยู่ในนั้น", en: "Before feeding anything into AI, I check that it contains no personal data — mine or other people's — and no confidential work or organizational information", reverse: false, examples: {
                health: {th: "ตัดชื่อ เลขประจำตัวผู้ป่วย และรายละเอียดที่ระบุตัวได้ออกก่อน", en: "stripping names, hospital numbers and identifying details first"},
                engtech: {th: "เอาคีย์ API และข้อมูลผู้ใช้จริงออกจากโค้ดก่อนแปะ", en: "removing API keys and real user data from code before pasting"},
                scienat: {th: "ตรวจว่าข้อมูลดิบที่ยังไม่ตีพิมพ์ไม่หลุดไปอยู่ในแชต", en: "making sure unpublished raw data doesn't end up in a chat"},
                bizpol: {th: "ตรวจว่าไม่มีข้อมูลลูกค้าหรือตัวเลขภายในองค์กรปนอยู่", en: "checking no client data or internal figures are mixed in"},
                humsoc: {th: "ปกปิดชื่อผู้ให้สัมภาษณ์ก่อนให้ AI ช่วยวิเคราะห์", en: "anonymizing interviewees before asking AI to analyze"},
                artdes: {th: "ตรวจว่างานของลูกค้าที่ยังไม่เผยแพร่ไม่ถูกอัปโหลดขึ้นไป", en: "checking an unreleased client project isn't being uploaded"}
              }},
            {th: "ฉันเคยวางข้อความหรือไฟล์งานจริงลงในแชต AI โดยไม่ได้หยุดคิดว่าในนั้นมีข้อมูลส่วนตัวหรือข้อมูลลับหรือเปล่า", en: "I've pasted real work text or files into an AI chat without stopping to think whether they contained personal or confidential information", reverse: true, examples: {
                health: {th: "ภาพหรือบันทึกที่ได้มาจากการฝึกปฏิบัติบนหอผู้ป่วย", en: "images or notes from a ward rotation"},
                engtech: {th: "ไฟล์โปรเจกต์ของที่ฝึกงานทั้งไฟล์", en: "a whole project file from your internship"},
                scienat: {th: "ไฟล์ข้อมูลดิบของแล็บทั้งไฟล์", en: "a whole raw data file from the lab"},
                bizpol: {th: "ไฟล์สัญญาหรืองบการเงินทั้งไฟล์", en: "a whole contract or financial statement"},
                humsoc: {th: "ไฟล์ถอดเทป หรือรายชื่อผู้เข้าร่วมวิจัย", en: "a transcript file or a list of research participants"},
                artdes: {th: "ไฟล์งานออกแบบของลูกค้าที่ยังไม่เปิดตัว", en: "a client's unreleased design files"}
              }}
          ]
        }
      ],
      quadrants: {
        novice: {
          name: {th: "ผู้เริ่มสำรวจ", en: "Curious Beginner"},
          short: {th: "ทักษะเริ่มต้น + กำลังเรียนรู้สไตล์การใช้ AI", en: "Building skill and learning to partner with AI"},
          color: "#9A8C5A",
          blurb: {
            th: "คุณกำลังเริ่มต้นทั้งทักษะ AI และสไตล์การใช้งาน เปิดใจเรียนรู้พื้นฐานพร้อมฝึกตั้งคำถามและตรวจสอบไปด้วยกัน — ค่อย ๆ สร้างทั้งสองด้านไปพร้อม ๆ กัน",
            en: "You're at the start of both your AI skill journey and your partnership style. Build foundational skills while practicing verification and questioning — grow both sides together."
          },
          nudge: {
            th: "เริ่มจากรู้จัก AI และฝึกถาม 'ทำไม' กับคำตอบที่ AI ให้ทุกครั้ง",
            en: "Start by getting to know AI, and practice asking 'why' every time AI gives you an answer"
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
            th: "คุณมีสไตล์การใช้ AI ที่ดี — ตรวจสอบ ตั้งคำถาม และใช้ความคิดของตัวเองเป็นแกน เหลือแค่ขยับทักษะ AI ให้คล่องขึ้น สไตล์ดี ๆ ของคุณจะเป็นเกราะป้องกันไม่ให้พลาดเมื่อใช้มากขึ้น",
            en: "You already partner thoughtfully with AI — verifying, questioning, and keeping your own thinking at the center. Now build tool fluency. Your strong mindset will protect you as your usage grows."
          },
          nudge: {
            th: "ลองเครื่องมือ AI ใหม่ ๆ ในงานประจำสัปดาห์ละ 1–2 ครั้ง สไตล์ดี ๆ ของคุณพร้อมรับการขยับทักษะแล้ว",
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
            th: "คุณใช้ AI ได้เก่ง — ใช้บ่อย ใช้คล่อง แต่ลองชวนตัวเองหยุดคิดสักนิดก่อนทำตาม AI ดู ทักษะการคิด ความสร้างสรรค์ และวิจารณญาณของคุณคือสิ่งที่ AI ทดแทนไม่ได้ ลองรักษามันไว้ขณะที่ใช้ AI",
            en: "You're skilled with AI — using it often and fluently. But pause to check yourself before following AI. Your thinking, creativity, and judgment are what AI can't replace — keep them alive even as you use AI."
          },
          nudge: {
            th: "ลองคิดคำตอบของตัวเองก่อนเปิด AI สัก 1–2 นาที และตรวจสอบคำตอบ AI ทุกครั้งในงานสำคัญ คุณคือคนขับ ไม่ใช่ผู้โดยสาร",
            en: "Try thinking your own answer for 1–2 minutes before opening AI, and verify AI outputs on important work. You're the driver, not the passenger."
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
          short: {th: "ทักษะกับสไตล์การใช้งานสมดุล — เป้าหมายที่อยากไปให้ถึง", en: "Skilled and judgment-led — the destination to aim for"},
          color: "#15827A",
          blurb: {
            th: "คุณใช้ AI ได้เก่งและนำ AI ได้ดี — ทักษะกับสไตล์การใช้งานของคุณสมดุลกัน รักษาสไตล์นี้ไว้ และเป็นต้นแบบให้คนรอบข้างได้เห็นว่าใช้ AI อย่างมีสติเป็นยังไง",
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
