console.log("lab 01");

const fullName = "Tran Quoc Bao";
const birthYear = 2004;
let isStudent = true;

const today = new Date();
const currentYear = today.getFullYear();
const age = currentYear - birthYear;

console.log(`
    Full Name: ${fullName}
    Birth Year: ${birthYear}
    Is Student: ${isStudent}
    Age: ${age}
`);

console.log("==============================================");

console.log("fullName: ", fullName);
console.log("birthYear: ", birthYear);
console.log("isStudent: ", isStudent);
console.log("age: ", age);