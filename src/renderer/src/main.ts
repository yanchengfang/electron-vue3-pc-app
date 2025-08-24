import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import piniaPluginPersist from 'pinia-plugin-persist'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/index.css'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// app.use(ElementPlus)

const store = createPinia()
store.use(piniaPluginPersist)
app.use(store)

app.use(router)
app.mount('#app')
