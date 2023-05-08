import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, find } from 'rxjs';
import { IDataPokemon } from '../models/getPokemon.models';
import {
  assignmentRow,
  course,
  student,
  teacher,
} from '../models/assignments.models';

@Injectable({
  providedIn: 'root',
})
export class AssignmentsService {
  _excelData: assignmentRow[] = [];
  _students: student[] = [];
  _teachers: teacher[] = [];
  _courses: course[] = [];

  _unassignedStudents: student[] = []

  private excelData: BehaviorSubject<assignmentRow[]> = new BehaviorSubject<
    assignmentRow[]
  >([]);
  private students: BehaviorSubject<student[]> = new BehaviorSubject<student[]>(
    []
  );
  private teachers: BehaviorSubject<teacher[]> = new BehaviorSubject<teacher[]>(
    []
  );
  private courses: BehaviorSubject<course[]> = new BehaviorSubject<course[]>(
    []
  );
  private unassignedStudents: BehaviorSubject<student[]> = new BehaviorSubject<student[]>(
    []
  );

  // private assignments: BehaviorSubject<as[]> = new BehaviorSubject<IDataPokemon[]>();

  constructor() {}

  // -- excel data List getter and setter
  getExcelData() {
    return this.students.asObservable();
  }

  setExcelData(listObj: assignmentRow[]) {
    this._excelData = listObj;
    this.excelData.next(this._excelData);
  }

  // -- students List getter and setter
  getStudents() {
    return this.students.asObservable();
  }

  setStudents(listObj: student[]) {
    this._students = listObj;
    this.students.next(this._students);
  }

  // -- teachers List getter and setter
  getTeachers() {
    return this.teachers.asObservable();
  }

  setTeachers(listObj: teacher[]) {
    this._teachers = listObj;
    this.teachers.next(this._teachers);
  }

  // -- courses List getter and setter
  getCourses() {
    return this.courses.asObservable();
  }

  setCourses(listObj: course[]) {
    this._courses = listObj;
    this.courses.next(this._courses);
  }

  // -- unassignedStudents getter and setter
  getUnassignedStudents(){
    return this.unassignedStudents.asObservable();
  }

  setUnassignedStudents(listObj: student[]) {
    this._unassignedStudents = listObj;
    this.unassignedStudents.next(this._unassignedStudents);
  }

  // settled all data
  setRelations() {
    for (let row of this._excelData) {
      let course = this._courses.find(
        (course) => course.code === row.codigocurso
      );
      let student = this._students.find(
        (student) => student.code === row.Alumno
      );
      course?.assignedStudents?.push(student!);
    }

    this.setAssignments();
    this.courses.next(this._courses);
  }

  setAssignments() {
    let students = this._students.map((student) => student);
    

    for (let row of this._excelData) {
      let teacher = this._teachers.find(
        (teacher) => teacher.code === row.Docente
      );

      let student = students.find((student) => student.code === row.Alumno);

      if (!student) continue;

      if (teacher?.assignedStudents?.length! < 15) {
        teacher?.assignedStudents?.push(student!);
      } else {
        this._unassignedStudents.push(student);
      }
      students = students.filter((_student) => _student.code !== student?.code);
    }

    this.teachers.next(this._teachers);
    this.unassignedStudents.next(this._unassignedStudents);
  }

  setFixAssignments() {
    this._teachers = this._teachers.sort(
      (a, b) => b['assignedStudents']!.length - a['assignedStudents']!.length
    );

    for (let teacher of this._teachers) {
      while (teacher.assignedStudents?.length! < 15 && this._unassignedStudents?.length) {
        let student = this._unassignedStudents.pop();
        if (student) {
          teacher.assignedStudents?.push(student);
        }
        console.log(teacher.assignedStudents?.length);
      }
    }
    this.teachers.next(this._teachers);
  }
  

}
