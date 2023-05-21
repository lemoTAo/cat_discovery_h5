<template>
  <div id="app">

    <!-- <welcome></welcome> -->
    <div class="app-wrapper" v-if="showDefault">
      <div class="app-content ">
        <keep-alive exclude="me">
          <router-view name="default"></router-view>
        </keep-alive>
      </div>
      <footer class="app-footer">
        <he-nav></he-nav>
      </footer>
    </div>
    <transition :enter-active-class="AnimationName">
      <router-view name="subPage"></router-view>
    </transition>
  </div>
</template>

<script>
import welcome from "./components/common/welcome.vue";
import heNav from "./components/common/he-nav.vue";
import mixin from "./vuex/mixin.js";
window.mixin = mixin;
export default {
  name: "App",
  data() {
    return {
      showDefault: true,
      AnimationName:'animated fadeInRight'
    };
  },
  components: {
    welcome,
    heNav
  },
  created() {
    // localStorage.removeItem('token')
    this.$router.push("/");
  },
  watch: {
    $route(to, from) {
      if (this.$route.name.split("/").length == 2) {
        this.showDefault = true;
      }
      else this.showDefault = false;

      // 页面来回切换
      // console.log(to.meta.index,from.meta.index);
      // if (to.meta.index > 0) {
      //   if (to.meta.index < from.meta.index) {
      //     this.AnimationName = "animated fadeInLeft";

      //   } else {
      //     this.AnimationName = "animated fadeInRight";

      //   }
      // } else if (to.meta.index == 0 && from.meta.index > 0) {
      //   this.AnimationName = "animated fadeInRight";
      // }
    }
  }
};
</script>

<style>
@import "assets/css/base.css";
@import "assets/css/common.css";
@import "assets/css/animate.css";
</style>
