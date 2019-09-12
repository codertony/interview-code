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

/**
 * @author tony
 * @date 2019-09-05 09:45
 * @name updataDebounce
 * @Description 更新数据防抖
 * @param {any} data - 需要更新的数据.
 * @param {number} wait - 防抖时间.
 * @return {promise} xxx.
 */
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
      // 相当于下面的代码
      // let ob = data.__ob__;
      // if(ob) {
      //   ob.dep.notify()
      // }
      resolve(data)
    }, wait)
    debounceMap.set(data, waitTimer)
  })
}

window.$store = $store

export default $store
