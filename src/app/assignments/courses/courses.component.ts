import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments/assignments.service';
import { course } from 'src/app/shared/models/assignments.models';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: course[] = [];

  constructor(public assignmentsService: AssignmentsService) {}

  ngOnInit(): void {
    this.assignmentsService.getCourses().subscribe((res) => {      
      this.courses = res;      
    })
  }

}
