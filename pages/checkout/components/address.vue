<template>
    <div class="checkout-address">
        <div class="address-left">
            <div class="left-top">
                <h4>邓海标</h4>
                <span>136******30</span>
            </div>
            <div class="left-bottom">
                <p>中国 广东 佛山 顺德 北滘镇莘村中学（528300）</p>
            </div>
        </div>
        <div class="address-right">
            <i class="iconfont icon-gengduo"></i>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
    }
</script>

<style lang="less" scoped>
    .checkout-address{
        display: flex;
        height: 214upx;
        padding:90upx 28upx 0 28upx;
        margin-bottom: 10upx;
        background: white;
        .address-left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex:1;
            .left-top{
                display: flex;
                justify-content: space-between;
                font-size: 28upx;
                font-weight: 600;
                color:#333;
            }
            .left-bottom{
                padding-top:20upx;
                font-size: 28upx;
                color:#666;
            }
        }
        .address-right{
            display: flex;
            align-items: center;
            flex-grow: 0;
            padding-left:20upx;
        }
    }
</style>
