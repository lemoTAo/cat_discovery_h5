<template>
    <div class="outer">
        <childNav />
        <div class="box">
            <div class="content_box">
                <div class="content--item" v-for=" item, index in  dataItems " :key="index">
                    <div class="content--item_userInfo">
                        <div class="img_box">
                            <img :src="item.userInfo.userImg" alt="">
                        </div>
                        <div class="userBaseInfo">
                            <div class="userName">
                                {{ item.userInfo.userName }}
                            </div>
                            <div class="time">
                                {{ item.userInfo.userTime }}
                            </div>
                        </div>
                    </div>
                    <div class="content--item__title">
                        <span class="title--tip">{{ item.title.type }}</span>
                        <div class="title--sub">{{ item.title.head }}</div>
                    </div>
                    <div class="content--item__content">
                        <div class="item_type">
                            {{ item.content.type }}
                        </div>
                        <div class="item_content">
                            {{ item.content.content }}
                        </div>
                        <div class="item_box_imgs">
                            <div class="item_imgs" v-for="imgitem, index in item.content.img " :key="index">
                                <img :src="imgitem" alt="">
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import childNav from '../../common/child-nav.vue';
import { mapState } from 'vuex';
export default {
    components: {
        childNav
    },
    computed: {
        ...mapState('go', ['dataItems'])

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
    /* background-color: #e8e8e8; */
}

.box {
    margin-top: 3rem;
}

.content_box {
    display: flex;
    flex-direction: column;
    background-color: #f7f7f7;
}

.content_box>.content--item {
    min-height: 20rem;
    padding: 1rem;
    box-sizing: border-box;
    background-color: #fff;
    margin-bottom: 2rem;
}

/* .content_box>.content--item:last-child {
    margin-bottom: 3rem;

} */

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
    background-color: #f7f7f7;
    border-radius: 1rem;
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
}
</style>