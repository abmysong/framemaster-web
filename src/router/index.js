import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '@/components/contents/HomeComponent.vue'
import LoginComponent from '@/components/contents/LoginComponent.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeComponent },
  { path: '/login', name: 'Login', component: LoginComponent }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
