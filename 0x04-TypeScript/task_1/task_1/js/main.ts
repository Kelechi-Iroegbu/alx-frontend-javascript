// Teacher interface
interface Teacher {
  readonly firstName: string;      // Only set at initialization
  readonly lastName: string;       // Only set at initialization
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
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

