"use strict";

/**
 * Single-source i18n (AR + EN side-by-side)
 * - Elements use: data-i18n="key"
 * - Placeholders: data-i18n-placeholder="key"
 * - HTML content: data-i18n-html="key" (avoid unless needed)
 */

const T = {
/* =========================
   HOME (index.html)
========================= */

/* Nav (مشترك) */
nav_home:     { ar: "الرئيسية",        en: "Home" },
nav_about:    { ar: "عن أبعاد العراق",  en: "About Abaad Iraq" },
nav_projects: { ar: "مشاريعنا",        en: "Projects" },
nav_features: { ar: "مميزات الجولة",    en: "Tour Features" },
nav_tours:    { ar: "جولاتنا",         en: "Tours" },
nav_contact:  { ar: "تواصل",           en: "Contact" },

/* Services band */
services_title: { ar: "خدماتنا", en: "Services" },

svc_1_t: { ar: "جولات افتراضية 360°", en: "360° Virtual Tours" },
svc_1_d: { ar: "تجربة واقعية",         en: "A realistic experience" },

svc_2_t: { ar: "قياسات ولقطات",        en: "Measurements & Snapshots" },
svc_2_d: { ar: "قياسات حقيقية حقيقة",  en: "Accurate real measurements" },

svc_3_t: { ar: "صور 4K + فيديو",       en: "4K Photos + Video" },
svc_3_d: { ar: "صور، فيديو، ومقاطع قصيرة", en: "Photos, video, and short clips" },

svc_4_t: { ar: "نشر وتسويق",           en: "Publishing & Marketing" },
svc_4_d: { ar: "مشاركة على المنصات",    en: "Sharing across platforms" },

split_link: { ar: "تعرّف على مميزات الجولة →", en: "Explore tour features →" },

/* Stats band */
stats_title: { ar: "مؤشرات تساعد على اتخاذ قرار أفضل", en: "Metrics that help better decisions" },

stat_1_num:  { ar: "+40%", en: "+40%" },
stat_1_lbl:  { ar: "ثقة أعلى", en: "Higher Trust" },
stat_1_desc: { ar: "من الزبائن يثقون أكثر بالمشاريع التي تمتلك جولة افتراضية", en: "More customers trust projects that have a virtual tour" },

stat_2_num:  { ar: "–30%", en: "–30%" },
stat_2_lbl:  { ar: "زيارات غير جادة أقل", en: "Less Wasted Visits" },
stat_2_desc: { ar: "تقليل الزيارات غير الجادة قبل التواصل", en: "Fewer unqualified visits before contacting" },

stat_3_num:  { ar: "2×", en: "2×" },
stat_3_lbl:  { ar: "تفاعل المستخدم", en: "User Engagement" },
stat_3_desc: { ar: "وقت بقاء أطول داخل صفحة المشروع", en: "Longer time spent on the project page" },

stat_4_num:  { ar: "+25%", en: "+25%" },
stat_4_lbl:  { ar: "معدل القرار", en: "Decision Rate" },
stat_4_desc: { ar: "فرصة أعلى لاتخاذ قرار الزيارة أو الحجز", en: "Higher chance to decide to visit or book" },

/* Featured gates */
gates_topline: { ar: "4 أقسام واضحة — كل باب يوديك لصفحة مستقلة ومرتبة.", en: "Clear sections — each gate takes you to a dedicated page." },
gate_btn:      { ar: "ادخل", en: "Enter" },

gate1_title: { ar: "عن أبعاد العراق", en: "About Abaad Iraq" },
gate1_sub: {
  ar: "نبذة عن رؤية الشركة، وبداية المشروع، وأهدافنا في تقديم حلول عرض رقمية حديثة تواكب تطور السوق العراقي.",
  en: "A quick look at our vision, how we started, and our goals in delivering modern digital showcasing solutions for the Iraqi market."
},

gate2_title: { ar: "مشاريعنا المنجزة", en: "Completed Projects" },
gate2_sub: {
  ar: "استعراض نماذج مختارة من المشاريع التي تم تنفيذها، مع إمكانية الاطلاع على الجولة الافتراضية مباشرة داخل الصفحة.",
  en: "Browse selected completed projects, with the ability to view the virtual tour directly inside the page."
},

gate3_title: { ar: "أهمية ومميزات الجولة الافتراضية", en: "Why Virtual Tours Matter" },
gate3_sub: {
  ar: "قياسات دقيقة، وتوثيق ثلاثي وثنائي الأبعاد، ومحتوى احترافي يرفع جودة العرض ويعزز القيمة التسويقية للمشروع.",
  en: "Accurate measurements, 3D/2D documentation, and professional content that elevates presentation quality and boosts marketing value."
},

gate4_title: { ar: "تقنيات الواقع الافتراضي (VR)", en: "Virtual Reality (VR) Technologies" },
gate4_sub: {
  ar: "حلول عرض متقدمة تعتمد على تقنيات الواقع الافتراضي، تتيح استكشاف المشاريع بطرق تفاعلية مبتكرة، سواء عبر الأجهزة الذكية أو شاشات العرض أو نظارات VR.",
  en: "Advanced showcasing solutions powered by VR technologies, enabling interactive exploration via smartphones, displays, or VR headsets."
},

gate5_title: { ar: "القطاعات المستفيدة من الجولة الافتراضية", en: "Sectors That Benefit from Virtual Tours" },
gate5_sub: {
  ar: "حلول توثيق وتسويق رقمي تخدم قطاعات متعددة مثل العقارات، المعارض بمختلف أنواعها، المصانع، المكاتب الهندسية، المؤسسات التعليمية، والقطاعات السياحية والتراثية.",
  en: "Digital documentation and marketing solutions for multiple sectors such as real estate, exhibitions, factories, engineering offices, educational institutions, and tourism/heritage."
},

gate6_title: { ar: "الطلب والتسعير", en: "Order & Pricing" },
gate6_sub: {
  ar: "آلية عمل واضحة: كشف ميداني لتحديد المساحة، اتفاق رسمي، ثم تنفيذ المسح بأجهزة متخصصة. التسعير حسب المتر المربع مع خيار استضافة وصيانة للجولة.",
  en: "A clear workflow: on-site inspection to define area, official agreement, then scanning with specialized devices. Pricing is per square meter, with optional hosting and maintenance."
},

/* 4K Shots section */
shots_title: { ar: "لقطات 4K من الجولات", en: "4K Shots from Tours" },
shots_desc:  {
  ar: "صور تسويقية تُستخرج من الجولة بدقة عالية — تختار الزاوية، وتستخدمها للنشر، مع إمكانية القياسات داخل الجولة.",
  en: "Marketing visuals extracted from the tour in high resolution — pick the angle, use it for posting, with in-tour measurement capability."
},

/* Partners section */
partners_title: { ar: "شركاؤنا", en: "Our Partners" },
partners_desc:  { ar: "جهات وثقت بنا لتنفيذ جولات وتجارب رقمية داخل العراق.", en: "Organizations that trusted us to deliver tours and digital experiences in Iraq." },

/* Footer (إذا مو موجود عندك سابقاً، خليه) */
brand_name:  { ar: "أبعاد العراق", en: "Abaad Iraq" },
f_rights:    { ar: "جميع الحقوق محفوظة", en: "All Rights Reserved" },
f_follow:    { ar: "تابعنا", en: "Follow us" },
f_services:  { ar: "خدماتنا", en: "Services" },
f_s1:        { ar: "مميزات الجولة", en: "Tour Features" },
f_s2:        { ar: "مشاريعنا", en: "Projects" },
f_s3:        { ar: "جولاتنا", en: "Tours" },
f_about:     { ar: "عن الشركة", en: "About" },
f_a1:        { ar: "من نحن", en: "Who we are" },
f_a2:        { ar: "شركاؤنا", en: "Partners" },
f_a3:        { ar: "تواصل", en: "Contact" },
f_help:      { ar: "مساعدة", en: "Help" },
f_privacy:   { ar: "سياسة الخصوصية", en: "Privacy Policy" },
f_terms:     { ar: "الشروط", en: "Terms" },


/* ---------- OPTIONAL (مو مربوط حالياً لأن HTML ما بي data-i18n) ---------- */
/* Hero */
home_hero_eyebrow: { ar: "خدمات الجولات الافتراضية", en: "VIRTUAL TOURS SERVICES" },
home_hero_title:   { ar: "أبعاد العراق",             en: "ABAAD ALIRAQ" },
home_hero_text: {
  ar: "تُحيي أبعاد العراق المساحات عبر جولات افتراضية 360° تُظهر المكان قبل زيارته.",
  en: "Abaad Iraq brings spaces to life through immersive 360° virtual tours that showcase places before they are visited."
},
home_hero_cta: { ar: "مشاريعــنا المنفذة", en: "Our Completed Projects" },

/* Featured Sections title */
featured_sections_title: { ar: "الأقسام المميزة", en: "Featured Sections" },

/* Tours block */
tours_title: { ar: "جولاتنا", en: "Our Tours" },
tours_desc:  { ar: "الجولة الأبرز — بيت التحفيات", en: "Featured tour — House of Antiques" },

/* Lightbox UI */
lb_hint: { ar: "Esc لإغلاق • ← → للتنقل", en: "Esc to close • ← → to navigate" },
lb_prev: { ar: "السابق", en: "Previous" },
lb_next: { ar: "التالي", en: "Next" },
lb_close:{ ar: "إغلاق", en: "Close" },


/* =========================
   ABOUT (about.html)
========================= */

nav_home:     { ar: "الرئيسية", en: "Home" },
nav_projects: { ar: "مشاريعنا", en: "Projects" },
nav_features: { ar: "مميزات الجولة", en: "Tour Features" },
nav_contact:  { ar: "تواصل", en: "Contact" },

k1: { ar: "من أمريكا → مصر → العراق", en: "From the USA → Egypt → Iraq" },
k2: { ar: "عرض واقعي للمشاريع", en: "Realistic Showcase for Projects" },

hero_title: { ar: "أبعاد العراق: تجربة رقمية ترفع قيمة المشروع", en: "Abaad Iraq: A digital experience that elevates your project" },
hero_desc: {
  ar: "انطلقت أبعاد العراق من الولايات المتحدة، ثم انتقلت إلى مصر، واستقرت أخيرًا في العراق لتقديم خدماتها الرائدة. نحن نؤمن أن الجولات الافتراضية ليست مجرد أداة عرض، بل وسيلة لرفع قيمة المشاريع وإبرازها بصورة حديثة تواكب العصر.",
  en: "Abaad Iraq started in the United States, moved to Egypt, and finally settled in Iraq to deliver leading services. We believe virtual tours are not just a viewing tool — they’re a way to elevate project value and present it with a modern, up-to-date feel."
},

vision_h: { ar: "الرؤية", en: "Vision" },
vision_p: {
  ar: "أن تكون أبعاد العراق معياراً محلياً رائداً لعرض المشاريع بطريقة رقمية حديثة، تربط السوق العراقي بفرص عالمية.",
  en: "To become Iraq’s leading local benchmark for presenting projects through modern digital experiences that connect the Iraqi market to global opportunities."
},

mission_h: { ar: "الرسالة", en: "Mission" },
mission_p: {
  ar: "تحويل الرؤية المعمارية والثقافية والتجارية إلى تجربة واقعية رقمية، تعزز الثقة وتدعم التسويق وتسرّع قرار العميل.",
  en: "Transform architectural, cultural, and commercial vision into a realistic digital experience that builds trust, supports marketing, and accelerates customer decisions."
},

why_h: { ar: "لماذا نحن؟", en: "Why us?" },
why_p: {
  ar: "نركز على تقديم تجربة دقيقة ومنظمة تساعد صاحب المشروع على إبراز المساحة، التفاصيل، والمحتوى بطريقة احترافية قابلة للمشاركة.",
  en: "We focus on a precise, structured experience that helps business owners showcase the space, details, and content in a professional, shareable way."
},

call_h: { ar: "أهدافنا باختصار", en: "Our goals — in short" },
call_p: {
  ar: "نساهم في دعم المشاريع داخل العراق عبر تجربة رقمية واقعية ترفع مستوى العرض، تقوّي الانطباع، وتفتح المجال للتسويق الذكي.",
  en: "We support projects in Iraq with realistic digital experiences that raise presentation quality, strengthen first impressions, and unlock smarter marketing."
},

g1_h: { ar: "هدف 01", en: "Goal 01" },
g1_1: { ar: "رفع قيمة المشروع عبر عرض واقعي يبرز التفاصيل.", en: "Increase project value with a realistic showcase that highlights details." },
g1_2: { ar: "تعزيز ثقة الزبون قبل الزيارة الفعلية.", en: "Build customer trust before the physical visit." },

g2_h: { ar: "هدف 02", en: "Goal 02" },
g2_1: { ar: "دعم التسويق بمواد قابلة للمشاركة والانتشار.", en: "Support marketing with shareable, distributable content." },
g2_2: { ar: "اختصار وقت القرار وتحسين تجربة العميل.", en: "Reduce decision time and improve the customer experience." },

g3_h: { ar: "هدف 03", en: "Goal 03" },
g3_1: { ar: "إبراز المشاريع العراقية بصورة حديثة تواكب العصر.", en: "Present Iraqi projects in a modern, up-to-date way." },
g3_2: { ar: "فتح آفاق أوسع للوصول لجمهور محلي وخارجي.", en: "Expand reach to both local and international audiences." },

/* Footer keys (إذا ناقصات عندك) */
f_follow:   { ar: "تابعنا", en: "Follow us" },
f_services: { ar: "خدماتنا", en: "Services" },
f_about:    { ar: "عن الشركة", en: "Company" },
f_help:     { ar: "مساعدة", en: "Help" },

f_s1: { ar: "مميزات الجولة", en: "Tour Features" },
f_s2: { ar: "مشاريعنا", en: "Projects" },
f_s3: { ar: "جولاتنا", en: "Tours" },

f_a1: { ar: "من نحن", en: "About us" },
f_a2: { ar: "شركاؤنا", en: "Partners" },
f_a3: { ar: "تواصل", en: "Contact" },

f_privacy: { ar: "سياسة الخصوصية", en: "Privacy Policy" },
f_terms:   { ar: "الشروط", en: "Terms" },

f_rights:  { ar: "جميع الحقوق محفوظة", en: "All Rights Reserved" },

/* =========================
   SECTORS (sectors.html)
========================= */

sectors_page_title: { ar: "أبعاد العراق — القطاعات", en: "Abaad Iraq — Sectors" },

/* Nav */
nav_home:     { ar: "الرئيسية",   en: "Home" },
nav_about:    { ar: "نبذة عنا",    en: "About" },
nav_projects: { ar: "مشاريعنا",   en: "Projects" },
nav_features: { ar: "مميزات الجولة", en: "Tour Features" },
nav_sectors:  { ar: "القطاعات",   en: "Sectors" },
nav_contact:  { ar: "تواصل",      en: "Contact" },

/* Hero */
sectors_pill:  { ar: "القطاعات",       en: "Sectors" },
sectors_pill2: { ar: "تسويق + توثيق",  en: "Marketing + Documentation" },

sectors_title: { ar: "القطاعات التي تستفيد من الجولة الافتراضية", en: "Sectors that benefit from virtual tours" },
sectors_desc: {
  ar: "الجولات الافتراضية ليست “عرض” فقط؛ هي أداة تسويق قوية + توثيق دقيق. لذلك نستخدمها لمشاريع مختلفة: من العقارات والمعارض إلى المصانع والتعليم والسياحة والتراث.",
  en: "Virtual tours are not just a “showcase”; they are a powerful marketing tool + precise documentation. That’s why we use them across different projects — from real estate and exhibitions to factories, education, tourism, and heritage."
},

chip_fast:  { ar: "تجربة واضحة",   en: "Clear experience" },
chip_share: { ar: "جاهز للمشاركة", en: "Ready to share" },
chip_docs:  { ar: "توثيق قياسات",  en: "Measured documentation" },

/* Badges */
badge_marketing: { ar: "تسويق",  en: "Marketing" },
badge_docs:      { ar: "توثيق",  en: "Documentation" },

/* Shared column headers */
sec_m: { ar: "التسويق",  en: "Marketing" },
sec_d: { ar: "التوثيق",  en: "Documentation" },

/* 01 Real Estate */
sec_realestate: { ar: "العقارات", en: "Real Estate" },
sec_realestate_desc: {
  ar: "مثالية للشقق، المجمعات، المولات، والمكاتب. تخلي العميل يشوف التفاصيل ويتخذ قرار أسرع قبل الزيارة.",
  en: "Ideal for apartments, compounds, malls, and offices. Let customers see details and decide faster before visiting."
},
sec_realestate_m1: { ar: "رفع قيمة العرض وإظهار التفاصيل", en: "Increase listing value and highlight details" },
sec_realestate_m2: { ar: "تقليل الاستفسارات المتكررة وتسريع القرار", en: "Reduce repeated questions and speed up decisions" },
sec_realestate_m3: { ar: "محتوى جاهز للمشاركة على السوشيال", en: "Share-ready content for social media" },
sec_realestate_d1: { ar: "توثيق حالة العقار قبل/بعد", en: "Document property condition before/after" },
sec_realestate_d2: { ar: "دعم القياسات والفراغات بصرياً", en: "Visual support for measurements and spaces" },
sec_realestate_d3: { ar: "مرجع سريع لفِرق التنفيذ", en: "Quick reference for execution teams" },

/* 02 Exhibitions */
sec_exhibitions: { ar: "المعارض", en: "Exhibitions" },
sec_exhibitions_desc: {
  ar: "معارض سيارات، أثاث، معارض فنية… الجولة تحفظ “الفعالية” حتى بعد انتهائها وتخليها قابلة للمشاركة.",
  en: "Car shows, furniture fairs, art exhibitions… the tour preserves the “event” even after it ends and makes it shareable."
},
sec_exhibitions_m1: { ar: "عرض المعرض للجمهور خارج المدينة", en: "Show the exhibition to audiences outside the city" },
sec_exhibitions_m2: { ar: "رفع التفاعل والمشاركات", en: "Increase engagement and shares" },
sec_exhibitions_m3: { ar: "محتوى قوي للإعلانات والرعاة", en: "Strong content for ads and sponsors" },
sec_exhibitions_d1: { ar: "أرشفة تصميم المعرض وتوزيع الأجنحة", en: "Archive exhibition layout and booth distribution" },
sec_exhibitions_d2: { ar: "توثيق الأعمال/المنتجات المعروضة", en: "Document showcased works/products" },
sec_exhibitions_d3: { ar: "مرجع للنسخ القادمة من الفعالية", en: "Reference for future editions of the event" },

/* 03 Factories */
sec_factories: { ar: "المصانع", en: "Factories" },
sec_factories_desc: {
  ar: "مفيدة للمستثمرين والعملاء: عرض خطوط الإنتاج والمخازن بطريقة احترافية تعزز الثقة.",
  en: "Useful for investors and clients: showcase production lines and warehouses professionally to build trust."
},
sec_factories_m1: { ar: "عروض استثمارية أقوى", en: "Stronger investment presentations" },
sec_factories_m2: { ar: "تعزيز الثقة والشفافية", en: "Build trust and transparency" },
sec_factories_m3: { ar: "عرض جاهزية المصنع للعملاء", en: "Show factory readiness to customers" },
sec_factories_d1: { ar: "توثيق خطوط الإنتاج والمعدات", en: "Document production lines and equipment" },
sec_factories_d2: { ar: "مرجع لإدارة السلامة والجودة", en: "Reference for safety and quality management" },
sec_factories_d3: { ar: "توثيق توسعات/تغييرات المكان", en: "Document expansions/changes of the facility" },

/* 04 Engineers */
sec_engineers: { ar: "المهندسون والمكاتب الهندسية", en: "Engineers & Engineering Offices" },
sec_engineers_desc: {
  ar: "توثيق مراحل التنفيذ وتحويل المشروع إلى ملف عرض “احترافي” يفيد بالعطاءات والبورتفوليو.",
  en: "Document implementation stages and turn the project into a “professional” showcase useful for bids and portfolios."
},
sec_engineers_m1: { ar: "بورتفوليو أقوى للمكتب", en: "Stronger office portfolio" },
sec_engineers_m2: { ar: "عرض المشاريع للعميل قبل التسليم", en: "Show projects to clients before handover" },
sec_engineers_m3: { ar: "محتوى جاهز للنشر", en: "Ready-to-publish content" },
sec_engineers_d1: { ar: "توثيق مراحل التنفيذ", en: "Document execution stages" },
sec_engineers_d2: { ar: "مرجع لتفاصيل الموقع والفراغات", en: "Reference for site details and spaces" },
sec_engineers_d3: { ar: "دعم ملفات التقديم والعطاءات", en: "Support submission files and bids" },

/* 05 Education */
sec_education: { ar: "الجامعات والمدارس والروضات", en: "Universities, Schools & Kindergartens" },
sec_education_desc: {
  ar: "تعريف واضح بالمرافق والقاعات والبيئة التعليمية، ويساعد بأقناع أولياء الأمور والطلبة.",
  en: "A clear presentation of facilities, halls, and the learning environment — helps convince parents and students."
},
sec_education_m1: { ar: "جذب الطلبة وأولياء الأمور", en: "Attract students and parents" },
sec_education_m2: { ar: "توضيح القاعات والمختبرات", en: "Clarify halls and labs" },
sec_education_m3: { ar: "رفع الثقة بالمؤسسة", en: "Increase trust in the institution" },
sec_education_d1: { ar: "توثيق المرافق", en: "Document facilities" },
sec_education_d2: { ar: "مرجع للإدارة والصيانة", en: "Reference for management and maintenance" },
sec_education_d3: { ar: "توثيق التطويرات والتغييرات", en: "Document upgrades and changes" },

/* 06 Tourism & Heritage */
sec_tourism: { ar: "السياحة والتراث", en: "Tourism & Heritage" },
sec_tourism_desc: {
  ar: "الأفضل للمواقع الثقافية والتراثية: توثيق دائم + تجربة تشجع الزائر قبل ما يجي.",
  en: "Best for cultural and heritage sites: lasting documentation + an experience that motivates visitors before they come."
},
sec_tourism_m1: { ar: "زيادة الاهتمام والزيارة", en: "Increase interest and visits" },
sec_tourism_m2: { ar: "نشر التجربة عالمياً", en: "Share the experience globally" },
sec_tourism_m3: { ar: "محتوى قوي للحملات", en: "Strong content for campaigns" },
sec_tourism_d1: { ar: "توثيق المواقع التاريخية", en: "Document historical sites" },
sec_tourism_d2: { ar: "حفظ التفاصيل بصرياً", en: "Preserve details visually" },
sec_tourism_d3: { ar: "مادة أرشيفية للسنوات", en: "Archival material for years" },

/* 07 Restaurants */
sec_restaurants: { ar: "المطاعم", en: "Restaurants" },
sec_restaurants_desc: {
  ar: "عرض الجلسات والأجواء والتفاصيل قبل الزيارة، وتحويل المكان إلى تجربة “قابلة للمشاركة” لزيادة الحجوزات.",
  en: "Show seating, atmosphere, and details before the visit — and turn the place into a shareable experience to increase bookings."
},
sec_restaurants_m1: { ar: "إظهار الأجواء والجلسات بطريقة واقعية", en: "Show atmosphere and seating realistically" },
sec_restaurants_m2: { ar: "رفع الثقة وتحفيز قرار الحجز", en: "Build trust and encourage booking decisions" },
sec_restaurants_m3: { ar: "محتوى قوي للسوشيال والإعلانات", en: "Strong content for social and ads" },
sec_restaurants_d1: { ar: "توثيق التصميم الداخلي قبل/بعد التحديث", en: "Document interior design before/after updates" },
sec_restaurants_d2: { ar: "مرجع لتوزيع الطاولات والمساحات", en: "Reference for table layout and spaces" },
sec_restaurants_d3: { ar: "دعم إدارة الفروع عند التوسع", en: "Support branch management during expansion" },

/* 08 Healthcare */
sec_health: { ar: "القطاع الصحي", en: "Healthcare" },
sec_health_desc: {
  ar: "للمستشفيات والعيادات والمراكز الطبية: عرض المرافق والخدمات بشكل احترافي يعزز الثقة ويُسهل القرار.",
  en: "For hospitals, clinics, and medical centers: professional presentation of facilities and services that builds trust and eases decisions."
},
sec_health_m1: { ar: "تعزيز الثقة عبر عرض المكان بشكل واضح", en: "Build trust by showing the space clearly" },
sec_health_m2: { ar: "إظهار الأقسام والخدمات بدون مبالغة", en: "Show departments and services without exaggeration" },
sec_health_m3: { ar: "مناسب للمواقع والإعلانات الرسمية", en: "Suitable for websites and official ads" },
sec_health_d1: { ar: "توثيق المرافق والأجهزة والفراغات", en: "Document facilities, equipment, and spaces" },
sec_health_d2: { ar: "مرجع للإدارة والجودة والسلامة", en: "Reference for management, quality, and safety" },
sec_health_d3: { ar: "توثيق التحديثات والتوسعات", en: "Document upgrades and expansions" },

/* 09 Events */
sec_events: { ar: "توثيق المؤتمرات والإيفينتات", en: "Conferences & Events Documentation" },
sec_events_desc: {
  ar: "توثيق الحدث بصيغة تجربة قابلة للمشاركة بعد انتهائه، مفيد للرعاة والإعلام وإصدارات التقارير.",
  en: "Document the event as a shareable experience after it ends — useful for sponsors, media, and report releases."
},
sec_events_m1: { ar: "محتوى قوي للتغطية والرعاة", en: "Strong content for coverage and sponsors" },
sec_events_m2: { ar: "رفع قيمة الحدث للدورات القادمة", en: "Increase event value for future editions" },
sec_events_m3: { ar: "مشاركة التجربة للجمهور غير الحاضر", en: "Share the experience with those who didn’t attend" },
sec_events_d1: { ar: "توثيق القاعات والتجهيزات والتوزيع", en: "Document halls, setups, and layout" },
sec_events_d2: { ar: "أرشفة الأجنحة والمحتوى المعروض", en: "Archive booths and displayed content" },
sec_events_d3: { ar: "مرجع تنظيمي للنسخ القادمة", en: "Organizational reference for upcoming editions" },

/* 10 Retail */
sec_retail: { ar: "المحلات التجارية والمولات", en: "Retail Shops & Malls" },
sec_retail_desc: {
  ar: "عرض تجربة التسوق وتوزيع المحلات والمسارات، وتحويل المكان إلى مادة تسويقية واضحة للمستأجرين والزوار.",
  en: "Show the shopping experience, store distribution, and pathways — and turn the place into clear marketing material for tenants and visitors."
},
sec_retail_m1: { ar: "زيادة جذب الزوار عبر عرض التجربة", en: "Attract more visitors by showcasing the experience" },
sec_retail_m2: { ar: "تسويق للمستأجرين وإظهار المواقع", en: "Market to tenants and highlight locations" },
sec_retail_m3: { ar: "محتوى جاهز للإعلانات والخرائط", en: "Ready content for ads and maps" },
sec_retail_d1: { ar: "توثيق الحالة الداخلية والتصميم", en: "Document interior condition and design" },
sec_retail_d2: { ar: "مرجع للصيانة وإدارة المساحات", en: "Reference for maintenance and space management" },
sec_retail_d3: { ar: "توثيق التغييرات والتأجير", en: "Document changes and leasing" },

/* CTA */
sectors_cta_h: { ar: "هل ينتمي مشروعك لأحد هذه القطاعات؟", en: "Does your project fit one of these sectors?" },
sectors_cta_p: {
  ar: "تواصل معنا لنقترح لك أفضل طريقة عرض تناسب مشروعك (تسويق + توثيق) وبشكل احترافي.",
  en: "Contact us and we’ll suggest the best presentation approach for your project (marketing + documentation) professionally."
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
feat_cta_b2: { ar: "راسلنا ايميل", en: "Email us" },

/* =========================
   FOOTER (New links)
========================= */
f_vr:      { ar: "تقنيات الواقع الافتراضي (VR)", en: "VR Technologies" },
f_sectors: { ar: "القطاعات المستفيدة من الجولة",  en: "Sectors" },
f_order:   { ar: "الطلب والتسعير",               en: "Order & Pricing" },

/* =========================
   (OPTIONAL) Topbar CTA labels
   إذا عندك زر CTA جديد بالتوب بار وتريد له ترجمة
========================= */
nav_vr:      { ar: "VR",        en: "VR" },
nav_sectors: { ar: "القطاعات",  en: "Sectors" },
nav_order:   { ar: "طلب وتسعير", en: "Order & Pricing" },


/* =========================
   ORDER (order.html)
========================= */

order_page_title: { ar: "الطلب والتسعير | أبعاد العراق", en: "Order & Pricing | Abaad Iraq" },

/* Nav (مشترك) */
nav_home:     { ar: "الرئيسية",    en: "Home" },
nav_projects: { ar: "مشاريعنا",    en: "Projects" },
nav_features: { ar: "مميزات الجولة", en: "Tour Features" },
nav_contact:  { ar: "تواصل",       en: "Contact" },

/* Hero */
order_tag:  { ar: "الطلب والتسعير", en: "Order & Pricing" },
order_h1:   { ar: "نبدأ بخطوات واضحة… ثم نحدد السعر بدقة", en: "We start with clear steps… then we set the price precisely" },
order_desc: { ar: "آلية العمل عندنا تعتمد على كشف ميداني لتحديد المساحة والمتطلبات، ثم اتفاق رسمي وجدول تنفيذ.", en: "Our workflow relies on an on-site inspection to define area and requirements, followed by an official agreement and execution schedule." },
order_cta_1:{ ar: "قدّم طلبك", en: "Submit your request" },
order_cta_2:{ ar: "شاهد آلية العمل", en: "See the workflow" },

/* Flow */
flow_h2: { ar: "آلية العمل", en: "Workflow" },
flow_p:  { ar: "نتفق على كل شيء قبل التنفيذ: نطاق العمل، الزمن، الخصوصية، والاستضافة.", en: "We align on everything before execution: scope, timeline, privacy, and hosting." },

flow_01_n: { ar: "01", en: "01" },
flow_01_h: { ar: "تواصل أولي وتحديد المتطلبات", en: "Initial contact & requirements" },
flow_01_p: { ar: "نحدد نوع الموقع والهدف من الجولة وما يلزم قبل التنفيذ.", en: "We define the site type, the tour goal, and what’s needed before execution." },

flow_02_n: { ar: "02", en: "02" },
flow_02_h: { ar: "تحديد يوم للكشف الميداني", en: "Schedule an on-site inspection" },
flow_02_p: { ar: "زيارة للموقع لتقدير المساحة بالمتر المربع وتسجيل الملاحظات.", en: "We visit the location to estimate the area (m²) and take notes." },

flow_03_n: { ar: "03", en: "03" },
flow_03_h: { ar: "اتفاق رسمي وتوقيع عقد", en: "Official agreement & contract signing" },
flow_03_p: { ar: "بعد تثبيت المتطلبات والسعر وجدول العمل يتم توقيع العقد وتثبيت الموعد.", en: "After confirming requirements, price, and schedule, we sign the contract and lock the date." },

flow_04_n: { ar: "04", en: "04" },
flow_04_h: { ar: "المسح والتنفيذ بأجهزة متخصصة", en: "Scanning & execution with specialized devices" },
flow_04_p: { ar: "مدة التنفيذ عادة من يومين إلى أسبوعين حسب مساحة الموقع وتعقيد التفاصيل.", en: "Execution typically takes 2 days to 2 weeks, depending on area and detail complexity." },

/* Pricing */
pricing_h2: { ar: "كيف يتم تحديد السعر؟", en: "How is pricing determined?" },
pricing_p:  { ar: "التسعير يعتمد على المساحة بالمتر المربع بعد الكشف. كلما زادت المساحة، يقل سعر المتر عادة.", en: "Pricing depends on the area (per m²) after inspection. As area increases, the per-meter rate typically decreases." },
pricing_b1: { ar: "السعر النهائي يُعتمد بعد تقدير المساحة والمتطلبات.", en: "Final pricing is confirmed after estimating area and requirements." },
pricing_b2: { ar: "مدة التنفيذ مرتبطة بحجم المشروع وتعقيد التفاصيل.", en: "Execution time depends on project size and detail complexity." },

/* Hosting */
hosting_h2: { ar: "الاستضافة والصيانة", en: "Hosting & Maintenance" },
hosting_p:  { ar: "توجد رسوم استضافة وصيانة تُدفع نصف سنويًا أو سنويًا حسب الاتفاق لضمان استمرار عمل الجولة.", en: "Hosting and maintenance fees are paid semi-annually or annually (by agreement) to keep the tour running." },
hosting_b1: { ar: "استضافة آمنة + توفر الرابط.", en: "Secure hosting + always-available link." },
hosting_b2: { ar: "صيانة دورية وتوافق مع الأجهزة والمتصفحات.", en: "Periodic maintenance and compatibility with devices and browsers." },

/* Request form */
request_h2: { ar: "قدّم طلبك", en: "Submit your request" },
request_p:  { ar: "اكتب التفاصيل الأساسية، وبنفس اللحظة ينفتح الواتساب برسالة جاهزة.", en: "Enter the basics and WhatsApp opens instantly with a ready message." },

f_name:    { ar: "الاسم", en: "Name" },
ph_name:   { ar: "اكتب الاسم", en: "Enter your name" },

f_phone:   { ar: "رقم الهاتف / واتساب", en: "Phone / WhatsApp" },
ph_phone:  { ar: "مثال: 0777...", en: "Example: 0777..." },

f_address: { ar: "عنوان المشروع", en: "Project address" },
ph_address:{ ar: "مثال: بغداد – شارع ...", en: "Example: Baghdad – Street ..." },

f_area:    { ar: "مساحة المشروع (م²)", en: "Project area (m²)" },
ph_area:   { ar: "مثال: 250", en: "Example: 250" },

btn_send_wa:{ ar: "إرسال على واتساب", en: "Send on WhatsApp" },
btn_open_wa:{ ar: "فتح واتساب مباشرة", en: "Open WhatsApp directly" },

fine_note: { ar: "بإرسال الطلب أنت لا تلتزم بالدفع. الالتزام يبدأ بعد الاتفاق الرسمي وتوقيع العقد.", en: "Submitting the request does not commit you to pay. Commitment starts after the official agreement and contract signing." },
  

/* =========================
   PRIVACY PAGE
========================= */

privacy_title_tab: {
  ar: "سياسة الخصوصية | أبعاد العراق",
  en: "Privacy Policy | Abaad Iraq"
},

nav_privacy: {
  ar: "الخصوصية",
  en: "Privacy"
},

nav_terms: {
  ar: "الشروط",
  en: "Terms"
},

privacy_h1: {
  ar: "سياسة الخصوصية",
  en: "Privacy Policy"
},

privacy_meta: {
  ar: "آخر تحديث: 08 فبراير 2026",
  en: "Last updated: 08 Feb 2026"
},

privacy_badge: {
  ar: "مستند قانوني رسمي",
  en: "Official Legal Document"
},

privacy_intro_h: {
  ar: "نظرة عامة",
  en: "Overview"
},

privacy_intro_p: {
  ar: 'توضح هذه السياسة كيفية جمع واستخدام وحماية المعلومات عند استخدامك لموقع "أبعاد العراق".',
  en: 'This policy explains how we collect, use, and protect information when you use the "Abaad Iraq" website.'
},

privacy_collect_h: {
  ar: "المعلومات التي نجمعها",
  en: "Information We Collect"
},

privacy_collect_list: {
  ar: `
    <ul class="legalList">
      <li>معلومات التواصل التي تقدمها طوعًا (مثل الاسم، رقم الهاتف، البريد الإلكتروني).</li>
      <li>معلومات المشروع التي تزودنا بها عند طلب خدمة (مثل عنوان الموقع، نوع المكان، المساحة).</li>
      <li>بيانات استخدام تقنية (مثل نوع المتصفح، الصفحات التي تمت زيارتها، وقت الزيارة) لأغراض تحليلية وتحسين الأداء.</li>
    </ul>
  `,
  en: `
    <ul class="legalList">
      <li>Contact information you provide voluntarily (such as name, phone number, email).</li>
      <li>Project information shared when requesting a service (location, venue type, size).</li>
      <li>Technical usage data (browser type, visited pages, visit time) for analytics and performance improvement.</li>
    </ul>
  `
},

privacy_use_h: {
  ar: "كيف نستخدم المعلومات",
  en: "How We Use Information"
},

privacy_use_list: {
  ar: `
    <ul class="legalList">
      <li>الرد على استفساراتك وتقديم الخدمة التي طلبتها.</li>
      <li>تنظيم طلبات التسعير والتواصل بخصوص تفاصيل المشروع.</li>
      <li>تحسين تجربة الموقع والأداء والمحتوى.</li>
      <li>حماية الموقع من إساءة الاستخدام ومحاولات الاحتيال.</li>
    </ul>
  `,
  en: `
    <ul class="legalList">
      <li>Responding to your inquiries and delivering the requested service.</li>
      <li>Managing pricing requests and project communication.</li>
      <li>Improving website experience, performance, and content.</li>
      <li>Protecting the site from misuse or fraudulent activity.</li>
    </ul>
  `
},

privacy_share_h: {
  ar: "مشاركة البيانات مع أطراف ثالثة",
  en: "Sharing Data With Third Parties"
},

privacy_share_p: {
  ar: "لا نبيع بياناتك الشخصية. قد نشارك الحد الأدنى من البيانات مع مزودي خدمات موثوقين فقط لتشغيل الموقع أو لتقديم الخدمة التي طلبتها.",
  en: "We do not sell your personal data. We may share minimal data with trusted service providers only to operate the site or deliver the service you requested."
},

privacy_share_list: {
  ar: `
    <ul class="legalList">
      <li>قد نستخدم مزودي استضافة أو تحليلات لتحسين أداء الموقع.</li>
      <li>قد تتم مشاركة بيانات محدودة عند الضرورة لتنفيذ الطلب.</li>
      <li>لن تتم مشاركة بياناتك لأغراض تسويقية دون موافقتك.</li>
    </ul>
  `,
  en: `
    <ul class="legalList">
      <li>We may use hosting or analytics providers to improve performance.</li>
      <li>Limited data may be shared when necessary to fulfill your request.</li>
      <li>Your data will not be shared for third-party marketing without consent.</li>
    </ul>
  `
},

privacy_cookies_h: {
  ar: "ملفات تعريف الارتباط (Cookies)",
  en: "Cookies"
},

privacy_cookies_p: {
  ar: "قد نستخدم ملفات تعريف الارتباط لتحسين الأداء وتجربة الاستخدام وقياس التفاعل. يمكنك تعطيلها من إعدادات المتصفح، لكن بعض الميزات قد تتأثر.",
  en: "We may use cookies to improve performance and user experience. You can disable them in browser settings, but some features may be affected."
},

privacy_security_h: {
  ar: "حماية المعلومات",
  en: "Information Security"
},

privacy_security_p: {
  ar: "نطبق إجراءات تنظيمية وتقنية معقولة لحماية بياناتك. ومع ذلك لا توجد وسيلة نقل أو تخزين عبر الإنترنت مضمونة 100%.",
  en: "We apply reasonable technical and organizational measures to protect your data. However, no online transmission or storage is 100% secure."
},

privacy_rights_h: {
  ar: "حقوقك",
  en: "Your Rights"
},

privacy_rights_list: {
  ar: `
    <ul class="legalList">
      <li>طلب معرفة البيانات التي نحتفظ بها عنك.</li>
      <li>طلب تصحيح أو تحديث بياناتك.</li>
      <li>طلب حذف بياناتك ضمن الحدود الممكنة تقنيًا وقانونيًا.</li>
      <li>سحب الموافقة على التواصل التسويقي (إن وجد).</li>
    </ul>
  `,
  en: `
    <ul class="legalList">
      <li>Request access to data we hold about you.</li>
      <li>Request correction or updates.</li>
      <li>Request deletion within legal/technical limits.</li>
      <li>Withdraw consent for marketing communication.</li>
    </ul>
  `
},

privacy_children_h: {
  ar: "خصوصية الأطفال",
  en: "Children’s Privacy"
},

privacy_children_p: {
  ar: "خدماتنا غير موجهة للأطفال دون السن القانوني. إذا اعتقدت أن طفلاً زودنا ببياناته، تواصل معنا لإزالتها.",
  en: "Our services are not directed to children under the legal age. If you believe a child provided data, contact us to remove it."
},

privacy_changes_h: {
  ar: "تحديثات السياسة",
  en: "Policy Updates"
},

privacy_changes_p: {
  ar: 'قد نقوم بتحديث هذه السياسة عند الحاجة. سيتم نشر أي تعديل هنا مع تحديث تاريخ "آخر تحديث".',
  en: 'We may update this policy when needed. Changes will be posted here and the "Last updated" date will be revised.'
},

privacy_contact_h: {
  ar: "تواصل معنا",
  en: "Contact Us"
},

privacy_contact_p: {
  ar: "إذا كانت لديك أسئلة أو طلبات متعلقة بالخصوصية، تواصل معنا عبر القنوات التالية:",
  en: "If you have privacy-related questions or requests, contact us through the following channels:"
},

contact_email: {
  ar: "البريد",
  en: "Email"
},

contact_whatsapp: {
  ar: "واتساب",
  en: "WhatsApp"
},

contact_phone: {
  ar: "هاتف",
  en: "Phone"
},

/* =========================
   TERMS PAGE
========================= */

terms_title_tab: {
  ar: "الشروط والأحكام | أبعاد العراق",
  en: "Terms & Conditions | Abaad Iraq"
},

terms_h1: {
  ar: "الشروط والأحكام",
  en: "Terms & Conditions"
},

terms_meta: {
  ar: "آخر تحديث: 08 فبراير 2026",
  en: "Last updated: 08 Feb 2026"
},

terms_badge: {
  ar: "تنظم استخدام الموقع",
  en: "Governs Website Use"
},

terms_accept_h: {
  ar: "القبول",
  en: "Acceptance"
},

terms_accept_p: {
  ar: "باستخدامك لهذا الموقع، فأنت توافق على هذه الشروط. إذا لم توافق، يرجى عدم استخدام الموقع.",
  en: "By using this website, you agree to these terms. If you do not agree, please do not use the website."
},

terms_services_h: {
  ar: "نطاق الخدمات",
  en: "Scope of Services"
},

terms_services_list: {
  ar: `
    <ul class="legalList">
      <li>نقدم خدمات تصوير ومسح وإنشاء جولات افتراضية ثلاثية الأبعاد، وإخراج صور 4K ومقاطع فيديو وفق الاتفاق.</li>
      <li>قد تتضمن الخدمة: تجهيز الجولة، نشرها عبر رابط، وإتاحة خيارات العرض على الأجهزة المختلفة.</li>
      <li>أي مواعيد أو مدد تنفيذ تُذكر هي تقديرية وقد تتغير وفق ظروف الموقع أو حجم المشروع.</li>
    </ul>
  `,
  en: `
    <ul class="legalList">
      <li>We provide 3D virtual tour capture and production services, including 4K images and video outputs as agreed.</li>
      <li>The service may include tour preparation, publishing via a link, and multi-device viewing options.</li>
      <li>Any timelines mentioned are estimates and may change based on site conditions or project size.</li>
    </ul>
  `
},

terms_ip_h: {
  ar: "الملكية الفكرية",
  en: "Intellectual Property"
},

terms_ip_p: {
  ar: 'جميع المحتويات (نصوص، صور، فيديو، تصميم، علامة تجارية) مملوكة لـ "أبعاد العراق" أو مرخصة لها، ولا يجوز نسخها أو إعادة استخدامها دون إذن كتابي.',
  en: 'All content (texts, images, videos, design, trademarks) is owned by or licensed to "Abaad Iraq" and may not be copied or reused without written permission.'
},

terms_user_h: {
  ar: "التزامات المستخدم",
  en: "User Obligations"
},

terms_user_list: {
  ar: `
    <ul class="legalList">
      <li>عدم إساءة استخدام الموقع أو محاولة تعطيله أو الوصول غير المصرح به إلى أنظمته.</li>
      <li>تزويدنا بمعلومات صحيحة عند التواصل أو طلب خدمة، وتحديثها عند الحاجة.</li>
      <li>احترام الحقوق الفكرية وعدم نسخ أو إعادة نشر أي محتوى دون إذن.</li>
      <li>الالتزام بالأنظمة والقوانين المحلية عند استخدام الموقع أو التواصل معنا.</li>
    </ul>
  `,
  en: `
    <ul class="legalList">
      <li>Do not misuse the website, attempt to disrupt it, or access its systems without authorization.</li>
      <li>Provide accurate information when contacting us or requesting services, and update it when necessary.</li>
      <li>Respect intellectual property and do not copy or republish any content without permission.</li>
      <li>Comply with applicable local laws when using the website or contacting us.</li>
    </ul>
  `
},

terms_quotes_h: {
  ar: "الأسعار والعروض",
  en: "Pricing & Offers"
},

terms_quotes_p: {
  ar: "أي أسعار أو عروض مذكورة على الموقع هي لأغراض معلوماتية وقد تتغير. التسعير النهائي يتم عبر عرض سعر رسمي أو اتفاق مكتوب.",
  en: "Any prices or offers shown on the website are informational and may change. Final pricing is confirmed through an official quotation or a written agreement."
},

terms_links_h: {
  ar: "روابط خارجية",
  en: "External Links"
},

terms_links_p: {
  ar: "قد يحتوي الموقع على روابط إلى جهات خارجية. نحن غير مسؤولين عن محتواها أو سياساتها أو ممارساتها.",
  en: "The website may contain links to third-party websites. We are not responsible for their content, policies, or practices."
},

terms_disclaimer_h: {
  ar: "إخلاء المسؤولية",
  en: "Disclaimer"
},

terms_disclaimer_p: {
  ar: 'يتم توفير الموقع "كما هو". لا نضمن خلو الموقع من الأخطاء أو الانقطاع، وننصح دائمًا بالتحقق قبل اتخاذ أي قرار اعتمادًا على المحتوى.',
  en: 'The website is provided "as is". We do not guarantee it will be error-free or uninterrupted. Always verify information before making decisions based on the content.'
},

terms_liability_h: {
  ar: "حدود المسؤولية",
  en: "Limitation of Liability"
},

terms_liability_p: {
  ar: 'إلى أقصى حد يسمح به القانون، لا تتحمل "أبعاد العراق" أي مسؤولية عن أضرار غير مباشرة أو تبعية ناتجة عن استخدام الموقع أو عدم القدرة على استخدامه.',
  en: 'To the maximum extent permitted by law, "Abaad Iraq" is not liable for indirect or consequential damages arising from using or being unable to use the website.'
},

terms_changes_h: {
  ar: "تعديل الشروط",
  en: "Changes to Terms"
},

terms_changes_p: {
  ar: "قد نقوم بتعديل هذه الشروط عند الحاجة. استمرارك باستخدام الموقع بعد التعديل يعني موافقتك على النسخة المحدثة.",
  en: "We may update these terms when needed. Continued use of the website after updates means you accept the revised version."
},

terms_contact_h: {
  ar: "التواصل",
  en: "Contact"
},

terms_contact_p: {
  ar: "لأي استفسار حول الشروط والأحكام، تواصل معنا عبر:",
  en: "For any questions about these terms, contact us via:"
},



/* =========================
   VR (vr.html)
========================= */

vr_page_title: { ar: "VR — أبعاد العراق", en: "VR — Abaad Iraq" },

vr_btn_projects: { ar: "استكشف مشاريعنا المنفذة", en: "Explore our completed projects" },
vr_btn_methods:  { ar: "طرق العرض", en: "Display methods" },

vr_now_title: { ar: "لماذا يُعدّ الواقع الافتراضي (VR) مهمًا في عصرنا الحالي؟", en: "Why is Virtual Reality (VR) important today?" },
vr_now_desc: {
  ar: "لم تعد المنافسة قائمة على جودة المنتج وحدها، بل على طريقة عرضه.\nينقل الواقع الافتراضي العميل من مجرد المشاهدة إلى خوض تجربة فعلية، ما يعزز الفهم، ويزيد التفاعل، ويُسهم في اتخاذ القرار بثقة أكبر.",
  en: "Competition is no longer only about product quality, but also about how it is presented.\nVR moves the client from simply viewing to living a real experience—improving understanding, increasing engagement, and supporting confident decisions."
},

vr_now_c1_t: { ar: "انطباع أقوى", en: "Stronger impression" },
vr_now_c1_p: { ar: "التجربة التفاعلية تترسخ في ذاكرة العميل أكثر من الإعلانات التقليدية أو الصور الثابتة.", en: "Interactive experiences stay in the customer’s memory more than traditional ads or static images." },

vr_now_c2_t: { ar: "ثقة أعلى", en: "Higher trust" },
vr_now_c2_p: { ar: "إتاحة التفاصيل بشكل شفاف داخل التجربة الافتراضية تقلل التردد، وتمنح العميل شعورًا بالاطمئنان قبل الزيارة الفعلية.", en: "Showing details transparently inside the virtual experience reduces hesitation and builds reassurance before the real visit." },

vr_now_c3_t: { ar: "قيمة مشروع أعلى", en: "Higher project value" },
vr_now_c3_p: { ar: "عندما يتحول العرض إلى تجربة غامرة، ينعكس ذلك مباشرة على الصورة الذهنية للمشروع، ويعزز مكانته وقيمته في السوق.", en: "When the presentation becomes immersive, it directly improves the project’s perception and strengthens its market position and value." },

vr_mkt_title: { ar: "كيف يُسهم الواقع الافتراضي في التسويق ويرفع من قيمة المشروع؟", en: "How does VR support marketing and increase project value?" },
vr_mkt_desc: { ar: "لا يقتصر دور الواقع الافتراضي على كونه جولة رقمية، بل يتحول إلى أداة تسويقية متكاملة تشمل الإعلان، وعرض المبيعات، والاجتماعات، والمعارض، والتجربة المباشرة.", en: "VR is not just a digital tour—it becomes a complete marketing tool for advertising, sales presentations, meetings, exhibitions, and live experiences." },

vr_img1_cap: { ar: "", en: "" },

vr_mkt_b1: { ar: "الاجتماعات: عرض الجولة عبر شاشة كبيرة مع التحكم الكامل بالتفاصيل أثناء الشرح للعميل.", en: "Meetings: show the tour on a large screen with full control of details while explaining to the client." },
vr_mkt_b2: { ar: "الإعلانات الرقمية: مقاطع قصيرة و صور 4K مستخرجة من الجولة مع رابط مباشر للتجربة.", en: "Digital ads: short clips and 4K images extracted from the tour with a direct experience link." },
vr_mkt_b3: { ar: "الموقع الإلكتروني: دمج الجولة داخل صفحة المشروع بدل الاعتماد على روابط خارجية.", en: "Website: embed the tour inside the project page instead of relying on external links." },
vr_mkt_b4: { ar: "سائل التواصل الاجتماعي: استخدام لقطات قصيرة من التجربة في Reels وTikTok.", en: "Social media: use short highlights in Reels and TikTok." },
vr_mkt_b5: { ar: "خدمة العملاء: تقليل الاستفسارات المتكررة بفضل وضوح التفاصيل داخل الجولة.", en: "Customer service: reduce repeated questions thanks to clear details inside the tour." },

vr_note_t: { ar: "نقطة مهمة:", en: "Important point:" },
vr_note_p: { ar: "حين يتحول العرض إلى تجربة افتراضية، ترتفع قيمة المشروع ويتعزز تأثيره التسويقي بشكل ملموس.", en: "When presentation becomes a virtual experience, project value rises and marketing impact becomes clearly stronger." },

vr_display_title: { ar: "أساليب عرض متقدمة للجولة الافتراضية", en: "Advanced ways to present the virtual tour" },
vr_display_desc: { ar: "يمكن تقديم الجولة الافتراضية بعدة أساليب مرنة تناسب مختلف البيئات، بدءًا من العرض عبر رابط مباشر، وصولًا إلى شاشات العرض الكبيرة وتجربة الواقع الافتراضي المتكاملة.", en: "The virtual tour can be presented in flexible ways for different environments—from a direct link to large-screen displays and a full VR experience." },

vr_disp_c1_t: { ar: "تجربة الواقع الافتراضي (VR)", en: "Virtual Reality (VR) experience" },
vr_disp_c1_p: { ar: "تجربة غامرة تتيح للعميل الدخول إلى المشروع وكأنه متواجد فيه فعليًا، مع إمكانية ربط نظارة الواقع الافتراضي بشاشة عرض خارجية لتمكين الحضور من متابعة ما يراه العميل بدقة ووضوح.", en: "An immersive experience that lets the client enter the project as if physically present. VR can be mirrored to an external display so others can clearly see what the client sees." },

vr_disp_c2_t: { ar: "العرض عبر شاشات العرض الكبيرة", en: "Large-screen presentation" },
vr_disp_c2_p: { ar: "عرض الجولة الافتراضية على شاشات كبيرة داخل المكتب أو قاعة الاجتماعات أو المعرض، مع إمكانية التحكم المباشر بالجولة أثناء الشرح، لإبراز التفاصيل أمام أكثر من مشاهد في الوقت نفسه.", en: "Present the tour on big screens in an office, meeting room, or exhibition, with live control during explanation—showing details to multiple viewers at once." },

vr_disp_c3_t: { ar: "رابط تفاعلي متعدد الأجهزة", en: "Multi-device interactive link" },
vr_disp_c3_p: { ar: "رابط مباشر يتيح للعميل استكشاف المشروع عبر الهاتف، أو الحاسوب، أو الجهاز اللوحي، دون الحاجة إلى تجهيزات خاصة، مع تجربة سلسة وسهلة الوصول في أي وقت.", en: "A direct link that lets clients explore on phone, computer, or tablet—no special equipment needed, smooth access anytime." },

vr_step1_t: { ar: "سيناريو عرض محترف", en: "A professional presentation scenario" },
vr_step1_p: { ar: "تبدأ بملخص سريع، بعدها تدخل العميل على 3 نقاط مهمة داخل الجولة (مدخل/تفاصيل/ميزة).", en: "Start with a quick summary, then take the client to 3 key points inside the tour (entrance / details / a key feature)." },

vr_step2_t: { ar: "تحكم مباشر", en: "Live control" },
vr_step2_p: { ar: "مو لازم العميل يتوه؛ أنت تتحكم وتاخذه للنقاط اللي تبيع المشروع فعلاً.", en: "Don’t let the client get lost—take control and guide them to the points that actually sell the project." },

vr_expo_title: { ar: "المعارض الدولية: كيف ترفع حضورك بجولة + VR داخل البوث؟", en: "International exhibitions: how to boost your presence with a tour + VR in the booth" },
vr_expo_desc: {
  ar: "في بيئة المعارض، حيث الوقت محدود والمنافسة عالية، لا تتاح للزائر فرصة الاستماع لشرح مطوّل.\nتتيح تقنيات الواقع الافتراضي للزائر استكشاف مشروعك خلال دقائق، وتمنحه تصورًا واضحًا وقويًا يترك انطباعًا يدوم.",
  en: "In exhibitions—where time is limited and competition is high—visitors can’t listen to long explanations.\nVR lets them explore your project in minutes and gives a clear, powerful understanding that leaves a lasting impression."
},

vr_expo_c1_t: { ar: "إعداد بوث ذكي", en: "A smart booth setup" },
vr_expo_b1: { ar: "نظارة واقع افتراضي واحدة تتيح للزائر خوض تجربة كاملة داخل المشروع.", en: "One VR headset that gives visitors a full experience inside the project." },
vr_expo_b2: { ar: "شاشة عرض كبيرة مرافقة تمكّن بقية الحضور من متابعة ما يراه الزائر داخل التجربة.", en: "A large companion screen so others can follow what the visitor sees in the experience." },
vr_expo_b3: { ar: "رمز QR Code يتيح للزائر فتح الجولة مباشرة على هاتفه بعد مغادرته البوث.", en: "A QR code that lets visitors open the tour on their phone after leaving the booth." },
vr_expo_b4: { ar: "مقطع تعريفي قصير يوضح فكرة المشروع ويمهّد للدخول إلى التجربة الافتراضية.", en: "A short intro video that explains the project and prepares visitors to enter the virtual experience." },

vr_img2_cap: { ar: "", en: "" },

vr_expo_c2_t: { ar: "أمثلة معارض ممكن تستهدفها (حسب مجالك)", en: "Examples of exhibitions you can target (depending on your field)" },
vr_expo_c2_p: { ar: "لعقارات، الفنادق، التصميم الداخلي، التجارة، التعليم، الصناعة، وغيرها من القطاعات،\nجميعها يمكن أن تستفيد من عرض المشاريع عبر جولة افتراضية مدعومة بتقنيات VR داخل المعارض والفعاليات الدولية.", en: "Real estate, hotels, interior design, commerce, education, industry, and more can all benefit from presenting projects through a virtual tour supported by VR at international exhibitions and events." },

vr_cta_t: { ar: "هل ترغب في تقديم مشروعك كتجربة متكاملة تترك أثرًا قبل الزيارة؟", en: "Want to present your project as a complete experience that makes an impact before the visit?" },
vr_cta_p: { ar: "تواصل معنا لنجهّز لك جولة افتراضية متكاملة، وتقنيات VR، وطريقة عرض احترافية تناسب مشروعك وجمهورك المستهدف.", en: "Contact us and we’ll prepare a full virtual tour, VR setup, and a professional presentation style that fits your project and target audience." },
vr_cta_btn: { ar: "تواصل معنا", en: "Contact us" },




}; // ✅ هذا الإغلاق الوحيد لـ const T


/* Build window.I18N in the format your app expects */
window.I18N = { ar: {}, en: {} };
Object.keys(T).forEach((k) => {
  window.I18N.ar[k] = T[k].ar;
  window.I18N.en[k] = T[k].en;
});
