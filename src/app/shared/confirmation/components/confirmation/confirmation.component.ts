import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationService as PrimengConfirmationService } from 'primeng/api';
import { ConfirmationService } from '@shared/confirmation/services/confirmation.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Subject, takeUntil } from 'rxjs';
import { ButtonSmallDirective } from '@shared/button/directives/button-small.directive';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule, ConfirmDialogModule, ButtonSmallDirective],
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  providers: [PrimengConfirmationService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationComponent implements OnInit, OnDestroy {
  acceptLabel = '';
  rejectLabel = '';

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly confirmation: ConfirmationService,
    private readonly primengConfirmation: PrimengConfirmationService
  ) {}

  ngOnInit(): void {
    this.listenToConfirmationShow();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  private listenToConfirmationShow(): void {
    this.confirmation.show$.pipe(takeUntil(this.destroy$)).subscribe({
      next: confirmation => {
        const { acceptLabel, rejectLabel, accept, reject, title, message } =
          confirmation;

        this.acceptLabel = acceptLabel;
        this.rejectLabel = rejectLabel;

        this.primengConfirmation.confirm({
          header: title,
          message: message,
          accept: accept,
          reject: reject,
        });
      },
    });
  }
}
