//动画初始化
$('.about-title').fadeOut(0);
$('.Practice-Areas-header').css("opacity", "0")
$('.Our-Team-header').css("opacity", "0")
$('.Our-Team-header').css("opacity", "0")
$('.Contact-Us-form').css("opacity", "0")

$('.footer').css("opacity", "0")
$('.imgGroups').css("transform", "translateX(-500px)")
$('.Ex-text').css("transform", "translateX(500px)")
$(".card:even").css("transform", "translateX(-500px)")
$(".card:odd").css("transform", "translateX(500px)")
$('.Our-Team-left').eq(0).css("transform", "translateX(-500px)")
$('.Our-Team-right').eq(0).css("transform", "translateX(500px)")

$('.Our-Team-left').eq(1).css("transform", "translateX(500px)")
$('.Our-Team-right').eq(1).css("transform", "translateX(-500px)")
//滚动事件
window.onscroll = function () {
    var top = document.documentElement.scrollTop

    if (top > $('.about-title')[0].offsetTop - $('.about-title')[0].offsetHeight) {
        $('.about-title').fadeIn(1000)
        $('.imgGroups').css({
            "transform": "translateX(0)",
            "transition": "all 1s"
        })
        $('.Ex-text').css({
            "transform": "translateX(0)",
            "transition": "all 1s"
        })
    }
    if (top > $('.Practice-Areas')[0].offsetTop - $('.Practice-Areas')[0].offsetHeight) {
        $('.Practice-Areas-header').css({
            "opacity": "1",
            "transition": "all 1s"
        })
        
    }
    if (top > $('.cardGroups')[0].offsetTop - $('.cardGroups')[0].offsetHeight) {
        $('.card:even').css({
            "transform": "translateX(0)",
            "transition": "all 1s"
        })
        $('.card:odd').css({
            "transform": "translateX(0)",
            "transition": "all 1s"
        })
    }
    if (top > $('.Our-Team-header')[0].offsetTop - $('.Our-Team-header')[0].offsetHeight-500) {
        $('.Our-Team-header').css({
            "opacity": "1",
            "transition": "all 1s"
        })
        $('.Our-Team-left').css({
            "transform": "translateX(0)",
            "transition": "all 1s"
        })
        $('.Our-Team-right').css({
            "transform": "translateX(0)",
            "transition": "all 1s"
        })
    }
    if (top > $('.Contact-Us-form')[0].offsetTop - $('.Contact-Us-form')[0].offsetHeight) {
        $('.Contact-Us-form').css({
            "opacity": "1",
            "transition": "all 1s"
        })
        $('.footer').css({
            "opacity": "1",
            "transition": "all 1s"
        })
    }
}
$('#video-icon').click(function () {
    $('.zzc').css("display", "block")
})
$('#close-video').click(function () {
    $('.zzc').css("display", "none")
})