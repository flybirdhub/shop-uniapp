import Vue from 'vue'

Vue.mixin({
    methods: {
        nav (s) {
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
