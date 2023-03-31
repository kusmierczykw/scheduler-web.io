import { Injectable } from '@angular/core';
import { Icon } from '@shared/icon/enums/icon';
import { isNil } from '@core/utils/nil/nillable';
import { IconEntryNotFoundException } from '@shared/icon/exceptions/icon-entry-not-found.exception';

@Injectable({
  providedIn: 'root',
})
export class IconProviderService {
  private readonly entries = new Map<Icon, string>([
    [Icon.PeopleFill, 'bi bi-people-fill'],
    [Icon.Calendar, 'bi bi-calendar4-range'],
    [Icon.Gear, 'bi bi-gear'],
  ]);

  icon(icon: Icon): string {
    const css = this.entries.get(icon);

    if (isNil(css)) {
      const key = Icon[icon];

      throw new IconEntryNotFoundException(key);
    }

    return css;
  }
}
