import Vue from 'vue'
import App from './App.vue'
import HoUI from '../packages'
// import '../packages/c'

Vue.config.productionTip = false
Vue.use(HoUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
