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

  /*active menu
  =======================================*/
  $('#js-top-nav_menu li').each(function () {
    var location = window.location.pathname;
    var location = location.substring(1);
    var link = $(this).children('a').attr('href');
    if (location === link) {
      $(this).addClass('active');
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImVhc2VTY3JvbGwiLCJmcmFtZVJhdGUiLCJhbmltYXRpb25UaW1lIiwic3RlcFNpemUiLCJwdWxzZUFsZ29yaXRobSIsInB1bHNlU2NhbGUiLCJwdWxzZU5vcm1hbGl6ZSIsImFjY2VsZXJhdGlvbkRlbHRhIiwiYWNjZWxlcmF0aW9uTWF4Iiwia2V5Ym9hcmRTdXBwb3J0IiwiYXJyb3dTY3JvbGwiLCJ0b3VjaHBhZFN1cHBvcnQiLCJmaXhlZEJhY2tncm91bmQiLCJlYWNoIiwibG9jYXRpb24iLCJ3aW5kb3ciLCJwYXRobmFtZSIsInN1YnN0cmluZyIsImxpbmsiLCJjaGlsZHJlbiIsImF0dHIiLCJhZGRDbGFzcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsRUFBRSxZQUFZO0FBQ1o7OztBQUdBQSxJQUFFLE1BQUYsRUFBVUMsVUFBVixDQUFxQjtBQUNuQkMsZUFBVyxFQURRO0FBRW5CQyxtQkFBZSxJQUZJO0FBR25CQyxjQUFVLEVBSFM7QUFJbkJDLG9CQUFnQixDQUpHO0FBS25CQyxnQkFBWSxDQUxPO0FBTW5CQyxvQkFBZ0IsQ0FORztBQU9uQkMsdUJBQW1CLEVBUEE7QUFRbkJDLHFCQUFpQixDQVJFO0FBU25CQyxxQkFBaUIsSUFURTtBQVVuQkMsaUJBQWEsRUFWTTtBQVduQkMscUJBQWlCLElBWEU7QUFZbkJDLHFCQUFpQjtBQVpFLEdBQXJCOztBQWVBOztBQUVBYixJQUFFLHFCQUFGLEVBQXlCYyxJQUF6QixDQUE4QixZQUFZO0FBQ3RDLFFBQUlDLFdBQVdDLE9BQU9ELFFBQVAsQ0FBZ0JFLFFBQS9CO0FBQ0EsUUFBSUYsV0FBV0EsU0FBU0csU0FBVCxDQUFtQixDQUFuQixDQUFmO0FBQ0EsUUFBSUMsT0FBT25CLEVBQUUsSUFBRixFQUFRb0IsUUFBUixDQUFpQixHQUFqQixFQUFzQkMsSUFBdEIsQ0FBMkIsTUFBM0IsQ0FBWDtBQUNBLFFBQUdOLGFBQWFJLElBQWhCLEVBQXNCO0FBQ2xCbkIsUUFBRSxJQUFGLEVBQVFzQixRQUFSLENBQWlCLFFBQWpCO0FBQ0g7QUFDSixHQVBEO0FBU0QsQ0E5QkQiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xyXG4gIC8qXHJcbiAgICAgIGh0dHBzOi8vd3d3LmpxdWVyeXNjcmlwdC5uZXQvYW5pbWF0aW9uL1Ntb290aC1Nb3VzZS1XaGVlbC1TY3JvbGxpbmctUGx1Z2luLVdpdGgtalF1ZXJ5LWVhc2VTY3JvbGwuaHRtbFxyXG4gICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICQoXCJodG1sXCIpLmVhc2VTY3JvbGwoe1xyXG4gICAgZnJhbWVSYXRlOiA2MCxcclxuICAgIGFuaW1hdGlvblRpbWU6IDEwMDAsXHJcbiAgICBzdGVwU2l6ZTogOTAsXHJcbiAgICBwdWxzZUFsZ29yaXRobTogMSxcclxuICAgIHB1bHNlU2NhbGU6IDgsXHJcbiAgICBwdWxzZU5vcm1hbGl6ZTogMSxcclxuICAgIGFjY2VsZXJhdGlvbkRlbHRhOiAyMCxcclxuICAgIGFjY2VsZXJhdGlvbk1heDogMSxcclxuICAgIGtleWJvYXJkU3VwcG9ydDogdHJ1ZSxcclxuICAgIGFycm93U2Nyb2xsOiA1MCxcclxuICAgIHRvdWNocGFkU3VwcG9ydDogdHJ1ZSxcclxuICAgIGZpeGVkQmFja2dyb3VuZDogdHJ1ZVxyXG4gIH0pO1xyXG5cclxuICAvKmFjdGl2ZSBtZW51XHJcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki8gXHJcbiAgJCgnI2pzLXRvcC1uYXZfbWVudSBsaScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICAgIHZhciBsb2NhdGlvbiA9IGxvY2F0aW9uLnN1YnN0cmluZygxKTtcclxuICAgICAgdmFyIGxpbmsgPSAkKHRoaXMpLmNoaWxkcmVuKCdhJykuYXR0cignaHJlZicpO1xyXG4gICAgICBpZihsb2NhdGlvbiA9PT0gbGluaykge1xyXG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICB9KTtcclxuICBcclxufSk7Il19
