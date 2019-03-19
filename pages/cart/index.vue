<template>
    <view class="page cart">
        <cart-header></cart-header>
        <cart-goods></cart-goods>
        <cart-checkout @do-checkout="doCheckout"></cart-checkout>
    </view>
</template>

<script>
    import header from './components/header'
    import checkout from './components/checkout'
    import goods from './components/goods'
    export default {
       components: {
           cartHeader:header,
           cartCheckout:checkout,
           cartGoods:goods
       },
        methods: {
            doCheckout(){
                this.nav('/pages/checkout/index')
            }
        }
    }
</script>

<style lang="less">
    @import '../../config/css/index';
    /* #ifdef APP-PLUS */
    @import '../../platforms/app-plus/cart/index';
    /* #endif */
    .cart{
        min-height: calc(100vh - 50px);
        background: @bg-color;
    }
</style>
