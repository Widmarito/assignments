import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments/assignments.service';
import { student, teacher } from 'src/app/shared/models/assignments.models';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  teachers: teacher[] = [];
  unassignedStudents: student[] = [];

  constructor(public assignmentsService: AssignmentsService) {}

  ngOnInit(): void {
    this.assignmentsService.getTeachers().subscribe((res) => {
      this.teachers = res;
      console.log('students => ', this.teachers);
    });
    this.assignmentsService.getUnassignedStudents().subscribe((res) => {
      this.unassignedStudents = res;
    });
  }

  addUnassignedStudents() {
    this.assignmentsService.setFixAssignments();
    this.assignmentsService.getUnassignedStudents().subscribe((res) => {
      this.unassignedStudents = res;
    });
  }
}
