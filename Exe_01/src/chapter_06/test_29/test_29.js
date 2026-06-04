console.log("Test 29");

const submitBtn = document.getElementById("submitBtn");
const nameInput = document.getElementById("name");
const previousName = document.getElementById("previousName");
const previousNameValue = localStorage.getItem("name");

if (previousNameValue) {
    previousName.innerHTML = `<b>${previousNameValue}</b>`;
}

submitBtn.addEventListener("click", () => {
    //alert("clicked me");
    //console.log(nameInput.value);
    localStorage.setItem("name", nameInput.value);
    document.getElementById("message").innerHTML = `<b>${nameInput.value}</b>`;
});