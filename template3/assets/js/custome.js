$(document).ready(function () {

  // animation
  // AOS.init();
  $('.fadeOut').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  });

  // $('.owl-carousel').owlCarousel({
  //   loop: true,
  //   margin: 10,
  //   responsiveClass: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //       nav: true
  //     },
  //     600: {
  //       items: 3,
  //       nav: false
  //     },
  //     1000: {
  //       items: 5,
  //       nav: true,
  //       loop: false,
  //       margin: 20
  //     }
  //   }
  // })

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      1199: {
        items: 5,
        nav: true,
        loop: false,
        margin: 20
      },
      600: {
        items: 2,
        nav: true,
        loop: false,
        margin: 20
      },
      425: {
        items: 1,
        nav: true,
        loop: false,
        margin: 20
      },
      375: {
        items: 1,
        nav: true,
        loop: false,
        margin: 20
      },
      320: {
        items: 1,
        nav: true,
        loop: false,
        margin: 20
      }
    }
  })

  // event show nav
  $('#showNavDesk').click(function () {
    $('#box-list-menu-fc').addClass('box-list-menu-fc-active');
    $('#th-mark-content').addClass('th-mark-content-active');
  });
  $('.closeNavBagDesk').click(function () {
    $('#box-list-menu-fc').removeClass('box-list-menu-fc-active');
    $('#th-mark-content').removeClass('th-mark-content-active');
  });
  $(window).bind('scroll', function () {
    var pos = window.scrollY;
    if (pos > 150) {
      $('#box-list-menu-fc').removeClass('box-list-menu-fc-active');
      $('#th-mark-content').removeClass('th-mark-content-active');
    }
  })

  // event show nav scroll page
  var h = $('.hd-nav').height();
  $(window).bind('scroll', function () {
    var pos = window.scrollY;
    if (pos >= h) {
      $('.hd-nav').addClass('hd-nav-active');
    } else {
      $('.hd-nav').removeClass('hd-nav-active');
    }
  })

  // event show nav mobile
  $('#btn-leftmenu').click(function(){
    $('.hd-nav-mb').addClass('hd-nav-mb-active');
  })
  $('#close-left').click(function(){
    $('.hd-nav-mb').removeClass('hd-nav-mb-active');
  })


  // scroll to top
  var h = $('#header').height();
  $(window).bind('scroll', function () {
    var pos = window.scrollY;
    if (pos >= h) {
      $('#scrollToTop').show();
    } else {
      $('#scrollToTop').hide();
    }
  })
  $('#scrollToTop').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 1000);
  });


})