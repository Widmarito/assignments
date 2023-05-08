import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IDataPokemon } from '../models/getPokemon.models';
import { assignmentRow, course, student, teacher } from '../models/assignments.models';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  _excelData: assignmentRow[] = [];
  _students: student[] = [];
  _teachers: student[] = [];
  _courses: student[] = [];
  
  private excelData: BehaviorSubject<assignmentRow[]> = new BehaviorSubject<assignmentRow[]>([]);
  private students: BehaviorSubject<student[]> = new BehaviorSubject<student[]>([]);
  private teachers: BehaviorSubject<teacher[]> = new BehaviorSubject<teacher[]>([]);
  private courses: BehaviorSubject<course[]> = new BehaviorSubject<course[]>([]);

  // private assignments: BehaviorSubject<as[]> = new BehaviorSubject<IDataPokemon[]>();
  
  constructor() { }

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

  // setled all data
  setRelations() {
    for (let course of this._courses) {

    }
  }

}
