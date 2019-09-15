<template>
  <section id="login">
    <h2 class="text-center text-uppercase text-dark">
      customer login
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
              name: 'userLogin'
            }"
            >Login In</router-link
          ></b-nav-item
        >
        <b-nav-item
          ><router-link
            :to="{
              name: 'userRegister'
            }"
            >Register In</router-link
          ></b-nav-item
        >
      </b-nav>
    </div>
    <div>
      <router-view> </router-view>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
#login {
  padding-top: 100px;
  .container {
    width: 100%;
    float: none !important;
  }
  .login-header,
  .register-text {
    display: none;
  }
}
</style>
