// DarkTheme

document.getElementById("switchButton").onclick = function () {
    document.getElementById("darkBody").classList.toggle("dark");
};

// switch button close toogle
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

// Ngăn trượt khi show navbar
$(function () {
    $('.navbar-toggler').click(function () {
        $('body').toggleClass('noScroll');
    })
});


