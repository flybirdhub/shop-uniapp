<template>
    <view class="cart-header">
        <div class="h-left"></div>
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
        justify-content: space-between;
        height: 88upx;
        box-sizing: border-box;
        width:100%;
        padding: 0 30upx;
        background: white;
        .h-mid{
            text{
                font-size: 30upx;
                color: #333;
            }
        }
        .h-right{
            text{
                font-size: 32upx;
                color:#b60a0a;
            }
        }
    }
</style>
