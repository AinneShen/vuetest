<template>
  <div id="news">
    <ul class="newsList">
      <li class="new-item" v-for="item in news">
        <!-- <router-link v-bind="{to:'/news/'+item.id}"> -->
        <router-link :to="{path:'/newsArtical',query:{id:item.id}}">
          <div class="item-img">
            <img :src="item.img" :alt="item.title">
          </div>
          <div class="item-info">
            <div class="item-title">{{item.title}}</div>
            <div class="item-time"><span class="ctime">发表时间:{{item.time}}</span><span class="ccount">点击:{{item.clickCount}}</span></div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'news',
  data: () => ({
    news: [
      {
        img: 'http://ofv795nmp.bkt.clouddn.com//upload/201504/16/201504161149414479.jpg',
        title: '1季度多家房企利润跌幅超50% 去库存促销战打响',
        time: '2017-08-09',
        clickCount: 2,
        id: 1
      },
      {
        img: 'http://ofv795nmp.bkt.clouddn.com//upload/201504/16/201504161205596364.jpg',
        title: '买房还是炒股，2015年买房无法拒绝的5大理由',
        time: '2017-08-09',
        clickCount: 2,
        id: 2
      }
    ]
  })
}
</script>
<style>
.newsList{
  padding:0;
  margin:0;
}
.new-item{
  width:100%;
  height:69px;
  padding:11px 15px;
  list-style:none;
  border-bottom: 1px solid #c8c7cc;
}
.new-item .item-img{
  width:42px;
  height:42px;
  float: left;
  margin-right: 10px;
}
.new-item .item-img img{
  width:42px;
  height:42px;
}
.item-title{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #000;
  font-size: 17px;
  line-height: 21px;
}
.item-time{
  margin-top:5px;
  font-size: 14px;
  color: #0094ff;
}
.ctime{
  float: left;
}
.ccount{
  float: right;
}
</style>
