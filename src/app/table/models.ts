export interface Student {
    firstName: string;
    lastName: string;
    email: string;
    enrolledCourses: Course[];
}

export interface Professor {
    firstName: string;
    lastName: string;
    email: string;
    courses: Course[];
}

export interface Course {
    name: string;
    professor: string;
    enrolledStudents: Student[];
}