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
  brand_name: { ar: "أبعاد العراق", en: "Abaad Iraq" },
  brand_sub:  { ar: "Virtual Tours", en: "Virtual Tours" },

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
  hero_title:  { ar: "خلِّ مشروعك يِنشاف قبل لا يِنزار", en: "Let clients see your place before they visit" },
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
   FOOTER (Global)
========================= */
f_cta_title:   { ar: "جاهزين نخلي مشروعك ينشاف قبل الزيارة", en: "Ready to showcase your project before the visit" },
f_cta_desc:    { ar: "راسلنا الآن وخلي فريقنا يقترح عليك أفضل طريقة للعرض والتسويق.", en: "Message us now and we’ll suggest the best way to present and market your space." },
f_cta_whatsapp:{ ar: "تواصل واتساب", en: "WhatsApp" },
f_cta_email:   { ar: "راسلنا ايميل", en: "Email us" },
f_note:        { ar: "جولات افتراضية تفاعلية ترفع قيمة المشروع وتختصر قرار العميل.", en: "Interactive virtual tours that elevate project value and speed up customer decisions." },
f_contact:     { ar: "تواصل", en: "Contact" },
f_phone:       { ar: "هاتف", en: "Phone" },
f_social:      { ar: "مواقع التواصل", en: "Social" },
f_privacy:     { ar: "سياسة الخصوصية", en: "Privacy Policy" },
f_terms:       { ar: "الشروط", en: "Terms" },

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
