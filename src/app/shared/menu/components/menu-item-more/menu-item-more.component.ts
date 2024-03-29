import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from '@shared/menu/components/menu-item/menu-item.component';
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
          overflow: 'hidden',
        })
      ),
      transition('open => close', [animate('100ms')]),
      transition('close => open', [animate('100ms')]),
    ]),
  ],
})
export class MenuItemMoreComponent implements OnInit {
  @Input() item!: MenuItem;

  expanded = false;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.expanded = this.isActiveRouterLink(this.item);
  }

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
