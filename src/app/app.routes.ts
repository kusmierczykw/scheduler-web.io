import { Routes } from '@angular/router';
import { RouteFragment } from '@core/routing/enums/route-fragment';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@core/layouts/dashboard/dashboard.component').then(
        ({ DashboardComponent }) => DashboardComponent
      ),
    children: [
      {
        path: RouteFragment.Schedule,
        loadComponent: () =>
          import(
            '@features/schedule/pages/schedule-page/schedule-page.component'
          ).then(({ SchedulePageComponent }) => SchedulePageComponent),
      },
    ],
  },
];
