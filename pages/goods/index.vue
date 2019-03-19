<template>
    <view class="page goods">
        <goods-header></goods-header>
        <goods-banner></goods-banner>
        <goods-info></goods-info>
        <goods-count></goods-count>
        <goods-spec></goods-spec>
        <goods-instruction></goods-instruction>
        <goods-evaluate></goods-evaluate>
        <goods-detail></goods-detail>
        <goods-bar></goods-bar>
    </view>
</template>

<script>
    import header from './components/header'
    import banner from './components/banner'
    import info from './components/info'
    import count from './components/count'
    import spec from './components/spec'
    import instruction from './components/instruction'
    import evaluate from './components/evaluate'
    import detail from './components/detail'
    import bar from './components/bar'
    export default {
        components: {
            goodsHeader: header,
            goodsBanner: banner,
            goodsInfo: info,
            goodsCount: count,
            goodsSpec: spec,
            goodsInstruction: instruction,
            goodsEvaluate: evaluate,
            goodsDetail: detail,
            goodsBar: bar
        }
    }
</script>

<style lang="less">
    @import '../../config/css/index';
    /* #ifdef APP-PLUS */
    @import '../../platforms/app-plus/goods/index';
    /* #endif */
</style>
