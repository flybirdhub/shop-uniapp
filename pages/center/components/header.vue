<template>
    <view class="center-header">
        <view class="h-right">
            <text class="eosfont">&#xe622;</text>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="less" scoped>
    .center-header{
        position: fixed;
        top:0;
        left:0;
        width:100%;
        height: 88upx;
        /* #ifdef APP-PLUS */
        height: 158upx;
        padding-top: 70upx;
        /* #endif */
        z-index: 10;
        .h-right {
            position: absolute;
            top: 50%;
            right: 27upx;
            transform: translateY(-50%);
            text {
                font-size: 50upx;
                color: white;
                &:not(:last-child) {
                    padding-right: 27upx;
                }
            }
        }
    }
</style>
