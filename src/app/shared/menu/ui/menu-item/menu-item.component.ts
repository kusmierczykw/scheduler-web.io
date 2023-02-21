import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '@shared/menu/models/menu-item';
import { ButtonModule } from 'primeng/button';
import { IconComponent } from '@shared/icon/ui/icon/icon.component';
import { MenuItemContentComponent } from '@shared/menu/ui/menu/ui/menu-item-content/menu-item-content.component';
import { MenuItemMoreComponent } from '@shared/menu/ui/menu/ui/menu-item-more/menu-item-more.component';
import { MenuItemRouterLinkComponent } from '@shared/menu/ui/menu/ui/menu-item-router-link/menu-item-router-link.component';
import { MenuItemLinkComponent } from '@shared/menu/ui/menu/ui/menu-item-link/menu-item-link.component';
import { MenuItemCommandComponent } from '@shared/menu/ui/menu/ui/menu-item-command/menu-item-command.component';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [
    CommonModule,
    MenuItemContentComponent,
    MenuItemMoreComponent,
    MenuItemRouterLinkComponent,
    MenuItemLinkComponent,
    MenuItemCommandComponent,
  ],
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemComponent {
  @Input() item!: MenuItem;
}
