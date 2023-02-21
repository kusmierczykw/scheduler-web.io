import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemContentComponent } from '@shared/menu/ui/menu-item-content/menu-item-content.component';
import { MenuItemComponent } from '@shared/menu/ui/menu-item/menu-item.component';
import { MenuItem } from '@shared/menu/models/menu-item';
import { Router } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-menu-item-more',
  standalone: true,
  imports: [
    CommonModule,
    MenuItemContentComponent,
    MenuItemComponent,
    forwardRef(() => MenuItemComponent),
  ],
  templateUrl: './menu-item-more.component.html',
  styleUrls: ['./menu-item-more.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: 'auto',
          opacity: 1,
        })
      ),
      state(
        'close',
        style({
          height: 0,
          opacity: 0,
        })
      ),
      transition('open => close', [animate('100ms')]),
      transition('close => open', [animate('100ms')]),
    ]),
  ],
})
export class MenuItemMoreComponent {
  @Input() item!: MenuItem;

  expanded = false;

  constructor(private readonly router: Router) {}

  handleMoreClick(): void {
    this.expanded = !this.expanded;
  }

  isActive(): boolean {
    return this.isActiveRouterLink(this.item);
  }

  private isActiveRouterLink(item: MenuItem): boolean {
    if (item.isMore()) {
      return item.children!.some(child => this.isActiveRouterLink(child));
    }

    if (item.isRouterLink()) {
      return this.router.isActive(this.router.createUrlTree(item.routerLink!), {
        paths: 'exact',
        queryParams: 'exact',
        fragment: 'ignored',
        matrixParams: 'ignored',
      });
    }

    return false;
  }
}
