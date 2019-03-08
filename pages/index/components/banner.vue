<template>
    <div class="home-banner">
        <swiper class="b-swiper" :indicator-dots="true" :autoplay="true" interval="2000" duration="3000">
            <swiper-item>
                <view class="s-item">
                    <img src="https://yanxuan.nosdn.127.net/456abfb6e481a941444e8840005c88ed.jpg?imageView&quality=75&thumbnail=750x0"
                         alt="">
                </view>
            </swiper-item>
            <swiper-item>
                <view class="s-item">
                    <img src="https://yanxuan.nosdn.127.net/fa1bee937627b5b554d2021906115031.jpg?imageView&quality=75&thumbnail=750x0"
                         alt="">
                </view>
            </swiper-item>
        </swiper>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="less" scoped>
    .home-banner {
        padding-top: 148upx;
        background: white;
        .b-swiper {
            height: 370upx;
            .s-item {
                height: 100%;
                width: 100%;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>
