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

    // ---------- Lightbox ----------
    const lb = document.getElementById("lb4k");
    if (!lb) return;

    const lbImg = lb.querySelector(".lb__img");
    const lbClose = lb.querySelector(".lb__close");
    const lbPrev = lb.querySelector(".lb__nav--prev");
    const lbNext = lb.querySelector(".lb__nav--next");

    let active = 0;

    function openLB(i) {
      active = i;
      const base = imgs[active];
      if (!base) return;

      const full = base.dataset.full || base.src;
      if (lbImg) lbImg.src = full;

      lb.classList.add("is-open");
      lb.setAttribute("aria-hidden", "false");
      document.documentElement.style.overflow = "hidden";
    }

    function closeLB() {
      lb.classList.remove("is-open");
      lb.setAttribute("aria-hidden", "true");
      if (lbImg) lbImg.src = "";
      document.documentElement.style.overflow = "";
    }

    function step(dir) {
      if (!imgs.length) return;
      active = (active + dir + imgs.length) % imgs.length;
      const base = imgs[active];
      const full = base.dataset.full || base.src;
      if (lbImg) lbImg.src = full;
    }

    imgs.forEach((img, i) => {
      img.addEventListener("click", () => openLB(i));
    });

    if (lbClose) {
      lbClose.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeLB();
      });
      lbClose.style.pointerEvents = "auto";
    }

    if (lbPrev) {
      lbPrev.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        step(-1);
      });
      lbPrev.style.pointerEvents = "auto";
    }

    if (lbNext) {
      lbNext.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        step(1);
      });
      lbNext.style.pointerEvents = "auto";
    }

    // اغلاق اذا ضغطت على الخلفية
    lb.addEventListener("click", (e) => {
      if (e.target === lb) closeLB();
    });

    // keyboard
    window.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLB();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });

    // swipe (mobile)
    let sx = 0,
      dx = 0;

    lb.addEventListener(
      "touchstart",
      (e) => {
        sx = e.touches[0].clientX;
        dx = 0;
      },
      { passive: true }
    );

    lb.addEventListener(
      "touchmove",
      (e) => {
        dx = e.touches[0].clientX - sx;
      },
      { passive: true }
    );

    lb.addEventListener("touchend", () => {
      if (!lb.classList.contains("is-open")) return;
      if (Math.abs(dx) > 40) step(dx > 0 ? -1 : 1);
    });
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
