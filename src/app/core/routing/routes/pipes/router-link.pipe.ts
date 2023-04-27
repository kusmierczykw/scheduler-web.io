import { Pipe, PipeTransform } from '@angular/core';
import { Route } from '@core/routing/routes/enums/route';
import { RouterLinkParams } from '@core/routing/routes/types/router-link-params';
import { RouterLink } from '@core/routing/routes/types/router-link';
import { RouterLinkProviderService } from '@core/routing/routes/providers/router-link-provider.service';

@Pipe({
  name: 'routerLink',
  standalone: true,
})
export class RouterLinkPipe implements PipeTransform {
  constructor(private readonly provider: RouterLinkProviderService) {}

  transform(route: Route, params?: RouterLinkParams): RouterLink {
    return this.provider.routerLink(route, params);
  }
}
