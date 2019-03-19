
<template>
    <view class="goods-spec">
        <view class="g-cell">
            <view class="c-left">
                <text>规格：</text>
            </view>
            <view class="c-mid">
                <text>4G 米兰白</text>
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
    .goods-spec{
        margin-bottom:10upx;
        font-size: 28upx;
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
            }
            .c-right{
                display: flex;
                justify-content: flex-end;
                align-items: center;
                flex-basis: 40upx;
                text{
                    font-size: 24upx;
                    color:#666;
                }
            }
        }
    }
</style>
