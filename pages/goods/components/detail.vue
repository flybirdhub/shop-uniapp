<template>
    <view class="goods-details">
        <view class="d-tab">
            <view class="t-item t-item-active">
                <text>功能详情</text>
            </view>
            <view class="t-item">
                <text>常见问题</text>
            </view>
        </view>
        <view class="d-content">
            <view class="c-item">
                <img src="http://yanxuan.nosdn.127.net/64181a4409dc4c4a116f0e0b6c6d8fb4.jpg" alt="">
            </view>
            <view class="c-item">
                <img src="http://yanxuan.nosdn.127.net/fc5f3104ec3f8493c636d8552e3ce9bf.jpg" alt="">
            </view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {
    }
</script>

<style lang="less" scoped>
    .goods-details{
        margin-bottom: 115upx;
        font-size: 28upx;
        background: white;
        .d-tab{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 83upx;
            .t-item{
                text{
                    color:#666;
                }
                &:not(:first-child){
                    margin-left:88upx;
                }
                &-active{
                    text{
                        font-weight: 700;
                        color:#aa8a59;
                    }
                }
            }
        }
        .d-content{
            .c-item{
                img{
                    display: block;
                    width: 100%;
                    height: 390upx;
                }
            }
        }
    }
</style>
