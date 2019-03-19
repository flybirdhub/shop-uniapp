<template>
    <div class="page-footer">
        <div class="footer-version">
            <span>下载APP</span>
            <span>电脑版</span>
        </div>
        <div class="footer-copyright">
            <text>网易公司版权所有 © 1997-2018</text>
            <text>食品经营许可证：JY13301080111719</text>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="less" scoped>
    @import '../config/css/index';
    .page-footer{
        padding:54upx 20upx 28upx 20upx;
        margin-top: 20upx;
        background: #414141;
        .footer-version{
            display: flex;
            justify-content: center;
            color:white;
            span{
                display: inline-block;
                height: 60upx;
                width: 166upx;
                text-align: center;
                line-height: 60upx;
                box-sizing: border-box;
                border:1upx solid white;
                font-size: 32upx;
                &:last-child{
                    margin-left:50upx;
                }
            }
        }
        .footer-copyright{
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
            justify-content: center;
            margin-top:36upx;
            color:#999;
            text{
                line-height: 40upx;
                text-align: center;
                font-size: 28upx;
            }
        }
    }
</style>
