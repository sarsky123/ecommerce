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
              <a href="#" class="cartToggle header-cart"></a>
              <span class="header-cart_bubble cartCount hidden-count"></span>
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
              @click="toggleMenu"
            ></a>
          </div>
          <div
            class="header-menu nav-wrapper"
            v-bind:class="{ noShowMeWhatUGot: isActive }"
          >
            <ul class="main-menu accessibleNav">
              <li class="main-menu-active">
                <a href="/" class="link">Shop</a>
              </li>
              <li><a href="#">MY BOYFRIEND BACK</a></li>
              <li><a href="#">Safe Edit</a></li>
              <li><a href="#">CONTACT</a></li>
              <li class="cart-text-link">
                <a href="javascript:void(0)" class="cartToggle menuCart">
                  cart
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="nav-mobile"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleMenu: function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss" scoped></style>
