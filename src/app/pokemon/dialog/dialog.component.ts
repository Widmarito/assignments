import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IDataPokemon } from 'src/app/shared/models/getPokemon.models';
import { PokemonService } from 'src/app/shared/pokemon/pokemon.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  currentPokemon: IDataPokemon = {} as IDataPokemon;
  listPokemon: IDataPokemon[] = [] as IDataPokemon[];

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDataPokemon,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    // this.pokemonService.getCurrentPokemon().subscribe((res) => {
    //   this.currentPokemon = res;
    // });
    // console.log(this.currentPokemon);
    // this.pokemonService.getFavoritesPokemon().subscribe((res) => {
    //   this.listPokemon = res;
    // });
    this.currentPokemon = this.data;
  }

  addFavoritePokemon(currentPokemon: IDataPokemon) {
    // this.pokemonService.setFavoritesPokemon([
    //   ...this.listPokemon,
    //   currentPokemon,
    // ]);
    this.pokemonService.setFavoritesPokemon(this.data);
  }
}
