<template>
  <div id="app">
    <Top :isHeader="isHeader" :move="move"></Top>
    <About></About>
    <Work></Work>
    <Footer></Footer>
  </div>
</template>

<script>
import Top from './components/Top'
import About from './components/About'
import Work from './components/Work'
import Footer from './components/Footer'
import {debounce} from './assets/js/fn'
export default {
  name:'App',
  components:{
    Top,
    About,
    Work,
    Footer
  },
  data(){
    return {
      isHeader:false
    }
  },
  mounted(){
       window.addEventListener('scroll',debounce(this.scroll,50))
       document.oncontextmenu =  () => {event.returnValue = false}
   },
  methods:{
    scroll(){
      let height = document.getElementById('about').offsetTop - 80
      let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop
      if(scrollHeight >= height) this.isHeader = true
      else this.isHeader = false
    },
    move(dom){
      let height = document.getElementById(dom).offsetTop - 80
      window.scroll({top:height,behavior:'smooth'})
    }
  }
}
</script>

