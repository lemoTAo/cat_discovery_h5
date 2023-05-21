<template>
    <div class="outer">
        <ChildNav />

        <div class="content">

            <div v-for="item, index in historyItems" :key="index">
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
import { mapState } from 'vuex'
import ChildNav from '../common/child-nav.vue'
import Report from '../common/report/index.vue'
export default {
    data() {
        return {
            show: false
        }
    },
    computed:{
        ...mapState('me', { historyItems: 'history' })
    },
    components: {
        Report,
        ChildNav,
    },
    methods: {
        starAndDelete(data) {
            this.show = true
        }
    },
    mounted() {
        this.$bus.$on('showPop', this.starAndDelete)
    },
    beforeCreate() {
        this.$store.dispatch('me/getHistoryList')
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

img {
    height: 100%;
    object-fit: cover;
}

.outer {
    height: 100vh;
    background-color: #f7f7f7;
}

.ad {
    display: flex;
    height: 50%;
    padding: 0.5rem 0.6rem;
    align-items: center;
}

.ad>span {
    margin-right: 1rem;
}

.content {
    height: 100vh;
    padding: 0 0.5rem;
    padding-top: 1rem;
}
</style>