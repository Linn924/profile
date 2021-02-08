<template>
    <div id="work">
        <h3>我的作品</h3>
        <div class="line"></div>
        <nav>
            <a href="http://home.linncode.cn" target="_blank">
                <img src="../assets/image/home.jpg" alt="">
                <div class="introduce">
                    <p>简约首页</p>
                    <p>简单美观的浏览器起始页</p>
                    <p>全平台 线上应用</p>
                </div>
            </a>
            <a href="http://nav.linncode.cn" target="_blank">
                <img src="../assets/image/work.jpg" alt="">
                <div class="introduce">
                    <p>简约导航</p>
                    <p>简单美观的导航页</p>
                    <p>全平台 线上应用</p>
                </div>
            </a>
            <a href="http://blog.linncode.cn" target="_blank">
                <img src="../assets/image/blog.jpg" alt="">
                <div class="introduce">
                    <p>简约博客</p>
                    <p>简单美观的个人博客</p>
                    <p>全平台 线上应用</p>
                </div>
            </a>
            <a href="http://blogManage.linncode.cn" target="_blank">
                <img src="../assets/image/manage.jpg" alt="">
                <div class="introduce">
                    <p>简约博客后台管理</p>
                    <p>博客管理系统</p>
                    <p>全平台 线上应用</p>
                </div>
            </a>
        </nav>
    </div>
</template>
<script>
export default {
    name:'Work'
}
</script>
<style lang="less" scoped>
#work{
    min-height: 860px;
    background-color: #F5F5F5;
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
    nav{
        width: 1000px;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        a{
            display: inline-block;
            width: 300px;
            height: 250px;
            margin: 0 15px 30px;
            background: white;
            box-shadow: rgb(0 0 0 / 3%) 0px 5px 10px;
            cursor: pointer;
            transition: all .25s;
            &:hover{box-shadow: 2px 4px 2px 1px rgba(0,0,0,.12);}
            img{
                width: 100%;
                height: 160px;
            }
        }
    }
}
.introduce{
    width: 100%;
    height: 90px;
    box-sizing: border-box;
    padding: 15px 20px;
    p:first-child{
        color: #000;
        font-size: 15px;
        font-weight: bold;
    }
    p:nth-child(2){
        color: #888;
        font-size: small;
        line-height: 10px;
        white-space: nowrap;
        margin: 5px 0 10px 0;
    }
    p:last-child{
        font-size: 11px;
        line-height: 15px;
        color: rgba(0,0,0,0.5);
    }
}
@media screen and(max-width:1200px){
    nav{
        width: 660px!important;
    }
}
@media screen and(max-width:680px){
    nav{
        width: 320px!important;
    }
}
</style>