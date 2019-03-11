<template>
    <view class="index-category">
        <view class="c-item" :key="key" v-for="(item, key) in 10">
            <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
            <text>居家生活</text>
        </view>
    </view>
</template>

<style lang="less">
    .index-category{
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 52upx;
        background: white;
        .c-item{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width:20%;
            height: 177upx;
            img{
                display: inline-block;
                width:110upx;
                height: 110upx;
            }
            text{
                padding-top: 10upx;
                font-size: 24upx;
                color:#333333;
            }
        }
    }
</style>