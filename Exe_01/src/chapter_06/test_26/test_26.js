console.log("Test 26");

const element = document.getElementById("myBtn");

const handleClick = () => {
    console.log("Button was clicked!");
}

// element.addEventListener("click", function() {
//     console.log("Button was clicked!");
// });

element.addEventListener("click", handleClick);

console.log(element);