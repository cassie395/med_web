import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

import {store} from './store'
import axios from "axios"

Vue.config.productionTip = false
Vue.prototype.axios = axios
axios.defaults.baseURL = 'http://192.168.43.34'//ip address

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
