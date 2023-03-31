import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from '@shared/menu/components/menu-item/menu-item.component';
import { MenuItemContentComponent } from '@shared/menu/components/menu-item-content/menu-item-content.component';
import { OnlyVisibleMenuItemsPipe } from '@shared/menu/pipes/only-visible-menu-items.pipe';
import { MenuItem } from '@shared/menu/models/menu-item';

@Component({
  selector: 'app-navbar-menu',
  standalone: true,
  imports: [
    CommonModule,
    MenuItemComponent,
    MenuItemContentComponent,
    OnlyVisibleMenuItemsPipe,
  ],
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarMenuComponent {
  @Input() items!: MenuItem[];
}
