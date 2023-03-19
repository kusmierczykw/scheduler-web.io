import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { MenuComponent } from '@shared/menu/components/menu/menu.component';
import { fromEvent, map, Observable, startWith } from 'rxjs';
import { NavbarMenuProviderService } from '@core/layouts/dashboard/providers/navbar-menu-provider.service';
import { MenuItem } from '@shared/menu/models/menu-item';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  readonly menu$ = this.menuSource();
  readonly isScrolledDown$ = this.isScrolledDownSource();

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly provider: NavbarMenuProviderService
  ) {}

  private menuSource(): Observable<MenuItem[]> {
    return this.provider.menu();
  }

  private isScrolledDownSource(): Observable<boolean> {
    return fromEvent(this.document, 'scroll').pipe(
      map(() => this.isScrolledDown()),
      startWith(this.isScrolledDown())
    );
  }

  private isScrolledDown(): boolean {
    const { defaultView } = document;

    if (defaultView) {
      return defaultView.scrollY > 0;
    }

    return false;
  }
}
