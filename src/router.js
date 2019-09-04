import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import cartCheckout from "./views/cartCheckout.vue";
import productInfo from "./views/productInfo.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }
  ]
});
