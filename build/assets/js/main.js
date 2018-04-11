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

  /*show tarrif list
  =======================================*/
  var jsItem = $('#js-tarrif .tarrif__item');
  var jsItemContent = $('#js-tarrif .tarrif__item-content');
  var jsItemList = $('#js-tarrif .tarrif__item-list');
  var jsShowTarrifList = $('.show-tarrif-list');

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImVhc2VTY3JvbGwiLCJmcmFtZVJhdGUiLCJhbmltYXRpb25UaW1lIiwic3RlcFNpemUiLCJwdWxzZUFsZ29yaXRobSIsInB1bHNlU2NhbGUiLCJwdWxzZU5vcm1hbGl6ZSIsImFjY2VsZXJhdGlvbkRlbHRhIiwiYWNjZWxlcmF0aW9uTWF4Iiwia2V5Ym9hcmRTdXBwb3J0IiwiYXJyb3dTY3JvbGwiLCJ0b3VjaHBhZFN1cHBvcnQiLCJmaXhlZEJhY2tncm91bmQiLCJvbiIsInNsaWRlVG9nZ2xlIiwianNJdGVtIiwianNJdGVtQ29udGVudCIsImpzSXRlbUxpc3QiLCJqc1Nob3dUYXJyaWZMaXN0IiwiZmluZCIsInNsaWRlRG93biIsInNsaWRlVXAiLCJzbGljayIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImluZmluaXRlIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxFQUFFLFlBQVk7QUFDWjs7O0FBR0FBLElBQUUsTUFBRixFQUFVQyxVQUFWLENBQXFCO0FBQ25CQyxlQUFXLEVBRFE7QUFFbkJDLG1CQUFlLElBRkk7QUFHbkJDLGNBQVUsRUFIUztBQUluQkMsb0JBQWdCLENBSkc7QUFLbkJDLGdCQUFZLENBTE87QUFNbkJDLG9CQUFnQixDQU5HO0FBT25CQyx1QkFBbUIsRUFQQTtBQVFuQkMscUJBQWlCLENBUkU7QUFTbkJDLHFCQUFpQixJQVRFO0FBVW5CQyxpQkFBYSxFQVZNO0FBV25CQyxxQkFBaUIsSUFYRTtBQVluQkMscUJBQWlCO0FBWkUsR0FBckI7O0FBZUE7O0FBRUFiLElBQUUsY0FBRixFQUFrQmMsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBVTtBQUN0Q2QsTUFBRSxpQkFBRixFQUFxQmUsV0FBckI7QUFDRCxHQUZEOztBQUlBOztBQUVBLE1BQUlDLFNBQVNoQixFQUFFLDBCQUFGLENBQWI7QUFDQSxNQUFJaUIsZ0JBQWdCakIsRUFBRSxrQ0FBRixDQUFwQjtBQUNBLE1BQUlrQixhQUFhbEIsRUFBRSwrQkFBRixDQUFqQjtBQUNBLE1BQUltQixtQkFBbUJuQixFQUFFLG1CQUFGLENBQXZCOztBQUVBZ0IsU0FBT0YsRUFBUCxDQUFVLFlBQVYsRUFBd0IsWUFBVTtBQUNoQ2QsTUFBRSxJQUFGLEVBQVFvQixJQUFSLENBQWEsb0JBQWIsRUFBbUNDLFNBQW5DLENBQTZDLEdBQTdDO0FBQ0QsR0FGRDs7QUFJQUwsU0FBT0YsRUFBUCxDQUFVLFlBQVYsRUFBd0IsWUFBVTtBQUNoQ2QsTUFBRSxJQUFGLEVBQVFvQixJQUFSLENBQWEsb0JBQWIsRUFBbUNFLE9BQW5DLENBQTJDLEdBQTNDO0FBQ0QsR0FGRDs7QUFJQTs7QUFFQXRCLElBQUUsbUJBQUYsRUFBdUJ1QixLQUF2QixDQUE2QjtBQUMzQkMsa0JBQWMsQ0FEYTtBQUUzQkMsb0JBQWdCLENBRlc7QUFHM0JDLGdCQUFZLENBQ1o7QUFDRUMsa0JBQVksSUFEZDtBQUVFQyxnQkFBVTtBQUNSSixzQkFBYyxDQUROO0FBRVJDLHdCQUFnQixDQUZSO0FBR1JJLGtCQUFVO0FBSEY7QUFGWixLQURZLEVBU1o7QUFDRUYsa0JBQVksR0FEZDtBQUVFQyxnQkFBVTtBQUNSSixzQkFBYyxDQUROO0FBRVJDLHdCQUFnQjtBQUZSO0FBRlosS0FUWSxFQWdCWjtBQUNFRSxrQkFBWSxHQURkO0FBRUVDLGdCQUFVO0FBQ1JKLHNCQUFjLENBRE47QUFFUkMsd0JBQWdCO0FBRlI7QUFLWjtBQUNBO0FBQ0E7QUFUQSxLQWhCWTtBQUhlLEdBQTdCO0FBaUNELENBM0VEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uICgpIHtcclxuICAvKlxyXG4gICAgICBodHRwczovL3d3dy5qcXVlcnlzY3JpcHQubmV0L2FuaW1hdGlvbi9TbW9vdGgtTW91c2UtV2hlZWwtU2Nyb2xsaW5nLVBsdWdpbi1XaXRoLWpRdWVyeS1lYXNlU2Nyb2xsLmh0bWxcclxuICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAkKFwiaHRtbFwiKS5lYXNlU2Nyb2xsKHtcclxuICAgIGZyYW1lUmF0ZTogNjAsXHJcbiAgICBhbmltYXRpb25UaW1lOiAxMDAwLFxyXG4gICAgc3RlcFNpemU6IDkwLFxyXG4gICAgcHVsc2VBbGdvcml0aG06IDEsXHJcbiAgICBwdWxzZVNjYWxlOiA4LFxyXG4gICAgcHVsc2VOb3JtYWxpemU6IDEsXHJcbiAgICBhY2NlbGVyYXRpb25EZWx0YTogMjAsXHJcbiAgICBhY2NlbGVyYXRpb25NYXg6IDEsXHJcbiAgICBrZXlib2FyZFN1cHBvcnQ6IHRydWUsXHJcbiAgICBhcnJvd1Njcm9sbDogNTAsXHJcbiAgICB0b3VjaHBhZFN1cHBvcnQ6IHRydWUsXHJcbiAgICBmaXhlZEJhY2tncm91bmQ6IHRydWVcclxuICB9KTtcclxuXHJcbiAgLyp0b2dnbGUgaGVhZGVyLW1lbnVcclxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICQoJyNqcy1tZW51LWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcjanMtaGVhZGVyLW1lbnUnKS5zbGlkZVRvZ2dsZSgpO1xyXG4gIH0pO1xyXG5cclxuICAvKnNob3cgdGFycmlmIGxpc3RcclxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gIHZhciBqc0l0ZW0gPSAkKCcjanMtdGFycmlmIC50YXJyaWZfX2l0ZW0nKTtcclxuICB2YXIganNJdGVtQ29udGVudCA9ICQoJyNqcy10YXJyaWYgLnRhcnJpZl9faXRlbS1jb250ZW50Jyk7XHJcbiAgdmFyIGpzSXRlbUxpc3QgPSAkKCcjanMtdGFycmlmIC50YXJyaWZfX2l0ZW0tbGlzdCcpO1xyXG4gIHZhciBqc1Nob3dUYXJyaWZMaXN0ID0gJCgnLnNob3ctdGFycmlmLWxpc3QnKTtcclxuXHJcbiAganNJdGVtLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykuZmluZCgnLnRhcnJpZl9faXRlbS1saXN0Jykuc2xpZGVEb3duKDYwMCk7XHJcbiAgfSk7XHJcblxyXG4gIGpzSXRlbS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmZpbmQoJy50YXJyaWZfX2l0ZW0tbGlzdCcpLnNsaWRlVXAoMzAwKTtcclxuICB9KTtcclxuXHJcbiAgLypjbGllbnRzX19zbGlkZXJcclxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICQoJyNqcy1jbGllbnRzX19saXN0Jykuc2xpY2soe1xyXG4gICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBZb3UgY2FuIHVuc2xpY2sgYXQgYSBnaXZlbiBicmVha3BvaW50IG5vdyBieSBhZGRpbmc6XHJcbiAgICAvLyBzZXR0aW5nczogXCJ1bnNsaWNrXCJcclxuICAgIC8vIGluc3RlYWQgb2YgYSBzZXR0aW5ncyBvYmplY3RcclxuICBdXHJcbiAgfSk7XHJcblxyXG5cclxufSk7Il19
