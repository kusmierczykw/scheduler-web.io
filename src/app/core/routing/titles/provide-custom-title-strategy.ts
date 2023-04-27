import { TitleStrategy } from '@angular/router';
import { CustomTitleStrategy } from '@core/routing/titles/strategies/custom-title-strategy';

export const provideCustomTitleStrategy = () => {
  return [
    {
      provide: TitleStrategy,
      useClass: CustomTitleStrategy,
    },
  ];
};
