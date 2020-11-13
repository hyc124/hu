<template>
    <div>
        <div class="box"></div>
        <van-grid :border="false" :column-num="3">
            <van-grid-item>
                <span>huhu</span>
            </van-grid-item>
            <van-grid-item>
                <span>huhu</span>
            </van-grid-item>
            <van-grid-item>
                <span>huhu</span>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style lang="less" scoped>
    .box{
        width: 100px ;
        height: 100px ;
        background-color: red;
    }
</style>