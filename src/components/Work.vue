<template>
    <div id="work">
        <h3>我的作品</h3>
        <div class="line"></div>
        <nav>
            <a href="http://home.linncode.cn" target="_blank">
                <img src="../assets/image/home.jpg" alt="">
                <div class="introduce">
                    <p>简约首页</p>
                    <p>简单美观的浏览器起始页，搭配简约导航，使用起来效果更佳哦！</p>
                </div>
            </a>
            <a href="http://nav.linncode.cn" target="_blank">
                <img src="../assets/image/nav.jpg" alt="">
                <div class="introduce">
                    <p>简约导航</p>
                    <p>方便实用的导航站点，搭配简约首页，使用起来效果更佳哦！</p>
                </div>
            </a>
            <a href="http://blog.linncode.cn" target="_blank">
                <img src="../assets/image/blog.jpg" alt="">
                <div class="introduce">
                    <p>简约博客</p>
                    <p>输出博客文章的站点。例如：搜索框毛玻璃效果等。</p>
                </div>
            </a>
            <a href="http://blogManage.linncode.cn" target="_blank">
                <img src="../assets/image/manage.jpg" alt="">
                <div class="introduce">
                    <p>简约博客后台管理</p>
                    <p>对简约博客文章、分类、标签、评论等功能的管理。</p>
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
            height: 260px;
            margin: 0 15px 30px;
            background: white;
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
    height: 100px;
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
        line-height: 1.5;
        margin: 5px 0 10px 0;
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