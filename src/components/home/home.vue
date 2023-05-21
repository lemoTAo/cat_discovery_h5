<template>
  <div id="home_touch">
    <div class="home-wrapper" v-for="item, index in allData" :key="index">
      <div class="home-top">
        <img :src="item.poster_info.profile" class="home-photo">
        <span class="home-name">{{ item.poster_info.user_name }}</span>
        <img src="static/img/home-close.png" class="home-close">
      </div>
      <div class="home-box" @click="gotoDetail(item.poster_info.user_name, item, index)">
        <div class="home-content">
          <h3>
            {{ item.post_body.title }}
          </h3>
        </div>
        <div class="home-content">{{ item.post_body.content }}</div>

        <template v-if="item.post_body.images">

          <div class="home-img" v-for="fn, fnIndex in item.post_body.images" :key="fnIndex">
            <template v-if="fnIndex < 2">
              <img :src="fn">{{ fn }}
            </template>
          </div>

        </template>
      </div>

      <div class="home-footer">
        <span class="home_left">
          <img src="static/img/share.png">
          <span>{{ item.share }}</span>
        </span>
        <span class="home_left" @click="gotoDetail(item.poster_info.user_name, item, index)">
          <img src="static/img/words.png" alt>
          <span>{{ item.post_info.comment_count }}</span>
        </span>
        <span class="home_left" @click="giveLikes(item, index)">
          <img src="static/img/like.png" v-if="!item.post_info.is_like">
          <img src="static/img/like_active.png" v-else>
          <span>{{ item.post_info.like_count }}</span>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { Toast } from 'vant';

export default {
  name: "home",
  data() {
    return {
    }
  },
  mounted() {
    let home = document.getElementById("home_touch");
    const that = this;
    var direction = "";
    var startX, startY;
    function GetSlideAngle(dx, dy) {
      return (Math.atan2(dy, dx) * 180) / Math.PI;
    }
    function GetSlideDirection(startX, startY, endX, endY) {
      var dy = startY - endY;
      var dx = endX - startX;
      var result = 0;
      if (Math.abs(dx) < 100 && Math.abs(dy) < 100) {
        return result;
      }
      var angle = GetSlideAngle(dx, dy);
      if (angle >= -45 && angle < 45) {
        result = "swiperight";
      } else if (angle >= 45 && angle < 135) {
        result = "swipeup";
      } else if (angle >= -135 && angle < -45) {
        result = "swipedown";
      } else if (
        (angle >= 135 && angle <= 180) ||
        (angle >= -180 && angle < -135)
      ) {
        result = "swipeleft";
      }
      return result;
    }
    home.addEventListener(
      "touchstart",
      function (ev) {
        startX = ev.touches[0].pageX;
        startY = ev.touches[0].pageY;
      },
      false
    );
    home.addEventListener(
      "touchend",
      function (ev) {
        var endX, endY;
        endX = ev.changedTouches[0].pageX;
        endY = ev.changedTouches[0].pageY;
        direction = GetSlideDirection(startX, startY, endX, endY);
        switch (direction) {
          case 0:
            break;
          case "swipeup":
            break;
          case "swipedown":
            break;
          case "swipeleft":
            that.$router.push("/index/show");
            break;
          case "swiperight":
            break;
          default:
        }
      },
      false
    );
  },
  computed: {
    ...mapState('home', { data: 'index', allData: 'allData' })
  },
  methods: {
    gotoDetail(name, data, index) {
      this.$router.push({
        path: '/home/detail',
        query: {
          title: name,
          data,
          index
        }
      })
    },
    giveLikes(item, index) {
      item.post_info.is_like = item.post_info.is_like
      try {
        this.$store.dispatch('home/clickLike', { 'post_id': item.post_info.post_id, index })
      } catch (e) {
        Toast("错误")
      }
    }
  },
  beforeCreate() {
    this.$store.dispatch('home/getAll')
  },
};
</script>

<style>
@import "../../assets/css/home.css";
</style>