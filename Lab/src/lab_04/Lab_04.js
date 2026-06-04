console.log("Lab 4");

const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
    //alert("clicked me");
    const usernameValue = username.value;
    const passwordValue = password.value;

    if (usernameValue === "bao" && passwordValue === "123123") {
        //alert("Login successful");
        alert("Login successful");
        window.location.href = "sucess.html";
    } else {
        alert("Username or password is incorrect");
        username.style.border = "1px solid red";
        password.style.border = "1px solid red";
    }
});
