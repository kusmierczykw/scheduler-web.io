import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Nillable } from '@core/utils/nil/nillable';
import { CreateEventDialogInput } from '@features/schedule/ui/create-event-dialog/models/create-event-dialog-input';
import { CreateEventDialogOutput } from '@features/schedule/ui/create-event-dialog/models/create-event-dialog-output';
import { once } from '@core/utils/operators/once';

@Injectable({
  providedIn: 'root',
})
export class CreateEventDialogService {
  private readonly showSource$ = new Subject<CreateEventDialogInput>();
  private readonly closeSource$ = new Subject<
    Nillable<CreateEventDialogOutput>
  >();

  get show$(): Observable<CreateEventDialogInput> {
    return this.showSource$.asObservable();
  }

  show(
    input: CreateEventDialogInput
  ): Observable<Nillable<CreateEventDialogOutput>> {
    this.showSource$.next(input);

    return this.closeSource$.asObservable().pipe(once());
  }

  close(output?: Nillable<CreateEventDialogOutput>): void {
    this.closeSource$.next(output);
  }
}
