import Vue from 'vue'
import store from './vuex/store'
import App from './App'
import router from './router'
import filters from './filters'
filters(Vue)

import instance from '@/api/request.js'
Vue.prototype.$http = instance

Vue.config.productionTip = false

import { Button, Tab, Tabs, Popup, Cell, Dialog, Loading, Search, List, PullRefresh, ActionSheet, Rate } from 'vant';

Vue.use(Button).use(Tab).use(Tabs).use(Popup).
  use(Cell).use(Dialog).use(Loading).use(Search).
  use(List).use(PullRefresh).use(ActionSheet).use(Rate);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  beforeCreate() {
    Vue.prototype.$bus = this
  }
})
