document.getElementById("switchButton").onclick = function () {
    document.getElementById("darkBody").classList.toggle("dark");
};


$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $("#site-header").addClass("nav-fixed");
    } else {
        $("#site-header").removeClass("nav-fixed");
    }
});
