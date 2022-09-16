import { AppRouteModule } from "../types";
const HomeRoute: AppRouteModule = {
  path: '/home',
  name: 'Home',
  component: () => import('@/pages/home.vue'),
  meta: {
    title: "首页",
  },
};
export default HomeRoute;
