import { createApp } from 'vue';

import router from './router.js';
import App from './App.vue';
import BaseModal from './components/BaseModal.vue';

const app = createApp(App).use(router);

app.component('BaseModal', BaseModal);

router.isReady().then(() => app.mount('#app'));
