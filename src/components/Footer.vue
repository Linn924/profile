<template>
    <footer>
        <span>© 2021 LinnCooper</span>
    </footer>
</template>
<script>
export default {
    name:'Footer'
}
</script>
<style lang="less" scoped>
footer{
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span:first-child{
        color: #fff;
        font-size: 12px;
    }
}
</style>