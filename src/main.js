import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

const pania = createPinia()
const app = createApp(App)

app
    .use(pania)
    .mount('#app')