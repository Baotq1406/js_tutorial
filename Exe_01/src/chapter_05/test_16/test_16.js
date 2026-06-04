console.log("Test 16");

const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log("names[0]:", names[0]); // Alice
console.log("names[2]:", names[2]); // Charlie
console.log("names[5]:", names[5]); // undefined

// Thay đổi giá trị của phần tử trong mảng
names[2] = "Charlie Brown";
console.log("before push:", names); // Charlie Brown

// Thêm phần tử vào mảng

// Thêm phần tử vào cuối mảng
names.push(true, 123);
// Thêm phần tử vào đầu mảng
names.unshift(null);

// Xóa phần tử cuối cùng
names.pop();

// Xóa phần tử đầu tiên của mảng
names.shift();
console.log("After push:", names);