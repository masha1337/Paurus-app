export class Student {
    documentId?: string;
    firstName: string;
    lastName: string;
    id: string;
    courses?: Course[];
  
    constructor(rawData, id) {
      this.documentId = id;
      this.id = rawData.id;
      this.firstName = rawData.firstName;
      this.lastName = rawData.lastName;
      this.courses = rawData.courses;
    }
  }
  
  export class Professor {
    documentId: string;
    firstName: string;
    lastName: string;
    course: Course;
  
    constructor(rawData, id) {
      this.documentId = id;
      this.firstName = rawData.firstName;
      this.lastName = rawData.lastName;
      this.course = rawData.course;
    }
  }
  
  export class Course {
    documentId: string;
    name: string;
    professor: string;
    students: Student[];
  
    constructor(rawData, id) {
      this.documentId = id;
      this.name = rawData.name;
      this.professor = rawData.professor;
      this.students = rawData.students;
    }
  }
  
  export interface Alert {
    type: string;
    message: string;
  }
  
  export enum TableType {
    Students = 'student',
    Professors = 'professors',
    Courses = 'courses'
  }