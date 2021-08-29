import axios from 'axios';
import { createApp } from 'vue';
import App from './App';
import BaseBadge from './components/ui/BaseBadge';
import BaseButton from './components/ui/BaseButton';
import BaseCard from './components/ui/BaseCard';
import router from './router';
import store from './store';

const Axios = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${store.state.token}`,
  },
});

const app = createApp(App).use(store).use(router);
app.config.globalProperties.$http = Axios;

app.component('BaseBadge', BaseBadge);
app.component('BaseButton', BaseButton);
app.component('BaseCard', BaseCard);
app.mount('#app');
