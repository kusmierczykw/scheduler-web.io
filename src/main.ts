import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouterModule, TitleStrategy } from '@angular/router';
import { routes } from './app/app.routes';
import { CustomTitleStrategy } from '@core/routing/strategies/custom-title-strategy';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled',
      })
    ),
    provideAnimations(),
    {
      provide: TitleStrategy,
      useClass: CustomTitleStrategy,
    },
  ],
}).catch(console.error);
