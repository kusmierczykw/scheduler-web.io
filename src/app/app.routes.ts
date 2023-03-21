import { Routes } from '@angular/router';
import { RouteFragment } from '@core/routing/enums/route-fragment';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@core/layouts/dashboard/dashboard.component').then(
        c => c.DashboardComponent
      ),
    children: [
      {
        path: RouteFragment.Schedule,
        loadComponent: () =>
          import(
            '@features/schedule/pages/schedule-page/schedule-page.component'
          ).then(c => c.SchedulePageComponent),
      },
      {
        path: RouteFragment.Employees,
        loadComponent: () =>
          import(
            '@features/employee/pages/employees-page/employees-page.component'
          ).then(c => c.EmployeesPageComponent),
        children: [
          {
            path: RouteFragment.Create,
            loadComponent: () =>
              import(
                '@features/employee/pages/create-employee-page/create-employee-page.component'
              ).then(c => c.CreateEmployeePageComponent),
          },
        ],
      },
    ],
  },
  {
    path: RouteFragment.SignOut,
    loadComponent: () =>
      import('@features/auth/pages/sign-out-page/sign-out-page.component').then(
        c => c.SignOutPageComponent
      ),
  },
  {
    path: RouteFragment.SignIn,
    loadComponent: () =>
      import('@features/auth/pages/sign-in-page/sign-in-page.component').then(
        c => c.SignInPageComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
