// Subject.ts
import { Subjects } from './Teacher';

export namespace Subjects {
  export class Subject {
    teacher?: Teacher;

    // 👇 Explicit method signature required by the task
    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
