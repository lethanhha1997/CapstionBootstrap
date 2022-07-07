// DarkTheme

document.getElementById("switchButton").onclick = function () {
    document.getElementById("darkBody").classList.toggle("dark");
};

// switch button close and navbar-toggler-icon
document.getElementById("close").onclick = function () {
    document.getElementById("darkBody").classList.toggle("open");
};

// Header scroll
$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $("#site-header").addClass("nav-fixed");
    } else {
        $("#site-header").removeClass("nav-fixed");
    }
});

// Owl carousel
$(document).ready(function () {
    $("#owl-demo1").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        768: {
          items: 1,
          nav: false
        },
        1000: {
          items: 1,
          nav: false,
          loop: false
        }
      }
    })
  })
// Ngăn trượt khi show navbar
$(function () {
    $('.navbar-toggler').click(function () {
        $('body').toggleClass('noScroll');
    })
});


