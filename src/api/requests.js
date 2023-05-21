import Vue from 'vue'
import instance from './request'
// Vue.prototype.$http=instance
export const reqRegister = (data) => {
    return instance({
        method: 'post',
        url: '/api/signup',
        data
    })
}

export const reqLogin = (data) => {
    return instance({
        method: 'post',
        url: '/api/login',
        data
    })
}
// 个人信息
export const reqGetUserInfo = () => {
    return instance({
        method: 'get',
        url: '/api/get_info'
    })
}
export const reqUpdateUserInfo = (data) => {
    console.log('1111',data);
    return instance({
        method: 'post',
        url: '/api/set_info',
        data
    })
}

// 发帖
export const reqPunish = (data) => {
    return instance({
        method: 'post',
        url: '/api/submit_post',
        data
    })
}

export const reqAllPost = () => {
    return instance({
        method: 'get',
        url: '/api/get_recommend'
    })

}

export const reqLike = (data) => {
    return instance({
        method: 'post',
        url: '/api/like',
        data
    })
}
export const reqComments = (data) => {
    return instance({
        method: 'post',
        url: '/api/add_comment',
        data
    })
}

export const reqHistory = (data) => {
    return instance({
        method: 'get',
        url: '/api/get_histories',
    })
}

export const reqAddHistory = (data) => {
    return instance({
        method: 'post',
        url: '/api/add_history',
        data
    })
}
export const reqMyPosted = (data) => {
    return instance({
        method: 'get',
        url: '/api/get_my_post',
        data
    })
}
export const reqFocusUser = (data) => {
    return instance({
        method: 'post',
        url: '/api/set_follow',
        data
    })
}
