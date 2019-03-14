<template>
    <div class="goods-evaluate">
        <div class="evaluate-header">
            <div class="header-left">
                <span>用户评价（1763）</span>
            </div>
            <div class="header-right">
                <span>98%满意</span>
                <i class="iconfont icon-gengduo"></i>
            </div>
        </div>
        <div class="evaluate-content">
            <scroll-view :scroll-x="true">
                <div class="content-wrap">
                    <div class="wrap-item">
                        <div class="evaluate-card">
                            <div class="card-user">
                                <div class="user-avatar">
                                    <img src="https://s1.mi-img.com/mfsv2/avatar/s008/p01amyF87qXf/793p8cAufflQSe.jpg" alt="">
                                </div>
                                <div class="user-name">
                                    <span>T*****rstruck</span>
                                </div>
                                <div class="user-star">
                                    <img src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt="">
                                    <img src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt="">
                                    <img src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt="">
                                    <img src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt="">
                                </div>
                            </div>
                            <div class="card-text">
                                <p>手机性价比很高。优点有很多，缺点也很多，总体OK。</p>
                            </div>
                        </div>
                    </div>
                    <div class="wrap-item">
                        <div class="evaluate-card">
                            <div class="card-user">
                                <div class="user-avatar">
                                    <img src="https://s1.mi-img.com/mfsv2/avatar/s008/p01amyF87qXf/793p8cAufflQSe.jpg" alt="">
                                </div>
                                <div class="user-name">
                                    <span>T*****rstruck</span>
                                </div>
                                <div class="user-star">
                                    <img src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt="">
                                    <img src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt="">
                                    <img src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt="">
                                    <img src="https://static.home.mi.com/youpin/static/m/res/images/evaluation_btn_level.a_sel_light.png" alt="">
                                </div>
                            </div>
                            <div class="card-text">
                                <p>手机性价比很高。优点有很多，缺点也很多，总体OK。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </scroll-view>
        </div>
        <div class="evaluate-footer">
            <span>查看更多</span>
            <i class="iconfont icon-gengduo"></i>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
    }
</script>

<style lang="less">
    .goods-evaluate{
        margin-bottom: 10upx;
        .evaluate-header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 99upx;
            padding:0 28px;
            background: white;
            .header-left{
                display: flex;
                align-items: center;
                span{
                    font-size: 28upx;
                    font-weight: 600;
                    color:#333;
                }
            }
            .header-right{
                display: flex;
                align-items: center;
                color:#aa8a59;
                i{
                    font-size: 24upx;
                }
            }
        }
        .evaluate-content{
            background: white;
            .content-wrap {
                white-space: nowrap;
                .wrap-item {
                    display: inline-block;
                    width: 620upx;
                    height: 352upx;
                    margin-left: 28upx;
                    .evaluate-card{
                        height: 100%;
                        box-sizing: border-box;
                        padding:28upx;
                        background: #f8f8f8;
                        .card-user{
                            display: flex;
                            align-items: center;
                            .user-avatar{
                                display: inline-block;
                                height: 70upx;
                                width:70upx;
                                img{
                                    width:100%;
                                    height: 100%;
                                    border-radius: 50%;
                                }
                            }
                            .user-name{
                                padding:0 15upx;
                            }
                            .user-star{
                                display: flex;
                                align-items: center;
                                img{
                                    width:30upx;
                                    height: 30upx;
                                }
                            }
                        }
                        .card-text{
                            padding-top:28upx;
                            p{
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
        .evaluate-footer{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 99upx;
            background: white;
            color:#aa8a59;
            i{
                font-size: 24upx;
            }
        }
    }
</style>
