import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '@shared/menu/models/menu-item';
import { MenuItemContentComponent } from '@shared/menu/ui/menu-item-content/menu-item-content.component';

@Component({
  selector: 'app-menu-item-command',
  standalone: true,
  imports: [CommonModule, MenuItemContentComponent],
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
