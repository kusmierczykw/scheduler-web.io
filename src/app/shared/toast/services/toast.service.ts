import { Injectable } from '@angular/core';
import { ToastBuilderService } from '@shared/toast/builders/toast-builder.service';
import { Toast } from '@shared/toast/models/toast';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private readonly showSource$ = new ReplaySubject<Toast>(1);

  constructor(private readonly builder: ToastBuilderService) {}

  get show$(): Observable<Toast> {
    return this.showSource$.asObservable();
  }

  show(factory: (builder: ToastBuilderService) => Toast): void {
    this.showSource$.next(factory(this.builder));
  }
}
