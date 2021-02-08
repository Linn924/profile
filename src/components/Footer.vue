<template>
    <footer>
        <span>© 2021 LinnCooper</span>
        <span>苏ICP备20023864号</span>
    </footer>
</template>
<script>
export default {
    name:'Footer'
}
</script>
<style lang="less" scoped>
footer{
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span:first-child{
        color: #fff;
        font-size: 12px;
        margin-bottom: 5px;
    }
    span:last-child{
        color: rgba(255,255,255,0.5);
        font-size: 12px;
    }
}
</style>