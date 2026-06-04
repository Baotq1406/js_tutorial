console.log("Hello World!");

var name = "Tran Quoc Bao";

const name1 = 'Tran Quoc Bao';

let name2 = `Tran Quoc Bao`;

let age = 20;
age = 21; // This is allowed because age is declared with let

const myAge = 25;
// myAge = 30; // This will cause an error because myAge is a constant

console.log(age);

if (true) {
    var a = "Inside block";
    console.log(name); // Output: Inside block
}

console.log(a); // Output: Inside block (because var is function-scoped, not block-scoped)

function test() {
    var hi = "Hello from test function!";
    console.log(hi);
}

//console.log(hi);