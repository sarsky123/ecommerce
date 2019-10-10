export const namespaced = true;

export const state = {
  user: {}
};
export const mutations = {
  setUser(state, user) {
    state.user = user;
    localStorage.setItem("user", user);
  }
};
export const actions = {
  setUser({ commit }, user) {
    commit("setUser", user);
  }
};
export const getters = {};
