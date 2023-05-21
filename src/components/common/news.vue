<template>
  <div>
    <div class="news-box">
      <div class="news-survey">
        <img :src="item.user_info.profile" class="news-photo">
        <div class="news-tag">
          <!-- 用户名 -->
          <span class="news-name">{{ item.user_info.user_name }}</span>
          <!-- 用户时间 -->
          <span class="news-time">{{ item.post_time }}</span>
        </div>
      </div>
      <!-- 评论者 -->
      <div class="news-reply">{{ item.content }}</div>
      <!-- 作者回复 -->
      <template v-if="item.quiz">
        <div class="news-quiz">{{ item.quiz }}</div>
      </template>
      <!-- 底部功能 -->
      <div class="news-footer">
        <span class="news_left">{{ item.tag }}</span>
        <span class="news_right" @click="reply">回复</span>
        <img src="static/img/words.png">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item", "Index"],
  methods: {
    reply() {
      this.$emit('clickReply', this.$props.Index)
    }
  },
  mounted() {
    // console.log(this.item);
  }
};
</script>


<style>
@import "../../assets/css/message.css";
</style>
