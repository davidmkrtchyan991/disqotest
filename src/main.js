import Vue from 'vue'
import interceptorsSetup from './http/interceptor'
import App from './App.vue'

Vue.config.productionTip = false

interceptorsSetup();

new Vue({
  render: h => h(App),
}).$mount('#app')
