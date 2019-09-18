import Vue from "vue";
import Router from "vue-router";
import home from "@/views/Home.vue";
import productDetail from "@/views/productDetail.vue";
import contact from "@/views/contact.vue";
import privacy from "@/components/privacy.vue";
import customerService from "@/components/customerService.vue";
import ourstore from "@/components/ourstore.vue";
import termOfUse from "@/components/termOfUse.vue";
import login_register from "@/views/login.vue";
import userLogin from "@/components/login.vue";
import userRegister from "@/components/register.vue";
import shop from "@/views/shop.vue";
import search from "@/views/search.vue";
import NProgress from "nprogress";

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
      path: "/product-detail/:id",
      name: "product-detail",
      component: productDetail,
      props: true
    },
    {
      path: "/contact-us",
      component: contact,
      children: [
        {
          path: "",
          name: "customer-service",
          component: customerService
        },
        {
          path: "ourstore",
          name: "ourstore",
          component: ourstore
        },
        {
          path: "term-of-use",
          name: "term-of-use",
          component: termOfUse
        },
        {
          path: "privacy",
          name: "privacy",
          component: privacy
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: login_register,
      children: [
        {
          path: "/login/login",
          name: "userLogin",
          component: userLogin,
          props: true
        },
        {
          path: "/login/register",
          name: "userRegister",
          component: userRegister,
          props: true
        }
      ]
    },
    {
      path: "/shop",
      name: "shop",
      component: shop,
      props: true
    },
    {
      path: "/search",
      name: "search",
      component: search,
      props: true,
      children: [
        {
          path: "/search/:searchContent",
          name: "searchContent",
          component: search,
          props: true
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
// Nprogress bar
router.beforeResolve((to, from, next) => {
  if (to.path) {
    NProgress.start();
  }
  next();
});
router.afterEach(() => {
  NProgress.done();
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");
  if (to.matched.some(record => record.meta.requiresAuth && !loggedIn)) {
    next("/");
  }
  next();
});

export default router;
