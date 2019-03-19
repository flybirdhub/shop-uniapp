<template>
    <view class="checkout-pay-choice">
        <view class="c-item">
            <view class="i-left">
                <text class="eosfont" style="color: #00c800;">&#xe679;</text>
                <text class="l-name">微信支付</text>
                <text class="l-tag">推荐</text>
            </view>
            <view class="i-right">
                <text class="eosfont" style="color:#cd363d;">&#xe733;</text>
            </view>
        </view>
        <view class="c-item border-1px-top">
            <view class="i-left">
                <text class="eosfont" style="color: #00aaef;">&#xe64a;</text>
                <text class="l-name">支付宝支付</text>
            </view>
            <view class="i-right">
                <text class="eosfont">&#xe733;</text>
            </view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="less" scoped>
    .checkout-pay-choice{
        padding:0 28upx;
        margin-bottom: 10upx;
        background: white;
        .c-item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 88upx;
            padding-left:10upx;
            .i-left{
                display: flex;
                align-items: center;
                .eosfont{
                    font-size: 50upx;
                }
                .l-name{
                    display: inline-block;
                    padding:0 20upx;
                    font-weight: 600;
                    color:#333;
                }
                .l-tag{
                    display: inline-block;
                    height: 33upx;
                    line-height: 33upx;
                    padding:0 10upx;
                    border-radius: 5upx;
                    background: #cd363d;
                    color:white;
                }
            }
        }
    }
</style>
