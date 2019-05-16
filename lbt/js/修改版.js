var stage = document.getElementById('stage')
var LeftBtn = document.getElementById('LeftBtn')
var rightBtn = document.getElementById('rightBtn');
var box = document.querySelector('#box')
var report=true
function rightFn() {
    console.log(lis)
}

rightBtn.onclick = function () {
    var lis = document.querySelectorAll('#box li')
    lis[0].style.marginLeft='-1000px';
    lis[0].addEventListener('transitionend',function(){
        lis[0].style.marginLeft='0px'
        box.appendChild(lis[0])
    })
}
LeftBtn.onclick = function () {
    if(report==true){
    report=false
    var lis=document.querySelectorAll('#box li');
    lis[lis.length-1].style.marginLeft='-1000px';

    box.insertBefore(lis[lis.length-1],lis[0]);
    setTimeout(function(){
        lis[lis.length-1].style.marginLeft='0'
        lis[lis.length-1].addEventListener('transitionend',function(){
            report=true
        })
    },10)
}
}