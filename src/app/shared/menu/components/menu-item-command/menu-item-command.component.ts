import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '@shared/menu/models/menu-item';

@Component({
  selector: 'app-menu-item-command',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-item-command.component.html',
  styleUrls: ['./menu-item-command.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemCommandComponent {
  @Input() item!: MenuItem;

  handleCommandClick(): void {
    this.item.command!();
  }
}
