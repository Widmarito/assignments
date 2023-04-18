import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ejemplo-child',
  templateUrl: './ejemplo-child.component.html',
  styleUrls: ['./ejemplo-child.component.css'],
})
export class EjemploChildComponent implements OnInit, OnDestroy {
  // @Input() namePokemon = '';
  @Input() namePokemon: string | undefined = '';
  constructor(private router: Router) {}
  ngOnDestroy(): void {
    console.log('ejemplo-child se ha destruido');
  }
  goToOtherComponent() {
    this.router.navigate(['ejemplo/ejemplo-child2']);
  }

  ngOnInit(): void {}
}
