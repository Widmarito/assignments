import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Move } from '../model';

@Component({
  selector: 'app-ejemplo-child2',
  templateUrl: './ejemplo-child2.component.html',
  styleUrls: ['./ejemplo-child2.component.css'],
})
export class EjemploChild2Component implements OnInit, OnDestroy {
  @Input() moves: Move[] = [];
  constructor() {}
  ngOnDestroy(): void {
    console.log('ejemplochild2 se ha destruido');
  }

  ngOnInit(): void {}
}
