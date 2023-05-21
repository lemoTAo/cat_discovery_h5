<template>
    <div class="outer">
        <div class="left">
            <div class=" time">
                <h1>02</h1>
                <span>4月</span>
            </div>
            <div class="content">
                <span>1111</span>
                <h2>天天</h2>
            </div>
        </div>
        <div class="function" @click="showPopup">
            <span class="dot">...</span>
        </div>
        <!-- 弹出层 -->
        <!-- <div class="bottom_function">
            <img src="../../../static/img/share.png" alt="">
            <img src="../../../static/img/words.png" alt="">
            <img src="../../../static/img/like.png" alt="">
        </div> -->
    </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
    data() {
        return {
            show: false,
        }
    },
    components: {
        [Dialog.Component.name]: Dialog.Component,
    },
    methods: {
        showPopup() {
            Dialog.confirm({
                title: '你确定要删除吗！',
            })
                .then(() => {
                    // on confirm
                    console.log("删除了");
                })
                .catch(() => {
                    // on cancel
                    console.log("取消了");
                });
        }
    },
    mounted() {

    }
}
</script>

<style scoped>
/* @import url(../../assets/css/flex.css); */
* {
    padding: 0;
    margin: 0;
}

.outer {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 20vw;
    margin: 0 1rem;
    margin-top: 2rem;
    padding: 0.2rem;
    border-radius: 0.3rem;
    background-color: #e9f5c3;
}
.outer:nth-child(2n){
    background-color: #a5edf5e5;
}
.outer:nth-child(3n){
    background-color:#cdf5c4;
}
.outer:first-child {
    margin-top: 0;
}

.left {
    display: flex;
    justify-content: flex-start;
}

.time {
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.time>h1 {
    font-weight: 500;

}

.content {
    margin-left: 0.5rem;
    padding: 0.5rem;
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.content>h2 {
    font-weight: 500;
}


.function {
    margin-right: 0.5rem;
    display: flex;
}

.function>.dot {
    padding: .0rem 0.5rem 0.5rem;
    color: gray;
    font-size: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    border-radius: 50%;
}

.bottom_function {
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2rem;
    transform: translateY(100%);
    border-bottom: 1px solid #abb2bf;
}

.bottom_function>img {
    width: 1.5rem;
    height: 1.5rem;
}
</style>