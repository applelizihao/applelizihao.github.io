Vue.component('header-list', {
    methods: {
        chosepush: function () {
            this.$emit('getfn')
        }
    },
    props: ["item", 'index'],
    template: `<span v-on:click="chosepush">{{item}}</span>`
})
Vue.component('my', {
    template: '<li>my</li>'
})

//音乐组建
Vue.component('music', {
    data: function () {
        return {
            slider: null, //获取轮播图图片
            top: [] //获取排行榜
        }
    },
    created() {
        fetch('https://music.niubishanshan.top/api/v2/music/recommend')
            .then(response => response.json())
            .then(result => {
                this.slider = result.data.slider
                // console.log(this.slider)
            })
        fetch('https://music.niubishanshan.top/api/v2/music/toplist')
            .then(response => response.json())
            .then(result => {
                result.data.forEach(element => {
                    fetch(`https://music.niubishanshan.top/api/v2/music/songList/${element.id}`)
                    .then(response=>response.json())
                    .then(result=>{
                     this.top.push(result.data)
                    })
                  
                })
            })
    },
    template: `
    <div>
    <div id="carousel-id" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li :class="[index===0?'active':'']" data-target="#carousel-id" :data-slide-to="index" v-for="(item,index) in slider"></li>    
    </ol>
    <div class="carousel-inner">
        <div :class="[index===0?'active':'']" class="item" v-for="(item,index) in slider">
            <img :data-src="item" :src="item">
            <div class="container">
                <div class="carousel-caption">
                </div>
            </div>
        </div>
    </div>
    <a class="left carousel-control" href="#carousel-id" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>
    <a class="right carousel-control" href="#carousel-id" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
</div>
    <div class="content">
    <div class="container-fluid">
    <div class="row">
        <li class="col-xs-12 col-sm-6 col-md-6 col-lg-6" v-for="(item,index) in top">
        <h3>{{item.topInfo.listName}}</h3>
            <div class="row">
            <span :songid="item." v-on:click="clicksongfn" class="col-xs-12 col-sm-12 col-md-12 col-lg-12" v-for="(item,index) in item.songList">{{item.songName}}
            <p class="singername">{{item.singerName}}</p>
            </span>
            </div>
            </li>
   </div>
        </div>
    </div>
</div>
`,

 
    methods: {
        clicksongfn: function () {
            alert('xxx')
        }
    },
})
Vue.component('find', {
    template: '<li>find</li>'
})
var app = new Vue({
    el: '#app',
    data: {
        headerlist: [{
            text: '我的'
        }, {
            text: '音乐馆'
        }, {
            text: '发现'
        }],
        activeheaderlist: 'music'
    },
    methods: {
        //activeheaderlist选择
        chosefn: function (index) {
            switch (index) {
                case 0:
                    this.activeheaderlist = "my"
                    break;
                case 1:
                    this.activeheaderlist = "music"
                    break;
                case 2:
                    this.activeheaderlist = "find"
                    break;
            }
        }
    },
})