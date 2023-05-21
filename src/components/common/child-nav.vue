<!-- 顶部框 -->
<template>
  <header id="child-nav">
    <img src="static/img/left.png" class="child-nav_back" @click="$router.go(-1)">
    <span class="child-nav-name">{{ title }}</span>
  </header>
</template>
<script>
export default {
  name: 'childNav',
  data() {
    return {
      title: '',
    }
  },
  mounted() {
    this.title = this.$route.query.title
  }

}
</script>
<style>
@import "../../assets/css/common.css";
</style>