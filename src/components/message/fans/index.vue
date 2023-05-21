<template>
    <div>
        <ChildNav />
        <div class="fans">
            <Fan v-for="fn, index in dataList" :item="fn" :key="index" />
        </div>
    </div>
</template>

<script>
import Fan from '../../common/fan/index.vue'
import ChildNav from '../../common/child-nav.vue';
export default {
    data() {
        return {
            dataList: [
                {
                    img: "https://buckettao.oss-cn-chengdu.aliyuncs.com/%E8%AE%BA%E5%9D%9B/topic/Snipaste_2023-05-05_00-48-54.png",
                    name: "幼稚园第一杀手"
                }, {
                    img: "https://buckettao.oss-cn-chengdu.aliyuncs.com/%E8%AE%BA%E5%9D%9B/beatity.jpg",
                    name: "你的账号已冻结"
                }, {
                    img: "../../../../static/img/duck.jpg",
                    name: "爱吃大米"
                },
                {
                    img: "https://buckettao.oss-cn-chengdu.aliyuncs.com/%E8%AE%BA%E5%9D%9B/th.jpg",
                    name: "又是失眠的一天"
                }]
        }
    },
    components: {
        Fan,
        ChildNav
    }
}
</script>

<style scoped>
.fans {
    padding: 4.3rem 1rem 3.3rem;
}
</style>