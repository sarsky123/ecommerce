<template>
  <div class="contact mt-5">
    <h2 class="uppercase text-center  contact-title pt-5">
      Contact us
    </h2>
    <div>
      <b-nav
        align="center"
        class="border-0"
        tabs
        active-nav-item-class="font-weight-bold text-dark bg-transparent"
      >
        <b-nav-item
          ><router-link
            :to="{
              path: '/contact-us'
            }"
            >CUSTOMER SERVICES</router-link
          ></b-nav-item
        >
        <b-nav-item
          ><router-link
            :to="{
              path: '/contact-us/ourstore'
            }"
            >OUR STORE</router-link
          ></b-nav-item
        >
        <b-nav-item
          ><router-link
            :to="{
              path: '/contact-us/term-of-use'
            }"
            >TERMS OF USE</router-link
          ></b-nav-item
        >
        <b-nav-item
          ><router-link
            :to="{
              path: '/contact-us/privacy'
            }"
            >PRIVACY POLICY</router-link
          ></b-nav-item
        >
      </b-nav>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.contact {
  .contact-title {
    font-size: 1.8rem;
    line-height: 10rem;
    text-transform: uppercase;
  }
}
.nav-link {
  > a {
    color: #999 !important;
    &:hover {
      text-decoration: none !important;
      color: black !important;
    }
  }
}
.nav-link {
  &:hover {
    border: none !important;
    border-bottom: 1px solid black !important;
    color: black !important;
  }
  &.active {
    border: none !important;
    border-bottom: 2px solid black !important;
  }
}
</style>
