<template>
    <div class="transaction-result">
        <i class="eosfont">&#xe62e;</i>
        <h4>交易成功</h4>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="less" scoped>
    .transaction-result{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 355upx;
        margin-bottom: 10upx;
        background: white;
        i{
            display: inline-block;
            width:175upx;
            height: 175upx;
            line-height: 175upx;
            text-align: center;
            font-size: 175upx;
            color:#00c800;
        }
        h4{
            font-size: 34upx;
            color:#666;
        }
    }
</style>
