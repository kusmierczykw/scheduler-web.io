import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '@shared/menu/models/menu-item';

@Component({
  selector: 'app-menu-item-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-item-link.component.html',
  styleUrls: ['./menu-item-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemLinkComponent {
  @Input() item!: MenuItem;
}
