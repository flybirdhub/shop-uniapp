<template>
    <view class="goods-header">
        <view class="h-left">
            <text class="eosfont" @click="back">&#xe61f;</text>
        </view>
        <view class="h-middle">
            <view class="m-item m-item-active">
                <text>商品</text>
            </view>
            <view class="m-item">
                <text>详情</text>
            </view>
            <view class="m-item">
                <text>评价</text>
            </view>
        </view>
        <view class="h-right">
            <text class="eosfont">&#xe65f;</text>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {
    }
</script>

<style lang="less" scoped>
    .goods-header{
        position: fixed;
        top:0;
        left:0;
        width:100%;
        display: flex;
        justify-content: center;
        height: 88upx;
        z-index: 10;
        .h-left {
            position: absolute;
            top: 50%;
            left: 27upx;
            transform: translateY(-50%);
            text{
                display: inline-block;
                width:60upx;
                height: 60upx;
                text-align: center;
                line-height: 60upx;
                border-radius: 30upx;
                background: RGBA(0, 0, 0, .1);
                color:white;
            }
        }
        .h-middle{
            display: flex;
            .m-item{
                position: relative;
                display: flex;
                align-items: center;
                color:#666;
                &:not(:first-child){
                    margin-left: 34upx;
                }
                &-active{
                    text{
                        color:#aa8a59;
                    }
                    &::after {
                        position: absolute;
                        content: '';
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 0;
                        border-bottom: 3upx solid #aa8a59;
                    }
                }
            }
        }
        .h-right {
            position: absolute;
            top: 50%;
            right: 27upx;
            transform: translateY(-50%);
            text{
                display: inline-block;
                width:60upx;
                height: 60upx;
                text-align: center;
                line-height: 60upx;
                border-radius: 30px;
                background: RGBA(0, 0, 0, .1);
                color:white;
                &:first-child{
                    margin-right:30upx;
                }
            }
        }
    }
</style>
