'use strict';

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
  $('#js-menu-btn').on('click', function () {
    $('#js-header-menu').slideToggle();
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImVhc2VTY3JvbGwiLCJmcmFtZVJhdGUiLCJhbmltYXRpb25UaW1lIiwic3RlcFNpemUiLCJwdWxzZUFsZ29yaXRobSIsInB1bHNlU2NhbGUiLCJwdWxzZU5vcm1hbGl6ZSIsImFjY2VsZXJhdGlvbkRlbHRhIiwiYWNjZWxlcmF0aW9uTWF4Iiwia2V5Ym9hcmRTdXBwb3J0IiwiYXJyb3dTY3JvbGwiLCJ0b3VjaHBhZFN1cHBvcnQiLCJmaXhlZEJhY2tncm91bmQiLCJvbiIsInNsaWRlVG9nZ2xlIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxFQUFFLFlBQVk7QUFDWjs7O0FBR0FBLElBQUUsTUFBRixFQUFVQyxVQUFWLENBQXFCO0FBQ25CQyxlQUFXLEVBRFE7QUFFbkJDLG1CQUFlLElBRkk7QUFHbkJDLGNBQVUsRUFIUztBQUluQkMsb0JBQWdCLENBSkc7QUFLbkJDLGdCQUFZLENBTE87QUFNbkJDLG9CQUFnQixDQU5HO0FBT25CQyx1QkFBbUIsRUFQQTtBQVFuQkMscUJBQWlCLENBUkU7QUFTbkJDLHFCQUFpQixJQVRFO0FBVW5CQyxpQkFBYSxFQVZNO0FBV25CQyxxQkFBaUIsSUFYRTtBQVluQkMscUJBQWlCO0FBWkUsR0FBckI7O0FBZUE7O0FBRUFiLElBQUUsY0FBRixFQUFrQmMsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBVTtBQUN0Q2QsTUFBRSxpQkFBRixFQUFxQmUsV0FBckI7QUFDRCxHQUZEO0FBSUQsQ0F6QkQiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xyXG4gIC8qXHJcbiAgICAgIGh0dHBzOi8vd3d3LmpxdWVyeXNjcmlwdC5uZXQvYW5pbWF0aW9uL1Ntb290aC1Nb3VzZS1XaGVlbC1TY3JvbGxpbmctUGx1Z2luLVdpdGgtalF1ZXJ5LWVhc2VTY3JvbGwuaHRtbFxyXG4gICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICQoXCJodG1sXCIpLmVhc2VTY3JvbGwoe1xyXG4gICAgZnJhbWVSYXRlOiA2MCxcclxuICAgIGFuaW1hdGlvblRpbWU6IDEwMDAsXHJcbiAgICBzdGVwU2l6ZTogOTAsXHJcbiAgICBwdWxzZUFsZ29yaXRobTogMSxcclxuICAgIHB1bHNlU2NhbGU6IDgsXHJcbiAgICBwdWxzZU5vcm1hbGl6ZTogMSxcclxuICAgIGFjY2VsZXJhdGlvbkRlbHRhOiAyMCxcclxuICAgIGFjY2VsZXJhdGlvbk1heDogMSxcclxuICAgIGtleWJvYXJkU3VwcG9ydDogdHJ1ZSxcclxuICAgIGFycm93U2Nyb2xsOiA1MCxcclxuICAgIHRvdWNocGFkU3VwcG9ydDogdHJ1ZSxcclxuICAgIGZpeGVkQmFja2dyb3VuZDogdHJ1ZVxyXG4gIH0pO1xyXG5cclxuICAvKnRvZ2dsZSBoZWFkZXItbWVudVxyXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovIFxyXG4gICQoJyNqcy1tZW51LWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcjanMtaGVhZGVyLW1lbnUnKS5zbGlkZVRvZ2dsZSgpO1xyXG4gIH0pO1xyXG4gIFxyXG59KTsiXX0=
