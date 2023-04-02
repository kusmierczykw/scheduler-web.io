import { Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { PageTitleService } from '@core/routing/services/page-title.service';
import { isNil } from '@core/utils/nil/nillable';

@Injectable({
  providedIn: 'root',
})
export class CustomTitleStrategy extends TitleStrategy {
  constructor(private readonly pageTitle: PageTitleService) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);

    if (isNil(title)) {
      return;
    }

    this.pageTitle.setTitle(title);
  }
}
