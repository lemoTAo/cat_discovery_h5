<template>
  <div id="hog-page">
    <header id="hog-header">
      <div>
        <ul>
          <li v-for="(title, index) of tabTitle" :class="{ active: cur == index }" :key="index" @click="tab(title.path, index)">
            {{ title.title }}</li>
          <li class="tag_right" @click="goSearch()">
            <img src="static/img/search.png">
          </li>
        </ul>
      </div>
    </header>
    <transition name="custom-classes-transition" :enter-active-class="enterAnimate">
      <keep-alive exclude="home">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabTitle: [
        {
          title: "首页",
          path: "home"
        },
        {
          title: "自习室",
          path: "show"
        }
      ],
      cur: 0,
      enterAnimate: ""
    };
  },
  watch: {
    $route(to, from) {
      if (to.path == "/index/home") this.cur = 0;
      if (
        to.path == "/index/home" &&
        (from.path != "/index/show")
      )
        this.enterAnimate = "";

      if (to.path == "/index/show" && from.path == "/index/home") {
        this.enterAnimate = "animated fadeInRight";
        this.cur = 1;
      }
      if (to.path == "/index/home" && from.path == "/index/show") {
        this.enterAnimate = "animated fadeInLeft";
        this.cur = 0;
      }
    }
  },
  methods: {
    tab(val, index) {
      this.cur = index;
      this.$router.push({ path: "/index/" + val });
    },
    goSearch() {
      this.$router.push({
        path: '/home/search'
      })
    }
  }
};
</script>