<template>
  <div id="app" class="mui-clearfix">
    <mt-header fixed title="天天购物">
      <router-link to="/" slot="left">
        <mt-button v-show="isshow" @click="goback" icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <router-view></router-view>
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/Home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-email">
				</span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-contact">
					<span ref="badge" id="badge" class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isshow: false
    }
  },
  watch: {
    '$route' (newRoute, oldRoute) {
      if (newRoute.path !== '/Home') {
        this.isshow = true
      } else {
        this.isshow = false
      }
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
#app{
  padding-top:40px;
  padding-bottom: 50px;
}
.mint-header.is-fixed{
  z-index: 10;
}
</style>
