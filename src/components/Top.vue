<template>
    <div id="top">
        <header :class="{headerStyle:isHeader}">
            <h2>LinnCooper</h2>
            <nav>
                <a  
                    v-for="(item,index) in navList" 
                    :key="index"
                    href="javascript:void(0)"
                    :class="{extended:item.extended,shorten:item.shorten}"
                    @mouseenter="enter(item)"
                    @mouseleave="leave(item)"
                    @click="move(item.href)">
                    {{item.title}}
                </a>
            </nav>
            <i class="fa fa-bars" @click="open"></i>
        </header>
        <main>
            <div class="introduce">
                <h1>行思坐忆</h1>
                <div class="line"></div>
                <h2>
                    <span style="color:rgba(255,255,255,.6)">/*</span>
                    这里是LinnCooper的个人主页
                    <span style="color:rgba(255,255,255,.6)">*/</span>
                </h2>
            </div>
        </main>
        <footer>
            <div class="triangle" @click="move('about')"></div>
        </footer>
        <Drawer ref="drawer" :move="move"></Drawer>
        <transition name="mask">
            <div class="mask" v-show="drawer" @click="close"></div>
        </transition>
    </div>
</template>
<script>
import Drawer from './Drawer'
export default {
    name:'Top',
    components:{
        Drawer
    },
    props:{
        isHeader:{
            type:Boolean,
            required:true
        },
        move:{
            type:Function,
            required:true
        }
    },
    data() {
        return {
            navList:[
                {href:'top',title:'首页',extended:false,shorten:false},
                {href:'about',title:'关于',extended:false,shorten:false},
                {href:'work',title:'作品',extended:false,shorten:false}
            ],
            drawer:false
        }
    },
    methods:{
        enter(data){
            data.extended = true
            data.shorten = false
        },
        leave(data){
            data.extended = false
            data.shorten = true
            setTimeout(() => {data.shorten = false},350)
        },
        open(){
            this.$refs.drawer.open()
            this.drawer = true
        },
        close(){
            this.$refs.drawer.close()
            this.drawer = false
        }
    }
}
</script>
<style lang="less" scoped>
@time:.3s;
#top{
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: Helvetica;
    position: relative;
    background-color: rgba(0,0,0,.12);
    header{
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
        height: 80px;
        width: 78vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    main{
        flex: 1;
        position: relative;
        .introduce{
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
    footer{
        height: 80px;
        width: inherit;
        position: relative;
        .triangle{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%) rotate(-135deg);
            width: 25px;
            height: 25px;
            border: 3px solid #ccc;
            clip: rect(0,25px,25px,0);
            cursor: pointer;
            transition: color @time;
            &:hover{border: 3px solid #fff;}
        }
    }
    .mask{
        height: 100vh;
        width: 100vw;
        position: fixed;
        background-color: rgba(0,0,0, .5);
        z-index: 998;
    }
}

header{
    h2{
        color: #fff;
        font-size: 30px;
    }
    nav{
        display: flex;
        a{
            color: #fff;
            font-size: 15px;
            margin-right: 60px;
            padding: 10px 0;
            position: relative;
            &:last-child{margin-right:0;}
            &::after{
                content: '';
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                height: 2px;
                background-color: #2468F2;
            }
        }
    }
    i{
        font-size: 24px;
        color: #FFF;
        cursor: pointer;
        transition: color @time;
        &:hover{color: #2468F2;}
        display: none;
    }
}

.introduce{
    h1{
        color: #fff;
        font-size: 75px;
        font-weight: normal;
    }
    .line{
        width: 70px;
        height: 4px;
        background-color: #2468F2;
        margin: 30px 0;
    }
    h2{
        color: #fff;
        font-size: 15px;
        font-weight: normal;
    }
}

a.extended::after{
    animation: extended @time ease forwards;
}
a.shorten::after{
    animation: shorten @time ease forwards;
}
@keyframes extended {
    from{width: 0;}
    to{width: 100%;}
}
@keyframes shorten {
    from{width: 100%;}
    to{width: 0%;}
}
.headerStyle{
    position: fixed!important;
    h2{color: #464646!important;}
    i{color: #464646!important;}
    a{color: #464646!important;}
    &::before{
        content:"";
        position: absolute;
        top: 0;
        left: -14%;
        width: 100vw;
        height: inherit;
        background-color: #fff;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 20px;
        z-index: -1;
    }
}

.mask-enter,
.mask-leave-to{opacity: 0;}
.mask-enter-active
.mask-leave-active{transition: all @time;} 

@media screen and (max-width:760px){
    header i{
        display: block;
    }
    header nav{
        display: none;
    }
    main h1{
        font-size: 60px!important;
    }
}
@media screen and (max-width:550px){
    main h1{
        font-size: 45px!important;
    }
    main h2{
        font-size: 12px!important;
    }
}
</style>