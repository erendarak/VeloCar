function saveSubscriber() {
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var existingSubscribers = JSON.parse(localStorage.getItem("subscriptions")) || [];
    
    var newSubscriber = { name: name, email: email };
    existingSubscribers.push(newSubscriber);

    localStorage.setItem("subscriptions", JSON.stringify(existingSubscribers));

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    return false;
}