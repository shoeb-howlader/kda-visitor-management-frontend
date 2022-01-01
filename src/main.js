import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import VueFullscreen from 'vue-fullscreen'
createApp(App).use(store).use(VueFullscreen).use(router).mount('#app')
