import { createApp } from 'vue';

import BaseSearch from './components/UI/BaseSearch';
import BaseContainer from './components/UI/BaseContainer';
import App from './App';

createApp(App)
  .component('BaseSearch', BaseSearch)
  .component('BaseContainer', BaseContainer)
  .mount('#app');
