import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '@shared/menu/models/menu-item';
import { OnlyVisibleMenuItemsPipe } from '@shared/menu/pipes/only-visible-menu-items.pipe';
import { MenuItemComponent } from '@shared/menu/ui/menu-item/menu-item.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, OnlyVisibleMenuItemsPipe, MenuItemComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  @Input() items!: MenuItem[];
}
