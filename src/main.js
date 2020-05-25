import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import BoardGame from "./components/BoardGame";
import CardFlid from "./components/CardFlid";
import CardImg from "./components/CardImg";
import VentanaProp from "./components/VentanaUsuario";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
Vue.component("boardgame", BoardGame);
Vue.component("cardflid", CardFlid);
Vue.component("cardimg", CardImg);
Vue.component("ventanaprop", VentanaProp);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
