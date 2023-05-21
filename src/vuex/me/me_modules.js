// import state from "./message_state"
// import mutations from "./message_mutations"
// import actions from "./message_actions"
import { reqLogin, reqGetUserInfo, reqRegister, reqUpdateUserInfo, reqHistory, reqMyPosted } from "../../api/requests"
const actions = {
    //注册
    async register({ commit }, params) {
        console.log('register');
        try {
            const { data } = await reqRegister(params)
            console.log(data);
            if (data.status == 'ok') {
                return new Promise((resolve) => {
                    resolve("注册成功")
                })
            }
            else {
                return new Promise((resolve, reject) => {
                    reject(data.data.msg)
                })
            }

        } catch (e) {
            console.log(e);

        }
    },
    // 获取登录token
    async loginAndGetToken({ commit }, params) {
        try {
            const { data } = await reqLogin(params)
            console.log(data);
            if (data.status == 'ok') {

                commit('LOGINANDGETTOKEN', data.data.token)
                commit('GETUSERINFO', data.data.info)
            }
            else {
                return new Promise((resolve, reject) => {
                    reject('failen')
                })
            }

        } catch (e) {
            console.log(e);

        }
    },
    // 获取用户信息
    async getUserInfo({ commit }) {
        try {
            const { data } = await reqGetUserInfo()
            if (data.status == 'ok') {
                console.log(data.data.info);
                commit('GETUSERINFO', data.data.info)
            }
            else {
                return new Promise((resolve, reject) => {
                    reject('failen')
                })
            }
        } catch (e) {
            console.log(e);
        }
    },
    // 修改用户信息
    async UpdateUserInfo({ commit }, params) {
        try {
            const result = await reqUpdateUserInfo(params)
            commit('GETUSERINFO', result.data.data.info)
            console.log('save', result);
            return new Promise((resolve, reject) => {
                if (result.data.status == "ok")
                    resolve("ok")
                reject("fail")
            })
        }
        catch (e) {
            console.log(e);
        }
    },
    async getHistoryList({ commit }, params) {
        try {
            const result = await reqHistory(params)

            commit('GETHISTORY', result.data.data.items)
        }
        catch (e) {
            console.log(e);
        }
    },
    async getMyPosted({ commit }) {
        try {
            const result = await reqMyPosted()
            console.log(result.data.data);
            commit('saveMyPost', result.data.data.items)
        }
        catch (e) {
            console.log(e);
        }
    }

}
const mutations = {
    LOGINANDGETTOKEN(state, data) {
        localStorage.setItem('token', data)
    },
    GETUSERINFO(state, data) {
        state.userInfo = data
        localStorage.setItem('userInfo', JSON.stringify(data))
    },
    GETHISTORY(state, data) {
        state.history = data
    },
    saveMyPost(state, data) {
        state.myPost = data
    },
}
const state = {
    token: localStorage.getItem('token') || "",
    userInfo: JSON.parse(localStorage.getItem('userInfo')) ? JSON.parse(localStorage.getItem('userInfo')) : {},
    history: [],
    myPost: []

}
const me_module = {
    namespaced: true,
    state,
    mutations,
    actions
}
export default me_module