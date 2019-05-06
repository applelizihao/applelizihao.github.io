//动画初始化
$('.about-title').fadeOut(0);
$('.Practice-Areas-header').css("opacity", "0")
$('.Our-Team-header').css("opacity", "0")
$('.Our-Team-header').css("opacity", "0")
$('.Contact-Us-form').css("opacity", "0")
$('.footer').css("opacity", "0")
$('.dot').css({
    "opacity": "0",
    'transition': 'all 0',
})
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
    if (top > 0) {
        $('.header').css({
            "background": "white",
            "box-shadow": "0px 1px 3px 0px rgba(0, 0, 0, 0.3)"
        })
        $('.navbar-brand').css({
            "color": "black"
        })
        $('.navbar-nav a').css({
            "color": "rgba(0, 0, 0, 0.5)"
        })
        $('.navbar-nav a.active').css({
            "color": "#7ED321"
        })
        $('.dot').css({
            "opacity": "1",
            'transition': 'all .3s',
            "display": "block"
        })
    } else {
        $('.dot').css({
            "opacity": "0",
            'transition': 'all .3s',
        })
        setTimeout(function () {
            $('.dot').css("display", 'none')
        }, 300);
        $('.header').css({
            "background": "none",
            "box-shadow": "none"

        })
        $('.navbar-nav a.active').css({
            "color": "white"
        })
    }
    if (top > $('.person')[0].offsetTop - $('.person')[0].offsetHeight-300) {
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
    if (top > $('.Our-Team-header')[0].offsetTop - $('.Our-Team-header')[0].offsetHeight - 500) {
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


//===========================================================================//
//点击事件
$('#video-icon').click(function () {
    $('video')[0].play()
    $('.zzc').css("display", "block")
})
$('#close-video').click(function () {
    $('.zzc').css("display", "none")
    $('video')[0].pause()
})


$('.dot').click(function () {
    $('html,body').animate({
        "scrollTop": "0"
    }, 1000)
})


$('.navbar-nav li a').click(function () {
    $('.navbar-nav li a').removeClass('active');
    $(this).addClass('active');
})
//滚动事件
$('#ABOUT-A').click(function () {
    $('html,body').animate({
        "scrollTop": $(".text")[0].offsetHeight - 20
    }, 1000)
})
$('#PRACTICE-AREAS-A').click(function () {
    $('html,body').animate({
        "scrollTop": $(".text")[0].offsetHeight + $("#ABOUT")[0].offsetHeight + $("#PRACTICE-AREAS-A")[0].offsetHeight - 80
    }, 1000)
})
$("#Home-A").click(function () {
    $('html,body').animate({
        "scrollTop": "0"
    }, 1000)
})
$('#OUR-TEANM-A').click(function () {
    $('html,body').animate({
        "scrollTop": $(".text")[0].offsetHeight + $("#ABOUT")[0].offsetHeight + $("#PRACTICE-AREAS-A")[0].offsetHeight + $("#OUR-TEANM")[0].offsetHeight - 650
    }, 1000)
})
$('#CONTACT-A').click(function () {
    $('html,body').animate({
        "scrollTop": $(".text")[0].offsetHeight + $("#ABOUT")[0].offsetHeight + $("#PRACTICE-AREAS-A")[0].offsetHeight + $("#OUR-TEANM")[0].offsetHeight + $("#CONTACT")[0].offsetHeight + 100
    }, 1000)
})


$('#Send').click(function () { 
    var aa=document.createElement('a');
    aa.href="mailto:info@example.com?subject="+$('#t1').val()+"&cc="+$('#t2').val()+"&body="+ $('#tx').val() +""    
    document.body.append(aa)
    aa.click();
})
// mailto:to?subject=subject&cc=abc@qq.com&body=body