export const namespaced = true;

export const state = {
  user: {},
  profileSetting: {}
};
export const mutations = {
  SET_USER(state, user) {
    state.user = user;
    localStorage.setItem("user", user);
  },
  SET_PROFILE(state, profileInfo) {
    state.profileSetting = profileInfo;
  }
};
export const actions = {
  setUser({ commit }, user) {
    commit("SET_USER", user);
  },
  setProfile({ commit }, profileInfo) {
    commit("SET_PROFILE", profileInfo);
  }
};
export const getters = {
  getProfileSetting: state => state.profileSetting
};
