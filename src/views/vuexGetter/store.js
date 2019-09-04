import Vue from "vue";
import $store from '../../store'

let i = 0
export default {
  namespaced: true,
  state: {
    dataMap:{}
  },
  getters: {
    getData: (state) => (key) => {
      console.log(key)
      let data = state.dataMap[key]
      if(!data) {
        data = {}
        $store.dispatch('GetterTest/setData', key)
      }
      return data
    }
  }
  ,
  mutations: {
  },
  actions: {
    setData({state, dispatch}, key) {
      setTimeout(() => {
        Vue.set(state.dataMap, key, {
          val: key + (++i),
          key: key + '$'
        })
      })
    },
    update({state}) {
      // Vue.set(state.dataMap, 'u', {})
      // Vue.delete(state.dataMap, 'u')
    }
  }
}
