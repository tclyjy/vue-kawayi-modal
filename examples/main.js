import Vue from 'vue'
import App from './App.vue'

import KawayiModal from 'vue-kawayi-modal'
import 'vue-kawayi-modal/lib/vue-kawayi-modal.css'
Vue.use(KawayiModal)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
