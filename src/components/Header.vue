<template>
    <div id="top">
        <header :class="{headerStyle:isHeader}">
            <div>
                <img :src="logo">
                <nav>
                    <a 
                        v-for="(item,index) in navList" 
                        :key="index"
                        :href="item.href"
                        :class="{extended:item.extended,shorten:item.shorten}"
                        @mouseenter="enter(item)"
                        @mouseleave="leave(item)">
                        {{item.title}}
                    </a>
                </nav>
            </div>
        </header>
    </div>
</template>
<script>
import {debounce} from '../assets/js/fn'
export default {
   data() {
      return {
          navList:[
              {href:'#top',title:'首页',extended:false,shorten:false},
              {href:'#about',title:'关于',extended:false,shorten:false},
              {href:'#work',title:'作品',extended:false,shorten:false},
              {href:'#log',title:'日志',extended:false,shorten:false}
          ],
          logo:require('../assets/image/logo.jpg'),
          isHeader:false
      }
   },
   mounted(){
       window.addEventListener('scroll',debounce(this.scroll,200))
   },
   methods:{
       enter(data){
           data.extended = true
           data.shorten = false
       },
       leave(data){
           data.extended = false
           data.shorten = true
       },
       scroll(){
           let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop
           if(scrollHeight > 500) this.isHeader = true
           else this.isHeader = false
       }
   }
}
</script>
<style lang="less" scoped>
#top{
    height: 100vh;
    font-family: Helvetica;
    header{
        width: 100%;
        height: 80px;
        >div{
            height: inherit;
            width: 78vw;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }  
    }
}

header{
    img{
        height: 60px;
        width: 60px;
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
}

a.extended::after{
    animation: extended .25s ease forwards;
}
a.shorten::after{
    animation: shorten .25s ease forwards;
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
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.12);
    a{color: #464646!important;}
}
</style>