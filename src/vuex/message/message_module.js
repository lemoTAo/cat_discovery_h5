// import state from "./message_state"
// import mutations from "./message_mutations"
// import actions from "./message_actions"
const actions = {
    reductionFun(context) {
        context.commit("reduction");
    },
    addFun(context) {
        context.commit("add");
    },
    completeFun(context) {
        context.commit("complete");
    },
    inCompleteFun(context) {
        context.commit("inComplete");
    },
    loadFun(context) {
        context.commit("load");
    },
    initUnReplay(context, data) {
        context.commit("INITUNREPLAY", data);
    }
}
const mutations = {
    reduction(state) {
        state.message.replyCount < 1 ? state.message.replyCount = 0 : state.message.replyCount--
    },
    add(state) {
        state.message.replyCount > 99 ? state.message.replyCount = "99+" : state.message.replyCount++
    },
    setPageName(state, name) {
        state.message.currentPageName = name
    },
    complete(state) {
        state.message.newsComplete = true
    },
    inComplete(state) {
        state.message.newsComplete = false
    },
    load(state) {
        state.message.newsComplete = false
    },
    INITUNREPLAY(state, data) {
        console.log('123', data);
        state.message.replyCount = data
    }
}
const state = {
    news: {
        user_info: [
            {
                user_info: {
                    "user_name": "呵儿",
                    "profile": "https://imgsa.baidu.com/forum/pic/item/8c1e7f234f4a20a437bcd26e9e529822730ed087.jpg",
                },
                "post_time": "2019-05-25",
                "content": "哈哈哈哈哈哈",
                "quiz": "我：二从他如何人被很讨厌票",
            },
            {
                user_info: {
                    "user_name": "呵",
                    "profile": "https://imgsa.baidu.com/forum/pic/item/c3fc23accbef7609f78a662320dda3cc7dd99e97.jpg",
                },
                "post_time": "2019-09-25",
                "content": "哈哈哈他会和你哈哈哈",
                "quiz": "我：二从他如哥特风那他人的发表人被很讨厌票",
            },
            {
                user_info: {
                    "user_name": "呵我",
                    "profile": "https://imgsa.baidu.com/forum/pic/item/b4818c500fb30f2468d416aac695d143ac4b03d2.jpg",
                },
                "post_time": "2019-08-25",
                "content": "哈哈哈他会和你打包哈哈哈",
                "quiz": "我：二从他如哥热比防抖风那他人的风格你何人被很讨厌票",
            },
            {
                user_info: {
                    "user_name": "官方",
                    "profile": "https://imgsa.baidu.com/forum/pic/item/b4818c500fb30f2468d416aac695d143ac4b03d2.jpg",
                },
                "post_time": "2019-02-25",
                "content": "哈哈哈他会和防抖你打包哈哈哈",
                "quiz": "我：二从他如打发打发哥热比防抖风那他人的风格你何人被很讨厌票",
            }
        ]
    }

}
const message_module = {
    namespaced: true,
    state,
    mutations,
    actions
}
export default message_module