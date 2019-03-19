<template>
    <view class="cart-goods">
        <view class="g-group">
            <view class="g-header">
                <view class="h-left">
                    <text class="eosfont">&#xe63d;</text>
                    <text class="l-text">严选自营</text>
                </view>
                <view class="h-right">
                    <text class="eosfont">&#xe652;</text>
                    <text>满150.00免运费</text>
                </view>
            </view>
            <view class="g-content">
                <view class="c-item border-1px-top"
                     :key="key"
                     v-for="(item, key) in 2">
                    <view class="i-select">
                        <text class="eosfont">&#xe63d;</text>
                    </view>
                    <view class="i-pic">
                        <img src="http://yanxuan.nosdn.127.net/e216153c4c420a6bfaa754e6220981cd.png?imageView&quality=65&thumbnail=330x330" alt="">
                    </view>
                    <view class="i-info">
                        <view class="info-name">
                            <text>2018雨前碧螺春 3克*30袋</text>
                        </view>
                        <view class="i-price-num">
                            <view class="price">
                                <text>￥215.00</text>
                            </view>
                            <view class="num">
                                <component-counter></component-counter>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import counter from '@/components/counter'
    export default {
        components: {
            componentCounter: counter
        }
    }
</script>

<style lang="less">
    .cart-goods {
        padding-top: 88upx;
        .g-group {
            background: white;
            .g-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 88upx;
                padding: 0 28upx;
                .h-left {
                    display: flex;
                    align-items: center;
                    .eosfont {
                        color: #b60a0a;
                    }
                    .l-text{
                        padding-left: 10upx;
                        font-weight: 600;
                        color: #333;
                    }
                }
                .h-right {
                    display: flex;
                    align-items: center;
                    color: #666;
                    text {
                        padding-left: 10upx;
                    }
                }
            }
            .g-content {
                padding: 0 28upx;
                .c-item {
                    display: flex;
                    height: 223upx;
                    box-sizing: border-box;
                    padding: 28upx 0;
                    .i-select {
                        display: flex;
                        align-items: center;
                        flex-basis: 64upx;

                        text{
                            color: #b60a0a;
                        }
                    }
                    .i-pic {
                        flex-basis: 164upx;
                        img {
                            height: 100%;
                            width: 100%;
                        }
                    }
                    .i-info {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        flex: 1;
                        padding: 0 10upx;
                        .info-name {
                            text {
                                font-weight: 600;
                                color: #333;
                            }
                        }
                        .i-price-num {
                            display: flex;
                            justify-content: space-between;
                            .price {
                                display: flex;
                                flex-direction: column;
                                justify-content: flex-end;
                                text {
                                    color: #b60a0a;
                                }
                            }
                        }
                    }
                }
            }
            &:not(:first-child) {
                margin-top: 28upx;
            }
        }
    }
</style>
