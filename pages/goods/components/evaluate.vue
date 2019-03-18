<template>
    <view class="goods-evaluate">
        <view class="e-header">
            <view class="h-left">
                <text>用户评价（1763）</text>
            </view>
            <view class="h-right">
                <text>98%满意</text>
                <text class="iconfont icon-gengduo"></text>
            </view>
        </view>
        <view class="e-content">
            <scroll-view :scroll-x="true">
                <view class="c-wrap">
                    <view class="w-item">
                        <view class="e-card">
                            <view class="c-user">
                                <view class="u-avatar">
                                    <img src="https://s1.mi-img.com/mfsv2/avatar/s008/p01amyF87qXf/793p8cAufflQSe.jpg" alt="">
                                </view>
                                <view class="u-name">
                                    <text>T*****rstruck</text>
                                </view>
                                <view class="u-star">
                                    <img src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt="">
                                    <img src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt="">
                                    <img src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt="">
                                    <img src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt="">
                                </view>
                            </view>
                            <view class="c-text">
                                <text>手机性价比很高。优点有很多，缺点也很多，总体OK。</text>
                            </view>
                        </view>
                    </view>
                    <view class="w-item">
                        <view class="e-card">
                            <view class="c-user">
                                <view class="u-avatar">
                                    <img src="https://s1.mi-img.com/mfsv2/avatar/s008/p01amyF87qXf/793p8cAufflQSe.jpg" alt="">
                                </view>
                                <view class="u-name">
                                    <text>T*****rstruck</text>
                                </view>
                                <view class="u-star">
                                    <img src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt="">
                                    <img src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt="">
                                    <img src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt="">
                                    <img src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt="">
                                </view>
                            </view>
                            <view class="c-text">
                                <text>手机性价比很高。优点有很多，缺点也很多，总体OK。</text>
                            </view>
                        </view>
                    </view>
                </view>
            </scroll-view>
        </view>
        <view class="e-footer">
            <text>查看更多</text>
            <text class="iconfont icon-gengduo"></text>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {
    }
</script>

<style lang="less">
    .goods-evaluate{
        margin-bottom: 10upx;
        .e-header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 99upx;
            padding:0 28px;
            background: white;
            .h-left{
                display: flex;
                align-items: center;
                text{
                    font-size: 28upx;
                    font-weight: 600;
                    color:#333;
                }
            }
            .h-right{
                display: flex;
                align-items: center;
                color:#aa8a59;
                text{
                    font-size: 24upx;
                }
            }
        }
        .e-content{
            background: white;
            .c-wrap {
                white-space: nowrap;
                .w-item {
                    display: inline-block;
                    width: 620upx;
                    height: 352upx;
                    margin-left: 28upx;
                    .e-card{
                        height: 100%;
                        box-sizing: border-box;
                        padding:28upx;
                        background: #f8f8f8;
                        .c-user{
                            display: flex;
                            align-items: center;
                            .u-avatar{
                                display: inline-block;
                                height: 70upx;
                                width:70upx;
                                img{
                                    width:100%;
                                    height: 100%;
                                    border-radius: 50%;
                                }
                            }
                            .u-name{
                                padding:0 15upx;
                            }
                            .u-star{
                                display: flex;
                                align-items: center;
                                img{
                                    width:30upx;
                                    height: 30upx;
                                }
                            }
                        }
                        .c-text{
                            padding-top:28upx;
                            text{
                                white-space:normal;
                                color:#333;
                            }
                        }
                    }
                    &:last-child{
                        margin-right:.373urem;
                    }
                }
            }
        }
        .e-footer{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 99upx;
            background: white;
            color:#aa8a59;
            text{
                font-size: 24upx;
            }
        }
    }
</style>
