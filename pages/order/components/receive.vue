<template>
    <view class="order-receive">
        <view class="o-cell">
            <view class="c-time-status">
                <view class="c-time">
                    <text>2018-08-06 16:57</text>
                </view>
                <view class="c-status">
                    <text>已支付支付</text>
                </view>
            </view>
            <view class="c-goods border-1px-top">
                <view class="g-item">
                    <view class="i-pic">
                        <img src="https://static.home.mi.com/app/shop/img?id=shop_f4e9e198a07c9888cd3a4295a0f54b0b.jpeg&w=240&h=240" alt="">
                    </view>
                    <view class="i-info">
                        <view class="i-name">
                            <text>米家机器人扫地边刷</text>
                        </view>
                    </view>
                    <view class="i-price-num">
                        <text class="single-price">￥39</text>
                        <text class="num">x1</text>
                    </view>
                </view>
                <view class="g-item">
                    <view class="i-pic">
                        <img src="https://static.home.mi.com/app/shop/img?id=shop_f4e9e198a07c9888cd3a4295a0f54b0b.jpeg&w=240&h=240" alt="">
                    </view>
                    <view class="i-info">
                        <view class="i-name">
                            <text>米家机器人扫地边刷</text>
                        </view>
                    </view>
                    <view class="i-price-num">
                        <text class="single-price">￥39</text>
                        <text class="num">x1</text>
                    </view>
                </view>
            </view>
            <view class="c-price">
                <view class="p-total">
                    <view>共2件商品，总金额<text>￥78</text></view>
                </view>
                <view class="p-transfer">
                    <text>（含运费￥10）</text>
                </view>
            </view>
            <view class="c-action border-1px-top">
                <view class="expire-time">
                    <text>24小时候订单将关闭</text>
                </view>
                <view class="action-btns">
                    <text>取消</text>
                    <text>去支付</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="less" scoped>
    .order-receive{
        padding-top: 97upx;
        .o-cell{
            padding:0 28upx;
            background: white;
            .c-time-status{
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 90upx;
                .c-time{
                    text{
                        color:#666;
                    }
                }
                .c-status{
                    text{
                        color:#845f3f;
                    }
                }
            }
            .c-goods{
                .g-item{
                    display: flex;
                    padding-top: 20upx;
                    .i-pic{
                        flex-basis: 166upx;
                        height: 166upx;
                        img{
                            width:100%;
                            height:100%;
                        }
                    }
                    .i-info{
                        flex:1;
                        .i-name{
                            padding-top:20upx;
                            text{
                                font-weight: 600;
                                color:#333;
                            }
                        }
                    }
                    .i-price-num{
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
                    &:last-child{
                        padding-bottom: 20upx;
                    }
                }
            }
            .c-price{
                .p-total{
                    padding-top:35upx;
                    view{
                        text-align: right;
                        color:#333;
                        text{
                            font-weight: 600;
                            color:rgb(182, 9, 9);
                        }
                    }
                }
                .p-transfer{
                    padding:20upx 0;
                    text-align: right;
                    color:#333;
                }
            }
            .c-action{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 113upx;
                .expire-time{
                    color:#666;
                }
                .action-btns{
                    display: flex;
                    align-items: center;
                    text{
                        display: inline-block;
                        width:170upx;
                        height: 60upx;
                        box-sizing: border-box;
                        line-height: 60upx;
                        text-align: center;
                        border-radius: 5upx;
                        border:1upx solid rgb(204, 204, 204);
                        color:#666;
                        &:not(:first-child){
                            margin-left:20upx;
                            color:rgb(159, 128, 82);
                            border-color: rgb(159, 128, 82);
                        }
                    }
                }
            }
        }
    }
</style>
