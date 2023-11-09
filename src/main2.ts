import './assets/main.css'

import { createApp } from 'vue'
//import { createPinia } from 'pinia'

import App from './App.vue'
//import router from './router'
import Contador from './Contador.vue'

const app = createApp(Contador)

//app.use(createPinia())
//app.use(router)

app.mount('#app')