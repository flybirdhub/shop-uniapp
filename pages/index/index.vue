<template>
    <view class="index">
        <index-header></index-header>
        <index-banner></index-banner>
        <index-service></index-service>
        <index-category></index-category>
        <index-direct-supply></index-direct-supply>
        <index-flash></index-flash>
        <index-newest></index-newest>
        <page-footer></page-footer>
    </view>
</template>

<script>
    import header from './components/header'
    import banner from './components/banner'
    import service from './components/service'
    import category from './components/category'
    import directSupply from './components/direct-supply'
    import flash from './components/flash'
    import newest from './components/newest'
    import pageFooter from '@/components/page-footer'
    export default {
        components: {
            indexHeader: header,
            indexBanner: banner,
            indexService: service,
            indexCategory:category,
            indexDirectSupply:directSupply,
            indexFlash:flash,
            indexNewest:newest,
            pageFooter
        }
    }
</script>

<style lang="less">
    @import '../../config/css/var';
    .index{
        background: @bg-color;
    }
</style>
