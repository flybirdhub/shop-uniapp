<template>
    <view class="category-left-side">
        <scroll-view :scroll-y="true">
            <view class="s-item s-item-active">
                <text>推荐</text>
            </view>
            <view class="s-item">
                <text>手机</text>
            </view>
            <view class="s-item">
                <text>家电</text>
            </view>
            <view class="s-item">
                <text>服装</text>
            </view>
        </scroll-view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default{
    }
</script>

<style lang="less" scoped>
    .category-left-side{
        position: absolute;
        top:88upx;
        /* #ifdef APP-PLUS */
        top: 158upx;
        /* #endif */
        bottom:0;
        width:167upx;
        background: #f4f4f4;
        .s-item{
            display: flex;
            align-items: center;
            height: 103upx;
            text{
                position: relative;
                display: inline-block;
                height: 50upx;
                line-height: 50upx;
                text-align: center;
                flex:1;
                font-size: 28upx;
                color:#666;
            }
            &-active{
                background: white;
                span{
                    font-size: 28upx;
                    color:#ab2b2b;
                    &::before{
                        position: absolute;
                        content: '';
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 0;
                        border-left: 5upx solid #ab2b2b;
                    }
                }
            }
        }
    }
</style>
