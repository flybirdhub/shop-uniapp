<template>
    <div class="cart-checkout">
        <div class="c-info">
            <div class="i-left">
                <text class="eosfont">&#xe63d;</text>
                <span>全选</span>
            </div>
            <div class="i-right">
                <span class="r-text">合计</span>
                <span class="r-price">￥452.00</span>
            </div>
        </div>
        <div class="c-action" @click="checkout">
            <span>去结算(2)</span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        methods: {
            checkout () {
                this.$emit('do-checkout')
            }
        }
    }
</script>

<style lang="less" scoped>
    .cart-checkout{
        position: fixed;
        bottom:50px;
        /* #ifdef APP-PLUS */
        bottom:0;
        /* #endif */
        left:0;
        display: flex;
        width:100%;
        height: 110upx;
        background: white;
        font-size: 28upx;
        .c-info{
            position: relative;
            flex:1;
            .i-left{
                position: absolute;
                top:50%;
                left:30upx;
                transform: translateY(-50%);
                display: flex;
                align-items: center;
                .eosfont{
                    color:#b60a0a;
                }
            }
            .i-right{
                position: absolute;
                top:50%;
                right:30upx;
                transform: translateY(-50%);
                display: flex;
                align-items: center;
                .right-price{
                    color:#b60a0a;
                }
            }
        }
        .c-action{
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
