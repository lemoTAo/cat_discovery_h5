// import state from "./home_state"
// import mutations from "./home_mutations"
// import actions from "./home_actions"
import { reqPunish, reqLike, reqComments, reqAllPost, reqAddHistory, reqFocusUser } from "../../api/requests"

const state = {
    index: {
        top: {
            "homeTop": 0,
            "topicTop": 0,
            "showTop": 0
        },
        home: [
            {
                "hid": 1,
                "photo": "https://tvax1.sinaimg.cn/crop.0.0.996.996.180/7ad72e09ly8frr0k3kkssj20ro0ro76m.jpg",
                "name": "呵儿",
                "content": "不科学不科学真的很不科学不科学不科学真的很不科学",
                "picture": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558797940618&di=96390e4612214bbc29d64423b68f3ec1&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201209%2F15%2F20120915181435_keaPy.jpeg",
                "tag": "科学吧",
                "words": 100,
                "like": 100,
                "color": "red"
            },
            {
                "hid": 2,
                "photo": "https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/852b134f?t=1546935843",
                "name": "头头",
                "content": "哈哈哈哈哈哈哈哈哈",
                "picture": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558797963866&di=d1b01ebe900e5cd040668ea481513a1c&imgtype=0&src=http%3A%2F%2Fimgq.duitang.com%2Fuploads%2Fitem%2F201302%2F09%2F20130209193304_jKLja.jpeg",
                "tag": "冒险吧",
                "words": 22,
                "like": 88,
                "color": "black"
            },
            {
                "hid": 3,
                "photo": "https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/b3067a616f6d656e677869796f756d697a23?t=1544879422g",
                "name": "谷歌",
                "content": "厉害了吧顶顶顶顶",
                "picture": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558797963864&di=36a029168cfc14bfb2b5cb2043fc95fc&imgtype=0&src=http%3A%2F%2Fs9.sinaimg.cn%2Fmw690%2F8d3a84f1gx6BtSbpOiY48%26690",
                "tag": "科学吧",
                "words": 88,
                "like": 900,
                "color": "yellow"
            },
            {
                "hid": 4,
                "photo": "https://imgsa.baidu.com/forum/whfpf%3D210%2C210%2C40%3Bq%3D100%3Bg%3D0/sign=e8df5ebec1fc1e17fdeadf712cadc432/fea5d9ee76094b3607d9f245adcc7cd98c109ddd.jpg",
                "name": "他已经",
                "content": "不科学不科学真的很不科学不科学不科学真的很不科学热歌",
                "picture": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558797963862&di=198dd15e26c5a2c774fb54e2aa56ab5a&imgtype=0&src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F7968973787%2F1000",
                "tag": "科学吧",
                "words": 100,
                "like": 100,
                "color": "blue"
            },
            {
                "hid": 5,
                "photo": "https://imgsa.baidu.com/forum/pic/item/f5f9d1086b63f62489dfeeab8944ebf8184ca384.jpg",
                "name": "呵儿",
                "content": "不科学不科学真的很不科学不科学不科学真的很不科学",
                "picture": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558797963860&di=b0ff03214685b87c9b1ad35567b775bd&imgtype=0&src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F8931959383%2F1000",
                "tag": "科学吧",
                "words": 100,
                "like": 100,
                "color": "pink"
            }
        ],
        show: [
            {
                "sid": 1,
                "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558799081259&di=c174c5fb99ead36642770d39ea78e213&imgtype=0&src=http%3A%2F%2Fwww.kuai8.com%2Fattaches%2Fpicture%2F20130729%2F201307291954187591.jpg"
            },
            {
                "sid": 2,
                "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558799081259&di=05a069af2b43b48142ae541f5483254a&imgtype=0&src=http%3A%2F%2Fp5.qhimg.com%2Ft0102e40418fc6eaa6a.jpg"
            },
            {
                "sid": 3,
                "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558799081259&di=fe9df80a7206da11958485372e1c0c40&imgtype=0&src=http%3A%2F%2Fupload.anqu.com%2F20160418%2F14609526258639.png"
            },
            {
                "sid": 4,
                "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558799081259&di=bad1f7edb99dd072120a1bd312d2b895&imgtype=0&src=http%3A%2F%2Fupload.newhua.com%2F2013%2F1126%2F1385432851585.jpg"
            }
        ]
    },
    allData: [],
    broadCase: [
        "https://buckettao.oss-cn-chengdu.aliyuncs.com/%E8%AE%BA%E5%9D%9B/study/study_1.png",
        "https://buckettao.oss-cn-chengdu.aliyuncs.com/%E8%AE%BA%E5%9D%9B/study/study_2.png",
        "https://buckettao.oss-cn-chengdu.aliyuncs.com/%E8%AE%BA%E5%9D%9B/study/study_3.png",
        "https://buckettao.oss-cn-chengdu.aliyuncs.com/%E8%AE%BA%E5%9D%9B/study/study_4.png"
    ]
}

const actions = {
    // 发布文章
    async pushArticle({ commit }, data) {
        try {
            const result = await reqPunish(data)
            return new Promise((resolve, reject) => {
                if (result.data.status == 'ok') {
                    resolve("发布成功")
                } else
                    reject('failen')
            })
        }
        catch (e) {
            console.log(e);
        }
    },
    // 点赞
    async clickLike({ commit }, { post_id, index }) {
        commit('localUpdateAllDataIsLike', index)
        try {
            const result = await reqLike({ post_id })
            console.log(result);
        } catch (e) {
            console.log(e);
        }
    },
    async pushComment({ commit }, { data, index }) {
        commit("localUpdateAllDataComment", { data, index })
        try {
            const result = await reqComments(data)
            console.log(result);
        } catch (e) {
            console.log(e);
        }
    },
    async getAll({ commit }) {
        try {
            const { data } = await reqAllPost()
            console.log(data);
            if (data.status == 'ok')
                commit('GETALL', data.data.items)
            else
                new Promise((resolve, reject) => {
                    reject("请求错误，请稍后再试")
                })

        } catch (e) {
            console.log(e);
        }
    },
    async addHistory({ commit }, data) {
        try {
            // const result  = 
            await reqAddHistory(data)

        } catch (e) {
            console.log(e);
        }

    },
    async focusUser({ commit }, data) {
        try {
            // const result  = 
            const result = await reqFocusUser(data)
            console.log(result.data);
            return new Promise((resolve, reject) => {
                if (result.data.msg = "关注成功")
                    resolve('success')
                else
                    reject("fail")
            })

        } catch (e) {
            console.log(e);
        }

    },

}

const mutations = {
    setTop(state, data) {
        if (data.path == "/index/home")
            state.index.top.homeTop = data.top
        else if (data.path == "/index/topic")
            state.index.top.topicTop = data.top
        else if (data.path == "/index/show")
            state.index.top.showTop = data.top
        else
            return;
    },
    GETALL(state, data) {
        state.allData = data
    },
    // 本地存储，修改本地
    localUpdateAllDataIsLike(state, index) {
        console.log(index);
        state.allData[index].post_info.is_like = !state.allData[index].post_info.is_like
        if (state.allData[index].post_info.is_like) {
            state.allData[index].post_info.like_count++
        }
        else {
            state.allData[index].post_info.like_count--
        }
    },
    localUpdateAllDataComment(state, { data, index }) {
        const addIndex = state.allData[index].post_body.comments.length;
        const date = new Date()
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const second = date.getSeconds();
        const time = `${year}-${month}-${day}  ${hour}:${minutes}:${second}`
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        state.allData[index].post_body.comments[addIndex] =
        {
            content: data.content,
            post_time: time,
            user_info: {
                profile: userInfo.profile,
                user_id: "",
                user_name: userInfo.user_name
            }

        },
            console.log('123', state.allData[index].post_body.comments);
    }
}
const home_module = {
    namespaced: true,
    state,
    actions,
    mutations
}
export default home_module