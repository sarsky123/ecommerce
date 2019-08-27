import Vue from "vue";
import Vuex from "vuex";
import * as product from "@/store/modules/product.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { product },
  state: {},
  mutations: {},
  actions: {}
});
