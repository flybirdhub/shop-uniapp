<template>
    <view class="category-right-side">
        <scroll-view :scroll-y="true">
            <view class="sub-list-wrap">
                <view class="wrap-banner">
                    <img src="http://yanxuan.nosdn.127.net/d723607e0cbb0c4a11c9396612c71d9b.jpg?imageView&thumbnail=0x196&quality=75" alt="">
                </view>
                <view class="wrap-type">
                    <text>推荐分类</text>
                </view>
                <view class="wrap-list">
                    <view class="list-item" :key="key" v-for="(item, key) in 8">
                        <view class="item-pic">
                            <img src="http://yanxuan.nosdn.127.net/cee41a60a2d4d06426f863aea2395f19.png?imageView&quality=85&thumbnail=144x144" alt="">
                        </view>
                        <view class="item-name">
                            <text>员工精选</text>
                        </view>
                    </view>
                </view>
            </view>
        </scroll-view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default{
    }
</script>

<style lang="less" scoped>
    .category-right-side{
        height: 100%;
        margin-left:167upx;
        overflow-y: hidden;
        .sub-list-wrap{
            padding:32upx;
            .wrap-banner{
                height: 191upx;
                width:100%;
                img{
                    width:100%;
                    height: 100%;
                }
            }
            .wrap-type{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 80upx;
                text{
                    position: relative;
                    display: inline-block;
                    padding:0 10upx;
                    font-size: 28upx;
                    color:#666;
                    &::before{
                        position: absolute;
                        content: '';
                        top:50%;
                        left:-30upx;
                        transform: translateY(-50%);
                        width:30upx;
                        height: 1upx;
                        background: #666;
                    }
                    &::after{
                        position: absolute;
                        content: '';
                        top:50%;
                        right:-30upx;
                        transform: translateY(-50%);
                        width:30upx;
                        height: 1upx;
                        background: #666;
                    }
                }
            }
            .wrap-list{
                display: flex;
                flex-wrap: wrap;
                .list-item{
                    flex-basis: 153upx;
                    .item-pic{
                        width:153upx;
                        height: 153upx;
                        img{
                            width:100%;
                            height: 100%;
                        }
                    }
                    .item-name{
                        display: flex;
                        margin-top:10upx;
                        justify-content: center;
                        text{
                            text-align:center;
                            font-size: 28upx;
                            color:#333;
                        }
                    }
                    &:not(:nth-child(3n)){
                        margin:0 30upx 27upx 0;
                    }
                }
            }
        }
    }
</style>
