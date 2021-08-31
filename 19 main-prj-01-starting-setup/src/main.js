import { createApp } from 'vue';
import App from './App';
import BaseBadge from './components/ui/BaseBadge';
import BaseButton from './components/ui/BaseButton';
import BaseCard from './components/ui/BaseCard';
import BaseSpinner from './components/ui/BaseSpinner';
import BaseDialog from './components/ui/BaseDialog';
import router from './router';
import store from './store';

createApp(App)
  .use(store)
  .use(router)
  .component('BaseBadge', BaseBadge)
  .component('BaseButton', BaseButton)
  .component('BaseCard', BaseCard)
  .component('BaseSpinner', BaseSpinner)
  .component('BaseDialog', BaseDialog)
  .mount('#app');
