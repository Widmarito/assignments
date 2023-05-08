import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments/assignments.service';
import { teacher } from 'src/app/shared/models/assignments.models';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {


  teachers: teacher[] = [];

  constructor(public assignmentsService: AssignmentsService) {}

  ngOnInit(): void {
    this.assignmentsService.getTeachers().subscribe((res) => {      
      this.teachers = res;   
      console.log("students => ",this.teachers)   
    })
  }

}
