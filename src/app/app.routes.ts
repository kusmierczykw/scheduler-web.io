import { Routes } from '@angular/router';
import { RouteFragment } from '@core/routing/routes/enums/route-fragment';
import { Route } from '@core/routing/routes/enums/route';
import { resolveTitleFor } from '@core/routing/titles/resolve-title-for';

export const routes: Routes = [
  {
    path: '',
    title: resolveTitleFor(Route.Dashboard),
    loadComponent: () =>
      import('@core/layouts/dashboard/dashboard.component').then(
        c => c.DashboardComponent
      ),
    children: [
      {
        path: RouteFragment.Schedule,
        title: resolveTitleFor(Route.Schedule),
        loadComponent: () =>
          import(
            '@features/schedule/pages/schedule-page/schedule-page.component'
          ).then(c => c.SchedulePageComponent),
      },
      {
        path: RouteFragment.Employees,
        title: resolveTitleFor(Route.Employees),
        loadComponent: () =>
          import(
            '@features/employee/pages/employees-page/employees-page.component'
          ).then(c => c.EmployeesPageComponent),
        children: [
          {
            path: RouteFragment.Create,
            title: resolveTitleFor(Route.CreateEmployee),
            loadComponent: () =>
              import(
                '@features/employee/pages/create-employee-page/create-employee-page.component'
              ).then(c => c.CreateEmployeePageComponent),
          },
        ],
      },
      {
        path: RouteFragment.Config,
        title: resolveTitleFor(Route.Config),
        loadComponent: () =>
          import(
            '@features/config/pages/config-page/config-page.component'
          ).then(c => c.ConfigPageComponent),
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
