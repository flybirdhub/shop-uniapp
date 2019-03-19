<template>
    <view class="page search">
        <search-header
                :step="currentStep"
                @keyword-change="keywordChange"
                @do-search="doSearch"></search-header>
        <search-first :step="currentStep"></search-first>
        <search-second :step="currentStep"></search-second>
        <search-third :step="currentStep"></search-third>
    </view>
</template>

<script>
    import header from './components/header'
    import first from './components/first'
    import second from './components/second'
    import third from './components/third'

    export default {
        data() {
            return {
                currentStep: 1,
            }
        },
        components: {
            searchHeader: header,
            searchFirst: first,
            searchSecond: second,
            searchThird: third
        },
        methods: {
            keywordChange() {
                this.currentStep = 2
            },
            doSearch() {
                this.currentStep = 3
            }
        }
    }
</script>

<style lang="less">
    @import '../../config/css/index';
    /* #ifdef APP-PLUS */
    @import '../../platforms/app-plus/search/index';
    /* #endif */
</style>
