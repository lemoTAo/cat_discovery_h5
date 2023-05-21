<template>
    <div>
        <childNav />

        <div class="outer">
            <div class="content" v-for="item, index in myItems" :key="index">
                <Report :item="item" />
            </div>
        </div>

        <van-popup v-model="show" position="bottom" :style="{ height: '15%' }">
            <div class="ad">
                <span style="display:inline-block;height: 2rem;"><img src="../../../static/img/delete.png" alt=""></span> 删除
            </div>
            <div class="ad">
                <span style="display:inline-block;height: 2rem;"><img src="../../../static/img/edit.png" alt=""></span>
                编辑
            </div>
        </van-popup>
    </div>
</template>

<script>
import childNav from '../common/child-nav.vue'
import myPost from '../common/my-posted.vue'
import Report from '../common/report/index.vue'
import { mapState } from 'vuex'
export default {
    data() {
        return {
            show: false,
        }
    },
    computed: {
        ...mapState('me', { myItems: 'myPost' })
    },
    components: {
        childNav,
        myPost,
        Report
    },
    beforeCreate() {
        this.$store.dispatch("me/getMyPosted")
    },
    methods: {
        starAndDelete(data) {
            this.show = true
        }
    },
    mounted() {
        this.$bus.$on('showPop', this.starAndDelete)
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
    padding: 0 1rem;
    background-color: #f7f7f7;
    box-sizing: border-box;
}

.content {
    padding-top: 1rem;

}

.ad {
    font-size: 1.3rem;
    display: flex;
    height: 50%;
    align-items: center;
}

.ad:active {
    background-color: #efefef;
}

.ad>span {
    margin-right: 1rem;
}
</style>