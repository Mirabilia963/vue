import CalculatorVue from '@/components/Calculator.vue'
import CalcVue from '@/components/Calc.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: CalculatorVue
    },
    {
      path: '/calc',
      name: 'calc',
      component: CalcVue
    }
  ]
})

export default router
