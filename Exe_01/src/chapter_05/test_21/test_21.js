console.log("Test 21");

const person = {
    name: "Tran Quoc Bao",
    age: 22,
};

console.log("person before:", person);

// get data from object
console.log("Name:", person.name);
console.log("Age:", person.age);    
console.log("Name:", person["name"]);

// set data to object
person.address = "Da Nang";
person["language"] = "Vietnamese";

//delete data from object
delete person.address;

console.log("person after:", person);