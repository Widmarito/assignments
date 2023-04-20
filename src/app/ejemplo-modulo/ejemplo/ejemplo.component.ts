import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RootObject } from './model';
import { ReactiveService } from 'src/app/shared/reactive/reactive.service';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css'],
})
export class EjemploComponent implements OnInit {
  objectPokemon!: RootObject | undefined;
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  hidden!: boolean;
  constructor(
    private http: HttpClient,
    private reactiveService: ReactiveService
  ) {}

  ngOnInit(): void {
    this.http.get<RootObject>(`${this.baseUrl}ditto`).subscribe((response) => {
      this.objectPokemon = response;
    });
  }
  hideReactive() {
    this.hidden = !this.hidden;
  }

  onChangePokemon(idPokemon: number | string) {
    this.http.get<RootObject>(`${this.baseUrl}${idPokemon}`).subscribe({
      next: (response) => {
        this.objectPokemon = response;
        this.reactiveService.setInfoPokemon(this.objectPokemon);
      },
      error: (err) => {
        this.objectPokemon = undefined;
      },
    });
  }
}
