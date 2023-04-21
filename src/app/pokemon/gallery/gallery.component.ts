import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IDataPokemon } from 'src/app/shared/models/getPokemon.models';
import { PokemonService } from 'src/app/shared/pokemon/pokemon.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'gallery-component',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  pokemonList: IDataPokemon[] = [] as IDataPokemon[];

  constructor(
    private pokemonService: PokemonService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // get the route path of navigator
    switch (window.location.pathname) {
      case '/pokemons/gallery':
        this.pokemonService.getPokemonsList().subscribe((res) => {
          this.pokemonList = res;
        });
        break;
      case '/pokemons/favorites':
        this.pokemonService.getFavoritesPokemon().subscribe((res) => {
          this.pokemonList = res;
        });
        break;
      case '/pokemons/searcher':
        this.pokemonService.getMatchedPokemonList().subscribe((res) => {
          this.pokemonList = res;
        });
        break;
      default:
        break;
    }
  }

  selectPokemon(pokemonSelected: IDataPokemon): void {
    this.pokemonService.setCurrentPokemon(pokemonSelected);
    const dialogRef = this.dialog.open(DialogComponent, {
      data: pokemonSelected,
    });
  }
}
