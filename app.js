"use strict";

"use strict";

/* =========================
   i18n apply
========================= */
const langBtn = document.getElementById("langBtn");

function applyI18n(lang){
  const dict = window.I18N && window.I18N[lang];
  if(!dict) return;

  // text nodes
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k = el.getAttribute("data-i18n");
    if(dict[k] != null) el.textContent = dict[k];
  });

  // placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const k = el.getAttribute("data-i18n-placeholder");
    if(dict[k] != null) el.setAttribute("placeholder", dict[k]);
  });

  // html
  document.querySelectorAll("[data-i18n-html]").forEach(el=>{
    const k = el.getAttribute("data-i18n-html");
    if(dict[k] != null) el.innerHTML = dict[k];
  });

  // dir + lang
  const dir = (lang === "ar") ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", dir);
  document.documentElement.setAttribute("data-dir", dir);
  document.documentElement.setAttribute("lang", lang);

  if(langBtn) langBtn.textContent = (lang === "ar") ? "EN" : "AR";

  // footer year
  const yearEl = document.getElementById("year");
  if(yearEl) yearEl.textContent = new Date().getFullYear();
}

let lang = localStorage.getItem("abaad_lang") || "ar";
applyI18n(lang);

if(langBtn){
  langBtn.addEventListener("click", ()=>{
    lang = (lang === "ar") ? "en" : "ar";
    localStorage.setItem("abaad_lang", lang);
    applyI18n(lang);
  });
}

/* =========================
   tours embed switch (as you had)
========================= */
(function tourSwitch(){
  const frame = document.getElementById("tourFrame");
  const btns = Array.from(document.querySelectorAll(".tourBtn"));
  if(!frame || !btns.length) return;

  btns.forEach(b=>{
    b.addEventListener("click", ()=>{
      btns.forEach(x=>x.classList.remove("isActive"));
      b.classList.add("isActive");
      frame.src = b.getAttribute("data-src");
    });
  });
})();
/* phone slides */
(function phoneSlider(){
  const box = document.getElementById("heroSlides");
  if(!box) return;
  const imgs = Array.from(box.querySelectorAll("img"));
  if(imgs.length < 2) return;

  let i = 0;
  setInterval(()=>{
    imgs[i].classList.remove("isActive");
    i = (i + 1) % imgs.length;
    imgs[i].classList.add("isActive");
  }, 3200);
})();

/* tours embed switch */
(function tourSwitch(){
  const frame = document.getElementById("tourFrame");
  const btns = Array.from(document.querySelectorAll(".tourBtn"));
  if(!frame || !btns.length) return;

  btns.forEach(b=>{
    b.addEventListener("click", ()=>{
      btns.forEach(x=>x.classList.remove("isActive"));
      b.classList.add("isActive");
      frame.src = b.getAttribute("data-src");
    });
  });
})();
