// Define MajorCredits interface
export interface MajorCredits {
  credits: number;
  brand: "MajorCredits"; // unique brand
}

// Define MinorCredits interface
export interface MinorCredits {
  credits: number;
  brand: "MinorCredits"; // unique brand
}

// Function to sum two MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits",
  };
}

// Function to sum two MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits",
  };
}

// Example usage
const math: MajorCredits = { credits: 3, brand: "MajorCredits" };
const physics: MajorCredits = { credits: 4, brand: "MajorCredits" };
const art: MinorCredits = { credits: 2, brand: "MinorCredits" };
const music: MinorCredits = { credits: 1, brand: "MinorCredits" };

console.log(sumMajorCredits(math, physics)); // { credits: 7, brand: "MajorCredits" }
console.log(sumMinorCredits(art, music));    // { credits: 3, brand: "MinorCredits" }
