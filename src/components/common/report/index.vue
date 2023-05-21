<template>
    <div class="report-box">
        <div class="report-box--title">
            <h3>{{ item.post.post_body.title }}</h3>
        </div>
        <div class="report-box--time">
            {{ item.post.post_info.post_time }}
        </div>
        <div class="report-box--function">
            <span> <img src="../../../../static/img/eye.png" alt=""> 11</span>
            <span> <img src="../../../../static/img/words.png" alt="">{{ item.post.post_info.comment_count }}</span>
            <span>
                <img v-if="item.post.post_info.is_like" src="../../../../static/img/like.png" alt="">
                <img v-else src="../../../../static/img/like.png" alt="">
                {{ item.post.post_info.like_count }}</span>
            <span @click="showPop">···
            </span>
        </div>
    </div>
</template>
    
<script>
export default {
    props: ['item'],
    methods: {
        showPop() {
            this.$bus.$emit('showPop')
        }
    },
    mounted() {
    }
}
</script>

<style scoped>
/* @import './index.css'; */
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

li {
    list-style-type: none;
}

body {
    background-color: #f7f7f7;
}

.report-box {
    font-family: '微软雅黑';
    padding: 0 .5rem;
    margin-bottom: .8rem;
    width: 100%;
    height: 10rem;
    color: #d1d1d1;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 0.4rem;
    justify-content: space-around;
}

.report-box:first-child {
    margin-top: 3.3rem;
}


.report-box--title {
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    /* text-align: right; */
    color: black;
}

.report-box--title>h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.report-box--time {
    font-size: 1rem;
}

.report-box--function {
    line-height: 1.5rem;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    color: #868586;
}

.report-box--function>span {
    display: flex;
    align-items: center;
    line-height: 1.5rem;

}

.report-box--function img {
    height: 1.5rem;
    margin-right: .5rem;
}

.report-box--function>span:last-child {
    position: relative;
    letter-spacing: .2rem;
}

.report-box--function>span:last-child>.list {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(1rem);
}

.report-box--function>span:last-child>.list>li {
    padding: 0.1rem 0;
    text-align: center;
    width: fit-content;
    width: 3rem;
    border: 1px solid #cacdd1;
}

.report-box--function>span:last-child>.list>li:not(:last-child) {
    border-bottom: none;
}

.report-box--function>span:last-child>.list>li:last-child {
    margin-bottom: 0;
}
</style>