import { ToastSeverity } from '@shared/toast/types/toast-severity';

export class Toast {
  constructor(
    readonly title: string,
    readonly message: string,
    readonly severity: ToastSeverity,
    readonly immortal: boolean,
    readonly life: number
  ) {}
}
