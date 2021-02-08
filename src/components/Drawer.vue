<template>
    <div id="drawer" :class="{opened:isOpened,folded:isFolded}">
        <nav>
            <span 
                v-for="(item,index) in navList" 
                :key="index" 
                @click="move(item.href)">
                {{item.title}}
            </span>
        </nav>
    </div>
</template>

<script>
export default {
    name:'Drawer',
    props:['drawer','move'],
    data(){
        return {
            isOpened:false,
            isFolded:false,
            navList:[
                {href:'top',title:'首页'},
                {href:'about',title:'关于'},
                {href:'work',title:'作品'}
            ],
        }
    },
    watch:{
        'drawer'(val){
            if(val){
                this.isOpened = true
                this.isFolded = false
            }else{
                this.isOpened = false
                this.isFolded = true
            }
        }
    }
}
</script>

<style lang="less" scoped>
#drawer{
    position: fixed;
    top: 0;
    right: -200px;
    height: 100vh;
    width: 200px;
    box-sizing: border-box;
    background-color: #fff;
    nav{
        display: flex;
        flex-direction: column;
        margin-top: 80px;
        span{
            width: 100%;
            box-sizing: border-box;
            color: rgba(0,0,0,0.6);
            font-size: small;
            padding: 15px 15px;
            cursor: pointer;
            transition: all .15s;
            &:hover{
                color: #666;
                background-color: #ddd;
            }
        }
    }
}
.opened{
    animation: opened .25s ease forwards;
}
.folded{
    animation: folded .25s ease forwards;
}
@keyframes opened {
    from{right: -200px;}
    to{right: 0;}
}
@keyframes folded {
    from{right: 0;}
    to{right: -200px;}
}
</style>