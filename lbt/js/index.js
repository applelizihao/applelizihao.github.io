var lbt = document.getElementById('lbt');
var leftBtn = document.getElementById('leftBtn')
var rightBtn = document.getElementById('rightBtn')
var stage = document.getElementById('stage')
var sum = -1000;
var autoTime;
lbt.style.left = sum + 'px'
var report = true
autoFn()

function autoFn() {
    autoTime = setInterval(function () {
        lbt.style.transition = 'all 1s';
        sum -= 1000;
        lbt.style.left = sum + 'px'
        if (sum == -5000) {
            setTimeout(function () {
                lbt.style.transition = 'all 0s'
                lbt.style.left = '-1000px';
                sum = -1000
            }, 1000)
        }
    }, 2000)

}

stage.onmousemove = function () {
    clearInterval(autoTime);
}
stage.onmouseout = function () {
    setInterval(autoFn())
}

rightBtn.onclick = function () {
    if (report == true) {
        lbt.style.transition = 'all 1s'
        report = false;
        sum -= 1000
        lbt.style.left = sum + 'px'
        setTimeout(function () {
            if (sum == -5000) {
                lbt.style.transition = 'all 0s'
                lbt.style.left = '-1000px';
                sum = -1000
            }
            report = true
        }, 1000)

    }
}
leftBtn.onclick = function () {
    if (report == true) {
        lbt.style.transition = 'all 1s'
        report = false;
        sum += 1000
        lbt.style.left = sum + 'px'
        setTimeout(function () {
            if (sum == 0) {
                lbt.style.transition = 'all 0s'
                lbt.style.left = '-4000px';
                sum = -4000
            }
            report = true
        }, 1000)

    }
}