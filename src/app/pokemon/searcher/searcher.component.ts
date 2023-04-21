import { Component, OnInit } from '@angular/core';
import { IDataPokemon } from 'src/app/shared/models/getPokemon.models';
import { PokemonService } from 'src/app/shared/pokemon/pokemon.service';

@Component({
  selector: 'searcher-component',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  wantedPokemon: string = '';
  filteredPokemonList: IDataPokemon[] = [];

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonsList().subscribe((res) => {
      this.filteredPokemonList = res;
    });
  }

  searchPokemon(wantedPokemon: string) {
    this.pokemonService.setMatchedPokemonList(wantedPokemon);
    this.pokemonService.getMatchedPokemonList().subscribe((res) => {
      this.filteredPokemonList = res;
    });
  }

}
