import { Route } from '@core/routing/routes/enums/route';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { RouteTitleProviderService } from '@core/routing/titles/providers/route-title-provider.service';

export const resolveTitleFor = (route: Route): (() => Observable<string>) => {
  return () => inject(RouteTitleProviderService).entry(route);
};
