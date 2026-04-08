import { createRouter, createWebHistory } from 'vue-router'
import CompetenciesView from '../views/CompetenciesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'competencies',
      component: CompetenciesView,
    },
  ],
})

export default router
