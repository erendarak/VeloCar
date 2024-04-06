var nameInput;
var surnameInput;
var mailInput;
var passwordInput;
var rePasswordInput;
var storedData;

document.addEventListener("DOMContentLoaded", function() {
    var signUpButton = document.getElementById("SignUpButton2");
    signUpButton.addEventListener("click", getInfo);
});

function getInfo(event) {
    event.preventDefault();
    nameInput = document.getElementById("NameInput").value;
    surnameInput = document.getElementById("SurnameInput").value;
    mailInput = document.getElementById("MailInput").value;
    passwordInput = document.getElementById("PasswordInput").value;
    rePasswordInput = document.getElementById("rePasswordInput").value;
    storedData = JSON.parse(localStorage.getItem("storedData")) || [];
    
    if (validate()) {
        alert("Information stored successfully!");
        
        storedData.push({
            name: nameInput,
            surname: surnameInput,
            email: mailInput,
            password: passwordInput,
            repassword: rePasswordInput
        });

        localStorage.setItem("storedData", JSON.stringify(storedData));
    }
}

function validate() {
    if (nameInput === '' || surnameInput === '' || mailInput === '' || passwordInput === '' || rePasswordInput === '') {
        alert("Please fill in all fields.");
        return false;
    }
    if(passwordInput.length<=6||passwordInput.length>16){
        alert("Password must be between 6 and 16 characters long.");
        return false;
    }

    if (passwordInput !== rePasswordInput) {
        alert("Passwords do not match.");
        return false;
    } 
    return true;
}
