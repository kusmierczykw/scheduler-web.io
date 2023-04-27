import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from '../../../app.routes';

export const provideRouterConfig = () => {
  return provideRouter(
    routes,
    withInMemoryScrolling({
      scrollPositionRestoration: 'enabled',
    })
  );
};
