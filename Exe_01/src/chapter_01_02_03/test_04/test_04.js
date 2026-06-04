console.log("test 04");

const a = 5;
const b = 10, c = 15;
const d = a * b + c;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(b / a); // Division
console.log(c % b); // Modulus (remainder of division)
console.log(d); // Result of the expression

let x = 5;
// const y = ++x; // ++ => tang ngay lap tuc
// const y = x++; // x++ => tang sau khi su dung gia tri hien tai cua x, nen y se bang 5, sau do x moi tang len 6
// const z = x--;
const z = --x; // -- => giam ngay lap tuc

console.log("x = " + x);
//console.log("y = " + y);
console.log("z = " + z);

const Num1 = 10; // number
const Num2 = "10"; // string

console.log(Num1 == Num2); 
console.log(Num1 === Num2);