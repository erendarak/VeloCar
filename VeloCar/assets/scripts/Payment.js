var cardName;
var cardNumber;
var cvv;
var expDate;
var paymentMethod;

document.addEventListener("DOMContentLoaded", function() {
    var cNumInput = document.getElementById("CNumInput");
    cNumInput.addEventListener("input", function(event) {
        this.value = this.value.replace(/\D/g, '');

        if (this.value.length > 16) {
            this.value = this.value.slice(0, 16);
        }
    });

    var cvvInput = document.getElementById("CVVInput");
    cvvInput.addEventListener("input", function(event) {
        this.value = this.value.replace(/\D/g, '');

        if (this.value.length > 3) {
            this.value = this.value.slice(0, 3);
        }
    });

    var paymentSubmitButton = document.getElementById("PaymentSubmitButton");
    paymentSubmitButton.addEventListener("click", getInfo);
});

function getInfo(event) {
    event.preventDefault(); 

    cardName = document.getElementById("CNameInput").value;
    cardNumber = document.getElementById("CNumInput").value;
    cvv = document.getElementById("CVVInput").value;
    expDate = document.getElementById("EXPDateInput").value;

    var paymentMethodElements = document.getElementsByName("paymentmethod");
    for (var i = 0; i < paymentMethodElements.length; i++) {
        if (paymentMethodElements[i].checked) {
            paymentMethod = paymentMethodElements[i].value;
            break;
        }
    }

    var paymentInfo = {
        cardName: cardName,
        cardNumber: cardNumber,
        cvv: cvv,
        expDate: expDate,
        paymentMethod: paymentMethod
    };

    var storedPaymentData = JSON.parse(localStorage.getItem("storedPaymentData")) || [];

    if(validate()){
        storedPaymentData.push(paymentInfo);
        localStorage.setItem("storedPaymentData", JSON.stringify(storedPaymentData));
        alert("Payment information stored successfully!");
    } 
}

function validate() {
    if (cardName === '' || cardNumber === '' || cvv === '' || expDate === '') {
        alert("Please fill in all fields.");
        return false;
    }
    var today = new Date();
    var expirationDate = new Date(expDate);

    if (expirationDate <= today) {
        alert("Expiration date has already passed.");
        return false;
    }
    if(cvv.length !== 3){
        alert("CVV must be exactly 3 digits long.");
        return false;
    }
    if(cardNumber.length != 3){
        alert("Card Number must be exactly 16 digits long.");
        return false;
    }

    return true;
}
