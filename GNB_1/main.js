$(document).ready(function () {
    
    var isDone = true;
    var bgColor = $("#gnb>li>ul").find("a").css("background-color");
    // 1depth 버튼 활성화
    $("#gnb > li").on("mouseenter", function() {
        $(this).children("a").addClass("on");
        // find와 children의 차이점
        // find는 모두 찾지만 children는 직계자신만 찾는다
    });
    $("#gnb > li").on("mouseleave", function() {
        $(this).children("a").removeClass("on");
    });

    // gnb에 마우스를 올리면 bgGnb 제작
    $("#gnb").on("mouseenter", function() {

        // 무한 반복해서 .bgGnb를 생성하지 않도록
        // 변수로 해당 클래스의 여부를 담은 뒤
        // if문으로 해당 클래스의 존재에 따라서
        // 한 번만 생성한다
        var isBgGnb = $(".bgGnb").length;
        if (!isBgGnb) {
            $(".headerWrap").prepend(
                $('<div class="bgGnb"></div>').css({
                    width: "100%",
                    height: 200, // px 생략
                    backgroundColor: bgColor,
                    position: "absolute",
                    top: 100,
                    left: 0,
                    display: "none"
                })
            );
        }
        if (isDone) {
            isDone = false;
            $("#gnb > li > ul").stop().slideDown();
            $(".bgGnb").stop().slideDown();
        } // 따로 적용되는 두 가지 코드를 한 번에 실행하도록 만듦
    });
    $("#gnb").on("mouseleave", function() {
        $("#gnb > li > ul").slideUp();
        $(".bgGnb").slideUp(function () {
            $(this).remove(); // removing .bgGnb
            isDone = true;
        })
    });
})