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
    $('#tabbar-search').click(function(){
        $('#input-search').toggleClass('form-control-active');
    });

    // toggle menu mobile
    $('#tabbbar-nav-mobile').click(function(){
        $('#desktopColRight').addClass('desktopColRight-active');
        $('#mobileColLeft').addClass('mobileColLeft-active');
        $('#tab-closeNavmobile').addClass('tab-closeNavmobile-active');
    });
    $('#tab-closeNavmobile, #tab-closeNavmobile2').click(function(){
        $('#desktopColRight').removeClass('desktopColRight-active');
        $('#mobileColLeft').removeClass('mobileColLeft-active');
        $('#tab-closeNavmobile').removeClass('tab-closeNavmobile-active');
    });
    
    // toggle submenu nav
    $('#nav-mobile ul li a .btn-dow1').click(function(){
        $('#nav-mobile ul li .sub-product').slideDown("slow");
        $('#nav-mobile ul li a .btn-dow1').hide();
        $('#nav-mobile ul li a .btn-up1').show();
    });
    $('#nav-mobile ul li a .btn-up1').click(function(){
        $('#nav-mobile ul li .sub-product').slideUp("slow");
        $('#nav-mobile ul li a .btn-dow1').show();
        $('#nav-mobile ul li a .btn-up1').hide();
    });
    $('#nav-mobile ul li a .btn-dow2').click(function(){
        $('#nav-mobile ul li .sub-trademark').slideDown("slow");
        $('#nav-mobile ul li a .btn-dow2').hide();
        $('#nav-mobile ul li a .btn-up2').show();
    });
    $('#nav-mobile ul li a .btn-up2').click(function(){
        $('#nav-mobile ul li .sub-trademark').slideUp("slow");
        $('#nav-mobile ul li a .btn-dow2').show();
        $('#nav-mobile ul li a .btn-up2').hide();
    });

})