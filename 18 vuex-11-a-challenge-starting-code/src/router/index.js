import { createRouter, createWebHistory } from 'vue-router';

const ProductsList = () => import('../pages/ProductsList.vue');
const UserCart = () => import('../pages/UserCart.vue');
const ShopAdmin = () => import('../pages/ShopAdmin.vue');

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductsList },
    { path: '/cart', component: UserCart },
    { path: '/admin', component: ShopAdmin },
  ],
});
