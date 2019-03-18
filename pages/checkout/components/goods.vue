<template>
    <view class="checkout-goods-details">
        <view class="d-header">
            <text>商品详情</text>
        </view>
        <view class="d-content">
            <view class="content-goods border-1px-top border-1px-bottom">
                <view class="checkout-goods">
                    <view class="g-pic">
                        <img src="https://static.home.mi.com/app/shop/img?id=shop_f4e9e198a07c9888cd3a4295a0f54b0b.jpeg&w=240&h=240" alt="">
                    </view>
                    <view class="g-info">
                        <view class="i-name">
                            <text>米家机器人扫地边刷</text>
                        </view>
                    </view>
                    <view class="g-price-num">
                        <text class="single-price">￥39</text>
                        <text class="num">x1</text>
                    </view>
                </view>
            </view>
            <view class="content-cells">
                <view class="checkout-cell">
                    <view class="c-left">
                        <text>优惠券/优惠码</text>
                    </view>
                    <view class="c-right">
                        <text class="iconfont icon-gengduo"></text>
                    </view>
                </view>
                <view class="checkout-cell">
                    <view class="c-left">
                        <text>配送方式</text>
                    </view>
                    <view class="c-right">
                        <text>快递配送</text>
                        <text class="iconfont icon-gengduo"></text>
                    </view>
                </view>
                <view class="checkout-cell">
                    <view class="c-left">
                        <text>送货时间</text>
                    </view>
                    <view class="c-right">
                        <text>不限时间</text>
                        <text class="iconfont icon-gengduo"></text>
                    </view>
                </view>
                <view class="checkout-cell">
                    <view class="c-left">
                        <text>发票类型</text>
                    </view>
                    <view class="c-right">
                        <text>个人电子发票</text>
                        <text class="iconfont icon-gengduo"></text>
                    </view>
                </view>
            </view>
        </view>
    </view>
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
        .d-header{
            display: flex;
            align-items: center;
            height: 88upx;
            padding:0 38upx;
            text{
                font-size: 32upx;
                font-weight: 600;
                color:#666;
            }
        }
        .d-content{
            .content-goods{
                padding:0 28upx;
                .checkout-goods{
                    display: flex;
                    .g-pic{
                        flex-basis: 166upx;
                        height: 166upx;
                        img{
                            width:100%;
                            height:100%;
                        }
                    }
                    .g-info{
                        flex:1;
                        .i-name{
                            padding-top:20upx;
                            text{
                                font-weight: 600;
                                color:#333;
                            }
                        }
                    }
                    .g-price-num{
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
                    .c-left{
                        font-size: 28upx;
                        font-weight: 600;
                        color:#333;
                    }
                    .c-right{
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
