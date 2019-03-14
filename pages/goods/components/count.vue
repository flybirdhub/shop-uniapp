<template>
    <div class="goods-count">
        <div class="goods-cell">
            <div class="cell-left">
                <span>数量：</span>
            </div>
            <div class="cell-mid">
                <span>1</span>
            </div>
            <div class="cell-right">
                <i class="iconfont icon-gengduo"></i>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

    export default {
    }
</script>

<style lang="less" scoped>
    .goods-count {
        margin-bottom: 10upx;
        background: white;
        .goods-cell{
            display: flex;
            min-height: 80upx;
            padding:0 28upx;
            .cell-left{
                display: flex;
                align-items: center;
                flex-basis: 93upx;
                span{
                    color:#666;
                }
            }
            .cell-mid{
                display: flex;
                align-items: center;
                flex:1;
            }
            .cell-right{
                display: flex;
                justify-content: flex-end;
                align-items: center;
                flex-basis: 40upx;
                i{
                    font-size: 24upx;
                    color:#666;
                }
            }
        }
    }
</style>
