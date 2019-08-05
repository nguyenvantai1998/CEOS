$(document).ready(function(){

    // animation
    // AOS.init();
    $('.fadeOut').owlCarousel({
        items: 1,
        animateOut: 'fadeOut',
        loop: true,
        margin: 10,
        autoplay:true,
        // autoplayTimeout:2000
      });

      // number beautiful
    $(".numberCounter").counterUp({delay:10,time:1000});

    
})