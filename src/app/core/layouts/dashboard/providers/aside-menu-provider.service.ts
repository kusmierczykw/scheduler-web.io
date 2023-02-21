import { Injectable } from '@angular/core';
import { MenuItemBuilderService } from '@shared/menu/builders/menu-item-builder.service';
import { Observable, of } from 'rxjs';
import { MenuItem } from '@shared/menu/models/menu-item';
import { Route } from '@core/routing/enums/route';
import { Icon } from '@shared/icon/icon';

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
        .icon(Icon.PeopleFill)
        .build(),

      this.builder
        .initRouterLink(provider => provider.routerLink(Route.Employees))
        .label('Pracownicy')
        .icon(Icon.PeopleFill)
        .build(),

      this.builder
        .initRouterLink(provider => provider.routerLink(Route.Root))
        .label('Zajęcia')
        .icon(Icon.PeopleFill)
        .build(),
    ]);
  }
}
