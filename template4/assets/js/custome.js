$(document).ready(function () {

    // animation
    // AOS.init();

    // scroll nav desktop
    var hifo = $('.hd-info').height();
    var htop = $('.hd-top').height();
    var hmiddle = $('.hd-middle').height();
    var sumHeight = hifo + htop + hmiddle;
    $(window).bind('scroll', function () {
        var posNav = window.scrollY;
        if (posNav >= sumHeight) {
            $('#hd-bottom-sticky').addClass('hd-bottom-sticky');
        } else {
            $('#hd-bottom-sticky').removeClass('hd-bottom-sticky');
        }
    })

    // scroll sidebar page news
    var heightStickyNav = $('#hd-bottom-sticky').height() + 1;
    var heightcolLeftSictky = $('#colLeftSictky').height() / 2;
    $(window).bind('scroll', function () {
        var posNav = window.scrollY;
        if (posNav >= sumHeight) {
            $('.boxStickyTop').addClass('boxStickyTop-active');
            $('.boxStickyTop').css({ "top": heightStickyNav });
            if (posNav > heightcolLeftSictky) {
                $('.boxStickyTop').css({ "margin-bottom": '30%' });
            }
        } else {
            $('.boxStickyTop').removeClass('boxStickyTop-active');
            $('.boxStickyTop').css({ "top": 'unset' });
        }
    })

    // big banner home
    $('.bigBannerHome').owlCarousel({
        items: 1,
        animateOut: 'fadeOut',
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3500
    });

    // list slide product home
    $('.listSlideProductHome').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
                margin: 20
            }
        }
    });

    // silde single category
    $('.sildeSingleCategory').owlCarousel({
        items: 1,
        margin: 30,
        stagePadding: 30,
        smartSpeed: 450
    });

    // scroll to top
    var h = $('.main-nav').height();
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

    //---------- event mobile --------------//

    // show hide input search
    $('#tabbar-search').click(function () {
        $('#input-search').toggleClass('form-control-active');
    });

    // toggle menu mobile
    $('#tabbbar-nav-mobile').click(function () {
        $('#desktopColRight').addClass('desktopColRight-active');
        $('#mobileColLeft').addClass('mobileColLeft-active');
        $('#tab-closeNavmobile').addClass('tab-closeNavmobile-active');
    });
    $('#tab-closeNavmobile, #tab-closeNavmobile2').click(function () {
        $('#desktopColRight').removeClass('desktopColRight-active');
        $('#mobileColLeft').removeClass('mobileColLeft-active');
        $('#tab-closeNavmobile').removeClass('tab-closeNavmobile-active');
    });

    // toggle submenu nav
    $('#nav-mobile ul li a .btn-dow1').click(function () {
        $('#nav-mobile ul li .sub-product').slideDown("slow");
        $('#nav-mobile ul li a .btn-dow1').hide();
        $('#nav-mobile ul li a .btn-up1').show();
    });
    $('#nav-mobile ul li a .btn-up1').click(function () {
        $('#nav-mobile ul li .sub-product').slideUp("slow");
        $('#nav-mobile ul li a .btn-dow1').show();
        $('#nav-mobile ul li a .btn-up1').hide();
    });
    $('#nav-mobile ul li a .btn-dow2').click(function () {
        $('#nav-mobile ul li .sub-trademark').slideDown("slow");
        $('#nav-mobile ul li a .btn-dow2').hide();
        $('#nav-mobile ul li a .btn-up2').show();
    });
    $('#nav-mobile ul li a .btn-up2').click(function () {
        $('#nav-mobile ul li .sub-trademark').slideUp("slow");
        $('#nav-mobile ul li a .btn-dow2').show();
        $('#nav-mobile ul li a .btn-up2').hide();
    });

    // login register
    $('#showModal-loginReg').click(function () {
        $('#loginRegister,.bg-closeLoginReg').show();
    });
    $('#btn-closrLoginReg, #closeLoginReg').click(function () {
        $('#loginRegister,.bg-closeLoginReg').hide();
    });

    // list product sildebar product
    $('.listProductSB').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: false,
        autoplay: false,
        autoplayTimeout: 3500
    });

    // scroll slide range sildebar product
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));

        $("#zoom_04").ezPlus();
});




// slide product single category
$(document).ready(function () {
    // reference for main items
    var slider = $('#slider');
    // reference for thumbnail items
    var thumbnailSlider = $('#thumbnailSlider');
    //transition time in ms
    var duration = 500;

    // carousel function for main slider
    slider.owlCarousel({
        loop: false,
        nav: true,
        items: 1
    }).on('changed.owl.carousel', function (e) {
        //On change of main item to trigger thumbnail item
        thumbnailSlider.trigger('to.owl.carousel', [e.item.index, duration, true]);
    });

    // carousel function for thumbnail slider
    thumbnailSlider.owlCarousel({
        loop: false,
        center: false, //to display the thumbnail item in center
        nav: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    }).on('click', '.owl-item', function () {
        // On click of thumbnail items to trigger same main item
        slider.trigger('to.owl.carousel', [$(this).index(), duration, true]);

    }).on('changed.owl.carousel', function (e) {
        // On change of thumbnail item to trigger main item
        slider.trigger('to.owl.carousel', [e.item.index, duration, true]);
    });


    //These two are navigation for main items
    $('.slider-right').click(function () {
        slider.trigger('next.owl.carousel');
    });
    $('.slider-left').click(function () {
        slider.trigger('prev.owl.carousel');
    });
});