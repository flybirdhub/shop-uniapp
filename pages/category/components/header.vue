<template>
    <view class="category-header border-1px-bottom">
        <view class="header-search">
            <text class="eosfont">&#xe60c;</text>
            <text class="keyword">润米超级品牌日</text>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

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
            .eosfont{
                color:#666;
            }
            .keyword{
                padding-left:20px;
                color:#999;
            }
        }
    }
</style>
