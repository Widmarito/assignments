import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IDataPokemon } from '../models/getPokemon.models';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private pokemonList: Subject<IDataPokemon[]> = new Subject<IDataPokemon[]>();
  private currentPokemon: Subject<IDataPokemon> = new Subject<IDataPokemon>();
  private favoritesPokemonData: IDataPokemon[] = [];
  private favoritesPokemon: BehaviorSubject<IDataPokemon[]> =
    new BehaviorSubject<IDataPokemon[]>(this.favoritesPokemonData);

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
    console.log(`the current pokemon is ${this.currentPokemon.subscribe()}`);
  }

  // -- Favorites Pokemon getter and setter

  getFavoritesPokemon() {
    return this.favoritesPokemon.asObservable();
  }

  setFavoritesPokemon(listObj: IDataPokemon) {
    this.favoritesPokemonData.push(listObj);
    this.favoritesPokemon.next(this.favoritesPokemonData);
    console.log(this.favoritesPokemonData);
  }
}
