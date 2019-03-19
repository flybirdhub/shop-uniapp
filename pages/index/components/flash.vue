<template>
    <view class="index-flash">
        <view class="f-header">
            <div class="h-left">
                <view class="l-text">
                    <text>限时购</text>
                </view>
                <view class="l-time">
                    <view class="t-item">
                        <text>02</text>
                    </view>
                    <view class="t-item">
                        <text>15</text>
                    </view>
                    <view class="t-item">
                        <text>45</text>
                    </view>
                </view>
            </div>
            <div class="h-right">
                <text>更多</text>
                <text class="eosfont">&#xe733;</text>
            </div>
        </view>
        <view class="f-content">
            <view class="c-item" :key="key" v-for="(item, key) in 6">
                <view class="i-image">
                    <img src="http://yanxuan.nosdn.127.net/598a7792fdef09260c6c6fb0ca4fa5cc.png?imageView&thumbnail=216x216&quality=75" alt="">
                </view>
                <view class="i-price">
                    <text>￥3.2</text>
                    <text>￥5.0</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="less" scoped>
    .index-flash {
        margin-top: 20upx;
        background: white;
        .f-header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100upx;
            padding:0 30upx;
            .h-left{
                display: flex;
                align-items: center;
                .l-text{
                    text{
                        font-size: 34upx;
                    }
                }
                .l-time{
                    display: flex;
                    align-items: center;
                    padding-left: 20upx;
                    .t-item{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-basis: 36upx;
                        height: 36upx;
                        border-radius: 5upx;
                        background: #333;
                        text{
                            font-size: 24upx;
                            color:white;
                        }
                        &:not(:first-child){
                            margin-left: 20upx;
                        }
                    }
                }
            }
            .h-right{
                text{
                    font-size: 34upx;
                }
            }
        }
        .f-content{
            display: flex;
            flex-wrap: wrap;
            padding:0 30upx;
            .c-item{
                flex-basis: 216upx;
                padding-bottom: 30upx;
                .i-image{
                    width:100%;
                    height: 216upx;
                    background: #F5F5F5;
                    img{
                        width:100%;
                        height: 100%;
                    }
                }
                .i-price{
                    display: flex;
                    align-items: center;
                    height: 41upx;
                    margin-top: 10upx;
                    text{
                        font-size: 28upx;
                    }
                }
                &:not(:nth-child(3n+1)){
                    margin-left: 20upx;
                }
            }
        }
    }
</style>
