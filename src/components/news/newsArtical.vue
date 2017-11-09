<template>
  <div id="newsArtical">
    <h1>{{news.title}}</h1>
    <img :src="news.img">
  </div>
</template>
<script>
export default {
  name: 'newsArtical',
  data: () => ({
    news: {
      img: 'http://ofv795nmp.bkt.clouddn.com//upload/201504/16/201504161149414479.jpg',
      title: '1季度多家房企利润跌幅超50% 去库存促销战打响',
      time: '2017-08-09',
      clickCount: 2,
      id: 1
    }
  })
}
</script>
<style>
</style>
