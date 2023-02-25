import { Injectable } from '@angular/core';
import { Toast } from '@shared/toast/models/toast';
import { isNil, Nillable } from '@core/utils/nil/nillable';
import { ToastSeverity } from '@shared/toast/types/toast-severity';
import { RequireMethodCallException } from '@shared/common/exceptions/require-method-call.exception';

@Injectable({
  providedIn: 'root',
})
export class ToastBuilderService {
  private _severity: Nillable<ToastSeverity>;
  private _message: Nillable<string>;
  private _title: Nillable<string>;
  private _immortal: Nillable<boolean>;
  private _life: Nillable<number>;

  initSuccess(message: string): this {
    return this.message(message).title('Sukces').severity('success');
  }

  initWarning(message: string): this {
    return this.message(message).title('Uwaga').severity('warning');
  }

  initError(message: string): this {
    return this.message(message).title('Błąd').severity('error');
  }

  initInfo(message: string): this {
    return this.message(message).title('Informacja').severity('info');
  }

  severity(severity: ToastSeverity): this {
    this._severity = severity;

    return this;
  }

  message(message: string): this {
    this._message = message;

    return this;
  }

  title(title: string): this {
    this._title = title;

    return this;
  }

  immortal(): this {
    this._immortal = true;

    return this;
  }

  life(life: number): this {
    this._life = life;

    return this;
  }

  build(): Toast {
    this.requireTitle();
    this.requireMessage();
    this.requireSeverity();

    this.configureDefaultImmortality();
    this.configureDefaultLife();

    return new Toast(
      this._title!,
      this._message!,
      this._severity!,
      this._immortal!,
      this._life!
    );
  }

  private requireMessage(): void {
    if (isNil(this._message)) {
      throw new RequireMethodCallException(this.message.name);
    }
  }

  private requireTitle(): void {
    if (isNil(this._title)) {
      throw new RequireMethodCallException(this.title.name);
    }
  }

  private requireSeverity(): void {
    if (isNil(this._severity)) {
      throw new RequireMethodCallException(this.severity.name);
    }
  }

  private configureDefaultImmortality(): void {
    if (isNil(this._immortal)) {
      this._immortal = false;
    }
  }

  private configureDefaultLife(): void {
    if (isNil(this._life)) {
      this._life = 5000;
    }
  }
}
