import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResGetPokemons, ISimplePokemon } from '../models/getPokemons.models';
import { Subject } from 'rxjs';
import { IDataPokemon } from '../models/getPokemon.models';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private pokemonList: Subject<IDataPokemon[]> = new Subject<IDataPokemon[]>();
  private currentPokemon: Subject<IDataPokemon> = new Subject<IDataPokemon>();
  private favoritesPokemon: Subject<IDataPokemon[]> = new Subject<IDataPokemon[]>();

  constructor() {}

  // -- Pokemon List getter and setter

  getPokemonsList() {
    return this.pokemonList.asObservable();
  }
  setPokemonList(listObj: IDataPokemon[]) {
    this.pokemonList.next(listObj);
  }


  // -- Current Pokemon getter and setter

  getCurrentPokemon() {
    return this.currentPokemon.asObservable();
  }

  setCurrentPokemon(obj: IDataPokemon) {
    this.currentPokemon.next(obj);
    console.log(`the current pokemon is ${this.currentPokemon.subscribe()}`)
  }

  // -- Favorites Pokemon getter and setter

  getFavoritesPokemon() {
    return this.favoritesPokemon.asObservable();
  }

  setFavoritesPokemon(listObj: IDataPokemon[]) {
    this.favoritesPokemon.next(listObj);
  }

}
