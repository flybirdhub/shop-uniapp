<template>
    <view class="category-header border-1px-bottom">
        <view class="header-search">
            <text class="iconfont icon-sousuo"></text>
            <text class="keyword">润米超级品牌日</text>
        </view>
    </view>
</template>

<style lang="less" scoped>
    .category-header{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 88upx;
        padding:0 28upx;
        background: white;
        .header-search{
            display: flex;
            align-items: center;
            flex:1;
            height: 59upx;
            padding-left:28upx;
            border-radius: 7upx;
            background: #f4f4f4;
            .iconfont{
                color:#666;
            }
            .keyword{
                padding-left:20px;
                color:#999;
            }
        }
    }
</style>
