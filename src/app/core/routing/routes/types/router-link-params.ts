import { RouteParam } from '@core/routing/routes/enums/route-param';

export type RouterLinkParams = {
  [key in RouteParam]?: string | number;
};
