import { createApp } from 'vue'
import App from '@/app/config/App.vue'
import router from '@/app/router'
import './assets/styles/global.css'

createApp(App).use(router).mount('#app')
