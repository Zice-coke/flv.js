<template>
  <div class="home">
      <van-cell-group >
      <van-field
        v-model="value"
        label="名称"
        left-icon="smile-o"
        right-icon="warning-o"
        placeholder="名称"
      />
      <van-field
        v-model="value1"
        label="相册"
        left-icon="like-o"
       
        placeholder="相册"
      />
      <van-field
        v-model="value2"
        clearable
        label="地址"
        left-icon="music-o"
         right-icon="warning-o"
        placeholder="地址"
      />
     
    </van-cell-group>
    <div class="save_button">
       <van-button round hairline  type="danger" @click="savename()" block> 保存地址</van-button>
        <div class="save_div"></div>
      <van-button round hairline  type="info" @click="removname()" block> 删除地址</van-button>
    </div>
   
           
      <div class="conten-botton"></div>
  </div>
</template>


<script>
import {mapMutations, mapGetters, mapState} from 'vuex'  // 引入map方法
import * as homeApi from 'api/home-api'
import { ERR_OK } from 'config/index'
import { Toast } from 'vant';


import  * as savejson from '../api/SaveJson'
var videolist =  require('../assets/douyu.json') 
export default {
  data () {
    return {
      num: 1,
      value:'',
      value1:'',
      value2:'',
      srclist:[],
    }
  },
  methods: {
      hello(){
        this.$router.togo('/HelloWorld')
      }
    ,
    ...mapMutations({            // 调用setNum方法
      setNum: 'SET_NUM'
    }),
    increase() {
      this.num++
      this.setNum(this.num)      // 将this.num转入setNum
    },
    savename(){
      if((!this.value=='')&&(!this.value2=='')){
            let num = {
            "name" :"",
            "src" : "",
            "poster" :""
          }
        num.name = this.value
        
        if(this.value1 ==''){
          num.poster = 'https://rpic.douyucdn.cn/live-cover/roomCover/2020/04/13/60a4ec3d32497b2d2886c995320c7382_big.jpg/webpdy1'
        }else{
          num.poster = this.value1
        }
        
        num.src ='http://tx2play1.douyucdn.cn/live/'+this.value2+'.flv'

        this.srclist = JSON.parse(this.$localStorage.get('someNumber')) 
        this.srclist.forEach(element => {
          if(element.name == this.value){
           this.srclist.splice(this.srclist.indexOf(element),1);
            return
          }
        });       
        this.srclist.push(num)
        this.$localStorage.set('someNumber', JSON.stringify(this.srclist))
        Toast({
          message:'添加成功',
          position :'bottom'
        })
        this.value = ''
        this.value1 = ''
        this.value2 = ''
      }else{
        Toast({
          message:'填写名称/地址',
          position :'bottom'
        })
      }
    },  
    removname(){
     if(!this.value == ''){
       let num   = this.value
      this.srclist = JSON.parse(this.$localStorage.get('someNumber')) 
      this.srclist.forEach(element => {
          if(element.name == num){               
            this.srclist.splice(this.srclist.indexOf(element),1);
            return;
          }
      });
        this.$localStorage.set('someNumber', JSON.stringify(this.srclist))
        Toast({
          message:'删除成功',
          position :'bottom'
        })
     }else{
       Toast({
          message:'填写名称/地址',
          position :'bottom'
        })
     }
         
    },
    
    login() {
        let params = {
            password: '*******',
            storeNo: '',
            userName: '*********'
        }
        homeApi.loginUserNo(params).then((res) => {
            let {data} = res
            console.log(data)
            if (data.success === ERR_OK) {
                // 请求成功操作，存储token
                this.increase();
               localStorage.setItem('token', data.value.token)                
            } else {
            
            }
          }).catch((err) => {
            console.log(err)
          })
        },
    GetNum(){
      console.log('start')
      Toast('提示内容');
      homeApi.Num().then((res) => {
        let {data} = res
       
       
        console.log(res)
        
         Toast(data.billboard.comment);
       // Toast(data.billboard);
       
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  computed: {
    // ...mapGetters([           // 通过getters获取state数据
    //   'number'
    // ]),
    ...mapState({                // 通过state获取state数据
      number: state => state.home.number
    })
  },
  mounted(){
    //this.increase();
   // this.login();
    window.addEventListener(
      "onorientationchange" in window ? "orientationchange" : "resize",
      function() {
        if (window.orientation === 90 || window.orientation === -90) {
            //想把下面的alert换成能够控制v-show的代码         
          console.log(window.orientation)        
        }     
      },
      false
      );
  }
}
</script>

<style scoped lang="less">
// @import '../styles/index.less';
// @import '../styles/variable.less';
// .page-content{
//   .mb(98);
// }
.home{
  margin-top: 2rem;
}
.save_button{
  margin: 0.533333rem;
  
}
.save_div{
    margin-top: 0.533333rem;
  }
.conten-botton{
  margin-bottom: 2rem;
}
</style>
  
