<template>
    <div class="outer">
        <header class="punish__top">

            <div class="cancel__box" @click="goback">
                <img src="../../../static/img/punish/cancel.png" alt="">
            </div>
            <div>
                <span>发布帖子</span>
            </div>
            <div><button id="punish" @click="punish">发布</button></div>
        </header>
        <section>
            <div class="choice_type" @click="type.show = true">
                更多选项：
                <template v-if="userText.groupAudience">
                    <span>{{ userText.groupAudience }}</span>
                </template>
                <template v-if="userText.topic">
                    <span><span class="topic--sub">#</span>{{ userText.topic }}</span>
                </template>
            </div>
            <div class="title">
                <input type="text" id="title" placeholder="请输入帖子标题(5-20个字)" v-model="userText.title" autocomplete="true">
            </div>
            <div class="content" ref="textarea_contaner">
                <textarea @input="inputText" ref="textarea" v-model="userText.content" placeholder="书写你的故事" style="letter-spacing: .2rem;
    height: 25rem;
    line-height: 1.4rem;
    text-align: justify;"></textarea>
                <div class="content__img__box">
                    <div class="addImage" v-for="(item, index) in imageArray" :key="index" @click="clearImages(index)">
                        <img src="../../../static/img/punish/cancel.png">
                        <img :src="item" alt="">
                    </div>
                </div>
            </div>

        </section>
        <footer class="bottom_function">
            <div class="img__box">
                <input type="file" accept="image/*" multiple id="image" style="display: none;" ref="getImage"
                    v-on:change="addImage">
                <label for="image">
                    <img src="../../../static/img/punish/picture.png" alt="">
                </label>
            </div>
            <div class="img__box">
                <img src="../../../static/img/punish/camera.png" alt="">
            </div>
            <div class="img__box">
                <img src="../../../static/img/punish/recording.png" alt="">
            </div>
            <div class="img__box">
                <img src="../../../static/img/punish/connect.png" alt="">
            </div>
            <div class="img__box">
                <img src="../../../static/img/punish/expression.png" alt="">
            </div>
            <div class="img__box">
                <img src="../../../static/img/punish/add.png" alt="">
            </div>
        </footer>
        <van-popup v-model="type.show" position="bottom" :style="{ height: '25%' }">
            <div class="choice_container">
                <van-tabs :v-model="1">
                    <van-tab title="发布情况" style="font-size: 1rem;">
                        <div v-for="item, index in groupAudience" :key="index" :title="item"
                            :class="[item.isSelect ? 'choice_item choice_item_active ' : 'choice_item ']"
                            @click="is_select(0, item, groupAudience)">
                            {{ item.type }}
                        </div>
                    </van-tab>
                    <van-tab title="话题" style="font-size: 1rem;">
                        <div v-for="item, index in topic" :key="index" :title="item"
                            :class="[item.isSelect ? 'choice_item choice_item_active ' : 'choice_item ']"
                            @click="is_select(1, item, topic)">
                            {{ item.type }}
                        </div>
                    </van-tab>
                </van-tabs>
            </div>
        </van-popup>
        <span class="loading">
            <van-loading size="24px" color="#393e4b" v-if="isLoding">发布中...</van-loading>
        </span>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data() {
        return {
            groupAudience: [{ type: "入门", isSelect: false }, { type: "进阶", isSelect: false }, { type: "所有人", isSelect: false }],
            topic: [{ type: "疑难杂症", isSelect: false }, { type: "刮骨疗伤", isSelect: false }, { type: "回光返照", isSelect: false },],
            type: {
                show: false,
            },
            userText: {
                title: '',
                content: "",
                groupAudience: "",
                topic: ""
            },
            // 设置用户添加的图片存储
            imageArray: [],
            lczdTxt: "",
            isLoding: false,

        }
    },
    watch: {

    },
    methods: {
        // 添加图片
        addImage() {
            const files = this.$refs.getImage.files[0]

            if (files.size) {
                const _this = this
                let reader = new FileReader();
                //新建 FileReader 对象
                reader.onload = function () {
                    // 当 FileReader 读取文件时候，读取的结果会放在 FileReader.result 属性中
                    _this.imageArray.push(this.result);
                };
                // 设置以什么方式读取文件，这里以base64方式
                reader.readAsDataURL(files);
            }
        },
        // 清除用户选择
        clearImages(index) {
            this.imageArray.splice(index, 1)
        },
        inputText() {
            const max_height = this.$refs.textarea_contaner.offsetHeight;
            const text_height = this.$refs.textarea.scrollHeight;
            if (text_height < max_height)
                this.$refs.textarea.style.height = this.$refs.textarea.scrollHeight + 'px';
            this.userText.content = this.$refs.textarea.value;
        },
        goback() {
            this.$router.go(-1)
        },
        punish() {
            const { imageArray } = this
            const { title, content, groupAudience, topic } = this.userText
            console.log(this.userText, imageArray);
            this.isLoding = !this.isLoding;
            const that = this
            try {
                this.$store.dispatch('home/pushArticle', { title, content, images: imageArray })
            }
            catch (e) {
                Toast("发布失败")
            } finally {
                setTimeout(() => {
                    this.isLoding = !this.isLoding;
                    Toast("发布成功");

                    setTimeout(() => {
                        that.$router.push({
                            path: '/index/home'
                        })
                    }, 200)
                    // this.title = "";
                    // this.content = "";
                    // this.imageArray = [];
                    // this.$refs.textarea.value = ""
                }, 1000);
            }

        },
        is_select(index, item, data) {
            if (item.isSelect == true) {
                item.isSelect = false
                if (index == 0)
                    this.userText.groupAudience = ""
                else if (index == 1)
                    this.userText.topic = ""
            }
            else {
                for (let i of data) {
                    i.isSelect = false
                }
                item.isSelect = true
                if (index == 0)
                    this.userText.groupAudience = item.type
                else if (index == 1)
                    this.userText.topic = item.type
            }

        }
    },
    // 滚动重置
    beforeDestroy() {
    },
    mounted() {
    }
}
</script>
<style scoped>
* {
    padding: 0;
    margin: 0;
}

textarea {
    position: sticky;
    padding: 0;
    top: 0;
    width: 100%;
    outline: none;
    border: none;
    font-size: 1.2rem;
    min-height: 5rem;
    line-height: 1.2rem;
    height: auto;
    word-wrap: break-word;
    overflow-x: hidden;
    overflow-y: auto;
}

img {
    height: 100%;
    width: 100%;
}

.outer {
    height: 100vh;
    padding: .0 1rem;
    box-sizing: border-box;
}

header {
    position: sticky;
    top: 0;
    height: 10vh;
    box-sizing: border-box;
    font-size: 1.2rem;
}

.punish__top {
    position: sticky;
    top: 0;
    padding: 0 1rem;
    height: 4rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
}

.punish__top_active {
    position: fixed;
    top: 0;
    padding: 0 1rem;
    height: 4rem;
    width: 100%;
    background-color: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cancel__box {
    height: 1rem;
    width: 1rem;
}

#punish {
    border: none;
    background-color: transparent;
    color: #881280;
    font-size: 1.1rem;
}

section {
    height: 82vh;
    overflow: scroll;
    margin-top: 1rem;

}

section .choice_type {
    margin: .5rem 0;
    font-size: 1.1rem;
}

section .choice_type .topic--sub {

    color: #2177c7;
    margin-right: 0.2rem;
}

section .content {
    position: relative;
    margin-top: 1rem;
}

#title {
    padding: 0.8rem 0;
    width: 100vw !important;
    border: none;
    outline: none;
    resize: none;
    font-size: 1.2rem;
    border-top: 1px solid #c4bcbc;
    border-bottom: 1px solid #c4bcbc;
}

.content__img__box {
    width: 100%;
    display: flex;
    flex-flow: row wrap;

}


.addImage {
    position: relative;
    height: 10rem;
    width: 6rem;
    overflow: hidden;
    margin: 0 1% 1rem 0;
    flex: 1;
    width: calc((100%-4%)/3);
    max-width: calc((100% - 1rem)/3);
    min-width: calc((100% - 1rem)/3);
}

.addImage>img {
    width: 100%;
    height: 100%;
}

.addImage:nth-child(3n) {
    margin-right: 0;
}

.addImage :first-child {

    position: absolute;
    font-size: 1.2rem;
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.2rem;
    height: 1.2rem;
    width: 1.2rem;
    text-align: center;
    line-height: 1.5rem;
    border-radius: 50%;
    background-color: #dadce0;
}


footer {

    height: 8vh;
    border-top: 1px solid #efefef;
}

.bottom_function {
    position: sticky;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.img__box {
    width: 3rem;
}

/* 弹出样式 */
.choice_container {
    font-size: 1.5rem;
    padding: 1rem;
}

.choice_item {
    padding: 1rem 0;
}

.choice_item:last-child {
    border-bottom: none;

}

.choice_item_active {
    background-color: rgba(232, 232, 232, 0.5);
}

.loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>