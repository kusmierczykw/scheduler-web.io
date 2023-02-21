import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@core/layouts/dashboard/dashboard.component').then(
        c => c.DashboardComponent
      ),
  },
];
