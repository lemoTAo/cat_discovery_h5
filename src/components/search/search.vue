<template>
    <div>
        <div>
            <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
        </div>
        <div>

            <!-- <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                <template v-if="list">
                    <div class="home-wrapper" v-for="item, index in list" :key="index">
                        <div class="home-top">
                            <img :src="item.photo" class="home-photo">
                            <span class="home-name">{{ item.name }}</span>
                            <img src="static/img/home-close.png" class="home-close">
                        </div>
                        <div class="home-box" @click="gotoDetail(item.name)">
                            <div class="home-content">{{ item.content }}</div>
                            <div class="home-img">
                                <img src="../../../static/img/duck.jpg">
                            </div>
                            <div class="home-img">
                                <img src="../../../static/img/duck.jpg">
                            </div>
                        </div>

                        <div class="home-footer">
                            <span class="home_left">
                                <img src="static/img/share.png">
                                <span>分享</span>
                            </span>
                            <span class="home_left" @click="goToComments(item.name)">
                                <img src="static/img/words.png" alt>
                                <span>{{ item.words }}</span>
                            </span>
                            <span class="home_left" @click="giveLikes(item.hid)">
                                <img src="static/img/like.png">
                                <span>{{ item.like }}</span>
                            </span>
                        </div>
                    </div>
                </template>

            </van-pull-refresh> -->
        </div>
    </div>
</template>

<script>
import * as CommentData from '../../utils/comments'
export default {
    data() {
        return {
            list: [],
            loading: false,
            finished: false,
            refreshing: false,
            value: "",
            commentData: []
        };
    },
    components:{
        Comments
        
    },
    methods: {
        onSearch() {
            console.log(this.value);
            // 发送请求回来数据
            this.loading = true
            this.list = [];
            this.loadData()

        },
        onCancel() {
            this.$router.back()
            this.loading = true;
        },
        loadData() {
            setTimeout(() => {
                // 是否刷新
                if (this.refreshing) {
                    this.list = [];
                    this.refreshing = false;
                }
                // 每次渲染数
                for (let i = 0; i < 10; i++) {
                    this.list.push(this.list.length + 1);
                }

                this.loading = false;

                //总记录数
                if (this.list.length >= 20) {
                    this.finished = true;
                }

            }, 200);
        },
        onRefresh() {
            console.log(1);
            // 清空列表数据
            this.finished = false;

            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.loading = true;
            this.loadData();
        },
    },
    created() {
      this.commentData = CommentData.comment.data;
    },
};
</script>

<style>
@import "../../assets/css/home.css";
</style>