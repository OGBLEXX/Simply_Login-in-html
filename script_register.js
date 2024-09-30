function register()  {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;
    if  (username.length < 3 || username.length > 20) {
        alert("Username must be between 3 and 20 characters");
        }
        else if (password.length < 8 || password.length > 20) {
            alert("Password must be between 8 and 20 characters");
            }
            else if (password !== password2) {
                alert("Passwords do not match");
                }
                else {
                    alert("Registration successful");
                    }
    alert("twój login to"+username,  "twoja hasło to "+password);

}
function returning()  {
    window.location.replace("./index.html");
}
