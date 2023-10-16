import.meta.glob([
    '../images/**',
    '../fonts/**',
]);

import { createApp } from 'vue';
import Home from './components/Home.vue'

const app = createApp(Home)
app.mount('#app')