<template>
    <div class="goods-action border-1px-top">
        <div class="action-left">
            <div class="left-item">
                <i class="iconfont icon-kefu"></i>
                <span>客服</span>
            </div>
            <div class="left-item">
                <i class="iconfont icon-shoucang1"></i>
                <span>收藏</span>
            </div>
            <div class="left-item">
                <i class="iconfont icon-gouwuche1"></i>
                <span>购物车</span>
            </div>
        </div>
        <div class="action-right">
            <div class="right-item right-item-buy">
                <span>立即购买</span>
            </div>
            <div class="right-item right-item-cart">
                <span>加入购物车</span>
            </div>
        </div>
    </div>
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
        .action-left{
            display: flex;
            justify-content: space-around;
            flex:1;
            .left-item{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color:#666;
            }
        }
        .action-right{
            display: flex;
            align-items: center;
            flex-grow: 0;
            .right-item{
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
