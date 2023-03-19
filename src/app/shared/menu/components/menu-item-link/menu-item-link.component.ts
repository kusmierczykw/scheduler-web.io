import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemContentComponent } from '@shared/menu/components/menu-item-content/menu-item-content.component';
import { MenuItem } from '@shared/menu/models/menu-item';

@Component({
  selector: 'app-menu-item-link',
  standalone: true,
  imports: [CommonModule, MenuItemContentComponent],
  templateUrl: './menu-item-link.component.html',
  styleUrls: ['./menu-item-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemLinkComponent {
  @Input() item!: MenuItem;
}
