<template>
    <view class="checkout-pay-choice">
        <view class="c-item">
            <view class="i-left">
                <text class="iconfont icon-weixin1" style="color: #00c800;"></text>
                <text class="l-name">微信支付</text>
                <text class="l-tag">推荐</text>
            </view>
            <view class="i-right">
                <text class="iconfont icon-gengduo" style="color:#cd363d;"></text>
            </view>
        </view>
        <view class="c-item border-1px-top">
            <view class="i-left">
                <text class="iconfont icon-zhifubao" style="color: #00aaef;"></text>
                <text class="l-name">支付宝支付</text>
            </view>
            <view class="i-right">
                <text class="iconfont icon-gengduo"></text>
            </view>
        </view>
    </view>
</template>

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
                .iconfont{
                    font-size: 50upx;
                }
                .l-name{
                    display: inline-block;
                    padding:0 20upx;
                    font-size: 28upx;
                    font-weight: 600;
                    color:#333;
                }
                .l-tag{
                    display: inline-block;
                    height: 33upx;
                    line-height: 33upx;
                    padding:0 10upx;
                    border-radius: 5upx;
                    font-size: 28upx;
                    background: #cd363d;
                    color:white;
                }
            }
        }
    }
</style>
