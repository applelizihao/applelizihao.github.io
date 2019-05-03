Vue.component('search-group', {
    data: function () {
        return {
            searchmessage: '',
            st1: '',
            songList: '',
        }
    },
    template: `
    <div>
    <div class="header-search">
        <div class="content">
            <div>
                <i class="glyphicon glyphicon-menu-left"></i>
            </div>
            <div>
                <input v-model.trim="searchmessage" v-on:input="searchfn" placeholder="搜索音乐、视频、歌单、歌手、用户"
                type="search" name="" id="input" class="form-control" value="" required="required" title="">
            </div>
            <div>搜索</div>
        </div>
    </div>
    <div v-show="searchmessage!=''" class="search-content">
        <ul class="list-group">
            <li 
            v-on:click="chosefn(item.songMid)"
            class="list-group-item" v-for="(item, index) in songList" 
            v-if="item.songName.indexOf('&')===-1 && item.singer[0].singerName.indexOf('&')===-1"
                :key="index">
                <div class="row">
                    <div class="search col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <span>{{item.songName}}</span>
                        <span>{{item.singer[0].singerName}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div></div>
    `,
    methods: {
        chosefn: function (songMid) {
            fetch(`https://music.niubishanshan.top/api/v2/music/songUrllist/${songMid}`)
                .then(response => response.json())
                .then(result => {
                    console.log(result.data[0])
                })
        },
        searchfn: function () {
            clearTimeout(this.st1)
            if (this.searchmessage === '') {
                return
            }
            this.st1 = setTimeout(() => {
                fetch(`https://music.niubishanshan.top/api/v2/music/search/${this.searchmessage}/1/10`)
                    .then(response => response.json())
                    .then(result => {
                        this.songList = result.data.songList
                    })
            }, 500);
        }
    },
})
