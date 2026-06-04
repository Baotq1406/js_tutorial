console.log("Test 14");

//global scope
let globalVar = "I am a global variable";

function show() {
    console.log(globalVar); // Accessing global variable inside function    
}

show();
console.log(globalVar); // Accessing global variable outside function

//function scope
function sayHi() {
    let name1 = "Beo"; // function scope variable
    console.log("Hi", name1);

    
//block scope
    if (true) {
        let x = 10; // block scope variable
        const y = 20; // block scope variable
        console.log("Inside block: x =", x, "y =", y);
    }

    //console.log(x); // ReferenceError: x is not defined
}   

sayHi();
//console.log(name1);

