$(document).ready(function () {

    $("#gnb>li").hover(function() {
        $(".nav_bg, #gnb > li > ul").stop().slideDown();
    }, function () {
        $(".nav_bg, #gnb > li > ul").slideUp();
    })
});