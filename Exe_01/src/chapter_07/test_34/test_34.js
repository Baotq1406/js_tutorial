console.log("test 34");

//promise
fetch("http://localhost:8000/users")
    .then(response => response.json())
    .then(data => {
        console.log("fetch promise data: ", data);
    })


//async await
const fetchData = async () => {
    //const response = fetch("http://localhost:8000/users");
    const response = await fetch("http://localhost:8000/users");
    const data = await response.json();
    //console.log("response: ", response);
    console.log("fetch async await data: ", data);
};

fetchData();