import Vue from "vue";
import Router from "vue-router";
import home from "@/views/Home.vue";
import productDetail from "@/views/productDetail.vue";
import contact from "@/views/contact.vue";
import privacy from "@/components/privacy.vue";
import customerService from "@/components/customerService.vue";
import ourstore from "@/components/ourstore.vue";
import termOfUse from "@/components/termOfUse.vue";

Vue.use(Router);

const router = new Router({
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
    },
    {
      path: "/contact-us",
      name: "cotact-us",
      component: contact,
      children: [
        {
          path: "/contact-us/customer-service",
          name: "customer-service",
          component: customerService,
          props: true
        },
        {
          path: "/contact-us/ourstore",
          name: "ourstore",
          component: ourstore,
          props: true
        },
        {
          path: "/contact-us/term-of-use",
          name: "term-of-use",
          component: termOfUse,
          props: true
        },
        {
          path: "/contact-us/privacy",
          name: "privacy",
          component: privacy,
          props: true
        }
      ]
    }
  ]
});
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");
  if (to.matched.some(record => record.meta.requiresAuth && !loggedIn)) {
    next("/");
  }
  next();
});

export default router;
