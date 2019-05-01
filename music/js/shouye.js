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
Vue.component('music', {
    template: '<li>music</li>'
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