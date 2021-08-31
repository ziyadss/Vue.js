export default {
  path: '/requests',
  name: 'Requests',
  component: () => import('@/views/requests/RequestsReceived.vue'),
  meta: { requiresAuth: true },
};
