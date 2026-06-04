console.log("Test 27");

const myBtnElement = document.getElementById("myBtn");
const myBtnElement2 = document.getElementById("myBtn2");
const myBtnElement3 = document.getElementById("myBtn3");

const myTextElement = document.getElementById("myText");

//console.log(myBtnElement, myTextElement);

myBtnElement.addEventListener("click", () => {
    console.log("Button was clicked!");
    myTextElement.innerText = "em Beo xin chào bạn!";
    myTextElement.classList.remove("highlight", "bold");
});

myBtnElement2.addEventListener("click", () => {
    console.log("Button 2 was clicked!");
    myTextElement.innerHTML = "<strong>em Beo xin chào bạn!</strong>. <em>Chúc bạn một ngày tốt lành!</em>";
});

myBtnElement3.addEventListener("click", () => {
    console.log("Button 3 was clicked!");
    myTextElement.style.color = "red";
    myTextElement.style.backgroundColor = "green";
    myTextElement.classList.add("highlight", "bold");
});
