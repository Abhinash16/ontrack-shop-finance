import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import cartModule from "./modules/cart";
import productsModule from "./modules/products";
import financeModule from "./modules/finance";

import { registerModules } from "./register-modules";
import vuetify from "./plugins/vuetify";

registerModules({
  products: productsModule,
  cart: cartModule,
  finance: financeModule
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
