import { Injectable } from '@angular/core';
import { MenuItemBuilderService } from '@shared/menu/builders/menu-item-builder.service';
import { Observable, of } from 'rxjs';
import { MenuItem } from '@shared/menu/models/menu-item';
import { Route } from '@core/routing/enums/route';
import { Icon } from '@shared/icon/enums/icon';

@Injectable({
  providedIn: 'root',
})
export class AsideMenuProviderService {
  constructor(private readonly builder: MenuItemBuilderService) {}

  items(): Observable<MenuItem[]> {
    return of([
      this.builder
        .initRouterLink(provider => provider.routerLink(Route.Employees))
        .label('Pracownicy')
        .icon(Icon.PeopleFill)
        .build(),

      this.builder
        .initRouterLink(provider => provider.routerLink(Route.Schedule))
        .label('Grafik zajęć')
        .icon(Icon.Calendar)
        .build(),

      this.builder
        .initRouterLink(provider => provider.routerLink(Route.Config))
        .label('Konfiguracja')
        .icon(Icon.Gear)
        .build(),
    ]);
  }
}
