
import { Subjects } from '../Teacher';
import { Subject } from './Subject';

export namespace Subjects {
  // ✅ Using declaration merging for adding a new optional attribute experienceTeachingC (number) to the Teacher interface:
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject { // class Cpp extends Subject:
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (!this.teacher || this.teacher.experienceTeachingC === undefined || this.teacher.experienceTeachingC <= 0) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
