<template>
    <view class="page center">
        <center-header></center-header>
        <center-account @to-login="nav('/pages/login/index')"></center-account>
        <center-order></center-order>
        <center-service></center-service>
    </view>
</template>

<script>
    import header from './components/header'
    import account from './components/account'
    import order from './components/order'
    import service from './components/service'
    export default {
        components: {
            centerHeader:header,
            centerAccount:account,
            centerOrder:order,
            centerService:service
        }
    }
</script>

<style lang="less">
    @import '../../config/css/index';
    /* #ifdef APP-PLUS */
    @import '../../platforms/app-plus/center/index';
    /* #endif */
</style>

