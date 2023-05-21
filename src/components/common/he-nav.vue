<!-- 底部导航栏 -->
<template>
  <div>
    <div id="he-nav">
      <nav v-show="!add">
        <router-link to="/" tag="dl" exact @click.native="navTab('home')">
          <dt>
            <img v-bind:src="homeSrc">
          </dt>
          <dd>首页</dd>
        </router-link>
        <router-link to="/go" tag="dl" @click.native="navTab('go')">
          <dt>
            <img :src="goSrc">
          </dt>
          <dd>话题</dd>
        </router-link>
        <dl class="add" @click="publish()">
          <dt>
            <img src="static/img/bot_nav/add.svg">
          </dt>
          <dd>&nbsp;</dd>
        </dl>
        <router-link to="/message" tag="dl" @click.native="navTab('message')">
          <dt>
            <img :src="messageSrc">
          </dt>
          <dd>消息</dd>
        </router-link>
        <!-- <router-link to="/me"  tag="dl" @click.native="navTab('me')">
          <dt>
            <img :src="meSrc">
          </dt>
          <dd>我的</dd>
        </router-link> -->
        <dl @click="navTab('me')">
          <dt>
            <img :src="meSrc">
          </dt>
          <dd>我的</dd>
        </dl>
      </nav>
    </div>
    <transition name="pfade">
      <div id="publish-box" v-show="add">
        <div class="publish_close" @click="close()"></div>
        <div class="publish-content">
          <ul>
            <li @click="goToPunish">
              <transition name="ifade" type="transition">
                <img src="static/img/text.png" v-show="add">
              </transition>文字
            </li>
            <li>
              <transition name="ifade" type="transition">
                <img src="static/img/take.png" v-show="add">
              </transition>拍摄
            </li>
            <li>
              <transition name="ifade" type="transition">
                <img src="static/img/photo.png" v-show="add">
              </transition>相册
            </li>
            <li>
              <transition name="ifade" type="transition">
                <img src="static/img/show.png" v-show="add">
              </transition>直播
            </li>
          </ul>
          <transition name="cfade" type="transition">
            <div class="close-tag" @click="close()" v-show="add">
              <img src="static/img/bot_nav/add.svg">
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      add: false,
      homeSrc: "static/img/bot_nav/index_off.svg",
      goSrc: "static/img/bot_nav/go_off.svg",
      messageSrc: "static/img/bot_nav/message_off.svg",
      meSrc: "static/img/bot_nav/me_off.svg"
    };
  },
  watch: {
    $route(to, from) {
      this.navTab(to.path.substring(1))

    }
  },
  methods: {
    publish() {
      this.add = true;
    },
    goToPunish() {
      this.$router.push({
        path: '/home/punish',
      })
      this.close()
    },
    close() {
      this.add = false;
    },
    navTab(val) {
      switch (val) {
        case "home":
          this.homeSrc = "static/img/bot_nav/index_on.svg";
          this.goSrc = "static/img/bot_nav/go_off.svg";
          this.messageSrc = "static/img/bot_nav/message_off.svg";
          this.meSrc = "static/img/bot_nav/me_off.svg";
          break;
        case "go":
          this.homeSrc = "static/img/bot_nav/index_off.svg";
          this.goSrc = "static/img/bot_nav/go_on.svg";
          this.messageSrc = "static/img/bot_nav/message_off.svg";
          this.meSrc = "static/img/bot_nav/me_off.svg";
          break;
        case "message":
          this.homeSrc = "static/img/bot_nav/index_off.svg";
          this.goSrc = "static/img/bot_nav/go_off.svg";
          this.messageSrc = "static/img/bot_nav/message_on.svg";
          this.meSrc = "static/img/bot_nav/me_off.svg";
          break;
        case "me":
          this.homeSrc = "static/img/bot_nav/index_off.svg";
          this.goSrc = "static/img/bot_nav/go_off.svg";
          this.messageSrc = "static/img/bot_nav/message_off.svg";
          this.meSrc = "static/img/bot_nav/me_on.svg";
          this.go()
          break;
      }
    },
    go() {
      if (!localStorage.getItem('token')) {
        this.$router.push({
          path: '/me/unLogin'
        })
      }
      else {
        this.$router.push({
          path: '/me'
        })
      }
    }
  },
  mounted() {
    if (this.$route.path == '/index/home' ||this.$route.path == '/')
      this.navTab('home')
    else
      this.navTab(this.$route.path.substring(1))
    
  }
};
</script>

<style scoped>
.pfade-enter,
.pfade-leave-to {
  opacity: 0;
}

.pfade-enter-active,
.pfade-leave-active {
  transition: opacity .7s;
}

.cfade-enter,
.cfade-leave-to {
  opacity: 0;
}

.cfade-enter-active {
  transition: opacity 1s;
  animation: cbounce-in 1.5s;
}

.cfade-leave-active {
  transition: opacity 1s;
  animation: cbounce-out 2s;
}

.ifade-enter,
.ifade-leave-to {
  opacity: 0;
}

.ifade-enter-active {
  transition: opacity 2s;
  animation: ibounce-in 1.5s;
}

.ifade-leave-active {
  transition: opacity 1s;
  animation: ibounce-out 2s;
}

@keyframes cbounce-in {
  0% {
    transform: scale(0);
  }

  60% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes cbounce-out {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes ibounce-in {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes ibounce-out {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}
</style>
