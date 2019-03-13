export const token = {
    set(s) {
        uni.setStorageSync('token', s)
    },
    get() {
        return uni.getStorageSync('token')
    },
    clear() {
        uni.removeStorageSync('token')
    }
}
