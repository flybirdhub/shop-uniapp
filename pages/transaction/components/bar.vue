<template>
    <div class="transaction-action">
        <div class="action-info">
            <span class="info-text">合计</span>
            <span class="info-price">￥1236.00</span>
        </div>
        <div class="action-check" @click="check">
            <span>查看订单</span>
        </div>
    </div>
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
        .action-info{
            display: flex;
            align-items: center;
            flex:1;
            padding-left:28upx;
            .info-price{
                font-size: 28upx;
                color:#b60a0a;
            }
        }
        .action-check{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-basis: 210upx;
            background: #b60a0a;
            span{
                color:white;
            }
        }
    }
</style>
