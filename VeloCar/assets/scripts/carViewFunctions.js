function saveInitialData() {
    if (localStorage) {
        if (!localStorage.getItem("carList")) {
            var carList = [
                { title: "BMW I8", year: "214", km: "13000", hp: "36", color: "Gray", gear: "Autoatic", fuelType: "Hybrid", price: "6000" },
                { title: "BMW I9", year: "2014", km: "130000", hp: "362", color: "Gray", gear: "Automatic", fuelType: "Hybrid", price: "60000" },
                { title: "BMW I10", year: "2014", km: "130000", hp: "362", color: "Gray", gear: "Automatic", fuelType: "Hybrid", price: "60000" },
                { title: "BMW I11", year: "2014", km: "130000", hp: "362", color: "Gray", gear: "Automatic", fuelType: "Hybrid", price: "60000" },
                { title: "BMW I12", year: "2014", km: "130000", hp: "362", color: "Gray", gear: "Automatic", fuelType: "Hybrid", price: "60000" },
                { title: "BMW I13", year: "2014", km: "130000", hp: "362", color: "Gray", gear: "Automatic", fuelType: "Hybrid", price: "60000" },
                { title: "BMW I14", year: "2014", km: "130000", hp: "362", color: "Gray", gear: "Automatic", fuelType: "Hybrid", price: "60000" }
            ];
            localStorage.setItem("carList", JSON.stringify(carList));
        }
    }
}

window.onload = function getCar(){
    var cars = JSON.parse(localStorage.getItem('carList'));
        var input1 = sessionStorage.getItem('title'); // input ali
        switch (input1) {
            case "BMW I8":
                show_image("assets/images/fsa.jpg");
                break;
            case "BMW I9":
                show_image("assets/images/asf.jpg");
                break;
        }
        for (var i = 0; i < cars.length; i++) {
            if (cars[i].title == input1) {
                document.getElementById("title").innerHTML = cars[i].title;
                document.getElementById("year").innerHTML = cars[i].year;
                document.getElementById("km").innerHTML = cars[i].km;
                document.getElementById("hp").innerHTML = cars[i].hp;
                document.getElementById("color").innerHTML = cars[i].color;
                document.getElementById("gear").innerHTML = cars[i].gear;
                document.getElementById("fuelType").innerHTML = cars[i].fuelType;
                document.getElementById("price").innerHTML = cars[i].price;
                break;
            }
        }
}

function show_image(source) {
    var imageContainer = document.getElementById('imageContainer');
    var img = document.createElement("img");
    img.src = source;
    imageContainer.appendChild(img);
}
