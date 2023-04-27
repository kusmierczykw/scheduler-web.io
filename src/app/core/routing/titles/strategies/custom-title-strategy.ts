import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  PRIMARY_OUTLET,
  RouterStateSnapshot,
  TitleStrategy,
} from '@angular/router';
import { TitleService } from '@core/routing/titles/services/title.service';
import { Nillable } from '@core/utils/nil/nillable';
import { BreadcrumbService } from '@core/routing/breadcrumbs/services/breadcrumb.service';
import { RouterLink } from '@core/routing/routes/types/router-link';
import { Breadcrumb } from '@shared/breadcrumbs/models/breadcrumb';
import { isNil } from '@core/utils/nil/is-nil';

@Injectable({
  providedIn: 'root',
})
export class CustomTitleStrategy extends TitleStrategy {
  constructor(
    private readonly pageTitle: TitleService,
    private readonly breadcrumb: BreadcrumbService
  ) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    const breadcrumbs = this.buildBreadcrumbs(snapshot);

    this.updateBreadcrumbs(breadcrumbs);

    if (isNil(title)) {
      return;
    }

    this.updatePageTitle(title);
  }

  private updatePageTitle(title: string): void {
    this.pageTitle.setTitle(title);
  }

  private buildBreadcrumbs(snapshot: RouterStateSnapshot): Breadcrumb[] {
    let route: Nillable<ActivatedRouteSnapshot> = snapshot.root;
    let label = undefined;
    const routerLink: RouterLink = ['/'];
    const breadcrumbs: Breadcrumb[] = [];

    while (!isNil(route)) {
      label = this.getResolvedTitleForRoute(route) ?? label;

      if (!isNil(label)) {
        breadcrumbs.push(new Breadcrumb(label, [...routerLink]));
      }

      route.children.forEach(child => {
        const fragments = child.url.map(segment => segment.path);

        routerLink.push(...fragments);
      });

      route = route.children.find(child => child.outlet === PRIMARY_OUTLET);
    }

    return breadcrumbs;
  }

  private updateBreadcrumbs(breadcrumbs: Breadcrumb[]): void {
    this.breadcrumb.setBreadcrumbs(breadcrumbs);
  }
}
