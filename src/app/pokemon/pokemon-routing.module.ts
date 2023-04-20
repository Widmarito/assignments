import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gallery',
    pathMatch: 'full',
  },
  {
    path: 'gallery',
    component: HomeComponent,
  },
  // {
  //   path: 'home',
  //   loadChildren: () =>
  //     import('./gallery/gallery.module')
  //     .then((mod) => mod.GalleryModule),

  // },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
