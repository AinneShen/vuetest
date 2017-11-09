<template>
  <div id="photos">
    <ul class="photosList">
      <li class="photo-item" v-for="(img, index) in imgs">
        <img v-lazy="img.img_url">
        <div class="like">
          <span @click="handleCollect(index)" :class="['mui-icon', 'mui-icon-star', { 'collect': img.isCollect}]">{{img.collect}}</span>
          <span @click="changeChecked(index)" :class="['mui-icon', 'mui-icon-checkmarkempty', { 'checked': img.ischecked}]"></span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'photos',
  data: () => ({
    imgs: [
      {isCollect: false, ischecked: true, img_url: 'https://b-ssl.duitang.com/uploads/people/201710/30/20171030150044_s8kd2.thumb.224_224_c.jpeg', id: 1, collect: 614},
      {isCollect: true, ischecked: false, img_url: 'https://b-ssl.duitang.com/uploads/people/201710/20/20171020114702_CvcZ5.thumb.224_224_c.jpeg', id: 2, collect: 123},
      {isCollect: false, ischecked: true, img_url: 'https://b-ssl.duitang.com/uploads/people/201710/25/20171025143009_jnwvk.thumb.224_224_c.jpeg', id: 3, collect: 453},
      {isCollect: true, ischecked: false, img_url: 'https://b-ssl.duitang.com/uploads/people/201710/25/20171025104506_aZWkL.thumb.224_224_c.jpeg', id: 4, collect: 614},
      {isCollect: false, ischecked: false, img_url: 'https://b-ssl.duitang.com/uploads/item/201710/16/20171016020137_ZjYLs.thumb.224_224_c.jpeg', id: 5, collect: 234},
      {isCollect: false, ischecked: true, img_url: 'https://b-ssl.duitang.com/uploads/item/201710/16/20171016061402_wB5dP.thumb.224_224_c.jpeg', id: 6, collect: 342},
      {isCollect: false, ischecked: false, img_url: 'https://b-ssl.duitang.com/uploads/item/201710/16/20171016020141_cL2nV.thumb.224_224_c.jpeg', id: 7, collect: 614},
      {isCollect: true, ischecked: false, img_url: 'https://b-ssl.duitang.com/uploads/item/201710/15/20171015163129_tunQZ.thumb.224_224_c.jpeg', id: 8, collect: 786},
      {isCollect: true, ischecked: false, img_url: 'https://b-ssl.duitang.com/uploads/item/201710/15/20171015163129_tunQZ.thumb.224_224_c.jpeg', id: 8, collect: 786},
      {isCollect: true, ischecked: false, img_url: 'http://img3.duitang.com/uploads/blog/201505/04/20150504163140_QZcnX.thumb.224_224_c.jpeg', id: 9, collect: 564},
      {isCollect: false, ischecked: true, img_url: 'https://b-ssl.duitang.com/uploads/people/201710/25/20171025143009_jnwvk.thumb.224_224_c.jpeg', id: 10, collect: 453},
      {isCollect: true, ischecked: false, img_url: 'https://b-ssl.duitang.com/uploads/people/201710/25/20171025104506_aZWkL.thumb.224_224_c.jpeg', id: 11, collect: 614},
      {isCollect: false, ischecked: true, img_url: 'https://b-ssl.duitang.com/uploads/people/201710/25/20171025143009_jnwvk.thumb.224_224_c.jpeg', id: 12, collect: 453},
      {isCollect: true, ischecked: false, img_url: 'https://b-ssl.duitang.com/uploads/people/201710/25/20171025104506_aZWkL.thumb.224_224_c.jpeg', id: 13, collect: 614},
      {isCollect: false, ischecked: true, img_url: 'https://b-ssl.duitang.com/uploads/people/201710/30/20171030150044_s8kd2.thumb.224_224_c.jpeg', id: 1, collect: 614},
      {isCollect: true, ischecked: false, img_url: 'https://b-ssl.duitang.com/uploads/people/201710/20/20171020114702_CvcZ5.thumb.224_224_c.jpeg', id: 2, collect: 123},
      {isCollect: false, ischecked: true, img_url: 'https://b-ssl.duitang.com/uploads/people/201710/25/20171025143009_jnwvk.thumb.224_224_c.jpeg', id: 3, collect: 453},
      {isCollect: true, ischecked: false, img_url: 'https://b-ssl.duitang.com/uploads/people/201710/25/20171025104506_aZWkL.thumb.224_224_c.jpeg', id: 4, collect: 614},
      {isCollect: false, ischecked: false, img_url: 'https://b-ssl.duitang.com/uploads/item/201710/16/20171016020137_ZjYLs.thumb.224_224_c.jpeg', id: 5, collect: 234},
      {isCollect: false, ischecked: true, img_url: 'https://b-ssl.duitang.com/uploads/item/201710/16/20171016061402_wB5dP.thumb.224_224_c.jpeg', id: 6, collect: 342},
      {isCollect: false, ischecked: false, img_url: 'https://b-ssl.duitang.com/uploads/item/201710/16/20171016020141_cL2nV.thumb.224_224_c.jpeg', id: 7, collect: 614},
      {isCollect: true, ischecked: false, img_url: 'https://b-ssl.duitang.com/uploads/item/201710/15/20171015163129_tunQZ.thumb.224_224_c.jpeg', id: 8, collect: 786},
      {isCollect: false, ischecked: true, img_url: 'https://b-ssl.duitang.com/uploads/people/201710/30/20171030150044_s8kd2.thumb.224_224_c.jpeg', id: 1, collect: 614},
      {isCollect: true, ischecked: false, img_url: 'https://b-ssl.duitang.com/uploads/people/201710/20/20171020114702_CvcZ5.thumb.224_224_c.jpeg', id: 2, collect: 123},
      {isCollect: false, ischecked: true, img_url: 'https://b-ssl.duitang.com/uploads/people/201710/25/20171025143009_jnwvk.thumb.224_224_c.jpeg', id: 3, collect: 453},
      {isCollect: true, ischecked: false, img_url: 'https://b-ssl.duitang.com/uploads/people/201710/25/20171025104506_aZWkL.thumb.224_224_c.jpeg', id: 4, collect: 614},
      {isCollect: false, ischecked: false, img_url: 'https://b-ssl.duitang.com/uploads/item/201710/16/20171016020137_ZjYLs.thumb.224_224_c.jpeg', id: 5, collect: 234},
      {isCollect: false, ischecked: true, img_url: 'https://b-ssl.duitang.com/uploads/item/201710/16/20171016061402_wB5dP.thumb.224_224_c.jpeg', id: 6, collect: 342},
      {isCollect: false, ischecked: false, img_url: 'https://b-ssl.duitang.com/uploads/item/201710/16/20171016020141_cL2nV.thumb.224_224_c.jpeg', id: 7, collect: 614},
      {isCollect: true, ischecked: false, img_url: 'https://b-ssl.duitang.com/uploads/item/201710/15/20171015163129_tunQZ.thumb.224_224_c.jpeg', id: 8, collect: 786},
      {isCollect: true, ischecked: false, img_url: 'https://b-ssl.duitang.com/uploads/item/201601/06/20160106185019_EBANM.thumb.224_0.jpeg', id: 8, collect: 786},
      {isCollect: true, ischecked: false, img_url: 'https://b-ssl.duitang.com/uploads/item/201507/02/20150702185545_RNsCZ.thumb.224_0.jpeg', id: 8, collect: 786},
      {isCollect: true, ischecked: false, img_url: 'https://b-ssl.duitang.com/uploads/item/201507/20/20150720215654_EZNBW.thumb.224_0.jpeg', id: 8, collect: 786},
      {isCollect: true, ischecked: false, img_url: 'https://b-ssl.duitang.com/uploads/item/201510/12/20151012111137_YsRQT.thumb.224_0.jpeg', id: 8, collect: 786},
      {isCollect: true, ischecked: false, img_url: 'https://b-ssl.duitang.com/uploads/item/201509/21/20150921232630_SXQ3G.thumb.224_0.jpeg', id: 8, collect: 786},
      {isCollect: true, ischecked: false, img_url: 'https://b-ssl.duitang.com/uploads/item/201503/14/20150314212909_FVyWa.thumb.224_0.jpeg', id: 8, collect: 786},
      {isCollect: true, ischecked: false, img_url: 'https://b-ssl.duitang.com/uploads/item/201703/16/20170316130913_J8CcN.thumb.224_0.jpeg', id: 8, collect: 786}
    ]
  }),
  methods: {
    changeChecked (i) {
      this.imgs[i].ischecked = !this.imgs[i].ischecked
      var text = this.imgs[i].ischecked ? '喜欢成功' : '取消喜欢'
      this.$toast({
        message: text,
        position: 'top',
        duration: 2000
      })
    },
    handleCollect (i) {
      this.imgs[i].isCollect = !this.imgs[i].isCollect
      var text = this.imgs[i].isCollect ? '收藏成功' : '取消收藏'
      if (this.imgs[i].isCollect) {
        this.imgs[i].collect += 1
      } else {
        this.imgs[i].collect -= 1
      }
      this.$toast({
        message: text,
        position: 'top',
        duration: 2000
      })
    }
  }
}
</script>
<style>
.photosList{
  margin:0;
  padding:0;
  width:100%;
}
.photosList .photo-item {
  width: 33.33%;
  padding:5px;
  box-sizing: border-box;
  height: 170px;
  list-style: none;
  float: left;
}
.photosList .photo-item img{
  width: 100%;
  height: 130px;
}
.photosList .like .mui-icon-star{
  font-size: 12px;
  line-height: 12px;
  color:#bbb;
}
.mui-icon-checkmarkempty{
  float: right;
  color:#bbb;
}
.checked{
  color: red;
}
.like .mui-icon-star.collect{
  color:red;
}
</style>
