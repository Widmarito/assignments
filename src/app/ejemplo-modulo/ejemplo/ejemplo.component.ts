import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RootObject } from './model';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css'],
})
export class EjemploComponent implements OnInit {
  objectPokemon!: RootObject;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<RootObject>('https://pokeapi.co/api/v2/pokemon/ditto')
      .subscribe((response) => {
        this.objectPokemon = response;
        console.log(this.objectPokemon);
      });
  }
}
