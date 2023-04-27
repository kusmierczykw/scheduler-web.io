import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ButtonSmallDirective } from '@shared/button/directives/button-small.directive';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Route } from '@core/routing/routes/enums/route';
import { RouterLinkPipe } from '@core/routing/routes/pipes/router-link.pipe';

@Component({
  selector: 'app-employees-page',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    ButtonSmallDirective,
    RouterOutlet,
    RouterLink,
    RouterLinkPipe,
  ],
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesPageComponent {
  Route = Route;
}
