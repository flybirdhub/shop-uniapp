<template>
    <view class="home-header">
        <view class="h-top">
            <view class="t-logo">
                <img src="@/static/app/navi_title_v4.png">
            </view>
            <view class="t-search" @click="nav('/pages/search/index')">
                <view class="s-left">
                    <text class="iconfont icon-sousuo"></text>
                    <text>搜索好品，共有16523件商品</text>
                </view>
            </view>
        </view>
        <view class="h-bottom">
            <scroll-view>
                <view class="b-tabs">
                    <view class="t-item t-item-active">
                        <text>服装</text>
                    </view>
                    <view class="t-item">
                        <text>首饰</text>
                    </view>
                </view>
            </scroll-view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {
    }
</script>

<style lang="less">
    .home-header {
        position: fixed;
        top:0;
        left:0;
        width:100%;
        z-index: 1000;
        .h-top {
            display: flex;
            align-items: center;
            height: 88upx;
            padding: 0 27upx;
            background: white;
            .t-logo {
                flex-basis: 160upx;
                box-sizing: border-box;
                padding-right: 20upx;
                img {
                    width: 100%;
                }
            }
            .t-search {
                position: relative;
                flex: 1;
                height: 58upx;
                border-radius: 5upx;
                background: #f4f4f4;
                .s-left {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    display: flex;
                    align-items: center;
                    i {
                        color: #909090;
                    }
                    text {
                        white-space: nowrap;
                        color: #c8c8c8;
                    }
                }
            }
        }
        .h-bottom {
            width: 100%;
            overflow-x: hidden;
            background: white;
            .b-tabs {
                white-space: nowrap;
                padding: 0 30upx;
                .t-item {
                    display: inline-block;
                    height: 60upx;
                    padding: 0 17upx;
                    text-align: center;
                    line-height: 60upx;
                    text {
                        font-weight: 400;
                    }
                    &-active {
                        position: relative;
                        color: #b4282d;
                        &::after {
                            position: absolute;
                            content: '';
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 0;
                            border-bottom: 2px solid #b4282d;
                        }
                    }
                    &:not(:first-child) {
                        margin-left: 63upx;
                    }
                }
            }
        }
    }
</style>
