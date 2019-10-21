<template>
  <div>
    <div class="container float-right mb-5">
      <div class="row border-bottom">
        <div class="col px-4 py-3 border-bottom border-dark login-header">
          <h3 class="text-uppercase float-left m-0 font-weight-light">
            Register
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
          @submit.prevent="register"
          v-slot="{ invalid }"
        >
          <div class="row flex-column">
            <div class="col">
              <validation-provider
                name="FirstName"
                rules="required"
                :bails="false"
                v-slot="{ errors }"
              >
                <label class="custom-label" for="FirstName">
                  First Name:
                </label>
                <input
                  class="loginInput"
                  v-model="name.FirstName"
                  type="text"
                  name="FirstName"
                  placeholder="Your Name"
                  value
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
              <validation-provider
                name="LastName"
                rules="required"
                :bails="false"
                v-slot="{ errors }"
              >
                <label class="custom-label" for="LastName">
                  Last Name:
                </label>
                <input
                  class="loginInput"
                  v-model="name.LastName"
                  type="text"
                  name="LastName"
                  placeholder="Your Name"
                  value
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
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
                  type="email"
                  name="email"
                  placeholder="mymail@lorem.com"
                  value
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
              <validation-provider
                rules="required|min:6|max:15|confirmed:confirmation"
                :bails="false"
                v-slot="{ errors }"
                name="password"
              >
                <label class="custom-label" for="password">
                  Password
                </label>
                <input
                  class="loginInput"
                  v-model="password"
                  ref="password"
                  placeholder="Six or more characters"
                  type="password"
                  vid="password"
                  value
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
              <validation-provider
                name="confirmation"
                rules="required"
                vid="confirmation"
                :bails="false"
                v-slot="{ errors }"
              >
                <label class="custom-label" for="password">
                  Confirm Your Password
                </label>
                <input
                  class="loginInput"
                  placeholder="Enter password again to confirm"
                  type="password"
                  v-model="confirmation"
                  value
                />
                <span class="text-danger">{{ errors[0] }}</span>
              </validation-provider>
              <div class="error-message text-danger text-capitalize">
                <p>{{ error }}</p>
              </div>
              <button
                class="w-100 bg-secondary text-white py-2 border-none login-submit mt-5"
                type="submit"
                name="button"
                :class="invalid ? 'bg-secondary' : 'bg-dark'"
                :disabled="invalid"
              >
                <spinner v-if="loading === true"> </spinner>
                <span v-else>Register</span>
              </button>

              <div>
                <p class="text-dark pt-3 register-text" @click="toggleLogin">
                  Already have an account? <br /><u> Login Here.</u>
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
import { mapActions, mapState } from "vuex";
import Spinner from "./Spinner.vue";
import AuthenticationService from "../services/AuthenticationService.js";

export default {
  components: {
    Spinner
  },
  data() {
    return {
      email: "",
      password: "",
      name: {
        FirstName: "",
        LastName: ""
      },
      confirmation: "",
      error: null
    };
  },
  computed: {
    ...mapState("authentication", ["loading"])
  },
  methods: {
    ...mapActions("authentication", ["loginAction"]),

    toggleLogin() {
      this.$emit("registerToggleRegister");
    },
    toggleMenu() {
      this.$emit("toggleRegister");
    },
    async register() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        const notification = {
          type: "danger",
          message: "Your information is not valid, please do it again!"
        };
        this.$store.dispatch("notification/add", notification);
      } else {
        try {
          const response = await AuthenticationService.register({
            FirstName: this.name.FirstName,
            LastName: this.name.LastName,
            Email: this.email,
            Password: this.password
          });

          if (response.status == 200) {
            this.$store.dispatch("authentication/setUser", response.data.user);
            this.$store.dispatch(
              "authentication/setToken",
              response.data.token
            );
            let token = response.data.token;
            localStorage.setItem("token", token);
            let user = response.data.user;
            localStorage.setItem("user", user);
            this.$router.push({
              name: "home"
            });
            window.location.reload();
            this.toggleMenu;
          } else {
            throw Error();
          }
        } catch (error) {
          this.error = error.response.data.error;
          return;
        }
      }
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
