import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { basicRoutes } from './routes';
/**
 * 创建路由实例
 */
const router = createRouter({
  history:createWebHashHistory(),
  routes: basicRoutes
});
/**
 * 路由拦截
 */
router.beforeEach((to,from)=>{
  console.log('to :>> ', to,from);
})
/**
 * 挂载到vue实例函数
 * @param app vue实例
 */
export function setupRouter(app: App<Element>) {
  app.use(router);
}
