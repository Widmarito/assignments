import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'assignments',
    pathMatch: 'full',
  },
  {
    path: 'pokemons',
    loadChildren: () =>
      import('./pokemon/pokemon.module').then((mod) => mod.PokemonModule),
  },
  {
    path: 'assignments',
    loadChildren: () =>
      import('./assignments/assignments.module').then((mod) => mod.AssignmentsModule),
  },
  {
    path: 'ejemplo',
    loadChildren: () =>
      import('./ejemplo-modulo/ejemplo-modulo.module').then(
        (mod) => mod.EjemploModuloModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // enableTracing: true, // <-- debugging purposes only
      useHash: false,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
