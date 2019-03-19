<template>
    <view class="index-direct-supply">
        <view class="s-header">
            <div class="h-left">
                <text>品牌制造商直供</text>
            </div>
            <div class="h-right">
                <text>更多</text>
                <text class="eosfont">&#xe733;</text>
            </div>
        </view>
        <view class="s-content">
            <view class="c-item" :key="key" v-for="(item, key) in 4">
                <view class="i-desc">
                    <text>海外制造商</text>
                    <text>24元起</text>
                </view>
                <img src="http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1" alt="">
            </view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {
    }
</script>

<style lang="less" scoped>
    .index-direct-supply {
        margin-top: 20upx;
        background: white;
        .s-header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100upx;
            padding:0 30upx;
            .h-left{
                text{
                    font-size: 34upx;
                }
            }
            .h-right{
                text{
                    font-size: 34upx;
                }
            }
        }
        .s-content{
            display: flex;
            flex-wrap: wrap;
            padding:0 30upx 30upx 30upx;
            .c-item{
                position: relative;
                flex-basis: 343upx;
                height: 260upx;
                .i-desc{
                    position: absolute;
                    top:25upx;
                    left:50%;
                    transform: translateX(-50%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text{
                        &:first-child{
                            font-size: 34upx;
                            color:#333;
                        }
                        &:last-child{
                            font-size: 24upx;
                            color:#7f7f7f;
                        }
                    }
                }
                img{
                    width:100%;
                    height: 100%;
                }
                &:nth-child(2n+1){
                    margin-right: 8upx;
                }
                &:nth-child(4n+1){
                    margin-bottom: 8upx;
                }
            }
        }
    }
</style>
