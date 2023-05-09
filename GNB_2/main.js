$(document).ready(function () {
    $("#gnb > li").on("mouseenter", function() {
        $(this).children("ul").stop().slideDown("on");
        $(this).children("a").addClass("on");
    });
    $("#gnb > li").on("mouseleave", function() {
        $(this).children("ul").slideUp("on");
        $(this).children("a").removeClass("on");
    });
});