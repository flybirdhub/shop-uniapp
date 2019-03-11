<template>
    <view class="index-service">
        <view class="s-item">
            <text class="iconfont icon-dianpu"></text>
            <text>网易自营品牌</text>
        </view>
        <view class="s-item">
            <text class="iconfont icon-anquan"></text>
            <text>30天无忧退换</text>
        </view>
        <view class="s-item">
            <text class="iconfont icon-qian"></text>
            <text>48小时快速退款</text>
        </view>
    </view>
</template>

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
            .iconfont{
                padding-right: 10upx;
            }
        }
    }
</style>