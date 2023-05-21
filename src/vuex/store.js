import Vue from 'vue'
import Vuex from 'vuex'
import home_module from "./home/home_module"
import go_module from "./go/go_module"
import message_module from "./message/message_module"
import me_module from './me/me_modules'
Vue.use(Vuex)
export default new Vuex.Store({
    modules:
    {
        home: home_module, go: go_module, 'message_module': message_module, me: me_module
    }
})