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
    babel: '模块内部数据的私有化',
    path: '/modelDemo',
    name: 'modelDemo',
    component: () => import(/* webpackChunkName: "modelDemo" */ './views/modelDemo')
  },
  {
    babel: 'vuex的getter触发',
    path: '/vuexGetter',
    name: 'vuexGetter',
    component: () => import(/* webpackChunkName: "vuexGetter" */ './views/vuexGetter')
  },
  {
    babel: 'promise执行顺序测试',
    path: '/promiseDemo',
    name: 'promiseDemo',
    component: () => import(/* webpackChunkName: "promiseDemo" */ './views/promiseDemo')
  },
  {
    babel: '自定义bind',
    path: '/myBind',
    name: 'myBind',
    component: () => import(/* webpackChunkName: "myBind" */ './views/myBind')
  },
  {
    babel: 'thisDemo',
    path: '/thisDemo',
    name: 'thisDemo',
    component: () => import(/* webpackChunkName: "thisDemo" */ './views/thisDemo/index')
  },
  {
    babel: '居中demo',
    path: '/MiddleDemo',
    name: 'MiddleDemo',
    component: () => import(/* webpackChunkName: "MiddleDemo" */ './views/MiddleDemo/index')
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
