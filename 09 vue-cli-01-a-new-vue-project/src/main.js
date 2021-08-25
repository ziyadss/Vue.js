import { createApp } from 'vue';

import App from './App.vue';

import ContactCard from './components/ContactCard.vue';
import NewContact from './components/NewContact.vue';

const app = createApp(App);

app.component('contact-card', ContactCard);
app.component('new-contact', NewContact);

app.mount('#app');
