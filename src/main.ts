import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouterConfig } from '@core/routing/configs/provide-router-config';
import { provideCustomTitleStrategy } from '@core/routing/configs/provide-custom-title-strategy';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouterConfig(),
    provideHttpClient(),
    provideAnimations(),
    provideCustomTitleStrategy(),
  ],
}).catch(console.error);
