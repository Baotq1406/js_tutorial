console.log("Test 13");

const sum = (a, b, c) => {
    console.log("run before return");

    if(typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
        console.log("run emty return");
        return 0; // return undefined
    }
    console.log("run after return");

    return a + b + c;
    //console.log("run after return");
};

console.log(sum("fasfawsef", 9, 3));