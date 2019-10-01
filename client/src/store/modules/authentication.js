import axios from "axios";
export const namespaced = true;

export const state = {
  user: null,
  token: null,
  loading: false
};
export const mutations = {
  SET_USER_DATA(state, userData) {
    state.user = userData;
    localStorage.setItem("user", JSON.stringify(userData));
    axios.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;
  },
  CLEAR_USER_DATA() {
    localStorage.removeItem("user");
    location.reload();
  },
  SET_LOADING(state) {
    state.loading = true;
  },
  SET_LOADING_DONE(state) {
    state.loading = false;
  },
  setToken(state, token) {
    state.token = token;
    state.isUserLoggedIn = !!token;
  },
  setUser(state, user) {
    state.user = user;
  },
  Clear_Everything(state) {
    state.user = null;
    state.token = null;
  }
};
export const actions = {
  setToken({ commit }, token) {
    commit("setToken", token);
  },
  setUser({ commit }, user) {
    commit("setUser", user);
  },
  logOut({ commit }) {
    commit("Clear_Everything");
  }
};
export const getters = {
  loggedIn(state) {
    return !!state.user;
  }
};
