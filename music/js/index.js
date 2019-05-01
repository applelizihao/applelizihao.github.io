var app = new Vue({
    el: '#app',
    data: {
        search: '林宥嘉',
        nowsongname: null,
        nowsongautor: null,
        songList: null,
        playsrc: null,
        autoplaybe: true,
        audio: {
            max: 300,
            currentTime: 0
        }
    },
    methods: {
        cardfn: function (event) {
            let index = event.target.dataset.index
            // console.log(this.nowsongname = this.songList[index].songName)
            // console.log(this.nowsongautor = this.songList[index].singer[0].singerName)
            // console.log(event.target)
            let songMid = songList[index].songMid
            fetch(`https://music.niubishanshan.top/api/v2/music/songUrllist/${songMid}`)
                .then(response => {
                    // console.log(response)
                    return response.json()
                })
                .then(result => {
                    this.playsrc = result.data
                })
                .then(() => {
                    this.autoplaybe = false;
                    return this.$refs.adi.play();
                }).then(() => {
                    console.log(this.$refs.adi.duration)
                    this.audio.max = this.$refs.adi.duration
                })
        },
        errorfn: function () {
            alert('播放错误，可能因为无版权或者其他的原因')
        },
        canplay: function (event) {
            this.audio.currentTime = this.$refs.adi.currentTime
        },
        playfn: function () {

            this.autoplaybe = !this.autoplaybe
            if (this.autoplaybe === true) {
                this.$refs.adi.pause()
            } else {
                this.$refs.adi.play()
            }
        },
        currentTimefn: function () {
            this.autoplaybe = false
            this.$refs.adi.play()
            this.$refs.adi.currentTime = this.audio.currentTime
        }

    },
    created() {
        fetch(`https://music.niubishanshan.top/api/v2/music/search/${this.search}/1/10`)
            .then(response => response.json())
            .then(result => {
                songList = result.data.songList
                this.songList = songList
                console.log(this.songList)
            })
    },
    watch: {
        search: function () {
            if (this.search === '') {
                return
            }
            fetch(`https://music.niubishanshan.top/api/v2/music/search/${this.search}/1/10`)
                .then(response => response.json())
                .then(result => {
                    songList = result.data.songList
                    this.songList = songList
                    console.log(this.songList)
                })
        }
    },
})