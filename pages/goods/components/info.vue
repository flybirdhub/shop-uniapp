<template>
    <view class="goods-info">
        <view class="i-name">
            <text>小米8 SE</text>
        </view>
        <view class="i-desc">
            <text>骁龙710处理器 / AI 超感光双摄 / 5.88" 全面屏 / 前置2000万柔光自拍 / 三星 AMOLED 屏幕 / 3120mAh 长续航</text>
        </view>
        <view class="i-price">
            <view class="price-pay">
                <text>￥</text>
                <text>1799</text>
            </view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="less" scoped>
    .goods-info{
        padding:28upx;
        margin-bottom: 10upx;
        font-size: 28upx;
        background: white;
        .i-name{
            text{
                font-size: 34upx;
                font-weight: 600;
                color:#333;
            }
        }
        .i-desc{
            padding:20upx 0;
            text{
                color:#666;
            }
        }
        .i-price{
            .price-pay{
                display: flex;
                align-items: flex-end;
                text{
                    &:nth-child(1){
                        color:#b60a0a;
                    }
                    &:nth-child(2){
                        font-size: 40upx;
                        font-weight: 600;
                        color:#b60a0a;
                    }
                }
            }
        }
    }
</style>
