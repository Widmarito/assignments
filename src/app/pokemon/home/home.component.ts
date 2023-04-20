import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IDataPokemon } from 'src/app/shared/models/getPokemon.models';
import {
  IResGetPokemons,
  ISimplePokemon,
} from 'src/app/shared/models/getPokemons.models';
import { PokemonService } from 'src/app/shared/pokemon/pokemon.service';
import { DialogComponent } from '../dialog/dialog.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pokemonList: IDataPokemon[] = [] as IDataPokemon[];
  unsubscribe$: Subject<boolean> = new Subject<boolean>();

  baseUrl = 'https://pokeapi.co/api/v2';

  constructor(
    private pokemonService: PokemonService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http
      .get<IResGetPokemons>(`${this.baseUrl}/pokemon?limit=20`)
      .subscribe((res) => {
        res.results.forEach((pokemon: ISimplePokemon) => {
          this.http.get<IDataPokemon>(pokemon.url).subscribe((res) => {
            this.pokemonList.push(res);
            this.pokemonService.setPokemonList(this.pokemonList);
          });
        });
      });
  }
}
