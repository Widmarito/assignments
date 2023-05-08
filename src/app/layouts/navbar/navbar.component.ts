import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/shared/pokemon/pokemon.service';

@Component({
  selector: 'navbar-layout',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {}

}
