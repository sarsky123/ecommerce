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
        active-nav-item-class="font-weight-bold bg-transparent border-dark border-bottom"
      >
        <b-nav-item
          ><router-link
            :to="{
              name: 'userLogin'
            }"
            >Login</router-link
          >
        </b-nav-item>
        <b-nav-item>
          <router-link
            :to="{
              name: 'userRegister'
            }"
            >Register In</router-link
          ></b-nav-item
        >
      </b-nav>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      window.location.reload();
    },
    AuthCheck() {
      if (
        localStorage.getItem("access_token") &&
        localStorage.getItem("id_token") &&
        localStorage.getItem("expires_at")
      ) {
        let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt;
      }
      return false;
    }
  }
};
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

.nav-link {
  &:hover {
    a {
      color: #cbd3da !important;
      text-decoration: none !important;
    }
  }
  a {
    color: #999;
  }
  &:hover {
    border: none !important;
    border-bottom: 1px solid black !important;
    color: #cbd3da !important;
    text-decoration: none;
  }
  .router-link-exact-active {
    color: #e3aaaa;
  }
}
</style>
