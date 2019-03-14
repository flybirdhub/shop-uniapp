<template>
    <div class="goods-instruction">
        <div class="goods-cell">
            <div class="cell-left">
                <span>说明：</span>
            </div>
            <div class="cell-mid">
                <div class="instruction">
                    <div class="instruction-item">
                        <i class="iconfont icon-xuanze1"></i>
                        <p>小米有品甄选精品</p>
                    </div>
                    <div class="instruction-item">
                        <i class="iconfont icon-xuanze1"></i>
                        <p>由 小米 发货并提供售后</p>
                    </div>
                    <div class="instruction-item">
                        <i class="iconfont icon-xuanze1"></i>
                        <p>支持7天无理由退货（请参考商品详情-常见问题）</p>
                    </div>
                </div>
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
    .goods-instruction{
        margin-bottom:10upx;
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
                .instruction{
                    padding:20upx 0;
                    .instruction-item{
                        display: flex;
                        i{
                            font-size: 24upx;
                            color:#ab8959;
                        }
                        p{
                            padding-left:5upx;
                            color:#333;
                        }
                        &:not(:first-child){
                            padding-top:20upx;
                        }
                    }
                }
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
