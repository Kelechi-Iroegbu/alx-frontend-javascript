// Define the Teacher interface
interface Teacher {
  readonly firstName: string;      // Only modifiable at initialization
  readonly lastName: string;       // Only modifiable at initialization
  fullTimeEmployee: boolean;       // Must always be defined
  yearsOfExperience?: number;      // Optional
  location: string;                // Must always be defined
  [key: string]: any;              // Allows extra attributes like contract
}

// Example object
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // Extra attribute allowed
};

console.log(teacher3);
// Teacher interface (from your previous code)
interface Teacher {
  readonly firstName: string;      // Only modifiable at initialization
  readonly lastName: string;       // Only modifiable at initialization
  fullTimeEmployee: boolean;       // Must always be defined
  yearsOfExperience?: number;      // Optional
  location: string;                // Must always be defined
  [key: string]: any;              // Allows extra attributes like contract
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;         // Required property for Directors
}

// Example usage
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
  contract: true // Extra attribute is still allowed
};

console.log(director1);
