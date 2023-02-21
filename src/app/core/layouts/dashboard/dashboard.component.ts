import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from '@core/layouts/dashboard/ui/aside/aside.component';
import { NavbarComponent } from '@core/layouts/dashboard/ui/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@core/layouts/dashboard/ui/footer/footer.component';
import { ApplicationLogoComponent } from '@core/layouts/dashboard/ui/application-logo/application-logo.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    AsideComponent,
    NavbarComponent,
    RouterOutlet,
    FooterComponent,
    ApplicationLogoComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
