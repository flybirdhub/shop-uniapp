<template>
    <view class="checkout-address">
        <view class="a-left">
            <view class="l-top">
                <text class="t-name">邓海标</text>
                <text class="t-phone">136******30</text>
            </view>
            <view class="l-bottom">
                <text>中国 广东 佛山 顺德 北滘镇莘村中学（528300）</text>
            </view>
        </view>
        <view class="a-right">
            <text class="eosfont">&#xe733;</text>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {
    }
</script>

<style lang="less" scoped>
    .checkout-address{
        display: flex;
        height: 214upx;
        padding:90upx 28upx 0 28upx;
        margin-bottom: 10upx;
        background: white;
        .a-left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex:1;
            .l-top{
                display: flex;
                justify-content: space-between;
                font-weight: 600;
                color:#333;
            }
            .l-bottom{
                padding-top:20upx;
                color:#666;
            }
        }
        .a-right{
            display: flex;
            align-items: center;
            flex-grow: 0;
            padding-left:20upx;
        }
    }
</style>
