<template>
  <div>
    <div class="container float-right mb-5">
      <div class="row border-bottom">
        <div class="col px-4 py-3 border-bottom border-dark login-header">
          <h3 class="text-uppercase float-left m-0 font-weight-light">
            login in
          </h3>
          <span class="float-right" @click="toggleMenu()"
            ><font-awesome-icon :icon="['fas', 'times']"
          /></span>
        </div>
      </div>
      <div>
        <ValidationObserver
          ref="observer"
          tag="form"
          v-slot="{ invalid }"
          @submit.prevent="submitLogin()"
        >
          <div class="row flex-column">
            <div class="col">
              <validation-provider
                name="email"
                rules="required|email"
                :bails="false"
                v-slot="{ errors }"
              >
                <label class="custom-label" for="email">
                  Email
                </label>
                <input
                  class="loginInput"
                  v-model="email"
                  type="text"
                  name="user-email"
                  id="user-email"
                  placeholder="mymail@lorem.com"
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
              <validation-provider
                name="password"
                rules="required|min:6"
                :bails="false"
                v-slot="{ errors }"
              >
                <label class="custom-label" for="password">
                  Password
                </label>
                <input
                  class="loginInput"
                  v-model="password"
                  placeholder="Six or more characters"
                  type="password"
                  name="password"
                  value
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
              <div class="w-100 keepMeIn">
                <input
                  type="checkbox"
                  name="keepmelogin"
                  value
                  id="sign__in_form_keepmelogin"
                />
                <label for="sign__in_form_keepmelogin">keep me sign in</label>
              </div>
              <div class="error-message text-danger text-capitalize">
                <p>{{ error }}</p>
              </div>
              <div class="w-100 forget-password d-flex my-4 ">
                <a href="#" class="text-seconday text-capitalize forget">
                  forget your password?
                </a>
              </div>

              <button
                class="w-100 bg-secondary text-white py-2 border-none login-submit "
                type="submit"
                name="button"
                :class="invalid ? 'bg-secondary' : 'bg-dark'"
                :disabled="invalid"
              >
                <spinner v-if="loading" />
                <span v-else>Login</span>
              </button>

              <div>
                <p class="text-dark pt-3 register-text" @click="toggleRegister">
                  Don't have an account? <br /><u>Register Here.</u>
                </p>
              </div>
            </div>
          </div>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Spinner from "./../misc/Spinner.vue";
import AuthenticationService from "../../services/AuthenticationService.js";

export default {
  components: {
    Spinner
  },
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  computed: {
    ...mapState("authentication", ["loading"])
  },
  methods: {
    // default login
    toggleMenu() {
      this.$emit("toggleLogin");
    },
    async submitLogin() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        const notification = {
          type: "error",
          message: "Your information is not valid, please do it again!"
        };
        this.$store.dispatch("notification/add", notification);
      } else {
        this.loginMethod();
      }
    },
    async loginMethod() {
      try {
        const response = await AuthenticationService.login({
          Email: this.email,
          Password: this.password
        });
        if (response.status == 200) {
          this.$store.dispatch("authentication/setToken", response.data.token);
          this.$store.dispatch("authentication/setUser", response.data.user);
          this.toggleMenu();
          window.location.reload();
        } else {
          throw Error();
        }
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
    toggleRegister() {
      this.$emit("toggleRegister");
    }
  }
};
</script>

<style lang="scss" scoped>
.overlay {
  background-color: #666;
  position: fixed;
  z-index: 80;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}
.fa-times {
  display: inline-block;
  line-height: 35px;
}
.custom-label {
  display: flex;
  width: 100%;
  line-height: 1;
  margin: 15px 0 10px 0;
}
.loginInput {
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px 10px;
  font-size: 16px;
  height: 40px;
  overflow: visible;
}
.login-header {
  border: none;

  box-shadow: 0 4px 2px -3px gray;
}
.keepMeIn {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  > input {
    width: 12px;
    height: 12px;
    margin-right: 8px;
  }
  > label {
    margin: 0;
    text-transform: capitalize;
  }
}
.forget {
  color: #666;
  text-decoration: underline;
  font-size: 13px;
}
.login-submit {
  background-color: #ccc;
  text-transform: uppercase;
  border: none;
}
.register-text {
  font-size: 10px;
}
</style>
