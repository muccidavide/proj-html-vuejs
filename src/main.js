import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const bootstrap = require('bootstrap')
Vue.use(bootstrap)

import "@fontsource/cairo"
import "@fontsource/cairo/300.css"
import "@fontsource/cairo/400.css"
import "@fontsource/cairo/700.css"

new Vue({
  render: h => h(App),
}).$mount('#app')

