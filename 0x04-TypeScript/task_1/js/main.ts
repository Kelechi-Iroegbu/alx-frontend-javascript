// Define the Teacher interface
interface Teacher {
  readonly firstName: string;      // Only set during initialization
  readonly lastName: string;       // Only set during initialization
  fullTimeEmployee: boolean;       // Must always be defined
  yearsOfExperience?: number;      // Optional
  location: string;                // Must always be defined
  [key: string]: any;              // Allows additional properties (like contract)
}

// Example object using the interface
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false, // Extra property — works because of index signature
};

console.log(teacher3);
