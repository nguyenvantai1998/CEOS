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
    autoplayHoverPause: true,
    thumbs: true,
    thumbsPrerendered: true
  });

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
    $('#box-list-menu-fc').toggleClass('box-list-menu-fc-active');
    $('#th-mark-content').toggleClass('th-mark-content-active');
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

  // event show scroll page promotion
  var h = $('.hd-nav').height() + 100;
  $(window).bind('scroll', function () {
    var pos = window.scrollY;
    if (pos >= h) {
      $('.promotionMenuIcon').addClass('promotionMenuIcon-active');
    } else {
      $('.promotionMenuIcon').removeClass('promotionMenuIcon-active');
    }
  })

  // event tab modal login register
  $('#modalLoginRegi, #modalLoginRegi2').click(function () {
    $('.loginRegister').addClass('loginRegister-active');
  });
  $('#tloginRegClose').click(function () {
    $('.loginRegister').removeClass('loginRegister-active');
  });
  $('#loginRegister-close').click(function () {
    $('.loginRegister').removeClass('loginRegister-active');
  });
  $('#tab-register-click').click(function () {
    $('#tr-login').hide();
    $('#tr-register').show();
    $('#tab-login').hide();
    $('#tab-register').show();
    $('#tab-register-click').addClass('active');
    $('#tab-login-click').removeClass('active');
    $('.loginRegister').show();
  });
  $('#tab-login-click').click(function () {
    $('#tr-login').show();
    $('#tr-register').hide();
    $('#tab-login').show();
    $('#tab-register').hide();
    $('#tab-register-click').removeClass('active');
    $('#tab-login-click').addClass('active');
  });

  // event show nav mobile
  $('#btn-leftmenu').click(function () {
    $('.hd-nav-mb').addClass('hd-nav-mb-active');
  })
  $('#close-left').click(function () {
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

  // ------------------- page ---------------------- //
  var bigimage = $("#big");
  var thumbs = $("#thumbs");
  //var totalslides = 10;
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: true,
      autoplay: true,
      dots: false,
      loop: true,
      responsiveRefreshRate: 200,
      navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
      ]
    })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function () {
      thumbs
        .find(".owl-item")
        .eq(0)
        .addClass("current");
    })
    .owlCarousel({
      items: 4,
      dots: true,
      nav: true,
      navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
      ],
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: 4,
      responsiveRefreshRate: 100
    })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
      .find(".owl-item.active")
      .first()
      .index();
    var end = thumbs
      .find(".owl-item.active")
      .last()
      .index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });

  // tab detail product
  $('#tab1').click(function () {
    $('#tabContent1').show();
    $('#tabContent2').hide();
    $('#tab1 > a').addClass('active');
    $('#tab2 > a').removeClass('active');
  });
  $('#tab2').click(function () {
    $('#tabContent2').show();
    $('#tabContent1').hide();
    $('#tab2 > a').addClass('active');
    $('#tab1 > a').removeClass('active');
  });

  // event check box
  $('#checkBox').click(function () {
    $('#checkBox').toggleClass('active');
  });

  //click add, sub number input cart
  $('.add').click(function () {
    if ($(this).prev().val() < 5) {
      $(this).prev().val(+$(this).prev().val() + 1);
    }
  });
  $('.sub').click(function () {
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
    }
  });

  // check cms today sale
  $('#checkTodaySale .t2').click(function () {
    $('#checkTodaySale .t2 .cir').toggleClass('act');
  });
  $('#checkTodaySale .t3').click(function () {
    $('#checkTodaySale .t3 .cir').toggleClass('act');
  });
  $('#checkTodaySale .t4').click(function () {
    $('#checkTodaySale .t4 .cir').toggleClass('act');
  });
  $('#checkTodaySale .t5').click(function () {
    $('#checkTodaySale .t5 .cir').toggleClass('act');
  });
  $('#checkTodaySale .t6').click(function () {
    $('#checkTodaySale .t6 .cir').toggleClass('act');
  });
  $('#checkTodaySale .t7').click(function () {
    $('#checkTodaySale .t7 .cir').toggleClass('act');
  });
  $('#checkTodaySale .t8').click(function () {
    $('#checkTodaySale .t8 .cir').toggleClass('act');
  });

})

// $(function () {

//   var valueElement = $('#value');
//   function incrementValue(e) {
//     valueElement.text(Math.max(parseInt(valueElement.text()) + e.data.increment, 0));
//     return false;
//   }

//   $('#plus').bind('click', { increment: 1 }, incrementValue);

//   $('#minus').bind('click', { increment: -1 }, incrementValue);

// });