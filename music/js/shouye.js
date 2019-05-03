Vue.component('header-groups', {
    props:['tabconsole'],
    template:`
    <div v-if="tabconsole" class="header">
    <div class="container-fluid">
        <div class="row">
            <div class="left col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <i class="glyphicon glyphicon-th-list"></i>
            </div>
            <div class="center col-xs-8 col-sm-8 col-md-8 col-lg-8">
           <slot></slot>
            </div>
            <div class="right col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <i class="glyphicon glyphicon-plus-sign"></i>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <input id="search-input" type="search" class="form-control" placeholder="搜索">
            </div>
        </div>
    </div>
</div>
    `
})


Vue.component('player-song', {
    props: ['playsong', 'nowplayername', 'nowplayersongname', 'playeractive','singeravatarurl'],
    template: `
    <div>
    <div class="marginplayer"></div>
    <div class="player">
        <div class="container-fluid">
            <div class="row">
                <div class="song-img col-xs-2 col-sm-1 col-md-1 col-lg-1">
                    <img :src="singeravatarurl">
                </div>
                <div class="song-info col-xs-5 col-sm-9 col-md-9 col-lg-9">
                    <p class="song-name">{{nowplayersongname}}</p>
                    <p class="song-author">{{nowplayername}}</p>
                </div>
                <div class="console col-xs-5 col-sm-2 col-md-2 col-lg-2">
                    <i v-on:click="$emit('togglefn')" :class="[playeractive?'play glyphicon glyphicon-play':'play glyphicon glyphicon-pause']"></i>
                    <i class="glyphicon glyphicon-signal"></i>
                </div>
            </div>
        </div>
        <audio ref="adi" autoplay v-on:error="errorplay" :src="playsong"></audio>
    </div>
    </div>
    `,
    methods: {
        errorplay: function () {
            alert('因为版权问题或者其他因素，导致无法播放')
        }
    }
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
                // console.log(this.songList)
            })
    },
    template: `
    <div class="header-song">
    <div class="top-nav">
    <i v-on:click="$emit('getback')" class="glyphicon glyphicon-menu-left"></i>
    </div>
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
            <li v-on:click="$emit('get',item.songMid,item)" v-for="(item,index) in songList">
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
            src: null,
            nowplayername: '',
            nowplayersongname: '',
            playeractive: true,
            albumimgUrl:'',
            singeravatarurl:''
        },
        songtop: {
            id: '' //默认值空
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
            component: true, //默认值true
            header: true, //默认值true
            headersong: false //默认值false
        }
    },
    watch: {
        'playsong.playeractive':function () { 
          this.playsong.playeractive?this.$refs.shit.$refs.adi.pause():this.$refs.shit.$refs.adi.play()
        }
    },
    methods: {
        toggleactive:function () { 
            this.playsong.playeractive=!this.playsong.playeractive
        },
        goback: function () {
            this.tabconsole.component = true
            this.tabconsole.header = true
            this.tabconsole.headersong = false
        },
        //排行榜点击歌曲播放
        clickchosesongli: function (index, item) {
            //赋值传过来的index
            // console.log(index)
            // console.log(item)
            this.playsong.nowplayersongname = item.songName
            this.playsong.nowplayername = item.singer[0].singerName
            fetch(`https://music.niubishanshan.top/api/v2/music/songUrllist/${index}`)
                .then(response => response.json())
                .then(result => {
                    fetch(`https://music.niubishanshan.top/api/v2/music/albumImg/${item.albumMid}/${item.singer[0].singerMid}`)
                    .then(response=>response.json())
                    .then(result=>{
                      
                        this.playsong.albumImgUrl=result.data.albumImgUrl
                        this.playsong.singeravatarurl=result.data.singerAvatarUrl
                        console.log(result.data.singerAvatarUrl)
                    })
                    this.playsong.src = result.data[0];
                })
                .then(() => {
                    return this.$refs.shit.$refs.adi.play()
                })
                .then(() => {
                    this.playsong.playeractive = false
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