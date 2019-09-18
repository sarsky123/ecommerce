import axios from "axios";
export const namespaced = true;

export const state = {
  user: null
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
  }
};
export const actions = {
  register({ commit, dispatch }, credentails) {
    return axios
      .post("//localhost:3000/register", credentails)
      .then(({ data }) => {
        commit("SET_USER_DATA", data);
        const notification = {
          type: "success",
          message:
            "Thanks for registering, Your account has been logged in automaticly"
        };
        dispatch("notification/add", notification, { root: true });
      })
      .catch(error => {
        const notification = {
          type: "error",
          message: "There are some problem when you were trying to register"
        };
        dispatch("notification/add", notification, { root: true });
        throw error;
      });
  },
  loginAction({ commit, dispatch }, credentails) {
    return axios
      .post("//localhost:3000/login", credentails)
      .then(({ data }) => {
        commit("SET_USER_DATA", data);
        const notification = {
          type: "success",
          message: "Your account have logged in!"
        };
        dispatch("notification/add", notification, { root: true });
      })
      .catch(error => {
        const notification = {
          type: "error",
          message: "There are some problem when you were trying to login in"
        };
        dispatch("notification/add", notification, { root: true });
        throw error;
      });
  },
  logout({ commit }) {
    commit("CLEAR_USER_DATA");
  }
};
export const getters = {
  loggedIn(state) {
    return !!state.user;
  }
};
