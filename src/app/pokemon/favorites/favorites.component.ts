import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/shared/pokemon/pokemon.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.pokemonService.getFavoritesPokemon().subscribe((res) => {
      console.log(res);
    });
  }

}
