export default {
  name: 'not-found',
  path: '/:notFound(.*)',
  component: () => import('@/views/NotFound.vue'),
};
