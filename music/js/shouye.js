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
            slider: null
        }
    },
    created() {
        fetch('https://music.niubishanshan.top/api/v2/music/recommend')
            .then(response => response.json())
            .then(result => {
                this.slider = result.data.slider
                console.log(this.slider)
            })
    },
    template: `<div id="carousel-id" class="carousel slide" data-ride="carousel">
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
</div>`
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