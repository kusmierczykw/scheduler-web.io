import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideMenuProviderService } from '@core/layouts/dashboard/providers/aside-menu-provider.service';
import { Observable } from 'rxjs';
import { MenuItem } from '@shared/menu/models/menu-item';
import { MenuComponent } from '@shared/menu/ui/menu/menu.component';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideComponent {
  readonly menu$ = this.menuSource();

  constructor(private readonly menuProvider: AsideMenuProviderService) {}

  private menuSource(): Observable<MenuItem[]> {
    return this.menuProvider.menu();
  }
}
