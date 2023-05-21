<template>
  <div class="outer">

    <div style="box-sizing: border-box;">
      <van-tabs sticky>
        <van-tab title="所有话题13">
          <div class="item_box--outer">

            <div class="item_box" v-for="item, index in topic" :key="index" @click="gotoDetail(item.title)">
              <div class="item_box--top">
                <div class="item_box--top--left">
                  <div class="head">
                    #{{ item.title }}
                  </div>
                  <div class="sub">
                    {{ item.content }}
                  </div>
                </div>
                <div class="item_box--top--right">
                  <img :src="item.img" alt="">
                </div>
              </div>
              <div class="item_box--bottom">
                <span class="item_box--bottom--from">
                  来自圈子： {{ item.from }}
                </span>
                <span class="item_box--right">
                  {{ item.num }}人已参与，还有{{ item.endTime }}天结束
                </span>

              </div>
            </div>
          </div>

        </van-tab>
        <van-tab title="正在进行中3">
          <div class="item_box--outer">

            <div class="item_box" v-for="item, index in topic" :key="index" @click="gotoDetail(item.title)"
              v-if="index % 2 == 0">
              <div class="item_box--top">
                <div class="item_box--top--left">
                  <div class="head">
                    #{{ item.title }}
                  </div>
                  <div class="sub">
                    {{ item.content }}
                  </div>
                </div>
                <div class="item_box--top--right">
                  <img :src="item.img" alt="">
                </div>
              </div>
              <div class="item_box--bottom">
                <span class="item_box--bottom--from">
                  来自圈子： {{ item.from }}
                </span>
                <span class="item_box--right">
                  {{ item.num }}人已参与，还有{{ item.endTime }}天结束
                </span>

              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="我参与的3">
          <div class="item_box--outer">
            <div class="item_box" v-for="item, index in topic" :key="index" @click="gotoDetail(item.title)"
              v-if="index % 2 == 0">

              <div class="item_box--top">
                <div class="item_box--top--left">
                  <div class="head">
                    #{{ item.title }}
                  </div>
                  <div class="sub">
                    {{ item.content }}
                  </div>
                </div>
                <div class="item_box--top--right">
                  <img :src="item.img" alt="">
                </div>
              </div>
              <div class="item_box--bottom">
                <span class="item_box--bottom--from">
                  来自圈子： {{ item.from }}
                </span>
                <span class="item_box--right">
                  {{ item.num }}人已参与，还有{{ item.endTime }}天结束
                </span>

              </div>
            </div>

          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import childNav from '../common/child-nav.vue';
export default {
  components: {
  },
  computed: {
    ...mapState('go', ['topic'])

  },
  methods: {
    gotoDetail(name) {
      this.$router.push({
        path: "/go/go_detail",
        query: {
          title: name,
        }
      })
    }
  }

}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.outer {
  height: 100vh;
  box-sizing: border-box;
  scroll-behavior: none;
}

.item_box--outer {
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 1.2rem;
}

.item_box {
  width: 100%;
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  border-radius: 1rem;
  box-shadow: .3rem .5rem .6rem 1px rgba(40, 44, 52, 0.089),
    -.2rem -.3rem .6rem 1px rgba(40, 44, 52, 0.082);
  margin-bottom: 2rem;
}

.item_box:last-child {
  margin-bottom: 3rem;
}

.item_box>.item_box--top {
  height: 6rem;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}

.item_box>.item_box--top>.item_box--top--left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

}

.item_box>.item_box--top>.item_box--top--left>.head {
  font-weight: 600;
  font-size: 1.5rem;
}

.item_box>.item_box--top>.item_box--top--left>.sub {

  color: #7974747e;
}

.item_box>.item_box--top>.item_box--top--right {
  height: 100%;
  border-radius: 2rem;
  overflow: hidden;
}

.item_box>.item_box--top>.item_box--top--right>img {
  height: 100%;
}

.item_box>.item_box--bottom {
  display: flex;
  justify-content: space-between;
  height: 3rem;
  line-height: 3rem;
  margin-top: 1rem;
}

.item_box--bottom>.item_box--right {
  font-size: .8rem;
  color: #7974747e;
}









/* 
.content_box {
  display: flex;
  flex-direction: column;

}

.content_box>.content--item {
  min-height: 20rem;
  padding: 1rem;
  box-sizing: border-box;
}

.content_box>.content--item:last-child {
  margin-bottom: 3rem;

}

.content_box>.content--item>.content--item_userInfo {
  display: flex;
  height: 5rem;
}

.content_box>.content--item>.content--item_userInfo>.img_box {
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
}

.content_box>.content--item>.content--item_userInfo>.img_box>img {
  height: 100%;
}

.content_box>.content--item>.content--item_userInfo>.userBaseInfo {
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
}

.content_box>.content--item>.content--item__title {
  height: 5rem;
  box-sizing: border-box;
  padding: .5rem 0;
  display: flex;
  align-items: center;
}

.content_box>.content--item>.content--item__title>.title--tip {
  display: inline-block;
  text-align: center;
  height: 3rem;
  ;
  width: 3rem;
  line-height: 3rem;
  color: #fff;
  border: 1px solid #efefef;
  background-color: red;
  border-radius: .5rem;
  box-sizing: border-box;
  margin-right: 1rem;
}

.content_box>.content--item>.content--item__title>.title--sub {
  font-size: 1.2rem;
  font-weight: 600;
}

.content_box>.content--item>.content--item__content {
  color: #4095e5;
  font-size: 1.1rem;
}

.content_box>.content--item>.content--item__content>.item_type {
  font-weight: 600;
  font-size: 1.1rem;
}

.content_box>.content--item>.content--item__content>.item_type::before,
.content_box>.content--item>.content--item__content>.item_type::after {
  content: "#";
}

.content_box>.content--item>.content--item__content>.item_content {
  letter-spacing: .1rem;
}

.content_box>.content--item>.content--item__content>.item_box_imgs {
  margin-top: 1rem;
}

.content_box>.content--item>.content--item__content>.item_box_imgs>.item_imgs {
  height: 10rem;
}

.content_box>.content--item>.content--item__content>.item_box_imgs>.item_imgs>img {
  height: 100%;
} */
</style> 