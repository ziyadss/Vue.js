const CoachesList = () => import('@/views/coaches/CoachesList');
const CoachDetails = () => import('@/views/coaches/CoachDetails');
const ContactCoach = () => import('@/views/requests/ContactCoach');

export const coaches = {
  path: '/coaches',
  alias: '/coach',
  name: 'Coaches',
  component: CoachesList,
};

export const coach = {
  path: '/coaches/:id',
  alias: '/coach/:id',
  name: 'Coach',
  component: CoachDetails,
  props: true,
  children: [
    { path: 'contact', name: 'Contact', component: ContactCoach, props: true },
  ],
};
