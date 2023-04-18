import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RootObject } from './model';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css'],
})
export class EjemploComponent implements OnInit {
  objectPokemon!: RootObject | undefined;
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<RootObject>(`${this.baseUrl}ditto`).subscribe((response) => {
      this.objectPokemon = response;
      console.log(this.objectPokemon);
    });
  }

  onChangePokemon(idPokemon: number | string) {
    this.http.get<RootObject>(`${this.baseUrl}${idPokemon}`).subscribe({
      next: (response) => {
        this.objectPokemon = response;
        console.log(this.objectPokemon);
      },
      error: (err) => {
        this.objectPokemon = undefined;
      },
    });
  }
}
