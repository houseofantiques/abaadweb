"use strict";

/**
 * Single-source i18n (AR + EN side-by-side)
 * - Elements use: data-i18n="key"
 * - Placeholders: data-i18n-placeholder="key"
 * - HTML content: data-i18n-html="key" (avoid unless needed)
 */

const T = {
  /* =========================
     BRAND + NAV
  ========================= */
  

  nav_home:     { ar: "الرئيسية", en: "Home" },
  nav_about:    { ar: "عن أبعاد العراق", en: "About" },
  nav_projects: { ar: "مشاريعنا", en: "Projects" },
  nav_features: { ar: "مميزات الجولة", en: "Why Virtual Tours" },
  nav_tours:    { ar: "جولاتنا", en: "Tours" },
  nav_contact:  { ar: "تواصل", en: "Contact" },

  /* =========================
     HERO
  ========================= */
  hero_kicker: { ar: "جولات افتراضية 360° داخل العراق", en: "360° Virtual Tours in Iraq" },
  hero_desc:   { ar: "نعرض مشروعك بتجربة ثلاثية الأبعاد واقعية، تدعم التسويق، وترفع ثقة الزبون، وتختصر وقت القرار.",
                 en: "A realistic 3D experience that boosts marketing, increases trust, and shortens decision time." },

  hero_btn_1:  { ar: "اطلب تسعير", en: "Get a Quote" },
  hero_btn_2:  { ar: "شاهد الجولات", en: "View Tours" },

  /* =========================
     CHIPS
  ========================= */
  chips_1: { ar: "تصوير 360°", en: "360° Capture" },
  chips_2: { ar: "قياس أبعاد", en: "Measurements" },
  chips_3: { ar: "تفريغ مساحات", en: "Space Capture" },
  chips_4: { ar: "صور + فيديو", en: "Photos + Video" },
  chips_5: { ar: "مشاركة سهلة", en: "Easy Sharing" },
  chips_6: { ar: "SEO وخرائط Google", en: "SEO + Google Maps" },

  /* =========================
     GATES (كل بوابة منفصلة)
  ========================= */
  gates_title: { ar: "بوابات الموقع", en: "Site Gateways" },
  gates_desc:  { ar: "4 أقسام واضحة — كل باب يودّيك لصفحة مستقلة ومرتبة.",
                 en: "4 clear sections — each gateway leads to a dedicated page." },

  // Gate 01
  gate1_tag:   { ar: "تعريف", en: "About" },
  gate1_title: { ar: "عن أبعاد العراق", en: "About Abaad Iraq" },
  gate1_desc:  { ar: "نبذة عن المشروع، فريق العمل، ولماذا إحنا مختلفين.",
                 en: "Who we are, what we do, and why we’re different." },

  // Gate 02
  gate2_tag:   { ar: "أعمالنا", en: "Work" },
  gate2_title: { ar: "مشاريعنا المنجزة", en: "Completed Projects" },
  gate2_desc:  { ar: "عرض منظم للمشاريع — بدون تعقيد.",
                 en: "A clean, organized project showcase." },

  // Gate 03
  gate3_tag:   { ar: "القيمة", en: "Value" },
  gate3_title: { ar: "أهمية ومميزات الجولة الافتراضية", en: "Virtual Tour Features & Benefits" },
  gate3_desc:  { ar: "خواص ذكية: قياس، تفريغ، 2D/3D، روابط، صور/فيديو، تسويق وتقييم.",
                 en: "Smart tools: measuring, 2D/3D views, links, photos/video, marketing & reviews." },

  // Gate 04
  gate4_tag:   { ar: "المعرض", en: "Gallery" },
  gate4_title: { ar: "جولاتنا داخل الموقع", en: "Embedded Tours" },
  gate4_desc:  { ar: "تشوف الجولات مباشرة داخل الصفحة بدون روابط مزعجة.",
                 en: "Tours inside the page — no annoying external links." },

  /* =========================
     TOURS
  ========================= */
  tours_h1: { ar: "جولاتنا", en: "Tours" },
  tours_p:  { ar: "اختاري جولة وشوفيها داخل الصفحة.",
              en: "Pick a tour and view it right here." },
/* =========================
   FOOTER (Global) — NEW (Unified Footer)
========================= */
f_ready:        { ar: "جاهز/ة نبدأ؟", en: "Ready to get started?" },
f_get_started:  { ar: "تواصل واتساب", en: "WhatsApp" },

f_follow:       { ar: "تابعنا", en: "Follow us" },
f_services:     { ar: "خدماتنا", en: "Services" },
f_about:        { ar: "عن الشركة", en: "About" },
f_help:         { ar: "مساعدة", en: "Help" },

f_s1:           { ar: "مميزات الجولة", en: "Tour Features" },
f_s2:           { ar: "مشاريعنا", en: "Projects" },
f_s3:           { ar: "جولاتنا", en: "Tours" },

f_a1:           { ar: "من نحن", en: "About us" },
f_a2:           { ar: "شركاؤنا", en: "Partners" },
f_a3:           { ar: "تواصل", en: "Contact" },

f_rights:       { ar: "All Rights Reserved", en: "All Rights Reserved" },

/* =========================
   ABOUT (about.html) ONLY
========================= */

btn_home: {
  ar: "الرئيسية",
  en: "Home"
},
hero_desc: {
  ar: "انطلقت أبعاد العراق من الولايات المتحدة، ثم انتقلت إلى مصر، واستقرت أخيرًا في العراق لتقديم خدماتها الرائدة.\n            نحن نؤمن أن الجولات الافتراضية ليست مجرد أداة عرض، بل وسيلة لرفع قيمة المشاريع وإبرازها بصورة حديثة تواكب العصر.",
  en: "Abaad Iraq started in the United States, then moved to Egypt, and finally settled in Iraq to deliver its leading services. We believe virtual tours are not just a display tool, but a way to increase project value and present it in a modern, up-to-date form."
},

k1: {
  ar: "من أمريكا → مصر → العراق",
  en: "From USA → Egypt → Iraq"
},
k2: {
  ar: "عرض واقعي للمشاريع",
  en: "Realistic project showcasing"
},

call_h: {
  ar: "أهدافنا باختصار",
  en: "Our goals, in brief"
},
call_p: {
  ar: "نساهم في دعم المشاريع داخل العراق عبر تجربة رقمية واقعية ترفع مستوى العرض، تقوّي الانطباع، وتفتح المجال للتسويق الذكي.",
  en: "We support projects in Iraq through a realistic digital experience that upgrades presentation, strengthens first impressions, and opens the door to smart marketing."
},

mission_h: {
  ar: "الرسالة",
  en: "Mission"
},
mission_p: {
  ar: "تحويل الرؤية المعمارية والثقافية والتجارية إلى تجربة واقعية رقمية، تعزز الثقة وتدعم التسويق وتسرّع قرار العميل.",
  en: "Transforming architectural, cultural, and commercial visions into a realistic digital experience that builds trust, supports marketing, and speeds up customer decisions."
},

vision_h: {
  ar: "الرؤية",
  en: "Vision"
},
vision_p: {
  ar: "أن تكون أبعاد العراق معياراً محلياً رائداً لعرض المشاريع بطريقة رقمية حديثة، تربط السوق العراقي بفرص عالمية.",
  en: "To be Iraq’s leading local benchmark for presenting projects in a modern digital way that connects the Iraqi market to global opportunities."
},

why_h: {
  ar: "لماذا نحن؟",
  en: "Why us?"
},
why_p: {
  ar: "نركز على تقديم تجربة دقيقة ومنظمة تساعد صاحب المشروع على إبراز المساحة، التفاصيل، والمحتوى بطريقة احترافية قابلة للمشاركة.",
  en: "We focus on delivering an accurate, structured experience that helps owners highlight space, details, and content in a professional, shareable way."
},

g1_h: {
  ar: "هدف 01",
  en: "Goal 01"
},
g1_1: {
  ar: "رفع قيمة المشروع عبر عرض واقعي يبرز التفاصيل.",
  en: "Increase project value with a realistic showcase that highlights details."
},
g1_2: {
  ar: "تعزيز ثقة الزبون قبل الزيارة الفعلية.",
  en: "Build customer trust before the physical visit."
},

g2_h: {
  ar: "هدف 02",
  en: "Goal 02"
},
g2_1: {
  ar: "دعم التسويق بمواد قابلة للمشاركة والانتشار.",
  en: "Support marketing with shareable, viral-ready assets."
},
g2_2: {
  ar: "اختصار وقت القرار وتحسين تجربة العميل.",
  en: "Reduce decision time and improve customer experience."
},

g3_h: {
  ar: "هدف 03",
  en: "Goal 03"
},
g3_1: {
  ar: "إبراز المشاريع العراقية بصورة حديثة تواكب العصر.",
  en: "Showcase Iraqi projects in a modern, up-to-date style."
},
g3_2: {
  ar: "فتح آفاق أوسع للوصول لجمهور محلي وخارجي.",
  en: "Open wider reach to local and international audiences."
},

/* موجودة عندچ غالباً بس إذا مو موجودة ضيفيها */
privacy: {
  ar: "سياسة الخصوصية",
  en: "Privacy Policy"
},
terms: {
  ar: "الشروط",
  en: "Terms"
},

/* =========================
   FEATURES (features.html)
========================= */
feat_title: { ar: "مميزات الجولات الافتراضية | أبعاد العراق", en: "Virtual Tour Features | Abaad Iraq" },
feat_h1:    { ar: "مميزات الجولة الافتراضية", en: "Virtual Tour Features" },

feat_p: {
  ar: "الجولة الافتراضية تجربة تفاعلية بزاوية 360° تخلي الزائر يتجول داخل المكان وكأنه حاضر فعليًا. تطورت مع تقنيات التصوير البانورامي، وانتشرت بقوة مع الإنترنت والهواتف والـ VR خصوصًا بعد 2010. اليوم صارت أداة تسويق أساسية لأنها تعرض المساحة بوضوح، تبني ثقة، وتختصر قرار العميل.",
  en: "A virtual tour is an interactive 360° experience that lets visitors explore a place as if they were physically there. It evolved with panoramic imaging and became widely popular with the web, smartphones, and VR—especially after 2010. Today, it’s a core marketing tool because it clearly showcases the space, builds trust, and shortens decision time."
},

feat_q1: { ar: "360° + حركة داخل المكان", en: "360° + walk-through navigation" },
feat_q2: { ar: "تعمل على الموبايل والويب", en: "Works on mobile & web" },
feat_q3: { ar: "تزيد الثقة وتسرّع قرار الزيارة", en: "Builds trust & speeds decisions" },

feat_cards_h: { ar: "ليش الجولات الافتراضية صارت سلاح تسويقي؟", en: "Why virtual tours became a marketing weapon?" },
feat_cards_p: { ar: "ثلاث زوايا مهمة: المميزات، الأهمية، والتأثير المباشر على مشروعك.", en: "Three key angles: features, importance, and direct business impact." },

feat_c1_h: { ar: "01", en: "01" },
feat_c1_t: { ar: "مميزات الجولة", en: "Key Features" },
feat_c1_1: { ar: "تجربة دخول للمكان بوضوح عالي وزوايا كاملة", en: "High-clarity full-space view" },
feat_c1_2: { ar: "تنقّل بين النقاط وكأنك تمشي خطوة بخطوة", en: "Step-by-step navigation between points" },
feat_c1_3: { ar: "مناسبة للمشاركة على السوشيال، Google، والمواقع", en: "Easy to share on social, Google, and websites" },
feat_c1_4: { ar: "تخلي المكان مفتوح 24/7 للزبون", en: "Your space is open 24/7" },

feat_c2_h: { ar: "02", en: "02" },
feat_c2_t: { ar: "أهمية الجولة للمشاريع", en: "Why It Matters" },
feat_c2_1: { ar: "تبني ثقة: الزبون يشوف المكان قبل لا يدفع أو يزور", en: "Builds trust before paying or visiting" },
feat_c2_2: { ar: "تقلل الأسئلة المتكررة لأن كلشي واضح قدّام الزبون", en: "Reduces repetitive questions (details are visible)" },
feat_c2_3: { ar: "تساعد القرار: أجي لو لا؟ يصير أسرع", en: "Faster decisions: Should I visit?" },
feat_c2_4: { ar: "تخدم الفروع/العقارات/المنشآت بدون حضور فعلي", en: "Useful for branches, real estate, and facilities" },

feat_c3_h: { ar: "03", en: "03" },
feat_c3_t: { ar: "تأثيرها على النتائج", en: "Business Impact" },
feat_c3_1: { ar: "تزيد مدة بقاء الزائر بالموقع/الصفحة", en: "Increases time spent on the page" },
feat_c3_2: { ar: "ترفع احتمالية التواصل والحجز لأن التجربة مقنعة", en: "Boosts enquiries & bookings (more convincing)" },
feat_c3_3: { ar: "تفرقك عن المنافس: أنت تعرض واقع مو صور فقط", en: "Differentiates you beyond photos (real walkthrough)" },
feat_c3_4: { ar: "تخلي مشروعك يبين أفخم وأكثر احتراف", en: "Creates a premium, professional impression" },

feat_cta_h:  { ar: "جاهزين نخلي مشروعك ينشاف قبل الزيارة", en: "Ready to showcase your project before the visit?" },
feat_cta_p:  { ar: "راسلنا الآن وخلي فريقنا يقترح عليك أفضل طريقة للعرض والتسويق.", en: "Message us now and we’ll suggest the best way to present and market your space." },
feat_cta_b1: { ar: "تواصل واتساب", en: "WhatsApp" },
feat_cta_b2: { ar: "راسلنا ايميل", en: "Email us" }
}; // ✅ هذا الإغلاق الوحيد لـ const T


/* Build window.I18N in the format your app expects */
window.I18N = { ar: {}, en: {} };
Object.keys(T).forEach((k) => {
  window.I18N.ar[k] = T[k].ar;
  window.I18N.en[k] = T[k].en;
});
