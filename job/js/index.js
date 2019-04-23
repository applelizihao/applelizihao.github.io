//动画初始化
$('.about-title').fadeOut(0);
$('.imgGroups').css("transform","translateX(-500px)")
$('.Ex-text').css("transform","translateX(500px)")

window.onscroll = function () {
var top = document.documentElement.scrollTop
   
    if (top > $('.about-title')[0].offsetTop - $('.about-title')[0].offsetHeight) {
       $('.about-title').fadeIn(1000)
       $('.imgGroups').css({
           "transform":"translateX(0)",
           "transition":"all 1s"
        })
        $('.Ex-text').css({
            "transform":"translateX(0)",
            "transition":"all 1s"
         })
    }
    if (top > $('.Practice-Areas-header')[0].offsetTop - $('.Practice-Areas-header')[0].offsetHeight) {
        
    } 
}
$('#video-icon').click(function () {
    $('.zzc').css("display", "block")
})
$('#close-video').click(function () {
    $('.zzc').css("display", "none")
})