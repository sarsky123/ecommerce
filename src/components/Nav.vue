<template>
  <div class="header-wrapper ">
    <div class="info-bar Desktop-show">
      <div class="wrapper">
        <div class="float-left"></div>
        <div class="clearfix">
          <div>
            <p class="float-right textLinks uppercase">
              <a href="#">Login</a>
              &nbsp; · &nbsp;
              <a href="#">CREATE Account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="site-header">
      <div class="wrapper clearfix">
        <div class="nav-desktop">
          <div class="mobile-wrapper">
            <div class="header-cart_wrapper">
              <a
                href="#"
                class="cartToggle header-cart"
                @click.prevent="showPopupCart()"
              ></a>
              <span
                v-if="hasProduct()"
                class="header-cart_bubble cartCount hidden-count"
              >
                {{ getProductsInCartLength() }}
              </span>
            </div>
            <div class="logo-wrapper">
              <h1
                class="header-logo"
                itemscope
                itemtype="http://schema.org/Organization"
              >
                <a href="/" itemprop="url">
                  <img
                    src="https://cdn.shopify.com/s/files/1/1132/3440/t/3/assets/logo.png?105"
                    alt="Hebe Designer Boutique"
                    itemprop="logo"
                    class="logo-image"
                  />
                </a>
              </h1>
            </div>
            <a
              href="#"
              class="menuToggle header-hamburger"
              @click.prevent="toggleMenu()"
            ></a>
          </div>
          <login
            v-if="isLogin"
            @toggleLogin="toggleMenu()"
            @toggleRegister="toggleRegisterMenu()"
            class="header-menu mobile-menu nav-wrapper"
          />
          <register
            v-else-if="isRegister"
            @toggleRegister="toggleMenu()"
            @registerToggleRegister="toggleLoginMenu"
            class="header-menu mobile-menu nav-wrapper"
          />
          <div
            v-else
            :class="
              this.isActive
                ? 'header-menu mobile-menu nav-wrapper '
                : 'header-menu mobile-menu nav-wrapper noShowMeWhatUGot'
            "
          >
            <div class="container">
              <div class="row">
                <div
                  class="col bg-secondary text-capitalize text-center p-3
                border-right border-light "
                  @click="toggleLoginMenu()"
                >
                  Login
                </div>
                <div class="col bg-secondary text-capitalize text-center p-3">
                  whishlist
                </div>
              </div>
            </div>
            <ul class="main-menu accessibleNav">
              <li class="main-menu-active">
                <a href="/" class="link">Shop</a>
              </li>
              <li><a href="#">MY BOYFRIEND BACK</a></li>
              <li><a href="#">Safe Edit</a></li>
              <li>
                <router-link
                  :to="{
                    name: 'customer-service'
                  }"
                  >CONTACT</router-link
                >
              </li>
              <li class="cart-text-link">
                <a
                  href="javascript:void(0)"
                  class="cartToggle menuCart"
                  @click.prevent="showPopupCart()"
                >
                  cart
                </a>
              </li>
            </ul>
          </div>
          <div class="desktop-menu">
            <div
              class="
              'wrapper header-menu nav-wrapper 
            "
            >
              <ul class="main-menu accessibleNav">
                <li class="main-menu-active">
                  <a href="/" class="link">Shop</a>
                </li>
                <li><a href="#">MY BOYFRIEND BACK</a></li>
                <li><a href="#">Safe Edit</a></li>
                <li>
                  <router-link
                    :to="{
                      name: 'customer-service'
                    }"
                    >CONTACT</router-link
                  >
                </li>
                <li class="cart-text-link">
                  <a
                    href="javascript:void(0)"
                    class="cartToggle menuCart"
                    @click.prevent="showPopupCart()"
                  >
                    cart
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { vueWindowSizeMixin } from "vue-window-size";
import login from "@/components/Login.vue";
import register from "@/components/register.vue";
export default {
  data() {
    return {
      isActive: false,
      isLogin: false,
      isRegister: false
    };
  },
  components: {
    login,
    register
  },
  methods: {
    ...mapActions("cart", ["showOrHiddenPopupCart"]),
    toggleMenu: function() {
      this.isLogin = false;
      this.isRegister = false;
      this.isActive = !this.isActive;
    },

    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    showPopupCart() {
      this.showOrHiddenPopupCart();
    },
    getProductsInCartLength() {
      return this.getProductsInCart.length;
    },
    toggleLoginMenu() {
      this.isLogin = !this.isLogin;
    },
    toggleRegisterMenu() {
      this.isRegister = true;
      this.isLogin = false;
    },
    closeLoginMenu() {
      this.isLogin = false;
      this.isActive = false;
      this.isRegister = false;
    }
  },
  computed: {
    ...mapGetters("cart", ["getProductsInCart", "getPopupCart"])
  },
  mixins: [vueWindowSizeMixin],

  watch: {
    isActive: function() {},
    windowWidth: function() {
      if (this.windowWidth > 960) {
        this.isActive = false;
      } else if (this.windowWidth < 576 && this.isActive == true) {
        document.documentElement.style.overflow = "hidden";
        return;
      } else {
        document.documentElement.style.overflow = "auto";
        return;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.mobile-menu {
  ul {
    :hover {
      background-color: black !important;

      a {
        color: white !important;
      }
    }
  }
  > ul > li {
    font-size: 18px;
    position: relative;
    ::after {
      position: absolute;
      content: "";
      border: solid gray;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3.5px;
      transform: rotate(-45deg);
      top: calc(50% - 3.5px);
      right: 5%;
    }
  }
}
</style>
