(function ($) {
  'use strict';
    
  // navbarDropdown
  if ($(window).width() < 992) {
    $('.main-nav [data-toggle="dropdown"]').on('click', function () {
      $(this).siblings('.dropdown-menu').animate({
        height: 'toggle'
      }, 300);
    });
  }

  // -----------------------------
  // To Top Init
  // -----------------------------
  $('.to-top').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  $(document).ready(function () {
    // gallery-wrapper init
    if (($('.gallery-wrapper').length) !== 0) {
      var Shuffle = window.Shuffle;
      var jQuery = window.jQuery;

      var myShuffle = new Shuffle(document.querySelector('.gallery-wrapper'), {
        itemSelector: '.gallery-item',
        buffer: 1
      });

      jQuery('input[name="gallery-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
          myShuffle.filter(input.value);
        }
      });
    }
  });

})(jQuery);