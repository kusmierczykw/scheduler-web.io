import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breadcrumb-divider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breadcrumb-divider.component.html',
  styleUrls: ['./breadcrumb-divider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbDividerComponent {}
