import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: {
      authorized: false,
      userRole: 'user',
      ping: false
    }
  },
  mutations: {
  },
  getters: {
    pingStatus: state => {
      return state.userData.ping
    }
  },
  actions: {
    async pingAuth ({ commit, state, getters, dispatch }, action) {
      let pingStatus = getters.pingStatus
      if (!pingStatus) {
        // some axios here
      }
      return false
    }
  },
  modules: {
  }
})
