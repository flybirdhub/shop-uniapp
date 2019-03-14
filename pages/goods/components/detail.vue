<template>
    <div class="goods-details" id="goods-details">
        <div class="details-tab">
            <div class="tab-item tab-item-active">
                <span>功能详情</span>
            </div>
            <div class="tab-item">
                <span>常见问题</span>
            </div>
        </div>
        <div class="details-content">
            <div class="content-item">
                <img src="http://yanxuan.nosdn.127.net/64181a4409dc4c4a116f0e0b6c6d8fb4.jpg" alt="">
            </div>
            <div class="content-item">
                <img src="            http://yanxuan.nosdn.127.net/fc5f3104ec3f8493c636d8552e3ce9bf.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
    }
</script>

<style lang="less" scoped>
    .goods-details{
        margin-bottom: 115upx;
        background: white;
        .details-tab{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 83upx;
            .tab-item{
                span{
                    color:#666;
                }
                &:not(:first-child){
                    margin-left:88upx;
                }
                &-active{
                    span{
                        font-weight: 700;
                        color:#aa8a59;
                    }
                }
            }
        }
        .details-content{
            .content-item{
                img{
                    display: block;
                    width: 100%;
                }
            }
        }
    }
</style>
