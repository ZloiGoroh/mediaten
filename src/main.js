import './assets/base.css'

import { createApp } from 'vue'
import App from './components/pages/App.vue'
import {store} from '@/store/index.js';

const app = createApp(App)

app.use(store)

app.mount('#app')
