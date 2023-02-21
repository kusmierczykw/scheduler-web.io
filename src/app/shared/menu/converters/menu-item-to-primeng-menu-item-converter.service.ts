import { Injectable } from '@angular/core';
import { MenuItem as PrimengMenuItem } from 'primeng/api';
import { MenuItem } from '@shared/menu/models/menu-item';
import { valueOrUndefined } from '@core/utils/value-or-undefined';
import { IconProviderService } from '@shared/icon/providers/icon-provider.service';
import { isNil, Nillable } from '@core/utils/nil/nillable';
import { Icon } from '@shared/icon/enums/icon';

@Injectable({
  providedIn: 'root',
})
export class MenuItemToPrimengMenuItemConverterService {
  constructor(private readonly iconProvider: IconProviderService) {}

  convert(item: MenuItem): PrimengMenuItem {
    const { label, routerLink, link, children, icon } = item;

    return {
      label: valueOrUndefined(label),
      routerLink: valueOrUndefined(routerLink),
      url: valueOrUndefined(link),
      icon: valueOrUndefined(this.convertToCssIcon(icon)),
      items: valueOrUndefined(this.convertToChildren(children)),
    };
  }

  private convertToChildren(
    children: Nillable<MenuItem[]>
  ): Nillable<PrimengMenuItem[]> {
    if (isNil(children)) {
      return null;
    }

    return children.map(child => this.convert(child));
  }

  private convertToCssIcon(icon: Nillable<Icon>): Nillable<string> {
    if (isNil(icon)) {
      return null;
    }

    return this.iconProvider.icon(icon);
  }
}
