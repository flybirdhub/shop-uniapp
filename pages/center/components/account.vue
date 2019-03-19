<template>
    <view class="center-account">
        <view class="a-left" @click="toLogin">
            <view class="l-avatar">
                <img src="https://m.mi.com/static/img/avatar.76a75b8f17.png" alt="">
            </view>
            <view class="l-name">
                <text>请登录</text>
            </view>
        </view>
        <view class="a-right">
            <text class="eosfont">&#xe733;</text>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {
        methods: {
            toLogin () {
                this.$emit('to-login')
            }
        }
    }
</script>

<style lang="less" scoped>
    .center-account{
        position: relative;
        height: 277upx;
        /* #ifdef APP-PLUS */
        height: 347upx;
        padding-top: 70upx;
        /* #endif */
        background: url('https://m.mi.com/static/img/bg.63c8e19851.png') center 0 #f37d0f;
        background-size: 100% 100%;
        .a-left{
            position: absolute;
            top: 50%;
            left: 28upx;
            transform: translateY(-50%);
            display: flex;
            align-items: center;
            .l-avatar{
                display: inline-block;
                width: 127upx;
                height: 127upx;
                img{
                    width:100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            .l-name{
                padding-left:28upx;
                text{
                    font-size: 28upx;
                    font-weight: 600;
                    color:white;
                }
            }
        }
        .a-right{
            position: absolute;
            top: 50%;
            right: 28px;
            transform: translateY(-50%);
            display: flex;
            align-items: center;
            text{
                color:white;
            }
        }
    }
</style>
