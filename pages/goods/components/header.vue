<template>
    <div class="goods-header">
        <div class="header-left">
            <i class="iconfont icon-fanhui" @click="back"></i>
        </div>
        <div class="header-middle">
            <div class="middle-item middle-item-active">
                <span>商品</span>
            </div>
            <div class="middle-item">
                <span>详情</span>
            </div>
            <div class="middle-item">
                <span>评价</span>
            </div>
        </div>
        <div class="header-right">
            <i class="iconfont icon-shouye"></i>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
    }
</script>

<style lang="less" scoped>
    .goods-header{
        position: fixed;
        top:0;
        left:0;
        width:100%;
        display: flex;
        justify-content: center;
        height: 88upx;
        z-index: 10;
        .header-left {
            position: absolute;
            top: 50%;
            left: 27upx;
            transform: translateY(-50%);
            i{
                display: inline-block;
                width:60upx;
                height: 60upx;
                text-align: center;
                line-height: 60upx;
                border-radius: 30upx;
                background: RGBA(0, 0, 0, .1);
                color:white;
            }
        }
        .header-middle{
            display: flex;
            .middle-item{
                position: relative;
                display: flex;
                align-items: center;
                color:#666;
                &:not(:first-child){
                    margin-left: 34upx;
                }
                &-active{
                    span{
                        color:#aa8a59;
                    }
                    &::after {
                        position: absolute;
                        content: '';
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 0;
                        border-bottom: 3upx solid #aa8a59;
                    }
                }
            }
        }
        .header-right {
            position: absolute;
            top: 50%;
            right: 27upx;
            transform: translateY(-50%);
            i{
                display: inline-block;
                width:60upx;
                height: 60upx;
                text-align: center;
                line-height: 60upx;
                border-radius: 30px;
                background: RGBA(0, 0, 0, .1);
                color:white;
                &:first-child{
                    margin-right:30upx;
                }
            }
        }
    }
</style>
