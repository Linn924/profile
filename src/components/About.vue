<template>
    <div id="about">
        <h3>关于我</h3>
        <div class="line"></div>
        <div class="labelBox">
            <span>00后</span>
            <span>理科生</span>
            <span>文艺青年</span>
        </div>
        <div class="about">
            <p>我是LinnCooper。</p>
            <p>一名知识探索者、白日梦想家</p>
            <p>前端开发工程师</p>
            <p>强迫症、完美主义者</p>
            <p>就读于金陵科技学院</p>
            <p>喜欢探索自身未知的一切：</p>
            <p>热爱编程、科幻...</p>
            <p>白日梦想：</p>
            <p>想见识这世界的繁华！</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'About'
}
</script>
<style lang="less" scoped>
#about{
    height: 720px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 110px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3{
        font-weight: normal;
        font-size: 30px;
        color: rgb(60,60,60);
    }
    .line{
        width: 50px;
        height: 3px;
        background-color: #2468F2;
        margin: 20px 0;
    }
    .labelBox{
        display: flex;
        span{
            background: rgba(0,0,0,0.06);
            padding: 10px;
            margin: 0 5px;
            color: rgb(100,100,100);
            cursor: pointer;
            font-size: small;
            transition: all .25s;
            &:hover{box-shadow: 1px 2px 2px 1px rgba(0,0,0,.12);}
        }
    }
    .about{
        margin-top: 20px;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: rgb(90,90,90);
        p:not(:first-child):not(:last-child){margin: 8px 0;}
        p:first-child{margin-bottom: 8px;}
        p:last-child{margin-top: 8px;}
    }
}
</style>