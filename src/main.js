import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$electron = window.electron
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
