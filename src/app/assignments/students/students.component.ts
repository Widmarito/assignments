import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments/assignments.service';
import { student } from 'src/app/shared/models/assignments.models';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {

  students: student[] = [];

  constructor(public assignmentsService: AssignmentsService) {}

  ngOnInit(): void {
    this.assignmentsService.getStudents().subscribe((res) => {      
      this.students = res;      
    })
  }
}
