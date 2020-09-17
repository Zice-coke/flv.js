<template>
  <div id="app">   
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">
        标签
      </van-tabbar-item>
      <van-tabbar-item replace to="/helloWorld" icon="search">
        标签
      </van-tabbar-item>
    </van-tabbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}

     
   
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;

  /* color: #2c3e50; */
  margin-top: 0.266667rem;
}
</style>
