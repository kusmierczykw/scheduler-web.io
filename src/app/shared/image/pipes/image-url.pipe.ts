import { Pipe, PipeTransform } from '@angular/core';
import { ImageUrlProviderService } from '@shared/image/providers/image-url-provider.service';
import { Image } from '@shared/image/enums/image';

@Pipe({
  name: 'imageUrl',
  standalone: true,
})
export class ImageUrlPipe implements PipeTransform {
  constructor(private readonly provider: ImageUrlProviderService) {}

  transform(image: Image): string {
    return this.provider.url(image);
  }
}
