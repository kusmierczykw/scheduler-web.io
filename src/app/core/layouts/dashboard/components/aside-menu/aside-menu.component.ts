import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '@shared/menu/models/menu-item';
import { MenuItemComponent } from '@shared/menu/components/menu-item/menu-item.component';
import { AsideMenuItemContentComponent } from '@core/layouts/dashboard/components/aside-menu-item-content/aside-menu-item-content.component';
import { OnlyVisibleMenuItemsPipe } from '@shared/menu/pipes/only-visible-menu-items.pipe';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-aside-menu',
  standalone: true,
  imports: [
    CommonModule,
    MenuItemComponent,
    AsideMenuItemContentComponent,
    OnlyVisibleMenuItemsPipe,
    TooltipModule,
  ],
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideMenuComponent {
  @Input() items!: MenuItem[];
}
