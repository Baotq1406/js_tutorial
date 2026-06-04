console.log("Test 18");

const scores = [10, 8, 3, 7, 5];

//read data 
scores.forEach((score, index) => {
    console.log("score:", score, ", index:", index);
});

console.log("==============================");

//modify data
const doubledScores = scores.map((value, index) => {
    return value * 2;
});

const otherDoubledScores = scores.map((value, index) => value * 2);

console.log("doubledScores:", doubledScores);
console.log("otherDoubledScores:", otherDoubledScores);