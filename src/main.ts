import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/App.vue'
import {setupRouter} from '@/router'

const app = createApp(App)

setupRouter(app)
app.use(ElementPlus)
app.mount('#app')
