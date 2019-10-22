<template>
  <div class="header-wrapper">
    <div class="info-bar Desktop-show">
      <div class="wrapper d-flex ">
        <div class="m-0 ml-auto">
          <div class="">
            <p class=" textLinks uppercase">
              <router-link
                :to="{
                  name: 'member'
                }"
                tag="a"
                v-if="AuthCheck()"
                >Manage Account</router-link
              >&nbsp; ·
              <router-link
                :to="{
                  name: 'userLogin'
                }"
                v-if="!AuthCheck()"
              >
                Login</router-link
              >

              <a href="#" v-else @click.prevent="logOut()"> &nbsp;Log Out</a>

              <span v-if="!AuthCheck()">&nbsp; · &nbsp;</span>
              <router-link
                v-if="!AuthCheck()"
                :to="{
                  name: 'userRegister'
                }"
                >Register</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="site-header">
      <div class="wrapper clearfix">
        <div class="nav-desktop">
          <div class="mobile-wrapper">
            <div class="header-cart_wrapper d-flex flex-row">
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
              <a
                class="search flex-fill d-inline-block"
                @click.prevent="toggleSearch()"
                v-if="!(this.windowWidth > 960)"
              >
                <font-awesome-icon :icon="['fas', 'search']" />
              </a>
            </div>

            <div class="logo-wrapper">
              <h1
                class="header-logo m-0"
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
                  v-if="!AuthCheck()"
                >
                  <font-awesome-icon :icon="['fas', 'sign-in-alt']" />
                  Login In
                </div>
                <div
                  class="col bg-secondary text-capitalize text-center p-3
                border-right border-light "
                  v-else
                >
                  <router-link
                    :to="{ name: 'member' }"
                    class="text-dark text-decoration-none"
                  >
                    <font-awesome-icon :icon="['far', 'user']" class="mr-2" />
                    <span class="text-capitalize">Your Account</span>
                  </router-link>
                </div>
                <div class="col bg-secondary text-capitalize text-center p-3">
                  <router-link
                    :to="{ name: 'wishlist' }"
                    class="text-dark text-decoration-none"
                  >
                    <font-awesome-icon :icon="['far', 'heart']" />
                    wishlist
                  </router-link>
                </div>
              </div>
            </div>
            <ul class="main-menu accessibleNav">
              <router-link :to="{ name: 'store' }" class="p-0 shop-link">
                <li class="main-menu-active">
                  <a href="/" class="link">Store</a>
                </li>
              </router-link>
              <li>
                <router-link
                  :to="{
                    name: 'customer-service'
                  }"
                  class="link"
                  >CONTACT</router-link
                >
              </li>
              <li class="cart-text-link">
                <a
                  href="javascript:void(0)"
                  class="cartToggle menuCart link"
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
              'wrapper header-menu nav-wrapper d-flex flex-row align-items-center 
            "
            >
              <div
                class="search d-inline-block clearfix centralize m-0"
                @click="openSearchOverlay"
              >
                <font-awesome-icon
                  class="float-left  mr-3"
                  :icon="['fas', 'search']"
                />
                <div
                  class="search-onNav border-bottom border-black pr-5 text-capitalize float-right"
                >
                  Search
                </div>
              </div>
              <ul class="main-menu accessibleNav ml-auto">
                <li class="main-menu-active">
                  <router-link :to="{ name: 'store' }">
                    <p class="link">Store</p>
                  </router-link>
                </li>

                <li>
                  <router-link
                    :to="{
                      name: 'customer-service'
                    }"
                  >
                    <p class="link">CONTACT</p></router-link
                  >
                </li>
                <li class="cart-text-link">
                  <a
                    href="javascript:void(0)"
                    class="cartToggle menuCart link"
                    @click.prevent="showPopupCart()"
                  >
                    cart
                    <span v-if="getProductsInCart.length > 0"
                      >({{ getProductsInCart.length }})</span
                    >
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="search-bar w-100 bg-white" v-if="searchOn">
      <div class="row">
        <div class="col d-flex">
          <div class="d-inline-block"></div>
          <label
            for="search-input"
            class="w-100 mx-auto py-2 text-center text-secondary mt-3 mb-0 border-none search-bar-label text-uppercase"
            name="search"
            id="search"
            @click.prevent="openSearchOverlay"
          >
            <font-awesome-icon :icon="['fas', 'search']" />
            search
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { vueWindowSizeMixin } from "vue-window-size";
import login from "@/components/userLogin.vue";
import register from "@/components/register.vue";
export default {
  data() {
    return {
      isActive: false,
      isLogin: false,
      isRegister: false,
      searchOn: false
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
    toggleSearch() {
      this.searchOn = !this.searchOn;
    },
    AuthCheck() {
      if (
        localStorage.getItem("token") &&
        localStorage.getItem("user") &&
        this.loggedIn
      ) {
        return true;
      } else {
        return false;
      }
    },
    logOut() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.$store.dispatch("authentication/logOut");
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
    },
    openSearchOverlay() {
      this.$emit("searchOverlayIsOn");
    }
  },
  computed: {
    ...mapGetters("cart", ["getProductsInCart", "getPopupCart"]),
    ...mapGetters("authentication", ["loggedIn"])
  },
  mixins: [vueWindowSizeMixin],

  watch: {
    isActive: function() {},
    windowWidth: function() {
      if (this.windowWidth > 960) {
        this.isActive = false;
        this.searchOn = false;
      } else if (this.windowWidth < 576 && this.isActive == true) {
        document.documentElement.style.overflow = "hidden";
        return;
      } else {
        document.documentElement.style.overflow = "auto";
        return;
      }
    },
    $route(to, from) {
      if (to.path !== from.path) {
        this.closeLoginMenu();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.link {
  margin-bottom: 0;
  &:hover {
    text-decoration: underline !important;
  }
}
.search {
  line-height: 1;
  margin: auto;
  font-size: 18px;
  display: block;
  :hover > :first-child {
    color: #666 !important;
  }
  :hover > .search-onNav {
    color: #666;
  }
}
.search-onNav {
  margin-bottom: -6px;
}
.mobile-menu {
  ul {
    :hover {
      background-color: black !important;

      a {
        color: white !important;
      }
    }
  }
  ul > li,
  ul > .shop-link {
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
.search-bar {
  padding: 0;

  .search-bar-label {
    border: 1px solid #ccc;
    border-left: none;
    border-right: none;
  }
}
</style>
