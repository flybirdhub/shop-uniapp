<template>
    <view class="center-service">
        <view class="s-header">
            <view class="h-left">
                <text>我的服务</text>
            </view>
        </view>
        <view class="s-content">
            <view class="c-line border-1px-top">
                <view class="l-item">
                    <text class="eosfont">&#xe635;</text>
                    <text>拼团订单</text>
                </view>
                <view class="l-item">
                    <text class="eosfont">&#xe63f;</text>
                    <text>优惠券</text>
                </view>
                <view class="l-item">
                    <text class="eosfont">&#xe630;</text>
                    <text>新人邀请</text>
                    <text>立享红包</text>
                </view>
                <view class="l-item">
                    <text class="eosfont">&#xe632;</text>
                    <text>分享app</text>
                </view>
            </view>
            <view class="c-line border-1px-top">
                <view class="l-item">
                    <text class="eosfont">&#xe62a;</text>
                    <text>我的收藏</text>
                </view>
                <view class="l-item">
                    <text class="eosfont">&#xe61d;</text>
                    <text>地址管理</text>
                </view>
                <view class="l-item">
                    <text class="eosfont">&#xe615;</text>
                    <text>意见反馈</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="less" scoped>
    .center-service{
        padding:0 28upx;
        margin-bottom: 28upx;
        background: white;
        .s-header{
            position: relative;
            height: 104upx;
            .h-left {
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                display: flex;
                align-items: center;
                text{
                    font-weight: 600;
                    color:#333;
                }
            }
        }
        .s-content{
            .c-line{
                display: flex;
                .l-item{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    flex-basis: 148upx;
                    height: 207upx;
                    text{
                       &:nth-child(1){
                           padding-top:35upx;
                           font-size: 60upx;
                           color:#b4946d;
                       }
                        &:nth-child(2){
                            padding-top:15upx;
                            color:#666;
                        }
                        &:nth-child(3){
                            padding-top:10upx;
                            font-size: 24upx;
                            color:#999;
                        }
                    }
                    &:not(:first-child){
                        margin-left:50upx;
                    }
                }
            }
        }
    }
</style>
