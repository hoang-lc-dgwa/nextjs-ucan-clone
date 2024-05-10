"use strict";

let isPC = false;
function scrollAnimation() {
  inView.offset({
    top: 0,
    right: 0,
    bottom: 100,
    left: 0
  });
  inView(".js-effect, .js-anm-mask, .js-fade").on("enter", function (el) {
    el.classList.add("is-show");
  });
}
function onLoad(callback) {
  const loadingElement = document.querySelector("#loading");
  let imagePromises = [];
  function onImageLoad(image) {
    return new Promise(function (resolve, reject) {
      if (image.complete) {
        resolve();
      } else {
        image.addEventListener("load", resolve);
        image.addEventListener("error", reject);
      }
    });
  }
  if (loadingElement) {
    const images = document.querySelectorAll("img");
    images.forEach(function (image) {
      imagePromises.push(onImageLoad(image));
    });
  }
  function onAllImagesLoaded() {
    if (loadingElement) {
      loadingElement.classList.add("loaded");
    }
    Promise.all(imagePromises).then(callback);
  }
  if (document.readyState === "complete") {
    onAllImagesLoaded();
  } else {
    window.addEventListener("load", onAllImagesLoaded);
  }
}
function hideLoadingScreen(selector) {
  const element = document.querySelector(selector);
  element.classList.add("is-hidden");
  setTimeout(function () {
    document.body.classList.remove("is-fixed");
    scrollAnimation();
  }, 500);
}
if (document.getElementById("loading")) {
  document.querySelector(".header").classList.add("is-show");
  document.body.classList.add("is-fixed");
  onLoad(function () {
    hideLoadingScreen("#loading");
  });
} else {
  scrollAnimation();
}
function setFillHeightVh() {
  const setVh = function () {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  setVh();
  $(window).on("resize", setVh);
}
function checkViewport() {
  const resize = function () {
    if (window.innerWidth > 767) {
      isPC = true;
    } else {
      isPC = false;
    }
  };
  resize();
  $(window).on("resize", resize);
}
function anchorLinkHash() {
  const setLinkHash = function () {
    const hash = window.location.hash;
    const headerHeight = $(".header").innerHeight();
    const anchorTarget = $(hash);
    if (anchorTarget.length) {
      setTimeout(function () {
        const position = anchorTarget.offset().top - headerHeight;
        $("html, body").animate({
          scrollTop: position
        }, 550, "swing");
        history.pushState(null, null, hash);
      }, 200);
    }
  };
  setLinkHash();
  $(window).on("resize", setLinkHash);
}
function anchorLink() {
  $("html").on("click", 'a[href^="#"]', function () {
    var headerHeight = $(".header").innerHeight();
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - headerHeight;
    $("html, body").animate({
      scrollTop: position
    }, 550, "swing");
    return false;
  });
}
function contentsTabs() {
  $(".contents-tabs__nav li").click(function () {
    $(".contents-tabs__nav li").removeClass("is-active");
    $(this).addClass("is-active");
    var tabName = $(this).data("tabs");
    $(".contents-tabs__content").removeClass("is-active");
    $("#" + tabName).addClass("is-active");
  });
}
function pickupSlider() {
  const sliderPickup = $(".t-pickup__slider");
  if (sliderPickup) {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
}
function menuHeader() {
  if ($(".header-hbg")) {
    $(".header-hbg").on("click", function () {
      $(".header").toggleClass("is-open");
      $(this).toggleClass("is-active");
      $("body").toggleClass("no-scroll");
    });
  }
}
function pageScroll() {
  const $pageTopTrigger = $(".pagetop");
  const $header = $(".header");
  const scrollTarget = $(window).height();
  $(window).on("load scroll", function () {
    const scrollTop = $(window).scrollTop();
    if (scrollTop > scrollTarget) {
      $pageTopTrigger.addClass("is-active");
      $header.addClass("is-fixed");
    } else {
      $pageTopTrigger.removeClass("is-active");
      $header.removeClass("is-fixed");
    }
  });
  $pageTopTrigger.on("click", function () {
    $("body,html").animate({
      scrollTop: 0
    }, 300);
    return false;
  });
}
function accordionSidebar() {
  $(".contents-sidebar").each(function () {
    const btn = $(this).find(".keyword-more");
    const btnTxt = $(this).find(".keyword-more__txt");
    const content = $(this).find(".contents-sidebar__inner");
    btn.on("click", function () {
      if (!content.hasClass("is-open")) {
        content.css("max-height", content.prop("scrollHeight") + "px");
        content.addClass("is-open");
        btnTxt.text("- 閉じる");
        btn.addClass("is-open");
      } else {
        content.css("max-height", "39rem");
        content.removeClass("is-open");
        btn.removeClass("is-open");
        btnTxt.text("+ もっと見る");
      }
    });
  });
}

//--- init
//------------
$(function () {
  checkViewport();
  setFillHeightVh();
  anchorLinkHash();
  anchorLink();
  pageScroll();
  contentsTabs();
  pickupSlider();
  menuHeader();
  accordionSidebar();
});