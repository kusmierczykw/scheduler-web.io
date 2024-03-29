import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgControl, ValidationErrors, Validators } from '@angular/forms';
import { Nillable } from '@core/utils/nil/nillable';
import { ControlReferenceNotFoundException } from '@shared/form/exceptions/control-reference-not-found.exception';
import { FormControlErrorsComponent } from '@shared/form/components/form-control-error/form-control-errors.component';
import { Subject } from 'rxjs';
import { HintComponent } from '@shared/hint/components/hint/hint.component';
import { isNil } from '@core/utils/nil/is-nil';

@Component({
  selector: 'app-form-control',
  standalone: true,
  imports: [CommonModule, FormControlErrorsComponent, HintComponent],
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
})
export class FormControlComponent implements AfterViewInit, OnDestroy {
  private static attributeId = 0;

  @Input() hint?: Nillable<string>;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() inputId: string = this.attributeId;

  @ContentChild(NgControl) ngControl!: NgControl;

  private readonly destroy$ = new Subject<void>();

  constructor(private readonly elementRef: ElementRef) {
    this.incrementAttributeId();
  }

  get hasRequiredValidator(): boolean {
    return !!this.ngControl.control?.hasValidator(Validators.required);
  }

  get errors(): Nillable<ValidationErrors> {
    if (this.ngControl.dirty || this.ngControl.touched) {
      return this.ngControl.errors;
    }

    return null;
  }

  private get attributeId(): string {
    return `from-control-${FormControlComponent.attributeId}`;
  }

  ngAfterViewInit(): void {
    this.requireFromControlReference();
    this.appendAttributeIdToHTMLInput();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  private incrementAttributeId(): void {
    FormControlComponent.attributeId++;
  }

  private requireFromControlReference(): void {
    if (isNil(this.ngControl)) {
      throw new ControlReferenceNotFoundException(
        'The reference to "FormControl" was not pass by the content projection.'
      );
    }
  }

  private appendAttributeIdToHTMLInput(): void {
    const html = this.hostHTMLElement();

    html.querySelector('input')?.setAttribute('id', this.inputId);
  }

  private hostHTMLElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }
}
