import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui';
import axios from 'axios';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vuex from 'vuex'
import '../node_modules/swiper/dist/css/swiper.css'
import '../node_modules/mint-ui/lib/style.css'
import router from './assets/js/router.js'
import store from './assets/js/data.js'

import '../src/assets/css/cssreset.css'

Vue.use(VueRouter);
Vue.use(Mint);
Vue.prototype.$http = axios;
Vue.use(VueAwesomeSwiper);
Vue.use(Vuex);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store

})
