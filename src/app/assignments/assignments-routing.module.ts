import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { CoursesComponent } from './courses/courses.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'students',
    component: StudentsComponent,
  },
  {
    path: 'teachers',
    component: TeachersComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'assignments',
    component: AssignmentsComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentsRoutingModule { }
