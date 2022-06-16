import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

import axios from "axios"

Vue.config.productionTip = false
Vue.prototype.axios = axios
axios.defaults.baseURL = 'http://127.0.0.1'

new Vue({
  vuetify,
  router,
  // store,
  render: h => h(App)
}).$mount('#app')

// router.beforeEach((to, from, next)=>{
//   // const isLogin = localStorage.getItem('token') == 'ImLogin' ;
//   if( this.user.uid!='' ){ //isLogin
//     next();
//   } else {
//     if( to.path !== '/')
//       next('/');
//     else
//       next();
//   }
// });
