console.log("Test 17");

const myClass = ["Alice", "Bob", "Charlie", "David", "Eve"];

// console.log(myClass, myClass.length);

// for (let i = 0; i < myClass.length; i++) {
//     console.log("myClass[", i, "]:", myClass[i]);
// }

//for each
myClass.forEach(function(value, index) {
    console.log("value:", value, ", index:", index);
});

console.log("==============================");

myClass.forEach((value, index) => {
    console.log("value:", value, ", index:", index);
});