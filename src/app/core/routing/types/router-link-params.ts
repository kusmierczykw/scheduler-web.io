import { RouteParam } from '../enums/route-param';

export type RouterLinkParams = {
  [key in RouteParam]?: string | number;
};
