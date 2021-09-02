const RequestsReceived = () => import('@/views/requests/RequestsReceived');

export default {
  path: '/requests',
  name: 'Requests',
  component: RequestsReceived,
  meta: { requiresAuth: true },
};
