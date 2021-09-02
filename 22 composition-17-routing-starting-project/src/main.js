import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App';
import AddProduct from './pages/AddProduct';
import AllProducts from './pages/AllProducts';
import ProductDetails from './pages/ProductDetails';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: AllProducts },
    { path: '/products/:pid', component: ProductDetails, props: true },
    { path: '/products/add', component: AddProduct },
  ],
});

createApp(App).use(router).mount('#app');
