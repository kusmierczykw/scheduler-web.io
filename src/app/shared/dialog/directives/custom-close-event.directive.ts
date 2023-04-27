import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { Nillable } from '@core/utils/nil/nillable';
import { isNil } from '@core/utils/nil/is-nil';

@Directive({
  selector: '[appCustomCloseEvent]',
  standalone: true,
})
export class CustomCloseEventDirective implements OnChanges {
  @Input() customCloseEvent?: Nillable<(event?: Event) => void>;

  private readonly originalCloseEvent: (event: Event) => void;

  constructor(private readonly dialog: Dialog) {
    this.originalCloseEvent = this.dialog.close;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { customCloseEvent } = changes;

    if (customCloseEvent) {
      this.overrideCustomCloseEvent();
    }
  }

  private overrideCustomCloseEvent(): void {
    if (isNil(this.customCloseEvent)) {
      this.dialog.close = this.originalCloseEvent;

      return;
    }

    this.dialog.close = this.customCloseEvent;
  }
}
