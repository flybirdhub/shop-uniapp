<template>
    <view class="page checkout">
        <checkout-warm></checkout-warm>
        <checkout-address></checkout-address>
        <checkout-pay-choice></checkout-pay-choice>
        <checkout-goods></checkout-goods>
        <checkout-bar @do-pay="doPay"></checkout-bar>
    </view>
</template>

<script>
    import warm from './components/warm'
    import address from './components/address'
    import payChoice from './components/pay-choice'
    import goods from './components/goods'
    import bar from './components/bar'
    export default {
        components: {
            checkoutWarm: warm,
            checkoutAddress: address,
            checkoutPayChoice: payChoice,
            checkoutGoods: goods,
            checkoutBar: bar
        },
        methods: {
            doPay(){
                this.rep('/pages/transaction/index')
            }
        }
    }
</script>

<style lang="less">
    @import '../../config/css/index';
    .checkout{
        min-height: calc(100vh - 44px);
        background: @bg-color;
    }
</style>
