import { createRouter, createWebHistory } from 'vue-router';

const TeamsList = () => import('./components/teams/TeamsList.vue');
const TeamsFooter = () => import('./components/teams/TeamsFooter.vue');
const TeamMembers = () => import('./components/teams/TeamMembers.vue');
const UsersList = () => import('./components/users/UsersList.vue');
const UsersFooter = () => import('./components/users/UsersFooter.vue');
const NotFound = () => import('./components/nav/NotFound.vue');

const router = createRouter({
  linkActiveClass: 'active',
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    else return { left: 0, top: 0 };
  },
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamID',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      name: 'users',
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(_to, _from, next) {
        //console.log('users beforeEnter', to, from);
        next();
      },
    },
    { name: 'not-found', path: '/:notFound(.*)', components: NotFound },
  ],
});

router.beforeEach((to, _from, next) => {
  //console.log('Global beforeEach', to, from);
  if (to.meta.needsAuth) console.log('needsAuth');
  next();
});

router.afterEach((to, from) => {
  // sending analytics
  console.log('Global afterEach', to, from);
});

export default router;
