import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveExampleModule } from '../reactive-example/reactive-example.module';
import { EjemploModuloRoutingModule } from './ejemplo-modulo-routing.module';
import { EjemploChildComponent } from './ejemplo/ejemplo-child/ejemplo-child.component';
import { EjemploChild2Component } from './ejemplo/ejemplo-child2/ejemplo-child2.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';

@NgModule({
  declarations: [
    EjemploComponent,
    EjemploChildComponent,
    EjemploChild2Component,
  ],
  imports: [
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    EjemploModuloRoutingModule,
    ReactiveExampleModule,
  ],
})
export class EjemploModuloModule {}
