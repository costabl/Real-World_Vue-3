import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuemeta from 'vue-meta'

createApp(App)
  .use(store)
  .use(router)
  .use(vuemeta).config.productionTip = false
  .mount('#app')
