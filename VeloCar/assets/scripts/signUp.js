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
        alert("Successfully signed up!");
        
        storedData.push({
            name: nameInput,
            surname: surnameInput,
            email: mailInput,
            password: passwordInput,
            repassword: rePasswordInput
        });

        localStorage.setItem("storedData", JSON.stringify(storedData));
        redirectToLogin();
    }
}

function validate() {
    if (!validateifEmpty()) {
        return false;
    }
    if(!validatepasswordLength()){      
        return false;
    }

    if (!validatePasswordMatch()) {
        return false;
    } 
    if(!validateEmail(mailInput)){
        return false;
    }
    return true;
}
function validateEmail(email) {
    var storedData = JSON.parse(localStorage.getItem("storedData")) || [];

    var existingEmail = storedData.find(function(item) {
        return item.email === email;
    });

    if (existingEmail) {
        alert("This email already exists. Please use a different email.");
        return false;
    } else {
        return true;
    }
}
function validatePasswordMatch(){
    if (passwordInput !== rePasswordInput) {
        alert("Passwords do not match.");
        return false;
    } 
    return true;
}
function validatepasswordLength(){
    if(passwordInput.length<=5||passwordInput.length>16){
        alert("Password must be between 6 and 16 characters long.");
        return false;
    }
    return true;
}
function validateifEmpty(){
    if (nameInput === '' || surnameInput === '' || mailInput === '' || passwordInput === '' || rePasswordInput === '') {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}
function redirectToLogin() {
    let form = document.getElementById('signupForm');
    form.setAttribute('action', 'login.html');
}
