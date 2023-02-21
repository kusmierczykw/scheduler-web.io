import { RouteFragment } from '@core/routing/enums/route-fragment';
import { RouteParam } from '@core/routing/enums/route-param';

export function isRouteParam(
  predictable: RouteFragment | RouteParam
): predictable is RouteParam {
  return (Object.values(RouteParam) as string[]).includes(predictable);
}
