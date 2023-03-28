import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes/index'
import 'normalize.css'
import '@/assets/iconfont/iconfont.css'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
