import { createRouter, createWebHistory } from 'vue-router';

const AllUsers = () => import('./pages/AllUsers.vue');
const CourseGoals = () => import('./pages/CourseGoals.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'All Users', component: AllUsers },
    { path: '/goals', name: 'Course Goals', component: CourseGoals },
  ],
});

export default router;
