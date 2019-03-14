<template>
    <div class="checkout-goods-details">
        <div class="details-header">
            <h4>商品详情</h4>
        </div>
        <div class="details-content">
            <div class="content-goods border-1px-top border-1px-bottom">
                <div class="checkout-goods">
                    <div class="goods-pic">
                        <img class="ignore" src="https://static.home.mi.com/app/shop/img?id=shop_f4e9e198a07c9888cd3a4295a0f54b0b.jpeg&w=240&h=240" alt="">
                    </div>
                    <div class="goods-info">
                        <div class="info-name">
                            <h3>米家机器人扫地边刷</h3>
                        </div>
                    </div>
                    <div class="goods-price-num">
                        <span class="single-price">￥39</span>
                        <span class="num">x1</span>
                    </div>
                </div>
            </div>
            <div class="content-cells">
                <div class="checkout-cell">
                    <div class="cell-left">
                        <span>优惠券/优惠码</span>
                    </div>
                    <div class="cell-right">
                        <i class="iconfont icon-gengduo"></i>
                    </div>
                </div>
                <div class="checkout-cell">
                    <div class="cell-left">
                        <span>配送方式</span>
                    </div>
                    <div class="cell-right">
                        <span>快递配送</span>
                        <i class="iconfont icon-gengduo"></i>
                    </div>
                </div>
                <div class="checkout-cell">
                    <div class="cell-left">
                        <span>送货时间</span>
                    </div>
                    <div class="cell-right">
                        <span>不限时间</span>
                        <i class="iconfont icon-gengduo"></i>
                    </div>
                </div>
                <div class="checkout-cell">
                    <div class="cell-left">
                        <span>发票类型</span>
                    </div>
                    <div class="cell-right">
                        <span>个人电子发票</span>
                        <i class="iconfont icon-gengduo"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
    }
</script>

<style lang="less" scoped>
    @import '../../../config/css/var';
    .checkout-goods-details{
        margin-bottom: 110upx;
        background: white;
        .details-header{
            display: flex;
            align-items: center;
            height: 88upx;
            padding:0 38upx;
            h4{
                font-size: 32upx;
                font-weight: 600;
                color:#666;
            }
        }
        .details-content{
            .content-goods{
                padding:0 28upx;
                .checkout-goods{
                    display: flex;
                    .goods-pic{
                        flex-basis: 166upx;
                        height: 166upx;
                        .ignore{
                            width:100%;
                            height:100%;
                        }
                    }
                    .goods-info{
                        flex:1;
                        .info-name{
                            padding-top:20upx;
                            h3{
                                font-weight: 600;
                                color:#333;
                            }
                        }
                    }
                    .goods-price-num{
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        flex-basis: 70upx;
                        .single-price{
                            padding-top:20upx;
                            color:#666;
                        }
                        .num{
                            padding-top:20upx;
                            color:#666;
                        }
                    }
                }
            }
            .content-cells{
                padding:0 28upx;
                .checkout-cell{
                    position: relative;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 88upx;
                    .cell-left{
                        font-size: 28upx;
                        font-weight: 600;
                        color:#333;
                    }
                    .cell-right{
                        display: flex;
                        align-items: center;
                        color:#666;
                    }
                    &:not(:first-child){
                        &::before {
                            position: absolute;
                            content: '';
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 0;
                            border-top: 1px solid @border-color;
                            transform: scaleY(0.5);
                        }
                    }
                }
            }
        }
    }
</style>
