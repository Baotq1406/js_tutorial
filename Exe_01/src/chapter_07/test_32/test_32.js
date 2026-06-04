console.log("test 32");

const doSomething = () => {
    
    const a = 10; b = 0;

    if (b === 0) {
        throw new Error("b cannot be zero");
    }

    return a / b;
};


//console.log("a / b: ", a / b);

try {
    doSomething();
} catch (error) {
    console.log("error: ", error);
} finally {
    console.log("run finally");
}