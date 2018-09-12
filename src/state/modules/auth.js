import axios from 'axios'

export const state = {
  currentUser: null,
  token: null
}

export const mutations = {
  SET_CURRENT_USER (state, newValue) {
    state.currentUser = newValue
  },
  SET_AUTH_TOKEN (state, token) {
    state.token = token
  }
}

export const getters = {
  // Whether the user is currently logged in.
  loggedIn (state) {
    return !!state.currentUser
  }
}

export const actions = {
  // Logs in the current user.
  async logIn ({ commit, dispatch, getters }, params) {
    // const { data } = axios.post('/login', params)
    const data = {
      data: {
        auth_token: 'valid-token',
        user: {
          id: 1,
          first_name: 'John',
          last_name: 'Doe',
          email: 'john.doe@example.com'
        }
      },
      status: 200
    }

    commit('SET_CURRENT_USER', data.data.user)
    commit('SET_AUTH_TOKEN', data.data.auth_token)

    return data
  },

  // Logs out the current user.
  logOut({ commit }) {
    commit('SET_CURRENT_USER', null)
    commit('SET_AUTH_TOKEN', null)
  },
}
