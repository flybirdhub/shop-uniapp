<template>
    <view class="cart">
        <cart-header></cart-header>
        <cart-checkout></cart-checkout>
        <cart-goods></cart-goods>
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
       }
    }
</script>

<style lang="less">
    @import '../../config/css/var';
    .cart{
        min-height: calc(100vh - 50px);
        background: @bg-color;
    }
</style>
