<template>
    <view class="order">
        <order-type></order-type>
        <order-receive></order-receive>
    </view>
</template>

<script>
    import type from './components/type'
    import receive from './components/receive'
    export default {
        components: {
            orderType: type,
            orderReceive: receive
        }
    }
</script>