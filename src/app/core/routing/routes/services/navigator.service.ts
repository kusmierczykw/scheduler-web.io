import { Injectable } from '@angular/core';
import { RouterLinkProviderService } from '@core/routing/routes/providers/router-link-provider.service';
import { RouterLink } from '@core/routing/routes/types/router-link';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigatorService {
  constructor(
    private readonly provider: RouterLinkProviderService,
    private readonly router: Router
  ) {}

  navigateByRouterLink(
    routerLink: (provider: RouterLinkProviderService) => RouterLink
  ): void {
    void this.router.navigate(routerLink(this.provider));
  }
}
