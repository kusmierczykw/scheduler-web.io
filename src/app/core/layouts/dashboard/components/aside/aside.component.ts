import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideMenuProviderService } from '@core/layouts/dashboard/providers/aside-menu-provider.service';
import { Observable } from 'rxjs';
import { MenuItem } from '@shared/menu/models/menu-item';
import { AsideMenuItemContentComponent } from '@core/layouts/dashboard/fragments/aside-menu-item-content/aside-menu-item-content.component';
import { MenuItemComponent } from '@shared/menu/components/menu-item/menu-item.component';
import { OnlyVisibleMenuItemsPipe } from '@shared/menu/pipes/only-visible-menu-items.pipe';
import { AsideMenuComponent } from '@core/layouts/dashboard/fragments/aside-menu/aside-menu.component';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [
    CommonModule,
    AsideMenuItemContentComponent,
    MenuItemComponent,
    OnlyVisibleMenuItemsPipe,
    AsideMenuComponent,
  ],
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideComponent {
  readonly items$ = this.menuSource();

  constructor(private readonly menuProvider: AsideMenuProviderService) {}

  private menuSource(): Observable<MenuItem[]> {
    return this.menuProvider.items();
  }
}
