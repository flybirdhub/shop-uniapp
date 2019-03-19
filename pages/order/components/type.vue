<template>
    <view class="order-type border-1px-bottom">
        <view class="t-item" :class="{'t-item-active': currentType === 0}" @click="changeType(0)">
            <text>全部订单</text>
        </view>
        <view class="t-item" :class="{'t-item-active': currentType === 1}" @click="changeType(1)">
            <text>待付款</text>
        </view>
        <view class="t-item" :class="{'t-item-active': currentType === 2}" @click="changeType(2)">
            <text class="i-text">待收货</text>
            <text class="i-tag">1</text>
        </view>
        <view class="t-item" :class="{'t-item-active': currentType === 3}" @click="changeType(3)">
            <text>已收货</text>
        </view>
        <view class="t-item" :class="{'t-item-active': currentType === 4}" @click="changeType(4)">
            <text>退款订单</text>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {
        data () {
            return {
                currentType: this.type
            }
        },
        props: ['type'],
        methods: {
            changeType (n) {
                this.currentType = n
                this.$emit('current-type', n)
            }
        }
    }
</script>

<style lang="less" scoped>
    .order-type{
        position: fixed;
        top:44px;
        left:0;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 97upx;
        box-sizing: border-box;
        padding:0 28upx;
        background: white;
        .t-item{
            position: relative;
            display: flex;
            align-items: center;
            flex-grow: 0;
            .i-text{
                color:#666;
            }
            .i-tag{
                position: absolute;
                top:10upx;
                right:-40upx;
                width:40upx;
                height: 40upx;
                border-radius: 20upx;
                transform: scale(.7);
                text-align: center;
                line-height: 40upx;
                background: #ff3b2f;
                color:white;
            }
            &-active{
                &::after {
                    position: absolute;
                    content: '';
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 0;
                    border-bottom: 7upx solid rgb(132, 95, 63);
                    transform: scaleY(0.5);
                }
            }
        }
    }
</style>
