import { Pipe, PipeTransform } from '@angular/core';
import { Icon } from '@shared/icon/enums/icon';
import { IconProviderService } from '@shared/icon/providers/icon-provider.service';

@Pipe({
  name: 'iconCss',
  standalone: true,
})
export class IconCssPipe implements PipeTransform {
  constructor(private readonly provider: IconProviderService) {}

  transform(icon: Icon): string {
    return this.provider.icon(icon);
  }
}
