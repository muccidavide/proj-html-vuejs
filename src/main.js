import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const bootstrap = require('bootstrap')
Vue.use(bootstrap)

import "@fontsource/cairo"
import "@fontsource/cairo/300.css"
import "@fontsource/cairo/400.css"
import "@fontsource/cairo/700.css"

/* Font Awesome icons*/
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons 👇 QUI AGGIUNGI LE ICONE che vuoi usare in camelCase */
import { faUserSecret, faMagnifyingGlass, faArrowRight, faArrowLeft, faBars, faCircle } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library 👇 QUI AGGIUNGI IL NOME DELL'ICONA in camelCase*/
library.add(faUserSecret, faMagnifyingGlass,faArrowRight, faArrowLeft, faBars, faCircle) 

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)






new Vue({
  render: h => h(App),
}).$mount('#app')

