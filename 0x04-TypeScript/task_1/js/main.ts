// Define the Teacher interface
interface Teacher {
  readonly firstName: string;      // Only modifiable during initialization
  readonly lastName: string;       // Only modifiable during initialization
  fullTimeEmployee: boolean;       // Must always be defined
  yearsOfExperience?: number;      // Optional
  location: string;                // Must always be defined
  [key: string]: any;              // Allows any additional properties (e.g. contract)
}

// Example object
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // Extra property allowed
};
