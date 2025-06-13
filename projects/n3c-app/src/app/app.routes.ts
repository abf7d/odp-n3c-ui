import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('@dashboards/dashboard-home/dashboard-home.component').then(
        (m) => m.DashboardHomeComponent
      ),
  },
  {
    path: 'clinical-cohort',
    loadComponent: () =>
      import('@strapi/clinical-cohort/clinical-cohort.component').then(
        (m) => m.ClinicalCohortComponent
      ),
  },
];
