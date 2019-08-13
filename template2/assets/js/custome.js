$(document).ready(function () {

  // animation
  // AOS.init();
  $('.fadeOut').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true
  });

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


})