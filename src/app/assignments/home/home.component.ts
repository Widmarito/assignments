import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments/assignments.service';
import {
  assignmentRow,
  course,
  student,
  teacher,
} from 'src/app/shared/models/assignments.models';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  excelData: assignmentRow[] = [];

  students: student[] = [];

  constructor(private assignmentsService: AssignmentsService) {}

  ngOnInit(): void {}

  ReadExcel(event: any) {
    let file = event.target.files[0];

    let fileReader = new FileReader();

    fileReader.readAsBinaryString(file);

    fileReader.onload = (e) => {
      var workBook = XLSX.read(fileReader.result, { type: 'binary' });
      var sheetNames = workBook.SheetNames;
      this.excelData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]]);
    };
  }

  separateData(excelData: assignmentRow[]) {
    let students: student[] = [];
    let teachers: teacher[] = [];
    let courses: course[] = [];

    for (let row of excelData) {
      if (row.Docente !== 'NULL') {
        teachers.push({
          code: row.Docente,
          name: row.NombreDocente,
        });
      }
      students.push({
        code: row.Alumno,
        name: row.NombreAlumno,
      });

      courses.push({
        code: row.codigocurso,
        name: row.Nombrecurso,
      });
    }

    students = this.validateValues(students);
    teachers = this.validateValues(teachers);
    courses = this.validateValues(courses);

    this.assignmentsService.setStudents(students);
    this.assignmentsService.setTeachers(teachers);
    this.assignmentsService.setCourses(courses);
  }

  validateValues(list: student[] | teacher[] | course[]) {
    return list.filter((item, index) => {
      const firstIndex = list.findIndex((obj) => {
        return JSON.stringify(obj) === JSON.stringify(item);
      });
      return index === firstIndex;
    });
  }

  loadData() {
    this.separateData(this.excelData);
  }
}
