import { RouteRecordRaw } from 'vue-router';
import Layout from "@/components/Layout.vue";
const modules = import.meta.glob('../modules/**/*.ts', { eager: true, import: 'default' });

const children: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key] || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  children.push(...modList);
})

console.log(children)

export const basicRoutes:RouteRecordRaw[] = [{
  path: '/',
  redirect: '/home',
  component: Layout,
  children
}]
