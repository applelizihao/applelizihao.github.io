Vue.component('song-info', {
    data: function () {
        return {
            songname: '曾经的你',
        }
    },
    template: `
    <div class="song">
    <div class="song-header">
        <div class="container">
            <div class="row">
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <i class="glyphicon glyphicon-chevron-down"></i>
                </div>
                <div class="song-header-center col-xs-6 col-sm-6 col-md-6 col-lg-6">
                   <p class="songname">{{songname}}</p> 
                   <p class="songauthor">— 许巍 —</p>
                </div>
                <div class="song-header-right col-xs-3 col-sm-3 col-md-3 col-lg-3">
                   <i class="glyphicon glyphicon-option-vertical"></i>
                </div>
            </div>
        </div>
    </div>
    <div class="song-content">
        <div class="container">
       <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2745835081,2501220190&fm=85&app=57&f=JPEG?w=121&h=75&s=38B87E9756684F0F7D9A786103007078" alt="">
        </div>
    </div>
    <div class="song-footer">
        <div class="container">
            <div class="row">
                <div class="console col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <audio src="" controls></audio>
                </div>
            </div>
        </div>
    </div>
</div>
    `
})


new Vue({
    el: '#app',

})