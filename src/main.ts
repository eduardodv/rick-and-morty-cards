import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faMagnifyingGlass, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
library.add(faMagnifyingGlass, faAngleLeft)

import { createHead } from '@unhead/vue'
const head = createHead()

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(head)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
