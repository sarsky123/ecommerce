import Vue from "vue";
import Router from "vue-router";
import home from "@/views/Home.vue";
import productDetail from "@/views/productDetail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
      props: true
    },
    {
      path: "/:id",
      name: "product-detail",
      component: productDetail,
      props: true
    }
  ]
});
