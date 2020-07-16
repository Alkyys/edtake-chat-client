export const state = () => ({
  accessToken: '',
})

export const getters = {
  isAuthenticated(state) {
    return !!state.accessToken
  },
}

export const mutations = {
  SET_ACCESS_TOKEN: (state, payload) => {
    state.accessToken = payload
  },
}
