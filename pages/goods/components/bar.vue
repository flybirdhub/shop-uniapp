<template>
    <view class="goods-action border-1px-top">
        <view class="a-left">
            <view class="l-item">
                <text class="iconfont icon-kefu"></text>
                <text class="i-text">客服</text>
            </view>
            <view class="l-item">
                <text class="iconfont icon-shoucang1"></text>
                <text class="i-text">收藏</text>
            </view>
            <view class="l-item">
                <text class="iconfont icon-gouwuche1"></text>
                <text class="i-text">购物车</text>
            </view>
        </view>
        <view class="a-right">
            <view class="r-item r-item-buy">
                <text>立即购买</text>
            </view>
            <view class="r-item r-item-cart">
                <text>加入购物车</text>
            </view>
        </view>
    </view>
</template>

<style lang="less" scoped>
    .goods-action{
        position: fixed;
        bottom:0;
        left:0;
        display: flex;
        height: 115upx;
        width:100%;
        box-sizing: border-box;
        padding:0 28upx;
        background: white;
        .a-left{
            display: flex;
            justify-content: space-around;
            flex:1;
            .l-item{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color:#666;
            }
        }
        .a-right{
            display: flex;
            align-items: center;
            flex-grow: 0;
            .r-item{
                display: inline-block;
                width:222upx;
                height: 68upx;
                text-align: center;
                line-height: 68upx;
                border-radius: 34upx;
                color:white;
                &-buy{
                    background: #b60a0a;
                }
                &-cart{
                    background: #aa8a59;
                }
                &:nth-child(2){
                    margin-left: 10upx;
                }
            }
        }
    }
</style>
