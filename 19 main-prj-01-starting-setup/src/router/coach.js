export default {
  path: '/coaches/:id',
  name: 'Coach',
  component: () => import('@/views/coaches/CoachDetails.vue'),
  props: true,
  children: [
    {
      path: 'contact',
      name: 'Contact',
      component: () => import('@/views/requests/ContactCoach.vue'),
      props: true,
    },
  ],
};
