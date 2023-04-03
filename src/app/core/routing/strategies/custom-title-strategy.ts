import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  PRIMARY_OUTLET,
  RouterStateSnapshot,
  TitleStrategy,
} from '@angular/router';
import { TitleService } from '@core/services/title.service';
import { isNil, Nillable } from '@core/utils/nil/nillable';
import { BreadcrumbService } from '@core/services/breadcrumb.service';
import { RouterLink } from '@core/routing/types/router-link';
import { Breadcrumb } from '@shared/breadcrumbs/models/breadcrumb';

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
    const breadcrumbs = this.createBreadcrumbs(snapshot);

    this.updateBreadcrumb(breadcrumbs);

    if (isNil(title)) {
      return;
    }

    this.updatePageTitle(title);
  }

  private updatePageTitle(title: string): void {
    this.pageTitle.setTitle(title);
  }

  private createBreadcrumbs(snapshot: RouterStateSnapshot): Breadcrumb[] {
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

  private updateBreadcrumb(breadcrumbs: Breadcrumb[]): void {
    this.breadcrumb.setBreadcrumbs(breadcrumbs);
  }
}
