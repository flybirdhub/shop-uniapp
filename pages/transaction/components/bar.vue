<template>
    <view class="transaction-action">
        <view class="a-info">
            <text class="i-text">合计</text>
            <text class="i-price">￥1236.00</text>
        </view>
        <view class="a-check" @click="check">
            <text>查看订单</text>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {
        methods: {
            check () {
                this.$emit('do-check')
            }
        }
    }
</script>

<style lang="less" scoped>
    .transaction-action{
        position: fixed;
        bottom:0;
        left:0;
        display: flex;
        width:100%;
        height: 110upx;
        background: white;
        .a-info{
            display: flex;
            align-items: center;
            flex:1;
            padding-left:28upx;
            .i-price{
                color:#b60a0a;
            }
        }
        .a-check{
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
