import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbService } from '@core/routing/breadcrumbs/services/breadcrumb.service';
import { Observable } from 'rxjs';
import { Breadcrumb } from '@shared/breadcrumbs/models/breadcrumb';
import { BreadcrumbComponent } from '@shared/breadcrumbs/components/breadcrumb/breadcrumb.component';
import { BreadcrumbDividerComponent } from '@shared/breadcrumbs/components/breadcrumb-divider/breadcrumb-divider.component';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, BreadcrumbDividerComponent],
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  readonly breadcrumbs$ = this.breadcrumbsSource();

  constructor(private readonly breadcrumb: BreadcrumbService) {}

  private breadcrumbsSource(): Observable<Breadcrumb[]> {
    return this.breadcrumb.breadcrumbs();
  }
}
