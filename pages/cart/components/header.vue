<template>
    <view class="cart-header">
        <view class="h-mid">
            <text>购物车</text>
        </view>
        <view class="h-right">
            <text>编辑</text>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {
    }
</script>

<style lang="less" scoped>
    .cart-header{
        position: fixed;
        top:0;
        left:0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 88upx;
        width:100%;
        background: white;
        .h-mid{
            text{
                font-size: 30upx;
                color: #333;
            }
        }
        .h-right{
            position: absolute;
            top:50%;
            right:30upx;
            transform: translateY(-50%);
            text{
                color:#b60a0a;
            }
        }
    }
</style>
