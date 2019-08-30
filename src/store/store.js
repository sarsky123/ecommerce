import Vue from "vue";
import Vuex from "vuex";
import * as product from "@/store/modules/product.js";
import * as cart from "@/store/modules/cart.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { product, cart },
  state: {},
  mutations: {},
  actions: {}
});
