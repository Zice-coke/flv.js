<template>
  <div class="container">  
       
        <div v-for="(item,index) in viulst" :key="index" >            
             <videoflv  :videoSrc="item.src" :Poster="item.poster" :Index="index"></videoflv>
             <van-divider>{{item.name}} </van-divider>
        </div>
        
    </div>
  
</template>

<script>

import videoflv from '../components/Flvjs'


export default {
 components:{
    videoflv
 },
  data () {
    return {
       reFresh: true,
      viulst: [],
    }
  },
  methods:{
    getvideolist(){
      this.viulst = JSON.parse(this.$localStorage.get('someNumber'))
    }
  },
  watch:{
    // videoSrc(){
    //               this.reFresh= false
    //               this.$nextTick(()=>{                  
    //                 this.reFresh = true
    //             })
    //         }
  },
  mounted(){
   this.getvideolist();
  },
  
}
</script>

<style scoped lang="less">
@import '../styles/index.less';
@import '../styles/variable.less';
.container{
  margin-top: 0.266667rem;
  margin-bottom: 2rem; 
}
</style>