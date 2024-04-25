import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./job-page/job-page.component').then((m) => m.JobPageComponent),
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('./detail-page/detail-page.component').then(
        (m) => m.DetailPageComponent
      ),
  },
];
