import { createApp } from 'vue';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import router from './router';
import store from './store';

const app = createApp(App).use(router).use(store);

app.component('base-badge', BaseBadge);

app.mount('#app');
