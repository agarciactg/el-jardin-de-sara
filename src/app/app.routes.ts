import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'nuestra-historia',
    loadComponent: () =>
      import('./pages/nuestra-historia/nuestra-historia.component').then(
        (m) => m.NuestraHistoriaComponent
      ),
  },
  {
    path: 'cuidados',
    loadComponent: () =>
      import('./pages/cuidados/cuidados.component').then(
        (m) => m.CuidadosComponent
      ),
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contacto/contacto.component').then(
        (m) => m.ContactoComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
