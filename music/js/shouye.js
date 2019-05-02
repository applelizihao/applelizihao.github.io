Vue.component('player-song', {
    props: ['playsong'],
    template: `
    <div>
    <div class="marginplayer"></div>
    <div class="player">
        <div class="container-fluid">
            <div class="row">
                <div class="song-img col-xs-2 col-sm-1 col-md-1 col-lg-1">
                    <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2034093601,2591364475&fm=58&bpow=400&bpoh=583"
                        alt="">
                </div>
                <div class="song-info col-xs-5 col-sm-9 col-md-9 col-lg-9">
                    <p class="song-name">每一句都很甜</p>
                    <p class="song-author">新乐城府</p>
                </div>
                <div class="console col-xs-5 col-sm-2 col-md-2 col-lg-2">
                    <i class="play glyphicon glyphicon-play"> </i>
                    <i class="song-list glyphicon glyphicon-signal"></i>
                </div>
            </div>
        </div>
        <audio autoplay :src="playsong"></audio>
    </div>
    </div>
    `
})

//获取排行榜音乐组件
Vue.component('header-song', {
    props: ['id'],
    data: function () {
        return {
            imgsrc: '',
            listName: '',
            updateTime: '',
            songList: ''
        }
    },
    created() {
        fetch(`https://music.niubishanshan.top/api/v2/music/songList/${this.id}`)
            .then(response => response.json())
            .then(result => {
                this.songList = result.data.songList
                this.imgsrc = result.data.topInfo.picAlbum
                this.listName = result.data.topInfo.listName
                this.updateTime = result.data.updateTime
                console.log(this.songList)
            })
    },
    template: `
    <div class="header-song">
    <div class="header-img">
        <div class="bg" v-bind:style="{backgroundImage: 'url(' + imgsrc + ')' }">
            <div class="Cover-up">
                <h3>{{listName.split('·')[0]}}</h3>
                <h1>{{listName.split('·')[1]}}</h1>
                <p>{{updateTime}}<span>更新</span><i class="glyphicon glyphicon-info-sign"></i></p>
            </div>
        </div>

    </div>
    <div class="container-fluid">
        <div class="row">
            <li v-on:click="$emit('get',item.songMid)" v-for="(item,index) in songList">
            <div class="song-left col-xs-2 col-sm-2 col-md-2 col-lg-2">
               <h5>{{index+1}}</h5>
            </div>
            <div class="song-right col-xs-10 col-sm-10 col-md-10 col-lg-10">
               <span>{{item.songName}}</span>
                <span>{{item.singer[0].singerName}}</span>
            </div>
            </li>
        </div>
    </div>
</div>
    `
})

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
            top: null //获取排行榜
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
                this.top = result.data
                console.log(this.top)
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
        <li v-on:click="$emit('getfn',item.id)" class="col-xs-12 col-sm-6 col-md-6 col-lg-6" v-for="(item,index) in top">
        <h3>{{item.title}}</h3>
            <div class="row">
            <span  class="col-xs-12 col-sm-12 col-md-12 col-lg-12" v-for="(item,index) in item.songList">{{item.songName}}
            <p class="singername">{{item.singerName}}</p>
            </span>
            </div>
            </li>
         </div>
        </div>
    </div>
</div>
`,
})


Vue.component('find', {
    template: '<li>find</li>'
})
var app = new Vue({
    el: '#app',
    data: {
        playsong: {
            src: ""
        },
        songtop: {
            id: '4' //默认值空
        },
        headerlist: [{
            text: '我的'
        }, {
            text: '音乐馆'
        }, {
            text: '发现'
        }],
        activeheaderlist: 'music',
        tabconsole: {
            component: false, //默认值true
            header: false, //默认值true
            headersong: true //默认值false
        }
    },
    
    methods: {
        //排行榜点击歌曲播放
        clickchosesongli: function (index) {
            //赋值传过来的index
            console.log(index)
            fetch(`https://music.niubishanshan.top/api/v2/music/songUrllist/${index}`)
                .then(response => response.json())
                .then(result => {
                    this.playsong.src = result.data[0]
                })
            // https://music.niubishanshan.top/api/v2/music/songUrllist/
        },

        //进入排行榜页面，并隐藏其他页面
        clicksongfn: function (index) {
            this.songtop.id = index
            this.tabconsole.component = false
            this.tabconsole.header = false
            this.tabconsole.headersong = true
        },

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