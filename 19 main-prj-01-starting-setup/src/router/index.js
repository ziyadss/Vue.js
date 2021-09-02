import store from '@/store';
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _from, next) => {
  const needsAuth = to.meta.requiresAuth;
  const needsUnauth = to.meta.requiresUnauth;
  const loggedIn = store.getters.loggedIn;

  if (needsAuth && !loggedIn)
    return next({ path: '/login', query: { redirect: to.fullPath } });

  if (needsUnauth && loggedIn) return next({ path: '/' });

  return next();
});

export default router;
