import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Breadcrumb } from '@shared/breadcrumbs/models/breadcrumb';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private readonly breadcrumbsSource$ = new BehaviorSubject<Breadcrumb[]>([]);

  setBreadcrumbs(breadcrumbs: Breadcrumb[]): void {
    this.breadcrumbsSource$.next(breadcrumbs);
  }

  breadcrumbs(): Observable<Breadcrumb[]> {
    return this.breadcrumbsSource$.asObservable();
  }
}
