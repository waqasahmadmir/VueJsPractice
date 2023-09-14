import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/index'


import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import 'bootstrap'
createApp(App).use(router).use(store).mount('#app')
