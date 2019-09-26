import Vue from "vue";
import Vuex from "vuex";
import * as product from "@/store/modules/product.js";
import * as cart from "@/store/modules/cart.js";
import * as authentication from "@/store/modules/authentication.js";
import * as notification from "@/store/modules/notification.js";
import * as auth0 from "@/store/modules/auth0.js";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [],
  modules: { product, cart, auth0, authentication, notification },
  state: {},
  mutations: {},
  actions: {}
});
