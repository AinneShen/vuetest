import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home.vue'
import search from '@/components/Search.vue'
import member from '@/components/Member.vue'

import news from '@/components/news'
import newsArtical from '@/components/news/newsArtical'
import photos from '@/components/photos'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'mui-active',
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      component: home
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/member',
      component: member
    },
    {
      path: '/news',
      component: news
    },
    {
      path: '/newsArtical',
      component: newsArtical
    },
    {
      path: '/photos',
      component: photos
    }
  ]
})
