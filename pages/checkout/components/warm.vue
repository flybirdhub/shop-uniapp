<template>
    <div class="account-warm">
        <div class="warm-text">
            <p>公告：任何索要账户、密码或要求转账等均是诈骗行为。提高安全意识，谨防诈骗！</p>
        </div>
        <div class="warm-close">
            <i class="iconfont icon-jinggao"></i>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .account-warm{
        position: fixed;
        top:44px;
        left:0;
        display: flex;
        width:100%;
        box-sizing: border-box;
        height: 90upx;
        padding:0 28upx;
        background: #f67f79;
        color:white;
        .warm-text{
            display: flex;
            align-items: center;
        }
        .warm-close{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-basis: 70upx;
        }
    }
</style>
