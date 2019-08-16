$(document).ready(function () {

  // animation
  // AOS.init();

  // banner slider
  $('.fadeOut').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    autoplay:true
  });

  // cart payment
  paypals.minicarts.render(); //use only unique class names other than paypals.minicarts.Also Replace same class name in css and minicart.min.js
  paypals.minicarts.cart.on('checkout', function (evt) {
    var items = this.items(),
      len = items.length,
      total = 0,
      i;

    // Count the number of each item in the cart
    for (i = 0; i < len; i++) {
      total += items[i].get('quantity');
    }

    if (total < 3) {
      alert('The minimum order quantity is 3. Please add more to your shopping cart before checking out');
      evt.preventDefault();
    }
  });

  // toggle nav mobile
  $('#btn-toggle').click(function () {
    $('.hd-nav .menu-primary').toggleClass('menu-primary-active', 500);
  });

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

  // flex slide single
  $(window).load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      controlNav: "thumbnails"
    });
  });

})

// preloader
function loader() {
  $(".loader").delay(2000).fadeOut("slow");
  $("#overlayer").delay(2000).fadeOut("slow");
}
$(function () {
  window.setTimeout(loader, 150);
})