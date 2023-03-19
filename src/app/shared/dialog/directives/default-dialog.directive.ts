import { Directive } from '@angular/core';
import { Dialog } from 'primeng/dialog';

@Directive({
  selector: '[appDefaultDialog]',
  standalone: true,
})
export class DefaultDialogDirective {
  constructor(private readonly dialog: Dialog) {
    this.configureDefaultDialog();
  }

  private configureDefaultDialog(): void {
    this.dialog.draggable = false;
    this.dialog.maximizable = false;
    this.dialog.resizable = false;
    this.dialog.modal = true;
    this.dialog.closeOnEscape = false;
    this.dialog.style = { ...this.dialog.style, width: '40rem' };
  }
}
