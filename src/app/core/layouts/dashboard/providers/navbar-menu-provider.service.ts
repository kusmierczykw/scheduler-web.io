import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItem } from '@shared/menu/models/menu-item';
import { MenuItemBuilderService } from '@shared/menu/builders/menu-item-builder.service';
import { ToastService } from '@shared/toast/services/toast.service';
import { Route } from '@core/routing/routes/enums/route';

@Injectable({
  providedIn: 'root',
})
export class NavbarMenuProviderService {
  constructor(
    private readonly builder: MenuItemBuilderService,
    private readonly toast: ToastService
  ) {}

  items(): Observable<MenuItem[]> {
    return of([
      this.builder
        .initCommand(() => {
          this.toast.show(builder =>
            builder.initWarning('Ta funkcja jest w trakcie realizacji.').build()
          );
        })
        .label('Zgłoś błąd')
        .build(),

      this.builder
        .initRouterLink(provider => provider.routerLink(Route.SignOut))
        .label('Wyloguj')
        .build(),
    ]);
  }
}
