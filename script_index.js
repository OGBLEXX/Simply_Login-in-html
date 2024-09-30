function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(username ==  "admin" && password == "password"){
        alert("Login Successful");
        window.location.href = "index.html";
    }
}
function register() {
    window.location.replace("./register.html");
}