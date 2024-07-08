import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// import Home from './views/Home.vue'
// import About from './views/About.vue'
// import Careers from './views/Careers.vue'

import router from './route.js'
const app = createApp(App)

app.use(router);


app.mount('#app')
