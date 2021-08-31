import { createRouter, createWebHistory } from 'vue-router';
import { login, signup } from './auth';
import { coach, coaches } from './coaches';
import home from './home';
import notFound from './notFound';
import register from './register';
import requests from './requests';

const routes = [
  home,
  coaches,
  coach,
  register,
  requests,
  login,
  signup,
  notFound,
];

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
