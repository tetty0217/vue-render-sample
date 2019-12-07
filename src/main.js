import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

require("./assets/styles/app.sass");

new Vue({
  render: h => h(App)
}).$mount("#app");
