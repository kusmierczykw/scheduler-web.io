import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItem } from '@shared/menu/models/menu-item';
import { MenuItemBuilderService } from '@shared/menu/builders/menu-item-builder.service';
import { Route } from '@core/routing/enums/route';

@Injectable({
  providedIn: 'root',
})
export class NavbarMenuProviderService {
  constructor(private readonly builder: MenuItemBuilderService) {}

  menu(): Observable<MenuItem[]> {
    return of([
      this.builder
        .initRouterLink(provider => provider.routerLink(Route.Employees))
        .label('Wyloguj')
        .build(),
    ]);
  }
}
