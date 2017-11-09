<template>
  <div class="home">
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="~static/imgs/swipe1.jpg" /></mt-swipe-item>
      <mt-swipe-item><img src="~static/imgs/swipe2.jpg" /></mt-swipe-item>
    </mt-swipe>
    <div class="mui-content">
        <div class="mui-row">
            <div class="mui-col-sm-4 mui-col-xs-4">
                <router-link to="/news">
                  <img src="~static/imgs/menu3.png">
                  <p>新闻资讯</p>
                </router-link>
            </div>
            <div class="mui-col-sm-4 mui-col-xs-4">
              <router-link to="/photos">
                <img src="~static/imgs/menu4.png">
                <p>图片分享</p>
              </router-link>
            </div>
            <div class="mui-col-sm-4 mui-col-xs-4">
              <router-link to="/photos">
                <img src="~static/imgs/menu5.png">
                <p>商品展示</p>
              </router-link>
            </div>
        </div>
        <div class="mui-row">
            <div class="mui-col-sm-4 mui-col-xs-4">
              <router-link to="/photos">
                <img src="~static/imgs/menu6.png">
                <p>留言反馈</p>
              </router-link>
            </div>
            <div class="mui-col-sm-4 mui-col-xs-4">
              <router-link to="/photos">
                <img src="~static/imgs/menu9.png">
                <p>搜索资讯</p>
              </router-link>
            </div>
            <div class="mui-col-sm-4 mui-col-xs-4">
              <router-link to="/photos">
                <img src="~static/imgs/menu10.png">
                <p>联系我们</p>
              </router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  margin-top:5px;
  padding:0;
}
.mint-swipe{
  width:100%;
  height:250px;
}
.mint-swipe img{
  width:100%;
  height:250px;
}
.mui-content{
  background: #fff;
  text-align: center;
}
.mui-row img{
  width:52px;
  height:52px;
  margin-top:22px;
}
</style>
