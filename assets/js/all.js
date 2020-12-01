"use strict";
  $(window).on('load', function () {
    $(".loading").hide();
    gsap.registerPlugin(ScrollTrigger);
  gsap.from(".js-nav", {
    duration: 0.3,
    y: '-200px'
  });
  gsap.from(".js-banner-height", {
    duration: 0.8,
    delay: 0.4,
    opacity: 0,
    x: 100,
    scrollTrigger: {
      trigger: ".js-banner"
    }
  });
  var banner = gsap.timeline({
    scrollTrigger: {
      trigger: ".js-banner"
    }
  });
  banner.from(".js-banner-title", {
    opacity: 0,
    x: '-100px',
    duration: 0.8,
    delay: 0.4
  }).from(".js-banner-text", {
    opacity: 0,
    x: '-100px',
    duration: 0.8
  }, '-=0.4').from(".js-banner-link", {
    opacity: 0,
    x: '-100px',
    duration: 0.8
  }, '-=0.4');
  gsap.from(".js-firstSection-imgBox", {
    duration: 0.8,
    opacity: 0,
    x: -100,
    scrollTrigger: {
      trigger: ".js-firstSection",
      start: "top 70%",
      end: "bottom 30%"
    }
  });
  gsap.from(".js-firstSection-textBox", {
    duration: 0.8,
    opacity: 0,
    x: 100,
    scrollTrigger: {
      trigger: ".js-firstSection",
      start: "top 70%",
      end: "bottom 30%"
    }
  });
  gsap.from(".js-firstSection-titleBox", {
    duration: 0.8,
    opacity: 0,
    x: 100,
    scrollTrigger: {
      trigger: ".js-firstSection-titleBox"
    }
  });
  gsap.from(".js-firstSection-img", {
    duration: 0.8,
    x: -200,
    scrollTrigger: {
      trigger: ".js-firstSection-img",
      scrub: true
    }
  });
  gsap.to(".js-firstSection-titleone", {
    duration: 0.8,
    x: -50,
    scrollTrigger: {
      trigger: ".js-firstSection-titleBox",
      scrub: true
    }
  });
  gsap.to(".js-firstSection-titletwo", {
    duration: 0.8,
    x: 50,
    scrollTrigger: {
      trigger: ".js-firstSection-titleBox",
      scrub: true
    }
  });
  gsap.from(".js-secondSection-imgBox", {
    duration: 0.8,
    opacity: 0,
    x: 100,
    scrollTrigger: {
      trigger: ".js-secondSection",
      start: "top 90%",
      end: "bottom 30%"
    }
  });
  gsap.from(".js-secondSection-textBox", {
    duration: 0.8,
    opacity: 0,
    x: -100,
    scrollTrigger: {
      trigger: ".js-secondSection",
      start: "top 70%",
      end: "bottom 30%"
    }
  });
  gsap.from(".js-secondSection-titleBox", {
    duration: 0.8,
    opacity: 0,
    x: -100,
    scrollTrigger: {
      trigger: ".js-secondSection-titleBox"
    }
  });
  gsap.from(".js-secondSection-img", {
    duration: 0.8,
    x: 200,
    scrollTrigger: {
      trigger: ".js-secondSection-img",
      scrub: true
    }
  });
  gsap.to(".js-secondSection-titleone", {
    duration: 0.8,
    x: 50,
    scrollTrigger: {
      trigger: ".js-secondSection-titleBox",
      scrub: true
    }
  });
  gsap.to(".js-secondSection-titletwo", {
    duration: 0.8,
    x: -50,
    scrollTrigger: {
      trigger: ".js-secondSection-titleBox",
      scrub: true
    }
  });
  var sectionThird = gsap.timeline({
    scrollTrigger: {
      trigger: ".js-sectionThird",
      start: "top 80%"
    }
  });
  sectionThird.from(".js-sectionThird-title", {
    opacity: 0,
    y: '300px',
    duration: 0.4
  }).from(".js-sectionThird-subtitle", {
    opacity: 0,
    y: '300px',
    duration: 0.4
  }, '-=0.2');
  var sectionFouth = gsap.timeline({
    scrollTrigger: {
      trigger: ".js-sectionFouth",
      start: "top 80%"
    }
  });
  sectionFouth.from(".js-sectionFouth", {
    opacity: 0,
    y: '300px',
    duration: 0.8
  }).from(".js-sectionFouth-text", {
    opacity: 0,
    y: '300px',
    duration: 0.8
  }, '-=0.2');
  var sectionFifth = gsap.timeline({
    scrollTrigger: {
      trigger: ".js-sectionFifth",
      start: "top 70%",
      end: "bottom 30%"
    }
  });
  sectionFouth.from(".js-sectionFifth-list1", {
    opacity: 0,
    y: '300px',
    duration: 0.8
  }).from(".js-sectionFifth-list2", {
    opacity: 0,
    y: '300px',
    duration: 0.8
  }, '-=0.2').from(".js-sectionFifth-list3", {
    opacity: 0,
    y: '300px',
    duration: 0.8
  }, '-=0.2').from(".js-footer", {
    opacity: 0,
    y: '300px',
    duration: 0.8
  }, '-=0.2');
  });
$(document).ready(function () {

  $('.navbar-toggler').click(function () {
    $(this).toggleClass('open');
  });
  set_height();
  $(window).resize(function () {
    set_height();
  });
  
});

function set_height() {
  var wdth = $(window).width();
  var banner_height = $('.js-banner-height').height();
  var section_height = $('.js-section-height').height();
  var sectiontext_height = $('.js-sectiontext-height').height();
  var bannertext_height = $('.js-bannertext-height').height();
  var banner_total = banner_height + bannertext_height;
  var section_total = section_height + sectiontext_height;
  $('.js-section').css('height', section_height + 'px');

  if (wdth >= 768) {
    $('.js-banner').css('height', banner_height + 'px');
  } else {
    $('.js-banner').css('height', banner_total + 'px');
  }
}
//# sourceMappingURL=all.js.map
