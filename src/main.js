import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./custom.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import VueWindowSize from "vue-window-size";
import VueCarousel from "vue-carousel";
import axios from "axios";
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  configure
} from "vee-validate";
import * as rules from "vee-validate/dist/rules";

// vee-validate
for (let rule in rules) {
  // add the rule
  extend(rule, rules[rule]);
}
configure({ bails: false });

// Register it globally
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

// fontawesome
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";

library.add(fas, far, fab);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

//plugin
Vue.use(BootstrapVue);
Vue.use(VueWindowSize);
Vue.use(VueCarousel);

//bootstrap
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

//register all of the components globally
const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});

new Vue({
  router,
  store,
  created() {
    const userString = localStorage.getItem("user");
    if (userString) {
      const userData = JSON.parse(userString);
      this.$store.commit("authentication/SET_USER_DATA", userData);
    }
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401) {
          this.$store.dispatch("logout");
        }
        return Promise.reject(error);
      }
    );
  },
  render: h => h(App)
}).$mount("#app");
