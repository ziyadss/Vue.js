import { createRouter, createWebHistory } from 'vue-router';
import coach from './coach';
import coaches from './coaches';
import home from './home';
import notFound from './notFound';
import register from './register';
import requests from './requests';

const routes = [home, coaches, coach, register, requests, notFound];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
