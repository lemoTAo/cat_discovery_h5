<template>
  <div>
    <section id="outer">
      <header class="hog-header">
        <div style="height: 100%;">
          <ul class="header__items">
            <li>
              <img src="../../../static/img/sweep.png" alt="" srcset="">
            </li>
            <li>
              <img src="../../../static/img/style.png" alt="" srcset="">
            </li>
            <li style="margin-right: 1rem;" @click="unLogin">
              <img src="../../../static/img/me/quit.png" alt="" srcset="">
            </li>
          </ul>
        </div>
      </header>
      <section class="content">
        <div class="user--main">
          <div class="user--main-left">
            <div class="image-box">
              <img :src="userInfo.profile" alt="">
            </div>
            <div class="info">
              <h3>{{ userInfo.user_name }}</h3>
              <p class="gray">关注{{ userInfo.fans_count }} 粉丝{{ userInfo.follow_count }}</p>
            </div>
          </div>
          <div class="user--main-right">
            <button id="updateInfo" @click="myPunish('/me/personData', '个人资料')">修改信息</button>
          </div>
        </div>
        <div class="user--sub">
          <div class="user--sub-item" @click="myPunish('/me/myPunish', '我的帖子')">
            <div class="number">1</div>
            <div class="user--sub-item-info fonts8 margin_top_5">我的帖子</div>
          </div>
          <div class="user--sub-item">
            <div class="number">2</div>
            <div class="user--sub-item-info fonts8 margin_top_5">关注的话题</div>
          </div>
          <div class="user--sub-item">
            <div class="number">3</div>
            <div class="user--sub-item-info fonts8 margin_top_5">收藏</div>
          </div>
          <div class="user--sub-item">
            <div class="number">4</div>
            <div class="user--sub-item-info fonts8 margin_top_5"
              @click="$router.push({ path: '/me/history', query: { title: '历史记录' } })">浏览历史</div>
          </div>
        </div>
        <!-- 创作中心 -->
        <div class="creation__center">
          <ul class="scroll-y">
            <li class="">
              <div class="item">
                <h5>帖子创作中心</h5>
                <span><img src="../../../static/img/right.png" alt=""></span>
              </div>
              <div class="item">
                <div class="item--be">
                  <span>2</span>
                  <span><img src="../../../static/img/none.png" alt=""></span>
                  <span>新增浏览</span>
                </div>
                <div class="item--be">
                  <span>2</span>
                  <span><img src="../../../static/img/none.png" alt=""></span>

                  <span>新增评论</span>
                </div>
                <div class="item--be">
                  <span>2</span>
                  <span><img src="../../../static/img/none.png" alt=""></span>

                  <span>新增点赞</span>
                </div>
              </div>
            </li>

            <li>
              <div class="item">
                <h5>视频创作中心</h5>
                <span><img src="../../../static/img/right.png" alt=""></span>
              </div>
              <div class="item">
                <div class="item--be">
                  <span>2</span>
                  <span><img src="../../../static/img/none.png" alt=""></span>
                  <span>新增浏览</span>
                </div>
                <div class="item--be">
                  <span>2</span>
                  <span><img src="../../../static/img/none.png" alt=""></span>

                  <span>新增评论</span>
                </div>
                <div class="item--be">
                  <span>2</span>
                  <span><img src="../../../static/img/none.png" alt=""></span>

                  <span>新增点赞</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- 功能区域 -->
        <div class="function">
          <div class="title">常用功能</div>
          <div class="item" v-for="item, index in functionIcons" :key="index">
            <img :src="item.imgSrc" alt="">
            <div>{{ item.name }}</div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: "me",
  components: {},
  data() {
    return {
      functionIcons: [
        { imgSrc: "../../../static/img/me/createList.png", name: '工具' },
        { imgSrc: "../../../static/img/me/personality.png", name: '个行装扮' },
        { imgSrc: "../../../static/img/me/broadcast.png", name: "直播" },
        { imgSrc: "../../../static/img/me/download.png", name: "下载" },
        { imgSrc: "../../../static/img/me/game.png", name: " 游戏" },
        { imgSrc: "../../../static/img/me/check.png", name: '检测' },
        { imgSrc: "../../../static/img/me/data.png", name: ' 数据' },
        { imgSrc: "../../../static/img/me/gift.png", name: '礼物' },
        { imgSrc: "../../../static/img/me/store.png", name: '兑换商城' }
      ],
      username: ''
    };
  },
  watch: {

  },
  computed: {
    ...mapState('me', ['userInfo'])
  },
  methods: {
    myPunish(path, title) {
      this.$router.push({
        path,
        query: {
          title
        }
      })
    },
    unLogin() {
      localStorage.removeItem('token')
      localStorage.removeItem('userInfo')
      this.$router.push({
        path: '/me/unLogin'
      })
    }
  },
  mounted() {
  },
  beforeCreate() {
  }
};
</script>

<style scoped>
@import "../../assets/css/me.css";
</style>
