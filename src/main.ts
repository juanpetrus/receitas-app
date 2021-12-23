import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/app.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(store).use(router).use(VueAxios, axios).use(VueSweetalert2).mount('#app')
