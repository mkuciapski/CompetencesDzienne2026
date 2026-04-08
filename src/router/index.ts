import { createRouter, createWebHistory } from 'vue-router'
import CompetenciesView from '../views/CompetenciesView.vue'
import TempView from '@/views/TempView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'competencies',
      component: CompetenciesView,
    },
    {
      path: '/temp',
      name: 'temp',
      component: TempView,
    },
  ],
})

export default router
