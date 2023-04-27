import { Injectable } from '@angular/core';
import { Route } from '@core/routing/enums/route';
import { Observable, of } from 'rxjs';
import { RouteTitleNotFoundException } from '@core/routing/exceptions/route-title-not-found.exception';
import { isNil } from '@core/utils/nil/is-nil';

@Injectable({
  providedIn: 'root',
})
export class RouteTitleProviderService {
  private readonly entries = new Map<Route, string>([
    [Route.Employees, 'Pracownicy'],
    [Route.CreateEmployee, 'Utwórz pracownika'],
    [Route.Dashboard, 'Pulpit'],
    [Route.Config, 'Konfiguracja'],
    [Route.Schedule, 'Harmonogram'],
  ]);

  entry(route: Route): Observable<string> {
    const entry = this.entries.get(route);

    if (isNil(entry)) {
      const key = Route[route];

      throw new RouteTitleNotFoundException(key);
    }

    return of(entry);
  }
}
