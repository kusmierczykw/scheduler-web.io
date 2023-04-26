import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  TitleStrategy,
  withInMemoryScrolling,
} from '@angular/router';
import { routes } from './app/app.routes';
import { Provider } from '@angular/core';
import { CustomTitleStrategy } from '@core/routing/strategies/custom-title-strategy';

const provideRouterConfig = () => {
  return provideRouter(
    routes,
    withInMemoryScrolling({
      scrollPositionRestoration: 'enabled',
    })
  );
};

const provideCustomTitleStrategy = (): Provider[] => {
  return [
    {
      provide: TitleStrategy,
      useClass: CustomTitleStrategy,
    },
  ];
};

bootstrapApplication(AppComponent, {
  providers: [
    provideRouterConfig(),
    provideHttpClient(),
    provideAnimations(),
    provideCustomTitleStrategy(),
  ],
}).catch(console.error);
