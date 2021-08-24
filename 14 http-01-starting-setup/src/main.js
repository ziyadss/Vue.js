import { createApp } from 'vue';
import axios from 'axios';

import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';


const app = createApp(App);

app.config.globalProperties.$http = axios;

app.component('BaseCard', BaseCard);
app.component('BaseButton', BaseButton);

app.mount('#app');
