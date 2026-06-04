console.log("Test 10");

for(let i = 0; i < 10; i++) {
    console.log("i =", i);
    if (i === 5) {
        console.log("i is 5, breaking the loop");
        break;
    }
}


for(let i = 0; i < 10; i++) {
    
    if (i === 5) {
        continue;
    }

    console.log("i =", i);
}