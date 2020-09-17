<template>
    <div >
      <video   
        name="videoId"
        controls = "true"
        class="videostyle" 
        :poster="poster"     
        >
        
        </video>
    </div>
</template>

<script>
import flvjs from 'flv.js'
    export default {
        props:{      
            videoSrc:{
              type:String,
              required:true
            },
            Poster:{
              type:String,
              required:true
            },
            Index: 0,      
        },
        data(){
          return{ 
            isfall: true,
            videosrc : this.videoSrc,
            poster : this.Poster,
            index : this.Index,
          }
        },
        methods:{
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
            cancelplay() {
              var _this = this
              _this.flvPlayer.pause();
              _this.flvPlayer.unload();
              _this.flvPlayer.detachMediaElement();
              _this.flvPlayer.destroy();
              // _this.flvPlayer = null;
            },
             Videostate(ele) {
               var _this = this
                ele.addEventListener('play', function () {//播放开始执行的函数                 
                  _this.flvPlayer.load();
                  _this.flvPlayer.play();
                },false);
                ele.addEventListener('pause', function () {//暂停开始执行的函数
                  _this.cancelplay();
                   _this.flv_load(_this.videosrc);          
                },false);
                 ele.addEventListener('loadeddata', function () {//缓存        
                  _this.flvPlayer.pause();
                  _this.flvPlayer.unload();                                    
                },false);
                ele.addEventListener('webkitfullscreenchange', function(e) {              
                  if(ele.webkitDisplayingFullscreen){
                        plus.screen.lockOrientation( 'landscape');          
                  }else{         
                    plus.screen.lockOrientation( 'portrait-primary');   
                  }                   
                },false)   
            },
            
        },
      mounted(){
        var videoElement = document.getElementsByName('videoId')[this.index];
        this.flv_load(this.videosrc);
          this.flvPlayer.on(flvjs.Events.ERROR, (errType, errDetail) => {  //地址错误更改             
            if(errDetail){                             
                this.videosrc='http://tx2play1.douyucdn.cn/ulve/7722576rWHyhVf6Z_2000p.flv'              
                this.flv_load(this.videosrc);  
            }           
          },false);

        this.Videostate(videoElement);      
      },
   
    }
</script>
<style scoped lang="less">
@import '../styles/index.less';
@import '../styles/variable.less';
.videostyle{
  // .mb(98);
  // width:2rem;
  height: 5rem;
}

</style>