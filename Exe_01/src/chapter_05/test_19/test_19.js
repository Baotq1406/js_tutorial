console.log("Test 19");

const ages = [10, 20, 30, 25, 12, 19];

const doubleAges = ages.map((age, index) => {
    return age * 2;
});

const agesOver18 = ages.filter((age, index) => {
    return age > 18; //trả về true nếu age > 18, ngược lại trả về false
});

console.log("original ages:", ages);
console.log("doubled ages:", doubleAges);
console.log("ages over 18:", agesOver18);

let description = "";

const person = {
    fname:"Paul", 
    lname:"Ken", 
    age:18
};

for (let x in person) {
    description += x + ": " + person[x] + ", ";
}
console.log("Person description:", description);

// The for/of statement allows iteration over iterable objects (including the built-in String, 
// Array, e.g. the Array-like arguments or NodeList objects, TypedArray, Map and Set, 
// and user-defined iterables).
var myPets = "";
var pets = ["cat", "dog", "hamster", "hedgehog"];
for (var pet of pets){
    myPets += pet + " ";
} // myPets = 'cat dog hamster hedgehog '

console.log("My pets:", myPets);