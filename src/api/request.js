import axios from "axios";
const instance = axios.create({
    baseURL: 'http://47.120.40.123:5000',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
})
instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token') || ""
    // if (user.state.token)
    config.headers.Authorization = 'Bearer ' + token
    return config;
})

instance.interceptors.response.use((res) => {
    return Promise.resolve(res)

}, () => {
    return Promise.reject(new Error('fail'))
})
// instance.
export default instance