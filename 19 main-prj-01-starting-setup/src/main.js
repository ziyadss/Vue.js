import { createApp, defineAsyncComponent } from 'vue';
import App from './App';
import router from './router';
import store from './store';

const BaseBadge = defineAsyncComponent(() =>
  import('./components/ui/BaseBadge')
);
const BaseButton = defineAsyncComponent(() =>
  import('./components/ui/BaseButton')
);
const BaseCard = defineAsyncComponent(() => import('./components/ui/BaseCard'));
const BaseSpinner = defineAsyncComponent(() =>
  import('./components/ui/BaseSpinner')
);
const BaseDialog = defineAsyncComponent(() =>
  import('./components/ui/BaseDialog')
);

createApp(App)
  .use(store)
  .use(router)
  .component('BaseBadge', BaseBadge)
  .component('BaseButton', BaseButton)
  .component('BaseCard', BaseCard)
  .component('BaseSpinner', BaseSpinner)
  .component('BaseDialog', BaseDialog)
  .mount('#app');
