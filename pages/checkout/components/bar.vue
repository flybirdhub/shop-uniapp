<template>
    <view class="checkout-pay">
        <view class="p-info">
            <text class="i-text">合计</text>
            <text class="i-price">￥1236.00</text>
        </view>
        <view class="p-action" @click="pay">
            <text>去支付</text>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {
        methods: {
            pay () {
                this.$emit('do-pay')
            }
        }
    }
</script>

<style lang="less" scoped>
    .checkout-pay{
        position: fixed;
        bottom:0;
        left:0;
        display: flex;
        width:100%;
        height: 110upx;
        font-size: 28upx;
        background: white;
        .p-info{
            display: flex;
            align-items: center;
            flex:1;
            padding-left:28upx;
            .i-price{
                font-size: 28upx;
                color:#b60a0a;
            }
        }
        .p-action{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-basis: 210upx;
            background: #b60a0a;
            text{
                color:white;
            }
        }
    }
</style>
