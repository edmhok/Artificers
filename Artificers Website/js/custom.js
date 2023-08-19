jQuery(document).ready(function ($) {
  // Attach isInViewport function to jQuery prototype (fn)
  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  typewrite();

  $(window).on("resize scroll", function () {
    typewrite();
  });

  function typewrite() {
    $(".typewriter").each(function () {
      var $this = $(this); // Store the reference to the element

      if ($this.isInViewport() && !$this.hasClass("typingStarted")) {
        $this.addClass("typingStarted");

        var i = 0;
        var speed = 50;
        var txt = $this.text();
        $this.empty();
        $this.css("opacity", 1);

        function typeNextCharacter() {
          if (i < txt.length) {
            $this.append(txt.charAt(i));
            i++;
            setTimeout(typeNextCharacter, speed);
          }
        }

        setTimeout(typeNextCharacter, speed);
      }
    });
  }
});
