import Vue from 'vue'

Vue.mixin({
    methods: {
        nav (s, t = 1) {
            uni.navigateTo({
                url: s
            })
        },
        rep (s) {
            uni.redirectTo({
                url: s
            })
        },
        back () {
            uni.navigateBack({
                delta: 1
            })
        }
    }
})
