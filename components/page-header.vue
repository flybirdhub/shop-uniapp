<template>
    <view class="page-header">
        <view class="h-left">
            <text class="eosfont">&#xe65f;</text>
        </view>
        <view class="h-mid">
            <text>网易严选</text>
        </view>
        <view class="h-right">
            <text class="eosfont">&#xe60c;</text>
            <text class="eosfont">&#xe601;</text>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {
    }
</script>

<style lang="less" scoped>
    .page-header {
        position: fixed;
        top:0;
        left:0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 88upx;
        width:100%;
        background: white;
        z-index: 10;
        .h-left {
            position: absolute;
            top: 50%;
            left: 27upx;
            transform: translateY(-50%);
            text {
                font-size: 55upx;
                color: #333;
            }
        }
        .h-mid {
            text{
                font-size: 34upx;
                font-size: #333;
            }
        }
        .h-right {
            position: absolute;
            top: 50%;
            right: 27upx;
            transform: translateY(-50%);
            text {
                font-size: 55upx;
                color: #333;
                &:not(:last-child) {
                    padding-right: 27upx;
                }
            }
        }
    }
</style>
