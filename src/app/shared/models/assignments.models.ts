export interface assignmentRow {
  Alumno: string;
  NombreAlumno: string;
  codigocurso: string;
  Nombrecurso: string;
  Docente: string;
  NombreDocente: string;
}

export interface student {
  code: string;
  name: string;
}


export interface teacher {
  code: string;
  name: string;
  assignedStudents?: student[]
}


export interface course {
  code: string;
  name: string;
  courseTeacher?: teacher;
  assignedStudents?: student[]
}

