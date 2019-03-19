<template>
    <view class="index-service">
        <view class="s-item">
            <text class="eosfont">&#xe607;</text>
            <text class="i-text">网易自营品牌</text>
        </view>
        <view class="s-item">
            <text class="eosfont">&#xe61e;</text>
            <text class="i-text">30天无忧退换</text>
        </view>
        <view class="s-item">
            <text class="eosfont">&#xe60a;</text>
            <text class="i-text">48小时快速退款</text>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {
    }
</script>

<style lang="less">
    @import '../../../config/css/var.less';
    .index-service{
        display: flex;
        align-items: center;
        justify-content: space-around;
        height:72upx;
        padding:0 30upx;
        background: white;
        .s-item{
            display: flex;
            align-items: center;
            color:@primary-color;
            .eosfont{
                padding-right: 10upx;
            }
        }
    }
</style>