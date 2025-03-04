import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./product-list/product-list.component').then(
        (c) => c.ProductsListComponent
      ),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./test/test.component').then((c) => c.TestComponent),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
