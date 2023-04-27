import { TitleStrategy } from '@angular/router';
import { CustomTitleStrategy } from '@core/routing/strategies/custom-title-strategy';

export const provideCustomTitleStrategy = () => {
  return [
    {
      provide: TitleStrategy,
      useClass: CustomTitleStrategy,
    },
  ];
};
