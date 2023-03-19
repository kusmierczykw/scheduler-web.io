import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgControl, ValidationErrors } from '@angular/forms';
import { isNil, Nillable } from '@core/utils/nil/nillable';
import { ControlReferenceNotFoundException } from '@shared/form/exceptions/control-reference-not-found.exception';
import { FormControlErrorsComponent } from '@shared/form/components/form-control-error/form-control-errors.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-form-control',
  standalone: true,
  imports: [CommonModule, FormControlErrorsComponent],
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
})
export class FormControlComponent implements AfterContentInit, OnDestroy {
  private static attributeId = 0;

  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() inputId: string = this.attributeId;

  @ContentChild(NgControl) ngControl!: NgControl;

  private readonly destroy$ = new Subject<void>();

  constructor(private readonly elementRef: ElementRef) {
    this.incrementAttributeId();
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

  ngAfterContentInit(): void {
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
