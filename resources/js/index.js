import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from "./App.vue"
import router from "./router";
import "./components";


export const app = new Vue({
    vuetify,
    router,
    render: (h) => h(App),
}).$mount("#menu");
