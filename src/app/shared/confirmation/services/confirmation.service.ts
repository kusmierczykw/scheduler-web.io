import { Injectable } from '@angular/core';
import { ConfirmationBuilderService } from '@shared/confirmation/builders/confirmation-builder.service';
import { Confirmation } from '@shared/confirmation/models/confirmation';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
  private readonly showSource$ = new Subject<Confirmation>();

  constructor(private readonly builder: ConfirmationBuilderService) {}

  get show$(): Observable<Confirmation> {
    return this.showSource$.asObservable();
  }

  show(factory: (builder: ConfirmationBuilderService) => Confirmation): void {
    this.showSource$.next(factory(this.builder));
  }
}
