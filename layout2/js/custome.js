$(document).ready(function () {

  // animation
  AOS.init();

  // scroll nav
  var heightNav = $('.hd-top').height();
  $(window).bind('scroll', function () {
    var posNav = window.scrollY;
    if (posNav > heightNav) {
      $('.hd-top').addClass('hd-top-active');
    } else {
      $('.hd-top').removeClass('hd-top-active');
    }
  })

  // nav mobile
  $('#btn-showhide').click(function () {
    $('.menu').toggleClass("menu-active", 500);
  })

  // slider banner
  $('.fadeOut').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    // autoplayTimeout:2000
  });

  // number beautiful
  $(".numberCounter").counterUp({ delay: 10, time: 1000 });

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
        margin: 20
      }
    }
  })

  $(".fancybox-button").fancybox({
    prevEffect: 'none',
    nextEffect: 'none',
    closeBtn: false,
    helpers: {
      title: { type: 'inside' },
      buttons: {}
    }
  });

})