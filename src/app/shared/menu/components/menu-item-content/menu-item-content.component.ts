import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@shared/icon/components/icon/icon.component';
import { MenuItem } from '@shared/menu/models/menu-item';

@Component({
  selector: 'app-menu-item-content',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './menu-item-content.component.html',
  styleUrls: ['./menu-item-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemContentComponent {
  @Input() item!: MenuItem;
}
