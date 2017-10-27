import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 定义一个容器

let store = new Vuex.Store({
  state: {
    count: 100
  },
  getters: {
    filterCount (state) {
      return state.count >= 120 ? 120 : state.count
    }
  },
  mutations: {
    addIncrement (state, payload) {
      state.count += payload.n
    },
    deIncrement (state, payload) {
      state.count -= payload.n
    }
  },
  actions: {
    addAction ({commit, dispatch}) {
      setTimeout(() => {
        //改变状态，必须要提交一个mutation
        commit('addIncrement', {n: 5})
        dispatch('textAction', {test: '测试'})
      }, 1000)
    },
    textAction (context, obj) {
      console.log(obj)
    }
  }
})

export default store
