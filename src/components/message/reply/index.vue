<template>
  <div>
    <ChildNav />
    <div class="content">
      <template></template>
      <div class="message_replay">
        <div class="message-content">
          <div id="news" v-show="news">
            <news v-for="(item, index) in  data.user_info" :item="item" :key="index"></news>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ChildNav from '../../common/child-nav.vue';
import news from '../../common/news.vue';
import { mapState } from 'vuex'
export default {
  data() {
    return {
      news: true,
      newItem: []
    }
  },
  computed: {
    ...mapState('message_module', { data: 'news' })
  },
  components: {
    ChildNav,
    news
  },
  methods: {
    loadNews() {
      this.$http
        .get("static/data/message/mineNews.json")
        .then(response => {
          let unReplyNumber = 0;
          let result = response.data.mineNews;
          for (let i in result) {
            this.newItem.push({
              read: result[i].read
            });
            if (result[i].read == false)
              unReplyNumber++
          }

          this.$store.dispatch("message/initUnReplay", unReplyNumber);
          console.log('ok');
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  created() {
    // this.loadNews();
  },
  mounted() {
    console.log('data', this.data.user_info);
  }

}
</script>

<style scoped>
@import "../../../assets/css/common.css";

.message_replay {
  margin-top: 3rem;
}

.message {

  margin-top: 3rem;
}
</style>