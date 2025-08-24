import { createRouter, createWebHashHistory } from 'vue-router'
import { AppRoutes } from './routes'
import { beforeEach, afterEach } from './guards'

const router =  createRouter({
  history: createWebHashHistory(),
  routes: AppRoutes
})

// 全局前置导航守卫
router.beforeEach( beforeEach)

// 全局后置导航守卫
router.afterEach( afterEach)

export default router;