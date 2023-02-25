import { Injectable } from '@angular/core';
import { Message } from 'primeng/api';
import { Toast } from '@shared/toast/models/toast';
import { ToastSeverity } from '@shared/toast/types/toast-severity';
import { isNil } from '@core/utils/nil/nillable';
import { SeverityEntryNotFoundException } from '@shared/toast/exceptions/severity-entry-not-found.exception';

type Severity = 'success' | 'warn' | 'danger' | 'info';

@Injectable({
  providedIn: 'root',
})
export class ToastToPrimengMessageConverterService {
  convert(toast: Toast): Message {
    return {
      detail: toast.message,
      summary: toast.title,
      severity: this.severity(toast.severity),
      sticky: toast.immortal,
      life: toast.life,
    };
  }

  private severity(severity: ToastSeverity): Severity {
    const entries = new Map<ToastSeverity, Severity>([
      ['success', 'success'],
      ['info', 'info'],
      ['warning', 'warn'],
      ['error', 'danger'],
    ]);

    const entry = entries.get(severity);

    if (isNil(entry)) {
      throw new SeverityEntryNotFoundException(severity);
    }

    return entry;
  }
}
