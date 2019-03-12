<template>
    <view class="center-order">
        <view class="o-header">
            <view class="h-left">
                <text>我的订单</text>
            </view>
            <view class="h-right">
                <text>全部订单</text>
                <text class="iconfont icon-gengduo"></text>
            </view>
        </view>
        <view class="o-content border-1px-top">
            <view class="c-item">
                <text class="iconfont icon-daifukuan"></text>
                <text>待付款</text>
            </view>
            <view class="c-item">
                <text class="iconfont icon-daishouhuo"></text>
                <text>待收货</text>
            </view>
            <view class="c-item">
                <text class="iconfont icon-daipingjia"></text>
                <text>待评价</text>
            </view>
            <view class="c-item">
                <text class="iconfont icon-tuihuo"></text>
                <text>退款/售后</text>
            </view>
        </view>
    </view>
</template>

<style lang="less" scoped>
    .center-order{
        padding:0 28upx;
        background: white;
        .o-header{
            position: relative;
            height: 104upx;
            .h-left {
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                display: flex;
                align-items: center;
                text{
                    font-size: 28upx;
                    font-weight: 600;
                    color:#333;
                }
            }
            .h-right {
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
                display: flex;
                align-items: center;
                color:#666;
                text{
                    font-size: 28upx;
                }
            }
        }
        .o-content{
            display: flex;
            .c-item{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                flex:1;
                height: 166upx;
                .iconfont{
                    font-size: 60upx;
                    color:#b4946d;
                }
                text{
                    &:last-child{
                        padding-top:10upx;
                        color:#666;
                    }
                }
                &:not(:first-child){
                    margin-left:50upx;
                }
            }
        }
    }
</style>
