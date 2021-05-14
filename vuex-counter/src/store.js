// vuex的核心管理对象模块:store
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

const actions = {
  increment ({ commit }) {
    commit('INCREMENT')
  },
  decrement ({ commit }) {
    commit('DECREMENT')
  },
  incrementIfOdd ({ commit, state }) {
    if (state.count % 2 === 1) {
      commit('INCREMENT')
    }
  },
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  }
}

const getters = {
  evenOrOdd (state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}

export default new Vuex.Store({
  // 状态对象
  state,
  // 包含多个更新state函数的对象
  mutations,
  // 包含多个对应事件回调函数的对象
  actions,
  // 包含多个getter计算属性函数的对象
  getters
})
