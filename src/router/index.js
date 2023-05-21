import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'

Vue.use(Router)

const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: "/index",
    component: resolve => require(["../components/home/index.vue"], resolve),
    redirect: '/index/home',

  },
  {
    path: '/index',
    component: resolve => require(["../components/home/index.vue"], resolve),
    children: [
      {
        path: '',
        component: resolve => require(["../components/home/index.vue"], resolve)
      },
      {
        path: 'home',
        name: "/home",
        meta: {
          index: 0
        },
        component: resolve => require(["../components/home/home.vue"], resolve),
      },
      {
        path: 'show',
        name: "/show",
        component: resolve => require(["../components/home/show.vue"], resolve),
      }
    ]
  },
  {
    path: '/home/detail',
    name: "/home/detail",
    meta: {
      index: 1
    },
    components: {
      "subPage": resolve => require(["../components/detail/index.vue"], resolve),
    }
  },
  {
    path: '/go',
    name: "/go",
    meta: {
      index: 0
    },
    component: resolve => require(["../components/go/go.vue"], resolve)
  }, {
    path: '/go/go_detail',
    name: "/go/go_detail",
    meta: {
      index: 1
    },
    components: {
      "subPage": resolve => require(["../components/GO/go_detail/go_detail.vue"], resolve)
    }
  }, {
    path: '/message',
    name: "/message",
    meta: {
      index: 0
    },
    component: resolve => require(["../components/message/message.vue"], resolve)
  }, {
    path: '/message/replay',
    name: "/message/replay",
    components: {
      "subPage": resolve => require(["../components/message/reply/index.vue"], resolve)
    }
  }, {
    path: '/message/fans',
    name: "/message/fans",
    components: {
      "subPage": resolve => require(["../components/message/fans/index.vue"], resolve)
    }
  }
  , {
    path: '/me',
    name: "/me",
    meta: {
      index: 0
    },
    component: resolve => require(["../components/me/me.vue"], resolve),
  }, {
    path: '/me/unLogin',
    name: "/me/unLogin",
    meta: {
      index: 0,
      ban: 0
    },
    components: {
      "subPage": resolve => require(["../components/me/unLogin.vue"], resolve)
    }
  }, {
    path: '/home/punish',
    name: "/home/punish",
    components: {
      "subPage": resolve => require(["../components/punish/index.vue"], resolve)
    }
  }
  , {
    path: '/home/search',
    name: "/home/search",
    components: {
      "subPage": resolve => require(["../components/search/search.vue"], resolve)
    }
  },
  {
    path: '/me/myPunish',
    name: '/me/myPunish',
    components: {
      "subPage": resolve => require(["../components/me/myPunish.vue"], resolve),
    }
  },
  {
    path: '/me/personData',
    name: '/me/personData',
    components: {
      "subPage": resolve => require(["../components/me/person-data.vue"], resolve),
    }
  },
  {
    path: '/me/history',
    name: '/me/history',
    components: {
      "subPage": resolve => require(["../components/me/my_report.vue"], resolve),
    }
  }
]
const router = new Router({
  base: "/heer/",
  routes
})
router.beforeEach((to, from, next) => {
  console.log(to.path);
  // 防止登录与未登录切换问题
  if (to.path == '/me/unLogin' && from.path == '/me') {
    to.meta.ban = 1
  }

  if (to.path == '/me' && from.path == '/me/unLogin') {
    if (from.meta.ban == 1) {
      // console.log(from.path.meta.ban);
      // from.path.meta.ban = 2
      console.log(123456);
      next({
        path: '/index/home'
      })
      from.meta.ban = 0
      return
    }
    // return
  }


  //pc
  let top = document.documentElement.scrollTop;
  //app
  store.commit("home/setTop", { path: from.path, top: top });
  const token = localStorage.getItem('token') || false
  if (to.path == "/me" && !token) {
    next({
      path: '/me/unLogin', // 未登录则跳转至login页面
    });
  }
  else
    next();
})
router.afterEach((to, from) => {
  //pc
  if (to.path == "/index/home") {
    setTimeout(() => {
      document.documentElement.scrollTo(
        0,
        store.state.home.index.top.homeTop
      );
    }, 0);
  }
  else if (to.path == "/index/topic") {
    setTimeout(() => {
      document.documentElement.scrollTo(
        0,
        store.state.home.index.top.topicTop
      );
    }, 0);
  }
  else if (to.path == "/index/show") {
    setTimeout(() => {
      document.documentElement.scrollTo(
        0,
        store.state.home.index.top.showTop
      );
    }, 0);
  }
  else
    return;
  //app
  /* if (to.path == "/index/home") {
    setTimeout(() => {
      document.body.scrollTo(
        0,
        store.state.home.index.top.homeTop
      );
    }, 0);
  }
  else if (to.path == "/index/topic") {
    setTimeout(() => {
      document.body.scrollTo(
        0,
        store.state.home.index.top.topicTop
      );
    }, 0);
  }
  else if (to.path == "/index/show") {
    setTimeout(() => {
      document.body.scrollTo(
        0,
        store.state.home.index.top.showTop
      );
    }, 0);
  }
  else
    return; */
})
export default router