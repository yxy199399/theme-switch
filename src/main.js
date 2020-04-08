import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/reset.scss";
import "./plugin/element";
import Theme, { themeChange } from "./theme/theme";
Vue.config.productionTip = false;
Vue.prototype.Theme = Theme.theme;
Vue.prototype.ThemeChange = themeChange;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
