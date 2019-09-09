import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let $store = new Vuex.Store({
  state: {
  },
  getters: {
  }
  ,
  mutations: {
  },
  actions: {
  }
})


 // 更新数据防抖
let debounceMap = new Map()
$store.updataDebounce = function(data, wait = 100) {
  return new Promise((resolve) => {
    let waitTimer = 0
    if (debounceMap.has(data)) {
      waitTimer = debounceMap.get(data)
    }
    waitTimer && clearTimeout(waitTimer)
    waitTimer = setTimeout(() => {
      data['$undefind$'] = {}
      Vue.delete(data, '$undefind$')
      resolve(data)
    }, wait)
    debounceMap.set(data, waitTimer)
  })
}

export default $store
