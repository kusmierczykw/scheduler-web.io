import { Directive } from '@angular/core';
import { DefaultDialogDirective } from '@shared/dialog/directives/default-dialog.directive';
import { Dialog } from 'primeng/dialog';

@Directive({
  selector: '[appBottomSheetDialog]',
  standalone: true,
  hostDirectives: [DefaultDialogDirective],
})
export class BottomSheetDialogDirective {
  constructor(private readonly dialog: Dialog) {
    this.configureBottomSheetDialog();
  }

  private configureBottomSheetDialog(): void {
    this.dialog.position = 'bottom';
    this.dialog.style = {
      ...this.dialog.style,
      width: '100vw',
      margin: '0 2rem',
    };
  }
}
