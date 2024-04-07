function checkRadioButtons() {
    let sign_in = document.getElementById('id_sign').checked;
    let delete_rad = document.getElementById('id_delete').checked;
    let header = document.getElementById('top_header');
    let button = document.getElementById('id_button_bot');
    if (sign_in) {
        header.innerHTML = 'Log In';
        button.innerHTML = 'Sign In';
    }
    if (delete_rad) {
        header.innerHTML = 'Delete Account';
        button.innerHTML = 'Delete Account';
    }
    if (sign_in) {
        return true;
    }
    if (delete_rad) {
        return false;
    }
    return true;
}

function validateEmail(email) {
    // Retrieve existing data from local storage
    var storedData = JSON.parse(localStorage.getItem("storedData")) || [];

    // Check if the entered email already exists
    var existingEmail = storedData.find(function (item) {
        return item.email === email;
    });

    if (existingEmail) {
        // If email exists, display error message
        alert("This email already exists. Please use a different email.");
        return false;
    } else {
        // If email doesn't exist, proceed with signup process
        return true;
    }
}

function submitAction() {
    let email = document.getElementById('id_email').value;
    let password = document.getElementById('id_pass').value;

    let sign_in = document.getElementById('id_sign').checked;
    let delete_rad = document.getElementById('id_delete').checked;
    if (sign_in) {
        logIn(email, password);
    } else if (delete_rad) {
        alert('d');
    } else {
        logIn(email, password)
    }
}

function logIn(email, password) {
    alert('sig');
    var storedData = JSON.parse(localStorage.getItem("storedData")) || [];

    // Check if the entered email already exists
    var existingEmail = storedData.find(function (item) {
        return item.email === email;
    });
    var existingpass = storedData.find(function (item) {
        return item.password === password;
    });
    if (existingEmail && existingpass) {
        return true;
    } else {
        alert('Wrong email or password');
        return false;
    }

}