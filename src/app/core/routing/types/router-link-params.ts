import { RouteParam } from '@core/routing/enums/route-param';

export type RouterLinkParams = {
  [key in RouteParam]?: string | number;
};
