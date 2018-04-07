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

  /*toggle header-menu
  =======================================*/ 
  $('#js-menu-btn').on('click', function(){
    $('#js-header-menu').slideToggle();
  });

  /*show tarrif list
  =======================================*/ 
  var jsItemContent = $('#js-tarrif__item-content');
  var jsItemList = $('#js-tarrif__item-list');
  var jsShowTarrifList = $('.show-tarrif-list');

  jsShowTarrifList.on('click', function(e){
    e.preventDefault();
    
    if($(this).next().hasClass('active')){
       $(this).next().slideUp('fast').removeClass('active');
       jsShowTarrifList.removeClass('active');
    }else{
       $(this).addClass('active');
       $(this).next().slideDown('slow').addClass('active');      
    }
  });

  
});
