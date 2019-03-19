<template>
    <view class="goods-instruction">
        <view class="g-cell">
            <view class="c-left">
                <text>说明：</text>
            </view>
            <view class="c-mid">
                <view class="instruction">
                    <view class="i-item">
                        <text class="eosfont">&#xe62e;</text>
                        <text class="text">小米有品甄选精品</text>
                    </view>
                    <view class="i-item">
                        <text class="eosfont">&#xe62e;</text>
                        <text class="text">由 小米 发货并提供售后</text>
                    </view>
                    <view class="i-item">
                        <text class="eosfont">&#xe62e;</text>
                        <text class="text">支持7天无理由退货（请参考商品详情-常见问题）</text>
                    </view>
                </view>
            </view>
            <view class="c-right">
                <text class="eosfont">&#xe733;</text>
            </view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {
    }
</script>

<style lang="less" scoped>
    .goods-instruction{
        margin-bottom:10upx;
        background: white;
        .g-cell{
            display: flex;
            min-height: 80upx;
            padding:0 28upx;
            .c-left{
                display: flex;
                align-items: center;
                flex-basis: 93upx;
                text{
                    color:#666;
                }
            }
            .c-mid{
                display: flex;
                align-items: center;
                flex:1;
                .instruction{
                    padding:20upx 0;
                    .i-item{
                        display: flex;
                        .eosfont{
                            font-size: 32upx;
                            color:#ab8959;
                        }
                        .text{
                            padding-left:5upx;
                            color:#333;
                        }
                        &:not(:first-child){
                            padding-top:20upx;
                        }
                    }
                }
            }
            .c-right{
                display: flex;
                justify-content: flex-end;
                align-items: center;
                flex-basis: 40upx;
                i{
                    font-size: 24upx;
                    color:#666;
                }
            }
        }
    }
</style>
