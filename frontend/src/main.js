import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/assets/style/style.css'
import 'animate.css'
import { MotionPlugin } from '@vueuse/motion'



createApp(App).use(store).use(router).use(MotionPlugin).mount('#app')
