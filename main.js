// SUBMENU > SEARCH
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchInputEl.setAttribute("placeholder", "통합검색");
});

// focus 반대 이벤트
searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
});

// SWIPER
// NOTICE > SWIPER
const swiperNotice = new Swiper(".notice-line .swiper", {
  direction: "vertical",
  loop: true,
  autoplay: true,
});

// SWIPER PROMOTION
// PROMOTION > SWIPER
const swiperPromotion = new Swiper(".promotion .swiper", {
  driection: "horizontal", // 수평이 기본값이라 안써줘도 되긴함
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000, //1000 = 1s
    disableOnInteraction: false,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
});

// SWIPER PROMOTION AUTOPALY CONTROL
// 공지사항 + 버튼 누르면 autoplay 정지 및 시작
function controlAutoplay() {
  if (swiperPromotion.autoplay.running) {
    swiperPromotion.autoplay.stop();
  } else {
    swiperPromotion.autoplay.start();
  }
}

// TOGGLE PROMOTION
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

promotionToggleBtn.addEventListener("click", function () {
  if (promotionEl.classList.contains("hide")) {
    promotionEl.classList.remove("hide");
  } else {
    promotionEl.classList.add("hide");
  }

  if (promotionToggleBtn.style.transform === "rotate(180deg)") {
    promotionToggleBtn.style.transform = "rotate(0deg)";
  } else {
    promotionToggleBtn.style.transform = "rotate(180deg)";
  }
});

// SCROLL ANIMATION
let scrollYpos;
window.addEventListener("scroll", function () {
  scrollYpos = window.scrollY;
  // console.log(scrollYpos);
  if (scrollYpos > 400) {
    const peruAnimate = document.querySelector(".peru");
    peruAnimate.classList.add("animate");
    // console.log(peruAnimate);
  }
  // indonesia
  if (scrollYpos > 1100) {
    const indonesiaAnimate = document.querySelector(".indonesia");
    indonesiaAnimate.classList.add("animate");
    // console.log(indonesiaAnimate);
  }
  // favorite
  if (scrollYpos > 1800) {
    const favoriteAnimate = document.querySelector(".favorite");
    favoriteAnimate.classList.add("animate");
    // console.log(favoriteAnimate);
  }
  // magazine
  if (scrollYpos > 2500) {
    const magazineAnimate = document.querySelector(".magazine");
    magazineAnimate.classList.add("animate");
    // console.log(magazineAnimate);
  }
  // find a store
  if (scrollYpos > 2800) {
    const storeAnimate = document.querySelector(".store");
    storeAnimate.classList.add("animate");
    // console.log(storeAnimate);
  }
});

window.onload = () => {
  // visual
  const visualInner = document.querySelector(".visual .inner");
  visualInner.classList.add("animate");
};
