export const namespaced = true;

export const state = {
  user: null,
  token: null,
  loading: false
};
export const mutations = {
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
    localStorage.setItem("token", token);
    state.isUserLoggedIn = !!token;
  },
  setUser(state, user) {
    state.user = user;
    localStorage.setItem("user", user);
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
    window.location.reload();
  }
};
export const getters = {
  loggedIn(state) {
    return !!(state.user && state.token);
  },
  getUserName(state) {
    const name = {
      FirstName: state.user.FirstName,
      LastName: state.user.LastName
    };
    return name;
  }
};
