<template>
    <view class="page order">
        <order-type></order-type>
        <order-receive></order-receive>
    </view>
</template>

<script>
    import type from './components/type'
    import receive from './components/receive'
    export default {
        components: {
            orderType: type,
            orderReceive: receive
        }
    }
</script>

<style lang="less">
    @import '../../config/css/index';
    /* #ifdef APP-PLUS */
    @import '../../platforms/app-plus/order/index';
    /* #endif */
</style>