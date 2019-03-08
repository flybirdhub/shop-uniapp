<template>
    <view class="index">
        <index-header></index-header>
        <index-banner></index-banner>
    </view>
</template>

<script>
    import header from './components/header'
    import banner from './components/banner'
    export default {
        components: {
            indexHeader: header,
            indexBanner: banner
        }
    }
</script>
