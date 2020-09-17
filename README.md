# vue+flv.js+flexible Android移动端直播流

利用vue框架创建项目
主要对于以.flv结尾的直播地址，利用VueLocalStorage 进行本地的存储直播地址和图片。
里面也加入了vue-video-player 解析的直播地址 目前本人发现只是它无法解析.flv。

本人获取的是斗鱼的直播地址，由于需要爬去斗鱼的数据，这个不添加了 直接出地址
`http://tx2play1.douyucdn.cn/ulve/+'添加你获取房间的加密播放地址'+.flv`
格式 `http://tx2play1.douyucdn.cn/ulve/7722576rWHyhVf6Z_2000p.flv`  

vue创建项目就不说了，不会的也没必要看里面的内容了，直接下载使用吧。
# flexible
简单提一下做移动端适配的flexble
网上下载flexble 复制到项目里，在mian.js 引入即可。
别忘了安装less，项目有一个style文件夹，里面写好了初始样式，复制自己项目就能使用。  
引入方法  
@import '../styles/index.less';  
@import '../styles/variable.less';  
# px 转换 rem
vscode 里面有个插件cssrem 。它会把你px大小转换成适配的rem大小，它配合flexble强烈推荐还是很好用了。
# flv.js  

安装flv.js  
`npm install --save flv.js`  
使用  
引入` import flvjs from 'flv.js'`     
vue 页面使用  
`<video   name="videoId" controls = "true" class="videostyle"  :poster="poster"> </video> `   
创建 flv.js  

flv_load(playurl) {  
  var _this = this  
    if (flvjs.isSupported()) {
      var videoElement = document.getElementsByName('videoId')[_this.index];               
      _this.flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: playurl,
        isLive: true,
        cors: true,                
        enableWorker: true,
        enableStashBuffer: false,
        stashInitialSize: 356,
        autoCleanupSourceBuffer:true
      });
      _this.flvPlayer.attachMediaElement(videoElement);
      _this.flvPlayer.load();
      // _this.flvPlayer.play();
    }
  },
  

事件监听  
videoElement.addEventListener('play', function () {  //播放开始执行的函数                   
                  _this.flvPlayer.load();  
                  _this.flvPlayer.play();  
                },false);  

全屏事件的监听  
这里用浏览器手机端是会报错的，打包好就没事了。  
videoElement.addEventListener('webkitfullscreenchange', function(e) {                
                  if(ele.webkitDisplayingFullscreen){  
                        plus.screen.lockOrientation( 'landscape');            
                  }else{           
                    plus.screen.lockOrientation( 'portrait-primary');     
                  }                     
                },false)  

# VueLocalStorage  
本来打算用cookie 但是创建项目后没有写后端，只有前端。cookie没有存储，可能是本人的原因吧。  
VueLocalStorage还可以吧 不写后端的话 这个当存储还是比cookie 好点的。  
安装 `npm install --save vue-localstorage `  
在mian.vue 引入  `import VueLocalStorage from 'vue-localstorage' `
`Vue.use(VueLocalStorage)`  
使用  
设置数值  `this.$localStorage.set('someNumber','123')`  
获取数值  `this.$localStorage.get('someNumber')`  

# 项目的使用  
cd videoAndroid  
npm install  
npm run dev  
# 叙述  
总体来说不是能难，主要你得会查找直播的地址，还有监听事件。  
打包来说 我是本地打包 需要两个工具 HBuilder X 和Android Studio 还有一个包 是uni-app 提供的离线打包Android平台App本地离线打包 用里面打包好的 你替换就可以。
