<template>
  <div class="search">
    <mt-search
      v-model="value"
      cancel-text="取消"
      placeholder="搜索"
      :result="filterResult">
    </mt-search>
  </div>
</template>
<script>
export default {
  name: 'search',
  data: () => ({
    value: '',
    defaultResult: ['Apple', 'Banana', 'Orange', 'Durian', 'Lemon', 'Peach', 'Cherry', 'Berry', 'Core', 'Fig', 'Haw', 'Melon', 'Plum', 'Pear', 'Peanut', 'Other']
  }),
  computed: {
    filterResult () {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value))
    }
  }
}
</script>
<style>
.mint-searchbar-core {
  margin: 0 !important;
  padding:0;
  height:0 !important;
  background: none !important;
}
.mint-search-list{
  padding-top:88px;
  max-height: 80%;
}
</style>
