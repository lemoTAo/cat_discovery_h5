<template>
    <div style="box-sizing: border-box;">
        <childNav :name="this.$route.query.title" />

        <div class="outer" ref="outer">
            <!-- 头部 -->
            <!-- 用户头部 -->
            <div class="detail__top">
                <div class="detail__top--left">
                    <div class="img-box">
                        <template v-if="data.poster_info.profile">
                            <img :src="data.poster_info.profile" id="userImg">
                        </template>
                    </div>
                    <h5 class="username">{{ data.poster_info.user_name }}</h5>
                </div>
                <div>
                    <button id="focus" @click="focusUser(data.poster_info.user_id)" v-if="!isFocus">关注</button>
                    <button id="focus" v-else>已关注</button>
                </div>

            </div>
            <!-- 内容呼吁 -->
            <div class="detail__content">
                <div class="detail_content-title">
                    <h2>
                        {{ data.post_body.title }}
                    </h2>
                </div>
                <div class="detail__content--text">
                    {{ data.post_body.content }}
                </div>

                <template v-if="data.post_body.images">

                    <div class="detail__content--img" v-for="item, index in data.post_body.images" :key="index">
                        <img :src="item" alt="">
                    </div>
                </template>
            </div>
            <div class="hr"></div>
            <div class="function" ref="function">
                <div class="flex-co">
                    <div class="function__img">
                        <img src="../../../static/img/share.png" alt="">
                    </div>
                    <span>分享</span>
                </div>
                <div class="flex-co">
                    <div class="function__img" @click="changeIsLike">
                        <img v-if="test[this.NumIndex].post_info.is_like" src="../../../static/img/like_active.png" alt="">
                        <img v-else src="../../../static/img/like.png" alt="">
                    </div>
                    <span>{{ test[this.NumIndex].post_info.like_count }}</span>
                </div>
                <span @click="showPop" style="width: 3rem;font-size: 1.2rem;">···
                </span>
            </div>
            <!-- 评论区 -->
            <div ref="comments" class="comments">
                <div class="chose_type" v-if="test[this.NumIndex].post_body.comments.length">
                    <span>评论</span>
                    <span @click="tabChang()" :class="tabValue ? '' : 'changCOlorGray'">最热</span>
                    <span @click="tabChang()" :class="tabValue ? 'changCOlorGray' : ''">最新</span>

                </div>
                <news v-for="(item, index) in  test[this.NumIndex].post_body.comments" :item="item" :key="index"
                    :Index="index" @clickReply="clickReply" />
            </div>

            <div id="bottom_nav" @mouseleave="leaveFocus()">
                <textarea type="text" placeholder="文明发帖" id="userText" @focus="inputText" ref="userText"
                    v-model="content"></textarea>
                <div v-show="isInput" class="bottom_nav--right">
                    <div class="img_box">
                        <img src="../../../static/img/words.png" alt="">
                        <span id="tip">1</span>
                    </div>
                    <div class="img_box" @click="changeIsLike">
                        <img v-if="test[this.NumIndex].post_info.is_like" src="../../../static/img/like_active.png" alt="">
                        <img v-else src="../../../static/img/like.png" alt="">
                        <span id="tip">{{ test[this.NumIndex].post_info.like_count }}</span>
                    </div>
                    <div class="img_box" @click="changeIsStar">
                        <img v-if="isStar" src="../../../static/img/star.png" alt="">
                        <img v-else src="../../../static/img/star_active.png" alt="">
                    </div>
                </div>
                <button v-show="!isInput" id="publish" @click="publish">发表</button>
            </div>

            <van-popup v-model="show" position="bottom" :style="{ height: '25%' }">
                <div class="gender-choose" @click="choseType('容易')">简单</div>
                <div class="gender-choose" @click="choseType('合适')">合适</div>
                <div class="gender-choose" @click="choseType('合适')">较难</div>
                <div class="gender-choose" @click="choseType('困难')">困难</div>
            </van-popup>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import childNav from '../common/child-nav.vue'
import News from '../common/news.vue'
import { Toast } from 'vant';

export default {
    name: 'detail',
    data() {
        return {
            isStar: false,
            isLike: false,
            isInput: true,
            content: "",
            data: {},
            NumIndex: "",
            show: false,
            value: 3,
            tabValue: true,
            isFocus: false
        }
    },
    computed: {
        ...mapState('home', { test: 'allData' })
    },
    components: {
        childNav,
        News
    },
    methods: {
        // 点赞
        changeIsLike() {
            const index = this.NumIndex
            console.log(this.test[this.NumIndex].post_info);
            try {
                this.$store.dispatch('home/clickLike', { 'post_id': this.test[this.NumIndex].post_info.post_id, index })
            } catch (e) {
                Toast("错误")
            }
        },
        // 收藏
        changeIsStar() {
            this.isStar = !this.isStar
        },
        // input框家焦点
        inputText() {
            this.isInput = !this.isInput
        },
        leaveFocus(e) {
            console.log("leave");
            this.isInput = true
        },
        clickReply(data) {
            const userText = this.$refs.userText
            userText.focus()
        },
        publish() {
            console.log("发表了", this.content);
            this.$store.dispatch('home/pushComment', { data: { content: this.content, post_id: this.data.post_info.post_id }, index: this.NumIndex })
            this.content = ""
            this.leaveFocus();
        },
        showPop() {
            this.show = !this.show
        },
        tabChang(index) {
            this.tabValue = !this.tabValue
        },
        async focusUser(id) {
            const result = await this.$store.dispatch("home/focusUser", { "target_id": id })
            if (result == 'success') {
                this.isFocus = true;
                Toast('关注成功');
            }
            else
                this.isFocus = false;


        },
        choseType() {
            Toast("反馈成功")
        }
    },

    created() {
        this.data = this.$route.query.data
        this.NumIndex = this.$route.query.index
        try {
            console.log(this.data.post_info.post_id);
            this.$store.dispatch('home/addHistory', { post_id: this.data.post_info.post_id })
        }
        catch (e) {
            console.log(e);
        }
    },
    mounted() {
        // this.testData = this.test[this.NumIndex]
        console.log('1', this.test[this.NumIndex].post_body.comments);
    },
}
</script>

<style scoped>
@import '../../assets/css/bot_nav.css';

* {
    padding: 0;
    margin: 0;
}

img {
    height: 100%;
    width: 100%;
}

.outer {
    height: 100vh;
    background-color: #ffffff;
    padding: 4.7rem 0.5rem 0;
    box-sizing: border-box;
    font-family: '微软雅黑';
    overflow: scroll;
    overflow-y: scroll;
    scroll-behavior: smooth;
}

.outer::-webkit-scrollbar {
    width: 0 !important
}

.detail__top {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    padding: 0.4rem 0;
    width: 100%;
    justify-content: space-between;
}

.detail__top--left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.img-box {
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    overflow: hidden;
}

.username {
    margin-left: 0.2rem;
    color: #ff4a3c;
}



#focus {
    padding: 0.2rem 0.8rem;
    border-radius: 0.7rem;
    border: none;
    width: 6rem;
    font-size: 1.2rem;
    font-weight: bolder;
    color: #887ad0;
    background-color: #f3f2fa;
}

.detail__content {
    padding: 0.2rem 1rem;
    border-radius: 3px;
}

.detail_content-title {
    margin: 1rem 0;
}

.detail__content--text {
    width: 100%;
    word-break: break-all;
    margin: 1rem 0 1.5rem;
    font-size: 1.1rem;
    letter-spacing: 2px;

}

.detail__content--img {
    /* margin: 0.2rem 3rem; */
    border-radius: .7rem;
    overflow: hidden;
    margin-bottom: 1rem;
}

.hr {
    border-top: 1px solid #cacdd1;

}

.function {
    font-size: 0.8rem;
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-around;
    padding-bottom: 3rem;
    margin-top: 2rem;
    margin-bottom: 0;
}

.function__img {
    height: 1.5rem;
    width: 1.5rem;
}

.flex-co {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.comments {
    margin-bottom: 3rem;
}

.comments>.chose_type {
    margin-bottom: 1.5rem;
    border-top: 1px solid #e5e7e9;
    padding-top: 1rem;
}

.comments>.chose_type>span:first-child {
    font-size: 1.5rem;
}

.comments>.chose_type>span:nth-child(2) {
    margin-left: 1.5rem;
    border-right: 1px solid black;
}

.comments>.chose_type>span:not(:first-child) {
    padding: 0 1rem;
    font-size: 1.2rem;
}

.changCOlorGray {
    color: #a6aab0;

}

.gender-choose {
    display: flex;
    align-items: center;
    height: calc(100% / 4);
    padding: 1rem 1rem;
    border-bottom: 1px solid #e8e8e8;
    box-sizing: border-box;
}

.gender-choose:active {
    background-color: #e8e8e8;

}

.gender-choose:last-child {
    border-bottom: none
}
</style>