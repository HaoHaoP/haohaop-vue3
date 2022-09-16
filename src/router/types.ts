import {RouteRecordRaw} from "vue-router";

interface RouteMeta {
  title: string;
}

export interface AppRouteModule extends Omit<RouteRecordRaw, 'meta'> {
  meta?: RouteMeta;
}
