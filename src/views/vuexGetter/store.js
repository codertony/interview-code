import Vue from "vue";
import $store from '../../store'

let i = 0
let num = 1
export default {
  namespaced: true,
  state: {
    dataMap:{}
  },
  getters: {
    getData: (state) => (key) => {
      console.log(key, num++)
      let data = state.dataMap[key]
      if(!data) {
        $store.dispatch('GetterTest/setData', key)
      }
      return data || {}
    }
  }
  ,
  mutations: {
  },
  actions: {
    setData({state}, key) {
      setTimeout(() => {
        Vue.set(state.dataMap, key, {
          val: key + (++i),
          key: key + '$'
        })
        // $store.updataDebounce(state.dataMap)
      })
    },
    update() {
      // Vue.set(state.dataMap, 'u', {})
      // Vue.delete(state.dataMap, 'u')
    }
  }
}
