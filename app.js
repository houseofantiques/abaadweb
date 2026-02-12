"use strict";

/* =========================
   0) Helpers
========================= */
function onReady(fn) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fn, { once: true });
  } else {
    fn();
  }
}

/* =========================
   1) i18n apply
========================= */
(function i18nInit() {
  const langBtn = document.getElementById("langBtn");

  function applyI18n(lang) {
    const dict = window.I18N && window.I18N[lang];
    if (!dict) return;

    // text nodes
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.textContent = dict[k];
    });

    // placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const k = el.getAttribute("data-i18n-placeholder");
      if (dict[k] != null) el.setAttribute("placeholder", dict[k]);
    });

    // html
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const k = el.getAttribute("data-i18n-html");
      if (dict[k] != null) el.innerHTML = dict[k];
    });

    // dir + lang
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("data-dir", dir);
    document.documentElement.setAttribute("lang", lang);

    if (langBtn) langBtn.textContent = lang === "ar" ? "EN" : "AR";

    // footer year
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  let lang = localStorage.getItem("abaad_lang") || "ar";
  applyI18n(lang);

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      lang = lang === "ar" ? "en" : "ar";
      localStorage.setItem("abaad_lang", lang);
      applyI18n(lang);
    });
  }
})();

/* =========================
   2) Footer year (safe)
========================= */
(function setYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

/* =========================
   3) Tours embed switch (as you had)
========================= */
(function tourSwitch() {
  const frame = document.getElementById("tourFrame");
  const btns = Array.from(document.querySelectorAll(".tourBtn"));
  if (!frame || !btns.length) return;

  btns.forEach((b) => {
    b.addEventListener("click", () => {
      btns.forEach((x) => x.classList.remove("isActive"));
      b.classList.add("isActive");
      frame.src = b.getAttribute("data-src");
    });
  });
})();

/* =========================
   4) Phone hero slides
========================= */
(function phoneSlider() {
  const box = document.getElementById("heroSlides");
  if (!box) return;

  const imgs = Array.from(box.querySelectorAll("img"));
  if (imgs.length < 2) return;

  let i = 0;
  setInterval(() => {
    imgs[i].classList.remove("isActive");
    i = (i + 1) % imgs.length;
    imgs[i].classList.add("isActive");
  }, 3200);
})();

/* =========================================================
   5) 4K Shots Slider + Lightbox (Abaad Iraq)
   - Works only if [data-slider="shots4k"] exists
========================================================= */
(function initShots4k() {
  onReady(() => {
    const slider = document.querySelector('[data-slider="shots4k"]');
    if (!slider) return;

    const track = slider.querySelector(".shots4k__track");
    if (!track) return;

    const items = Array.from(track.querySelectorAll(".shots4k__item"));
    const imgs = Array.from(track.querySelectorAll("img"));

    const prevBtn = slider.querySelector(".shots4k__nav--prev");
    const nextBtn = slider.querySelector(".shots4k__nav--next");

    // dots container (اختياري)
    const dotsWrap = slider.parentElement && slider.parentElement.querySelector(".shots4k__dots");

    // ---------- Dots ----------
    let dots = [];
    function setActiveDot(i) {
      if (!dots.length) return;
      dots.forEach((d, idx) => d.classList.toggle("is-active", idx === i));
    }

    function getStepWidth() {
      const first = items[0];
      if (!first) return 320;
      const itemW = first.getBoundingClientRect().width;

      // gap ممكن يكون "normal" او فارغ
      const gapRaw = getComputedStyle(track).gap;
      const gap = Number.isFinite(parseFloat(gapRaw)) ? parseFloat(gapRaw) : 14;

      return itemW + gap;
    }

    function getIndex() {
      const step = getStepWidth();
      if (!step) return 0;
      return Math.round(track.scrollLeft / step);
    }

    function scrollToIndex(i) {
      const el = items[i];
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
      setActiveDot(i);
    }

    function scrollByOne(dir) {
      track.scrollBy({ left: dir * getStepWidth(), behavior: "smooth" });
    }

    // create dots (if exists)
    if (dotsWrap && items.length) {
      dotsWrap.innerHTML = "";
      dots = items.map((_, i) => {
        const dot = document.createElement("span");
        dot.className = "shots4k__dot" + (i === 0 ? " is-active" : "");
        dot.addEventListener("click", () => scrollToIndex(i));
        dotsWrap.appendChild(dot);
        return dot;
      });
    }

    // ✅ FIX: make sure arrows are clickable even if they're <a> or <button> inside overlays
    function bindNav(btn, dir) {
      if (!btn) return;
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        scrollByOne(dir);
      });
      // لو انت مسوي disable بالـCSS pointer-events بالغلط، هذا ينقذك جزئياً
      btn.style.pointerEvents = "auto";
    }
  const isRTL = document.documentElement.getAttribute("dir") === "rtl";

bindNav(prevBtn, isRTL ? 1 : -1);
bindNav(nextBtn, isRTL ? -1 : 1);


    track.addEventListener(
      "scroll",
      () => {
        const i = Math.max(0, Math.min(items.length - 1, getIndex()));
        setActiveDot(i);
      },
      { passive: true }
    );

  
  });
})();

/* =========================
   6) Home-only tweak (as you had)
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const isHome =
    location.pathname.endsWith("/") ||
    location.pathname.endsWith("/index.html") ||
    location.pathname.endsWith("index.html");

  if (!isHome) return;

  const heroDesc = document.querySelector('.heroDesc[data-i18n="hero_desc"]');
  if (heroDesc) heroDesc.textContent = "";
});
 
/* =========================
   Language UI — support ALL pages
   (langBtn / langToggle / legalLang)
========================= */
(function () {
  "use strict";

  function getLang() {
    return document.documentElement.lang || "ar";
  }

  function set(next) {
    if (typeof window.setLang === "function") {
      window.setLang(next);
    } else {
      // fallback
      document.documentElement.lang = next;
      document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
    }
  }

  function wireLangBtn() {
    const btn = document.getElementById("langBtn");
    if (!btn) return;

    const sync = () => (btn.textContent = getLang() === "ar" ? "EN" : "AR");
    sync();

    btn.addEventListener("click", () => {
      set(getLang() === "ar" ? "en" : "ar");
      sync();
    });
  }

  function wireLangToggle() {
    const btn = document.getElementById("langToggle");
    if (!btn) return;

    const sync = () => (btn.textContent = getLang() === "ar" ? "EN" : "AR");
    sync();

    btn.addEventListener("click", () => {
      set(getLang() === "ar" ? "en" : "ar");
      sync();
    });
  }

  function wireLegalLang() {
    const wrap = document.querySelector(".legalLang");
    if (!wrap) return;

    const sync = () => {
      const lang = getLang();
      wrap.querySelectorAll("button[data-lang]").forEach((b) => {
        b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false");
      });
    };
    sync();

    wrap.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-lang]");
      if (!b) return;
      set(b.dataset.lang);
      sync();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    wireLangBtn();
    wireLangToggle();
    wireLegalLang();
  });
})();
/* =========================
   4K Shots Lightbox (NO jump to top)
========================= */
(() => {
  const lb = document.getElementById("lb4k");
  if (!lb) return;

  const lbImg   = lb.querySelector(".lb__img");
  const btnX    = lb.querySelector(".lb__close");
  const prevBtn = lb.querySelector(".lb__nav--prev");
  const nextBtn = lb.querySelector(".lb__nav--next");

  const shotsWrap = document.querySelector(".shots4k");
  if (!shotsWrap) return;

  const imgs = Array.from(shotsWrap.querySelectorAll(".shots4k__item img"));
  if (!imgs.length) return;

  let idx = 0;
  let savedScrollY = 0;
  let isOpen = false;

  function lockScroll() {
    savedScrollY = window.scrollY || document.documentElement.scrollTop || 0;
    document.body.style.position = "fixed";
    document.body.style.top = `-${savedScrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
  }

  function unlockScroll() {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    window.scrollTo(0, savedScrollY);
  }

  function show(i) {
    idx = (i + imgs.length) % imgs.length;
    const img = imgs[idx];
    const full = img.getAttribute("data-full") || img.src;
    lbImg.src = full;
    lbImg.alt = img.alt || "4K Shot";
  }

  function open(i) {
    if (isOpen) return;
    isOpen = true;

    show(i);
    lockScroll();

    lb.setAttribute("aria-hidden", "false");
    lb.classList.add("isOpen");
    document.documentElement.classList.add("lbOpen");
  }

  function close(e) {
    // امنع أي سلوك يسبب jump
    if (e) { e.preventDefault?.(); e.stopPropagation?.(); }

    if (!isOpen) return;
    isOpen = false;

    lb.classList.remove("isOpen");
    lb.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("lbOpen");

    // نظف الصورة
    lbImg.src = "";

    // رجّع مكانك بالضبط
    unlockScroll();
  }

  // فتح عند الضغط على الصورة
  shotsWrap.addEventListener("click", (e) => {
    const img = e.target.closest(".shots4k__item img");
    if (!img) return;

    e.preventDefault();
    e.stopPropagation();

    const i = imgs.indexOf(img);
    if (i >= 0) open(i);
  });

  // اغلاق بزر X
  btnX?.addEventListener("click", close);

  // اغلاق عند الضغط خارج الصورة (على الخلفية)
  lb.addEventListener("click", (e) => {
    // اذا ضغط على الخلفية نفسها مو على الصورة/الأزرار
    if (e.target === lb) close(e);
  });

  // منع أي bubbling من أزرار التنقل (حتى ما يفعّل أي سكربت عام)
  prevBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    show(idx - 1);
  });

  nextBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    show(idx + 1);
  });

  // كيبورد
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("isOpen")) return;

    if (e.key === "Escape") close(e);
    if (e.key === "ArrowLeft")  show(idx - 1);
    if (e.key === "ArrowRight") show(idx + 1);
  });
})();
