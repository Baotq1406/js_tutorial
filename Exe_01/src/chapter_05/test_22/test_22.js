console.log("Test 22");

const sv1 = {
    username: "Nguyen Van A",
    score: 8.5,
};

const sv2 = {
    username: "Tran Thi B",
    score: 4.5,
};

const sv3 = {  
    username: "Le Van C",
    score: 6.5,
};

const sinhvien = [sv1, sv2, sv3];
console.log("===> check sinhvien:", sinhvien);

// sinhvien.forEach((item, index) => {
//     console.log("Index:", index, "Name: ", item.username);
// });

// for in loop
const person = {
    email: "bao@gmail,com",
    name: "Tran Quoc Bao",
    age: 22,
    address: "Da Nang",
};

// for (let key in person) {
//     console.log(key, person[key]);
// }

//for of loop
// for (let value of Object.values(person)) {
//     console.log(value);
// }

// for (let value of Object.entries(person)) {
//     console.log(value);
// }

for (let [key, value] of Object.entries(person)) {
    console.log(key, value);
}