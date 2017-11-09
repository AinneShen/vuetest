<template>
  <div id="member">
    <mt-search
      v-model="value"
      cancel-text="取消"
      placeholder="搜索">
    </mt-search>
  </div>
</template>
<script>
export default {
  name: 'member',
  data: () => ({
    value: ''
  })
}
</script>
<style>
.mint-searchbar-core {
  margin: 0 !important;
  height:0 !important;
  background: none !important;
}
</style>
