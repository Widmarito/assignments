import { Component, OnInit } from '@angular/core';
import { IDataPokemon } from 'src/app/shared/models/getPokemon.models';
import { PokemonService } from 'src/app/shared/pokemon/pokemon.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  currentPokemon: IDataPokemon = {} as IDataPokemon;
  listPokemon: IDataPokemon[] = [] as IDataPokemon[];

  constructor(
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.pokemonService.getCurrentPokemon().subscribe((res) => {
      this.currentPokemon = res;
    });
    console.log(this.currentPokemon);
    // this.pokemonService.getFavoritesPokemon().subscribe((res) => {
    //   this.listPokemon = res;
    // });
  }

  addFavoritePokemon(currentPokemon: IDataPokemon) {
    this.pokemonService.setFavoritesPokemon([...this.listPokemon, currentPokemon]);
  }
}
