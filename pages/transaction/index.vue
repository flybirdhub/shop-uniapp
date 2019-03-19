<template>
    <view class="page transaction">
        <transaction-result></transaction-result>
        <transaction-info></transaction-info>
        <transaction-bar @do-check="doCheck"></transaction-bar>
    </view>
</template>

<script>
    import result from './components/result'
    import info from './components/info'
    import bar from './components/bar'
    export default {
        components: {
            transactionResult: result,
            transactionInfo: info,
            transactionBar: bar
        },
        methods: {
            doCheck(){
                this.rep('/pages/order/index')
            }
        }
    }
</script>

<style lang="less">
    @import '../../config/css/index';
</style>