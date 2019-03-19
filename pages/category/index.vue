<template>
    <view class="page category">
        <category-header></category-header>
        <category-left-side></category-left-side>
        <category-right-side></category-right-side>
    </view>
</template>

<script>
    import header from './components/header'
    import leftSide from './components/left-side'
    import rightSide from './components/right-side'
    export default {
        components: {
            categoryHeader: header,
            categoryLeftSide: leftSide,
            categoryRightSide:rightSide
        }
    }
</script>

<style lang="less">
    @import '../../config/css/index';
    /* #ifdef APP-PLUS */
    @import '../../platforms/app-plus/category/index';
    /* #endif */
</style>
