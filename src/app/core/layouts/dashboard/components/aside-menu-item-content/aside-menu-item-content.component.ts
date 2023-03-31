import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '@shared/menu/models/menu-item';
import { IconComponent } from '@shared/icon/components/icon/icon.component';

@Component({
  selector: 'app-aside-menu-item-content',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './aside-menu-item-content.component.html',
  styleUrls: ['./aside-menu-item-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideMenuItemContentComponent {
  @Input() item!: MenuItem;
}
