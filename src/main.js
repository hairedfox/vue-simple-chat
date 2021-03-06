import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";

import Messages from "./components/Messages";
import NewMessage from "./components/NewMessage";
import Message from "./components/Message";
import Register from "./components/Register";
import Login from "./components/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    component: Messages
  },
  {
    path: "/new-message",
    component: NewMessage
  },
  {
    path: "/messages/:id",
    component: Message
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/login",
    component: Login
  }
];

const router = new VueRouter({ routes, mode: "history" });

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount("#app");
