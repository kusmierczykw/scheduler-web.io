import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '@shared/toast/services/toast.service';
import { Subject, takeUntil } from 'rxjs';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { Message, MessageService } from 'primeng/api';
import { ToastToPrimengMessageConverterService } from '@shared/toast/converters/toast-to-primeng-message-converter.service';
import { Toast } from '@shared/toast/models/toast';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, MessageModule, ToastModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly toast: ToastService,
    private readonly message: MessageService,
    private readonly converter: ToastToPrimengMessageConverterService
  ) {}

  ngOnInit(): void {
    this.listenToShow();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  private listenToShow(): void {
    this.toast.show$
      .pipe(takeUntil(this.destroy$))
      .subscribe(toast =>
        this.showToastOnUI(this.convertToastToMessage(toast))
      );
  }

  private convertToastToMessage(toast: Toast): Message {
    return this.converter.convert(toast);
  }

  private showToastOnUI(message: Message): void {
    this.message.add(message);
  }
}
