import { Injectable } from '@angular/core';
import { Image } from '@shared/image/enums/image';
import { ImageEntryNotFoundException } from '@shared/image/exceptions/image-entry-not-found.exception';
import { isNil } from '@core/utils/nil/is-nil';

@Injectable({
  providedIn: 'root',
})
export class ImageUrlProviderService {
  private entry = new Map<Image, string>([
    [Image.Logo, 'calendar-logo.png'], //
  ]);

  url(image: Image): string {
    const url = this.entry.get(image);

    if (isNil(url)) {
      const key = Image[image];

      throw new ImageEntryNotFoundException(key);
    }

    return `assets/images/${url}`;
  }
}
