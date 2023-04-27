import { RouterLink } from '@core/routing/routes/types/router-link';

export class Breadcrumb {
  constructor(
    public readonly label: string,
    public readonly routerLink: RouterLink
  ) {}
}
