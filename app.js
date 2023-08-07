$(document).ready(function () {
  // Mobile Menu
  $(".toggle").click(function () {
    $(this).toggleClass("on")
    $(".nav-items").toggleClass("show")
  })

  // Hide Header on on scroll down\
  $(window).scroll(function () {
    if ($(this).scrollTop() == 0) {
      $(".header").addClass("changes")
    } else {
      $(".header").removeClass("changes")
    }
  })

  var didScroll
  var lastScrollTop = 0
  var delta = 5
  var navbarHeight = -5

  $(window).scroll(function (event) {
    didScroll = true
  })

  setInterval(function () {
    if (didScroll) {
      hasScrolled()
      didScroll = false
    }
  }, 250)

  function hasScrolled() {
    var st = $(this).scrollTop()

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $(".header").removeClass("").addClass("nav-up")
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $(".header").removeClass("nav-up").addClass("sticky")
      }
    }

    lastScrollTop = st
  }
})

jQuery(function ($) {
  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    autoplay: { delay: "4000" },
    loop: true,
  })
})
