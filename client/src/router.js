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
import userLogin from "@/components/userLogin.vue";
import userRegister from "@/components/register.vue";
import callback from "@/components/callback.vue";
import member from "@/views/member.vue";
import search from "@/views/search.vue";
import NProgress from "nprogress";
import Order from "@/components/member/Order";
import BrowsingHistory from "@/components/member/BrowsingHistory";
import Wishlist from "@/components/member/Wishlist";
import ProfileSetting from "@/components/member/ProfileSetting";
import CheckoutPage from "@/views/CheckoutPage.vue";

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
      path: "/product-detail/:ProductID",
      name: "product-detail",
      component: productDetail,
      props: true
    },
    {
      path: "/callback",
      name: "callback",
      component: callback
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
      path: "/member",
      component: member,
      meta: { requiresAuth: true },
      children: [
        {
          path: "",
          name: "member",
          component: ProfileSetting
        },
        {
          path: "browsing_history",
          name: "browsing_history",
          component: BrowsingHistory
        },
        {
          path: "wishlist",
          name: "wishlist",
          component: Wishlist
        },
        {
          path: "order",
          name: "order",
          component: Order
        }
      ]
    },
    {
      path: "/login",
      component: login_register,
      meta: { notLoggedIn: true },
      children: [
        {
          path: "",
          name: "userLogin",
          component: userLogin
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
      path: "/checkoutPage",
      name: "checkoutPage",
      component: CheckoutPage,
      props: true
    },
    {
      path: "/store",
      component: search,
      props: true,
      children: [
        {
          path: "",
          name: "store",
          component: search
        },
        {
          path: "/store/:searchContent",
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
  // check if user is logged in (start assuming the user is not logged in = false)
  let routerAuthCheck = false;
  // Verify all the proper access variables are present for proper authorization
  if (localStorage.getItem("user") && localStorage.getItem("token")) {
    routerAuthCheck = true;
  }
  if (to.matched.some(record => record.meta.notLoggedIn) && routerAuthCheck) {
    router.replace("/");
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if user is Authenticated
    if (routerAuthCheck) {
      // user is Authenticated - allow access
      next();
    } else {
      // user is not authenticated - redirect to login
      router.replace("/login");
    }
  } // Allow page to load
  else {
    next();
  }
});

export default router;
