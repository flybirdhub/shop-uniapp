<template>
    <div class="checkout-pay-choice">
        <div class="pay-choice-item">
            <div class="item-left">
                <i class="iconfont icon-weixin1" style="color: #00c800;"></i>
                <span>微信支付</span>
                <label>推荐</label>
            </div>
            <div class="item-right">
                <i class="iconfont icon-gengduo" style="color:#cd363d;"></i>
            </div>
        </div>
        <div class="pay-choice-item border-1px-top">
            <div class="item-left">
                <i class="iconfont icon-zhifubao" style="color: #00aaef;"></i>
                <span>支付宝支付</span>
            </div>
            <div class="item-right">
                <i class="iconfont icon-gengduo"></i>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .checkout-pay-choice{
        padding:0 28upx;
        margin-bottom: 10upx;
        background: white;
        .pay-choice-item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 88upx;
            padding-left:10upx;
            .item-left{
                display: flex;
                align-items: center;
                i{
                    font-size: 50upx;
                }
                span{
                    display: inline-block;
                    padding:0 20upx;
                    font-size: 28upx;
                    font-weight: 600;
                    color:#333;
                }
                label{
                    display: inline-block;
                    height: 33upx;
                    line-height: 33upx;
                    padding:0 10upx;
                    border-radius: 5upx;
                    font-size: 28upx;
                    background: #cd363d;
                    color:white;
                }
            }
        }
    }
</style>
