export const login = {
  path: '/login',
  name: 'Log In',
  props: { mode: 'login' },
  component: () => import('@/views/auth/UserAuth.vue'),
  meta: { requiresUnauth: true },
};

export const signup = {
  path: '/signup',
  name: 'Sign Up',
  props: { mode: 'signup' },
  component: () => import('@/views/auth/UserAuth.vue'),
  meta: { requiresUnauth: true },
};