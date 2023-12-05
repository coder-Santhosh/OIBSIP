// scripts.js

$(document).ready(function () {
    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();
  
    // Function to animate progress bars
    function animateProgressBar() {
      $('.progress-bar').each(function () {
        var percent = $(this).attr('aria-valuenow');
        $(this).css('width', percent + '%');
      });
    }
  
    // Scene for triggering animation on scroll
    $('.progress').each(function () {
      var scene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.8, // Adjust this value based on when you want the animation to trigger
        reverse: false,
      })
        .setTween(animateProgressBar)
        .addTo(controller);
    });
  
    // Trigger animation on page load
    animateProgressBar();
  });
  