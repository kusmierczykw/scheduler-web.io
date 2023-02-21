import { Injectable } from '@angular/core';
import { MenuItemBuilderService } from '@shared/menu/builders/menu-item-builder.service';
import { Observable, of } from 'rxjs';
import { MenuItem } from '@shared/menu/models/menu-item';
import { Route } from '@core/routing/enums/route';

@Injectable({
  providedIn: 'root',
})
export class AsideMenuProviderService {
  constructor(private readonly builder: MenuItemBuilderService) {}

  menu(): Observable<MenuItem[]> {
    return of([
      this.builder
        .initCommand(() => alert('Alert test'))
        .label('Alert')
        .build(),

      this.builder
        .initRouterLink(provider => provider.routerLink(Route.Employees))
        .label('Pracownicy')
        .build(),

      this.builder
        .initRouterLink(provider => provider.routerLink(Route.Root))
        .label('Zajęcia')
        .build(),

      this.builder
        .initMore(builder => [
          builder
            .initRouterLink(provider => provider.routerLink(Route.Employees))
            .label('Zajęcia')
            .build(),

          builder
            .initRouterLink(provider => provider.routerLink(Route.Root))
            .label('Zajęcia')
            .build(),

          builder
            .initMore(builder => [
              builder
                .initRouterLink(provider =>
                  provider.routerLink(Route.Employees)
                )
                .label('Zajęcia')
                .build(),

              builder
                .initRouterLink(provider =>
                  provider.routerLink(Route.Employees)
                )
                .label('Zajęcia')
                .build(),
            ])
            .label('Zajęcia 2')
            .build(),
        ])
        .label('Media społecznościowe')
        .build(),
    ]);
  }
}
