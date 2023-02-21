import { Injectable } from '@angular/core';
import { Route } from '@core/routing/enums/route';
import { RouterLink } from '@core/routing/types/router-link';
import { isNil, Nillable } from '@core/utils/nil/nillable';
import { RouteEntryNotFoundException } from '@core/routing/exceptions/route-entry-not-found.exception';
import { RouterLinkWithParams } from '@core/routing/types/router-link-with-params';
import { RouteFragment } from '@core/routing/enums/route-fragment';
import { RouterLinkParams } from '@core/routing/types/router-link-params';
import { isRouteParam } from '@core/routing/utils/is-route-param';
import { RouteParamsNotFound } from '@core/routing/exceptions/route-params-not-found';
import { RouteParamNotFound } from '@core/routing/exceptions/route-param-not-found';

@Injectable({
  providedIn: 'root',
})
export class RouterLinkProviderService {
  private readonly entries = new Map<Route, RouterLinkWithParams>([
    [Route.Root, [RouteFragment.Root]],
    [Route.Employees, [RouteFragment.Root, RouteFragment.Employees]],
  ]);

  routerLink(
    route: Route,
    params: Nillable<RouterLinkParams> = null
  ): RouterLink {
    const routerLinkWithParams = this.entries.get(route);

    if (isNil(routerLinkWithParams)) {
      const name = Route[route];

      throw new RouteEntryNotFoundException(name);
    }

    return this.replaceParams(routerLinkWithParams, params);
  }

  private replaceParams(
    routerLinkWithParams: RouterLinkWithParams,
    params: Nillable<RouterLinkParams>
  ): RouterLink {
    return routerLinkWithParams.map(fragmentOrParam => {
      if (isRouteParam(fragmentOrParam)) {
        if (isNil(params)) {
          throw new RouteParamsNotFound();
        }

        const param = params[fragmentOrParam];

        if (isNil(param)) {
          throw new RouteParamNotFound(fragmentOrParam);
        }

        return param;
      }

      return fragmentOrParam;
    });
  }
}
