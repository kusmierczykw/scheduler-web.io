import { Injectable } from '@angular/core';
import { isNil, Nillable } from '@core/utils/nil/nillable';
import { Confirmation } from '@shared/confirmation/models/confirmation';
import { EmptyFunction } from '@core/utils/empty/empty-function';
import { RequireMethodCallException } from '@shared/common/exceptions/require-method-call.exception';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationBuilderService {
  private _title: Nillable<string>;
  private _message: Nillable<string>;
  private _acceptLabel: Nillable<string>;
  private _rejectLabel: Nillable<string>;
  private _accept: Nillable<() => void>;
  private _reject: Nillable<() => void>;

  constructor() {
    this.reset();
  }

  reset(): this {
    this._title = null;
    this._message = null;
    this._acceptLabel = null;
    this._rejectLabel = null;
    this._accept = null;
    this._reject = null;

    return this;
  }

  title(title: string): this {
    this._title = title;

    return this;
  }

  message(message: string): this {
    this._message = message;

    return this;
  }

  acceptLabel(acceptLabel: string): this {
    this._acceptLabel = acceptLabel;

    return this;
  }

  rejectLabel(rejectLabel: string): this {
    this._rejectLabel = rejectLabel;

    return this;
  }

  accept(accept: () => void): this {
    this._accept = accept;

    return this;
  }

  reject(reject: () => void): this {
    this._reject = reject;

    return this;
  }

  build(): Confirmation {
    this.requireTitle();
    this.requireMessage();
    this.requireAccept();
    this.configureDefaultAcceptLabel();
    this.configureDefaultRejectLabel();
    this.configureDefaultReject();

    const confirmation = new Confirmation(
      this._title!,
      this._message!,
      this._acceptLabel!,
      this._rejectLabel!,
      this._accept!,
      this._reject!
    );

    this.reset();

    return confirmation;
  }

  private requireTitle(): void {
    if (isNil(this._title)) {
      throw new RequireMethodCallException(this.title.name);
    }
  }

  private requireMessage(): void {
    if (isNil(this._message)) {
      throw new RequireMethodCallException(this.message.name);
    }
  }

  private requireAccept(): void {
    if (isNil(this._accept)) {
      throw new RequireMethodCallException(this.accept.name);
    }
  }

  private configureDefaultAcceptLabel(): void {
    if (isNil(this._acceptLabel)) {
      this.acceptLabel('Tak');
    }
  }

  private configureDefaultRejectLabel(): void {
    if (isNil(this._rejectLabel)) {
      this.acceptLabel('Nie');
    }
  }

  private configureDefaultReject(): void {
    if (isNil(this._reject)) {
      this.reject(EmptyFunction);
    }
  }
}
