import Vue from "vue";
import $store from '../../store'

let i = 0;
let num = 1;
export default {
  namespaced: true,
  state: {
    dataMap:{
      // '$1': {}
    }
  },
  getters: {
    getData: (state) => (key) => {
      console.log(key, num ++)
      let data = state.dataMap[key]
      console.log(data)
      console.log('----------------------')
      if(!data) {
        let a = Vue.observable({})
        state.dataMap[key] = a
        data = state.dataMap[key]
        $store.dispatch('GetterTest/setData', key)
      }
      return data
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
        $store.updataDebounce(state.dataMap)
      })
    },
    test({state}, key) {
      Vue.delete(state.dataMap, key)
      Vue.set(state.dataMap, key, {
        val: key + (++i),
        key: key + '$'
      })
      // state.dataMap[key] = {
      //     val: key + (++i),
      //     key: key + '$'
      //   }
      console.log(state.dataMap[key])
    },
    update({state}) {
      Vue.set(state.dataMap, 'u', {})
      Vue.delete(state.dataMap, 'u')
    }
  }
}
