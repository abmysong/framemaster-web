import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/index.css'
import '@/assets/scss/login.css'
import '@/assets/scss/serviceCenter.css'
import '@/assets/scss/serviceCenterWrite.css'

createApp(App)
.use(store)
.use(router)
.mount('#app')
