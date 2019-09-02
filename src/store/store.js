import Vue from "vue";
import Vuex from "vuex";
import * as product from "@/store/modules/product.js";
import * as cart from "@/store/modules/cart.js";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: { product, cart },
  state: {},
  mutations: {},
  actions: {}
});
