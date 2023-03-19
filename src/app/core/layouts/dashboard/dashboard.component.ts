import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from '@core/layouts/dashboard/components/aside/aside.component';
import { NavbarComponent } from '@core/layouts/dashboard/components/navbar/navbar.component';
import { FooterComponent } from '@core/layouts/dashboard/components/footer/footer.component';
import { ApplicationLogoComponent } from '@core/layouts/dashboard/components/application-logo/application-logo.component';
import { MainComponent } from '@core/layouts/dashboard/components/main/main.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    AsideComponent,
    NavbarComponent,
    FooterComponent,
    ApplicationLogoComponent,
    MainComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
