<template>
    <view class="center-order">
        <view class="o-header">
            <view class="h-left">
                <text>我的订单</text>
            </view>
            <view class="h-right" @click="nav('/pages/order/index')">
                <text>全部订单</text>
                <text class="eosfont">&#xe733;</text>
            </view>
        </view>
        <view class="o-content border-1px-top">
            <view class="c-item">
                <text class="eosfont">&#xe604;</text>
                <text class="i-text">待付款</text>
            </view>
            <view class="c-item">
                <text class="eosfont">&#xe623;</text>
                <text class="i-text">待收货</text>
            </view>
            <view class="c-item">
                <text class="eosfont">&#xe608;</text>
                <text class="i-text">待评价</text>
            </view>
            <view class="c-item">
                <text class="eosfont">&#xe609;</text>
                <text class="i-text">退款/售后</text>
            </view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

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
                .eosfont{
                    font-size: 60upx;
                    color:#b4946d;
                }
                .i-text{
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
