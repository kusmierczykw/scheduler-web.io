import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '@shared/menu/models/menu-item';
import { MenuItemContentComponent } from '@shared/menu/components/menu-item-content/menu-item-content.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItemRouterLinkComponent } from '@shared/menu/components/menu-item-router-link/menu-item-router-link.component';
import { MenuItemLinkComponent } from '@shared/menu/components/menu-item-link/menu-item-link.component';
import { MenuItemCommandComponent } from '@shared/menu/components/menu-item-command/menu-item-command.component';
import { MenuItemMoreComponent } from '@shared/menu/components/menu-item-more/menu-item-more.component';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [
    CommonModule,
    MenuItemContentComponent,
    RouterLinkActive,
    RouterLink,
    MenuItemRouterLinkComponent,
    MenuItemLinkComponent,
    MenuItemCommandComponent,
    MenuItemMoreComponent,
  ],
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemComponent {
  @Input() item!: MenuItem;
}
