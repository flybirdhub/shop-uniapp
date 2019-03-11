<template>
    <view class="index-newest">
        <view class="n-header">
            <div class="h-left">
                <text>新品上市</text>
            </div>
            <div class="h-right">
                <text>更多</text>
                <text class="iconfont icon-gengduo"></text>
            </div>
        </view>
        <view class="n-content">
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

<style lang="less" scoped>
    .index-newest {
        margin-top: 20upx;
        background: white;
        .n-header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100upx;
            padding:0 30upx;
        }
        .n-content{
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
                }
                &:not(:nth-child(3n+1)){
                    margin-left: 20upx;
                }
            }
        }
    }
</style>
