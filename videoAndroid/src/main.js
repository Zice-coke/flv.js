// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store'
import router from './router'

import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);






import '../static/js/back.js'
import '../static/js/flexible.js'
//引入css

// import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'

// import VideoPlayer from 'vue-video-player'  // 无用

// import 'videojs-contrib-hls'
// Vue.use(VideoPlayer)


if(!Vue.localStorage.get('someNumber')){
  let num =[
    {
        "name" : "飞车",
        "src" : "http://tx2play1.douyucdn.cn/ulve/7722576rWHyhVf6Z_2000p.flv",
        "poster" : "https://rpic.douyucdn.cn/live-cover/roomCover/2020/04/13/60a4ec3d32497b2d2886c995320c7382_big.jpg/webpdy1"
    }    
  ]
  Vue.localStorage.set('someNumber',JSON.stringify(num))
}
  

if (process.env.MOCK) {    // 判断是否为mock模式
  require('./mock/index.js')
}
window.addEventListener('popstate', function(e){
  router.togoback()
},false )


//  this.$router.to('****')   this.$router.goBack()
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // Back,
  components: { App },
  template: '<App/>'
})
