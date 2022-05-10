import Vue from 'vue'
import VueRouter from 'vue-router'
import MemoList from '../views/MemoList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'memo',
    component: MemoList
  },
  {
    path: '/list/:id', // /:id 값으로 쓰면 writeform으로 갈때도 이리로 가게되기때문에 /list를 한번 더 붙여준다
    name: 'listpage',
    component: function () {
      return import('../views/PageView.vue');
    }
  },
  {
    path: '/writeform',
    name: 'writeform',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/WriteForm.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
