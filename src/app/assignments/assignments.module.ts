import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentsRoutingModule } from './assignments-routing.module';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { CoursesComponent } from './courses/courses.component';


@NgModule({
  declarations: [
    HomeComponent,
    StudentsComponent,
    TeachersComponent,
    AssignmentsComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    AssignmentsRoutingModule
  ]
})
export class AssignmentsModule { }
