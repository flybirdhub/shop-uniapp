<template>
    <view class="number">
        <view class="n-wrap">
            <view class="w-sub">
                <text class="iconfont icon-jianshao"></text>
            </view>
            <view class="w-text">
                <text>3</text>
            </view>
            <view class="w-add">
                <i class="iconfont icon-tianjia"></i>
            </view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default{
    }
</script>

<style lang="less" scoped>
    .number{
        display: inline-block;
        .n-wrap{
            display: flex;
            height: 50upx;
            width:208upx;
            box-sizing: border-box;
            border:1upx solid #cfcfcf;
            .w-sub{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-basis: 50upx;
                box-sizing: border-box;
                border-right:1upx solid #cfcfcf;
                background: #fafafa;
                color:#999;
            }
            .w-text{
                display: flex;
                align-items: center;
                justify-content: center;
                flex:1;
                text{
                    font-size: 28upx;
                    color:#333;
                }
            }
            .w-add{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-basis: 50upx;
                box-sizing: border-box;
                border-left:1upx solid #cfcfcf;
                background: #f4f4f4;
                color:#666;
            }
        }
    }
</style>
