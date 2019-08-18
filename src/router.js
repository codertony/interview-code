import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

let routes = [
  {
    babel: '主页',
    path: '/',
    name: 'home',
    component: Home
  },
  {
    babel: '防抖',
    path: '/debounce',
    name: 'debounce',
    component: () => import(/* webpackChunkName: "debounce" */ './views/debounce/index')
  },
  {
    babel: 'demo',
    path: '/demo',
    name: 'demo',
    component: () => import(/* webpackChunkName: "demo" */ './views/demo/index')
  },
]
export {
  routes
}

export default new Router({
  routes
})
