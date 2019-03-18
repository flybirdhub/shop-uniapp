<template>
    <view class="goods-banner">
        <swiper :indicator-dots="true" :autoplay="true" interval="2000" duration="3000">
            <swiper-item>
                <view class="b-image">
                    <img src="http://yanxuan.nosdn.127.net/4593d6fa1259e061e02b9c54a2ddb460.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                </view>
            </swiper-item>
            <swiper-item>
                <view class="b-image">
                    <img src="http://yanxuan.nosdn.127.net/6cb81bcc1e3292014adabf65bc3fe5ff.jpg?imageView&quality=75&thumbnail=750x0" alt="">
                </view>
            </swiper-item>
        </swiper>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {
        props: ['bannerList']
    }
</script>

<style lang="less" scoped>
    .goods-banner{
        swiper{
            height: 750upx;
            .b-image{
                height: 100%;
                img{
                    width:100%;
                    height: 100%;
                }
            }
        }
    }
</style>
