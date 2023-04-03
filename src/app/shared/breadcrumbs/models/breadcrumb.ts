import { RouterLink } from '@core/routing/types/router-link';

export class Breadcrumb {
  constructor(
    public readonly label: string,
    public readonly routerLink: RouterLink
  ) {}
}
