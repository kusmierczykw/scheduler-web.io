import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemContentComponent } from '@shared/menu/ui/menu-item-content/menu-item-content.component';
import { MenuItemComponent } from '@shared/menu/ui/menu-item/menu-item.component';

@Component({
  selector: 'app-menu-item-more',
  standalone: true,
  imports: [CommonModule, MenuItemContentComponent, MenuItemComponent],
  templateUrl: './menu-item-more.component.html',
  styleUrls: ['./menu-item-more.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemMoreComponent {
  handleMoreClick(): void {}
}
