<template>
    <div class="fans-items">
        <div class="items-left">
            <div class="img_box">
                <img :src="item.img" alt="">
            </div>
            <div class="userInfo">
                <div>{{ item.name }}</div>
                <span>关注了你</span>
            </div>
        </div>
        <button class="btn-focus btn-color" @click="getFocus()" style="transition: all 0.3s;">{{ content }}</button>
        <div class="dot" v-if="!(content == '互相关注')"></div>
    </div>
</template>

<script>
import ChildNav from '../child-nav.vue';
export default {
    data() {
        return {
            content: "关注"
        }
    },
    props: ['item'],
    components: {
        ChildNav
    },
    methods: {
        getFocus() {
            this.content = "互相关注"
        }
    }
}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 1.3rem;
}

.fans-items {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    margin-bottom: 3rem;
}

.items-left {
    display: flex;
}

.img_box>img {
    height: 4.5rem;
    border-radius: 50%;
}

.userInfo {
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
    padding: .5rem 0;
    justify-content: space-between;

}

.userInfo>span {
    font-size: 1.2rem;
    color: #99979bbb;
}

.dot {
    position: absolute;
    top: 1rem;
    right: 0;
    width: .5rem;
    height: .5rem;
    background-color: red;
    border-radius: 50%;
}

/* .focus {
    height: 100%;
} */

/* btn-focus btn-color */
.btn-focus {
    font-size: 1rem;
    padding: .3rem 1rem;
    border-radius: 1rem;
    margin-right: 1rem;
}

.btn-focus {
    background-color: #40527c;
    color: #fff;
}
</style>