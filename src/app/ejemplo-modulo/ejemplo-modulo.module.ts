import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
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
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    EjemploModuloRoutingModule,
  ],
})
export class EjemploModuloModule {}
