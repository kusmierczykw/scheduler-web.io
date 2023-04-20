import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { fromEvent, map, Observable, startWith } from 'rxjs';
import { NavbarMenuProviderService } from '@core/layouts/dashboard/providers/navbar-menu-provider.service';
import { MenuItem } from '@shared/menu/models/menu-item';
import { MenuItemComponent } from '@shared/menu/components/menu-item/menu-item.component';
import { MenuItemContentComponent } from '@shared/menu/components/menu-item-content/menu-item-content.component';
import { NavbarMenuComponent } from '@core/layouts/dashboard/fragments/navbar-menu/navbar-menu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MenuItemComponent,
    MenuItemContentComponent,
    NavbarMenuComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  readonly items$ = this.menuSource();
  readonly isScrolledDown$ = this.isScrolledDownSource();

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly menuProvider: NavbarMenuProviderService
  ) {}

  private menuSource(): Observable<MenuItem[]> {
    return this.menuProvider.items();
  }

  private isScrolledDownSource(): Observable<boolean> {
    return fromEvent(this.document, 'scroll').pipe(
      map(() => this.isScrolledDown()),
      startWith(this.isScrolledDown())
    );
  }

  private isScrolledDown(): boolean {
    const { defaultView } = this.document;

    if (defaultView) {
      return defaultView.scrollY > 0;
    }

    return false;
  }
}
