const NotFound = () => import('@/views/NotFound.vue');

export default {
  name: 'not-found',
  path: '/:notFound(.*)',
  component: () => NotFound,
};
