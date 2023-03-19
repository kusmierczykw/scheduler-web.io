import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEventDialogService } from '@features/schedule/components/create-event-dialog/services/create-event-dialog.service';
import { Subject, takeUntil } from 'rxjs';
import { DialogModule } from 'primeng/dialog';
import { CustomCloseEventDirective } from '@shared/dialog/directives/custom-close-event.directive';
import { DefaultDialogDirective } from '@shared/dialog/directives/default-dialog.directive';
import { CreateEventDialogOutput } from '@features/schedule/components/create-event-dialog/models/create-event-dialog-output';
import { CreateEventFormComponent } from '@features/schedule/components/create-event-form/create-event-form.component';
import { CreateEventFormData } from '@features/schedule/components/create-event-form/models/create-event-form-data';

@Component({
  selector: 'app-create-event-dialog',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    CustomCloseEventDirective,
    DefaultDialogDirective,
    CreateEventFormComponent,
  ],
  templateUrl: './create-event-dialog.component.html',
  styleUrls: ['./create-event-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEventDialogComponent implements OnInit, OnDestroy {
  visible = false;

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly dialog: CreateEventDialogService
  ) {}

  readonly customCloseEvent = (): void => {
    this.closeWithoutOutput();
  };

  ngOnInit(): void {
    this.listenToDialogShow();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  handleSubmitClick(data: CreateEventFormData): void {
    this.closeWithOutput(new CreateEventDialogOutput(data));
  }

  handleCancelClick(): void {
    this.closeWithoutOutput();
  }

  private listenToDialogShow(): void {
    this.dialog.show$.pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.showOnUI();
      },
    });
  }

  private showOnUI(): void {
    this.visible = true;
    this.changeDetectorRef.markForCheck();
  }

  private closeWithOutput(output: CreateEventDialogOutput): void {
    this.dialog.close(output);

    this.closeOnUI();
  }

  private closeWithoutOutput(): void {
    this.dialog.close();

    this.closeOnUI();
  }

  private closeOnUI(): void {
    this.visible = false;
    this.changeDetectorRef.markForCheck();
  }
}
