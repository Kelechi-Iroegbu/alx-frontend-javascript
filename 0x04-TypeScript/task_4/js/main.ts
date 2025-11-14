import "./subjects/Cpp";
import "./subjects/Java";
import "./subjects/React";
import { Subjects } from "./subjects/Subject";


// Export constants for subjects
const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();
const cTeacher: Subjects.Teacher
export const cpp = cpp = new Subjects.Cpp();
export const java = java = new Subjects.Java();
export const react = react = new Subjects.React();


// Export teacher
export const cTeacher: Subjects.Teacher = {
firstName: "John",
lastName: "Doe",
experienceTeachingC: 10,
};


// Cpp
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());


// Java
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());


// React
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
