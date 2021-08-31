export const coaches = {
  path: '/coaches',
  alias: '/coach',
  name: 'Coaches',
  component: () => import('@/views/coaches/CoachesList.vue'),
};

export const coach = {
  path: '/coaches/:id',
  alias: '/coach/:id',
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
