import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import route from './routes'
import isAuthenticate from '../service/IsAutheticate'

const routes: Array<RouteRecordRaw> = route

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticate()) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
