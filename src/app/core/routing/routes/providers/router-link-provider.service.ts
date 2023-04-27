import { Injectable } from '@angular/core';
import { Route } from '@core/routing/routes/enums/route';
import { RouterLink } from '@core/routing/routes/types/router-link';
import { Nillable } from '@core/utils/nil/nillable';
import { RouteEntryNotFoundException } from '@core/routing/routes/exceptions/route-entry-not-found.exception';
import { RouterLinkWithParams } from '@core/routing/routes/types/router-link-with-params';
import { RouteFragment } from '@core/routing/routes/enums/route-fragment';
import { RouterLinkParams } from '@core/routing/routes/types/router-link-params';
import { RouteParamsNotFoundExceptions } from '@core/routing/routes/exceptions/route-params-not-found.exceptions';
import { RouteParamNotFoundException } from '@core/routing/routes/exceptions/route-param-not-found.exception';
import { RouteParam } from '@core/routing/routes/enums/route-param';
import { RouterFragmentOrParam } from '@core/routing/routes/types/router-fragment-or-param';
import { isNil } from '@core/utils/nil/is-nil';

@Injectable({
  providedIn: 'root',
})
export class RouterLinkProviderService {
  /* prettier-ignore */
  private readonly entries = new Map<Route, RouterLinkWithParams>([
    [Route.Root, [RouteFragment.Root]],
    [Route.CreateEmployee, [RouteFragment.Root, RouteFragment.Employees, RouteFragment.Create]],
    [Route.Config, [RouteFragment.Root, RouteFragment.Config]],
    [Route.Employees, [RouteFragment.Root, RouteFragment.Employees]],
    [Route.Schedule, [RouteFragment.Root, RouteFragment.Schedule]],
    [Route.SignIn, [RouteFragment.Root, RouteFragment.SignIn]],
    [Route.SignOut, [RouteFragment.Root, RouteFragment.SignOut]],
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
      if (this.isRouteParam(fragmentOrParam)) {
        if (isNil(params)) {
          throw new RouteParamsNotFoundExceptions();
        }

        const param = params[fragmentOrParam];

        if (isNil(param)) {
          throw new RouteParamNotFoundException(fragmentOrParam);
        }

        return param;
      }

      return fragmentOrParam;
    });
  }

  private isRouteParam(
    fragmentOrParam: RouterFragmentOrParam
  ): fragmentOrParam is RouteParam {
    const availableParams = Object.values(RouteParam) as string[];

    return availableParams.includes(fragmentOrParam);
  }
}
