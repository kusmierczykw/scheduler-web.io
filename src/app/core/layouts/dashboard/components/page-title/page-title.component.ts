import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Nillable } from '@core/utils/nil/nillable';
import { TitleService } from '@core/services/title.service';

@Component({
  selector: 'app-page-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTitleComponent {
  readonly title$ = this.titleSource();

  constructor(private readonly pageTitle: TitleService) {}

  private titleSource(): Observable<Nillable<string>> {
    return this.pageTitle.title();
  }
}