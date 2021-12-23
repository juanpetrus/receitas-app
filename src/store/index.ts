import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      email: '',
      name: '',
      token: ''
    }
  },
  mutations: {
    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload)
    }
  },
  actions: {
    defineUser({commit}, data) {
      commit('UPDATE_USER', data.token.token);
      localStorage.setItem('token', data.token.token);
    },
    logout({commit}) {
      commit('UPDATE_USER', {
        name: '',
        email: ''
      });
      localStorage.removeItem('token');
      location.reload();
    }
  },
  modules: {
  }
})
