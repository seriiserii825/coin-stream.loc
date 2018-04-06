$(function () {
  /*
      https://www.jqueryscript.net/animation/Smooth-Mouse-Wheel-Scrolling-Plugin-With-jQuery-easeScroll.html
      ===========================*/
  $("html").easeScroll({
    frameRate: 60,
    animationTime: 1000,
    stepSize: 90,
    pulseAlgorithm: 1,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 20,
    accelerationMax: 1,
    keyboardSupport: true,
    arrowScroll: 50,
    touchpadSupport: true,
    fixedBackground: true
  });

  /*active menu
  =======================================*/ 
  $('#js-top-nav_menu li').each(function () {
      var location = window.location.pathname;
      var location = location.substring(1);
      var link = $(this).children('a').attr('href');
      if(location === link) {
          $(this).addClass('active');
      }
  });
  
});
