<template>
    <view class="login">
        <component-page-header></component-page-header>
        <view class="l-logo">
            <view class="l-wrap">
                <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
            </view>
        </view>
        <view class="l-btn">
            <view class="b-item">
                <i class="eosfont">&#xe628;</i>
                <text>微信授权登陆</text>
            </view>
            <view class="b-item">
                <i class="eosfont">&#xe64f;</i>
                <text>手机号码登陆</text>
            </view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    import header from '@/components/page-header'
    export default {
        components: {
            componentPageHeader: header
        }
    }
</script>

<style lang="less" scoped>
    @import '../../config/css/var';
    .login{
        height: 100vh;
        background: @bg-color;
        .l-logo {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 410upx;
            padding-top: 88upx;
            .l-wrap {
                display: inline-block;
                width: 300upx;
                height: 100upx;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .l-btn {
            padding: 0 40upx;
            .b-item{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 94upx;
                box-sizing: border-box;
                border-radius: 4upx;
                .eosfont{
                    padding-right: 10upx;
                    font-size: 50upx;
                }
                &:first-child{
                    margin-bottom: 16upx;
                    background: #b4282d;
                    color:white;
                }
                &:last-child{
                    border:1upx solid #b4282d;
                    color:#b4282d;
                }
            }
        }
    }
</style>
