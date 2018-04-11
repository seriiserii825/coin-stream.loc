"use strict";

$(function () {
  var now = moment();
  var clock = document.getElementById("js-clock-content");

  moment.locale('en-gb');

  window.setInterval(function () {
    clock.innerHTML = moment().tz("Europe/London").format('HH:mm:ss');
  }, 1000);

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

  /*show tarrif list
  =======================================*/
  var jsItem = $('#js-tarrif .tarrif__item');

  jsItem.on('mouseenter', function () {
    $(this).find('.tarrif__item-list').slideDown(600);
  });

  jsItem.on('mouseleave', function () {
    $(this).find('.tarrif__item-list').slideUp(300);
  });

  /*clients__slider
  =======================================*/
  $('#js-clients__list').slick({
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    }]
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsIm5vdyIsIm1vbWVudCIsImNsb2NrIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxvY2FsZSIsIndpbmRvdyIsInNldEludGVydmFsIiwiaW5uZXJIVE1MIiwidHoiLCJmb3JtYXQiLCJlYXNlU2Nyb2xsIiwiZnJhbWVSYXRlIiwiYW5pbWF0aW9uVGltZSIsInN0ZXBTaXplIiwicHVsc2VBbGdvcml0aG0iLCJwdWxzZVNjYWxlIiwicHVsc2VOb3JtYWxpemUiLCJhY2NlbGVyYXRpb25EZWx0YSIsImFjY2VsZXJhdGlvbk1heCIsImtleWJvYXJkU3VwcG9ydCIsImFycm93U2Nyb2xsIiwidG91Y2hwYWRTdXBwb3J0IiwiZml4ZWRCYWNrZ3JvdW5kIiwib24iLCJzbGlkZVRvZ2dsZSIsImpzSXRlbSIsImZpbmQiLCJzbGlkZURvd24iLCJzbGlkZVVwIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJpbmZpbml0ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsRUFBRSxZQUFZO0FBQ1osTUFBSUMsTUFBTUMsUUFBVjtBQUNBLE1BQUlDLFFBQVFDLFNBQVNDLGNBQVQsQ0FBd0Isa0JBQXhCLENBQVo7O0FBRUFILFNBQU9JLE1BQVAsQ0FBYyxPQUFkOztBQUVBQyxTQUFPQyxXQUFQLENBQW1CLFlBQVU7QUFDM0JMLFVBQU1NLFNBQU4sR0FBa0JQLFNBQVNRLEVBQVQsQ0FBWSxlQUFaLEVBQTZCQyxNQUE3QixDQUFvQyxVQUFwQyxDQUFsQjtBQUNELEdBRkQsRUFFRyxJQUZIOztBQUtBOzs7QUFHQVgsSUFBRSxNQUFGLEVBQVVZLFVBQVYsQ0FBcUI7QUFDbkJDLGVBQVcsRUFEUTtBQUVuQkMsbUJBQWUsSUFGSTtBQUduQkMsY0FBVSxFQUhTO0FBSW5CQyxvQkFBZ0IsQ0FKRztBQUtuQkMsZ0JBQVksQ0FMTztBQU1uQkMsb0JBQWdCLENBTkc7QUFPbkJDLHVCQUFtQixFQVBBO0FBUW5CQyxxQkFBaUIsQ0FSRTtBQVNuQkMscUJBQWlCLElBVEU7QUFVbkJDLGlCQUFhLEVBVk07QUFXbkJDLHFCQUFpQixJQVhFO0FBWW5CQyxxQkFBaUI7QUFaRSxHQUFyQjs7QUFlQTs7QUFFQXhCLElBQUUsY0FBRixFQUFrQnlCLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFlBQVU7QUFDdEN6QixNQUFFLGlCQUFGLEVBQXFCMEIsV0FBckI7QUFDRCxHQUZEOztBQUlBOztBQUVBLE1BQUlDLFNBQVMzQixFQUFFLDBCQUFGLENBQWI7O0FBRUEyQixTQUFPRixFQUFQLENBQVUsWUFBVixFQUF3QixZQUFVO0FBQ2hDekIsTUFBRSxJQUFGLEVBQVE0QixJQUFSLENBQWEsb0JBQWIsRUFBbUNDLFNBQW5DLENBQTZDLEdBQTdDO0FBQ0QsR0FGRDs7QUFJQUYsU0FBT0YsRUFBUCxDQUFVLFlBQVYsRUFBd0IsWUFBVTtBQUNoQ3pCLE1BQUUsSUFBRixFQUFRNEIsSUFBUixDQUFhLG9CQUFiLEVBQW1DRSxPQUFuQyxDQUEyQyxHQUEzQztBQUNELEdBRkQ7O0FBSUE7O0FBRUE5QixJQUFFLG1CQUFGLEVBQXVCK0IsS0FBdkIsQ0FBNkI7QUFDM0JDLGtCQUFjLENBRGE7QUFFM0JDLG9CQUFnQixDQUZXO0FBRzNCQyxnQkFBWSxDQUNaO0FBQ0VDLGtCQUFZLElBRGQ7QUFFRUMsZ0JBQVU7QUFDUkosc0JBQWMsQ0FETjtBQUVSQyx3QkFBZ0IsQ0FGUjtBQUdSSSxrQkFBVTtBQUhGO0FBRlosS0FEWSxFQVNaO0FBQ0VGLGtCQUFZLEdBRGQ7QUFFRUMsZ0JBQVU7QUFDUkosc0JBQWMsQ0FETjtBQUVSQyx3QkFBZ0I7QUFGUjtBQUZaLEtBVFksRUFnQlo7QUFDRUUsa0JBQVksR0FEZDtBQUVFQyxnQkFBVTtBQUNSSixzQkFBYyxDQUROO0FBRVJDLHdCQUFnQjtBQUZSO0FBS1o7QUFDQTtBQUNBO0FBVEEsS0FoQlk7QUFIZSxHQUE3QjtBQWdDRCxDQWpGRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIG5vdyA9IG1vbWVudCgpO1xyXG4gIHZhciBjbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtY2xvY2stY29udGVudFwiKTtcclxuXHJcbiAgbW9tZW50LmxvY2FsZSgnZW4tZ2InKTtcclxuXHJcbiAgd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICBjbG9jay5pbm5lckhUTUwgPSBtb21lbnQoKS50eihcIkV1cm9wZS9Mb25kb25cIikuZm9ybWF0KCdISDptbTpzcycpO1xyXG4gIH0sIDEwMDApO1xyXG5cclxuXHJcbiAgLypcclxuICAgICAgaHR0cHM6Ly93d3cuanF1ZXJ5c2NyaXB0Lm5ldC9hbmltYXRpb24vU21vb3RoLU1vdXNlLVdoZWVsLVNjcm9sbGluZy1QbHVnaW4tV2l0aC1qUXVlcnktZWFzZVNjcm9sbC5odG1sXHJcbiAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgJChcImh0bWxcIikuZWFzZVNjcm9sbCh7XHJcbiAgICBmcmFtZVJhdGU6IDYwLFxyXG4gICAgYW5pbWF0aW9uVGltZTogMTAwMCxcclxuICAgIHN0ZXBTaXplOiA5MCxcclxuICAgIHB1bHNlQWxnb3JpdGhtOiAxLFxyXG4gICAgcHVsc2VTY2FsZTogOCxcclxuICAgIHB1bHNlTm9ybWFsaXplOiAxLFxyXG4gICAgYWNjZWxlcmF0aW9uRGVsdGE6IDIwLFxyXG4gICAgYWNjZWxlcmF0aW9uTWF4OiAxLFxyXG4gICAga2V5Ym9hcmRTdXBwb3J0OiB0cnVlLFxyXG4gICAgYXJyb3dTY3JvbGw6IDUwLFxyXG4gICAgdG91Y2hwYWRTdXBwb3J0OiB0cnVlLFxyXG4gICAgZml4ZWRCYWNrZ3JvdW5kOiB0cnVlXHJcbiAgfSk7XHJcblxyXG4gIC8qdG9nZ2xlIGhlYWRlci1tZW51XHJcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAkKCcjanMtbWVudS1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnI2pzLWhlYWRlci1tZW51Jykuc2xpZGVUb2dnbGUoKTtcclxuICB9KTtcclxuXHJcbiAgLypzaG93IHRhcnJpZiBsaXN0XHJcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICB2YXIganNJdGVtID0gJCgnI2pzLXRhcnJpZiAudGFycmlmX19pdGVtJyk7XHJcblxyXG4gIGpzSXRlbS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmZpbmQoJy50YXJyaWZfX2l0ZW0tbGlzdCcpLnNsaWRlRG93big2MDApO1xyXG4gIH0pO1xyXG5cclxuICBqc0l0ZW0ub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5maW5kKCcudGFycmlmX19pdGVtLWxpc3QnKS5zbGlkZVVwKDMwMCk7XHJcbiAgfSk7XHJcblxyXG4gIC8qY2xpZW50c19fc2xpZGVyXHJcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAkKCcjanMtY2xpZW50c19fbGlzdCcpLnNsaWNrKHtcclxuICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gWW91IGNhbiB1bnNsaWNrIGF0IGEgZ2l2ZW4gYnJlYWtwb2ludCBub3cgYnkgYWRkaW5nOlxyXG4gICAgLy8gc2V0dGluZ3M6IFwidW5zbGlja1wiXHJcbiAgICAvLyBpbnN0ZWFkIG9mIGEgc2V0dGluZ3Mgb2JqZWN0XHJcbiAgXVxyXG4gIH0pO1xyXG5cclxufSk7Il19
