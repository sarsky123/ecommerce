import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as product from "@/store/modules/product.js";
import * as cart from "@/store/modules/cart.js";
import * as authentication from "@/store/modules/authentication.js";
import * as notification from "@/store/modules/notification.js";
import * as auth0 from "@/store/modules/auth0.js";
import * as bookmark from "@/store/modules/bookmark.js";
import * as checkout from "@/store/modules/checkout.js";
import * as userInfo from "@/store/modules/userInfo.js";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: "authPersist",
      paths: ["authentication", "cart", "product", "checkout", "userInfo"]
    })
  ],
  modules: {
    product,
    cart,
    auth0,
    authentication,
    notification,
    bookmark,
    checkout,
    userInfo
  },
  state: {},
  mutations: {},
  actions: {}
});
