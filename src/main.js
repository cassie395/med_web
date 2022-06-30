import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

import {store} from './store'
import axios from "axios"

Vue.config.productionTip = false
Vue.prototype.axios = axios
axios.defaults.baseURL = 'http://127.0.0.1'

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
