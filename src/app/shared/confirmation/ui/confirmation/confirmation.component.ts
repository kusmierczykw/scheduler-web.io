import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationService as PrimengConfirmationService } from 'primeng/api';
import { ConfirmationService } from '@shared/confirmation/services/confirmation.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule, ConfirmDialogModule],
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  providers: [PrimengConfirmationService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationComponent {
  constructor(
    private readonly confirmation: ConfirmationService,
    private readonly primengConfirmation: PrimengConfirmationService
  ) {}
}
