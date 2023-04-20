import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from '@core/layouts/dashboard/components/aside/aside.component';
import { NavbarComponent } from '@core/layouts/dashboard/components/navbar/navbar.component';
import { FooterComponent } from '@core/layouts/dashboard/components/footer/footer.component';
import { LogoComponent } from '@core/layouts/dashboard/components/logo/logo.component';
import { TitleComponent } from '@core/layouts/dashboard/components/title/title.component';
import { BreadcrumbsComponent } from '@core/layouts/dashboard/components/breadcrumbs/breadcrumbs.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    AsideComponent,
    NavbarComponent,
    FooterComponent,
    LogoComponent,
    TitleComponent,
    BreadcrumbsComponent,
    RouterOutlet,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
