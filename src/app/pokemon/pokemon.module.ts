import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SearcherComponent } from './searcher/searcher.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GalleryComponent,
    HomeComponent,
    FavoritesComponent,
    DialogComponent,
    SearcherComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule
  ]
})
export class PokemonModule { }
