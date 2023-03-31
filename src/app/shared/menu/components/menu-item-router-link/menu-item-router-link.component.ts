import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from '@shared/menu/models/menu-item';

@Component({
  selector: 'app-menu-item-router-link',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './menu-item-router-link.component.html',
  styleUrls: ['./menu-item-router-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemRouterLinkComponent {
  @Input() item!: MenuItem;
}
