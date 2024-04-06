function saveInitialData() {
    if (localStorage) {
        if (!localStorage.getItem("carList")) {
            var carList = [
                { title: "Volkswagen Passat", year: "2013", km: "225,000", hp: "105", color: "White", gear: "Automatic", fuelType: "Diesel", price: "$25,000" },
                { title: "Renault Clio", year: "2019", km: "129,000", hp: "75", color: "White", gear: "Manual", fuelType: "Diesel", price: "$10,000" },
                { title: "Toyota Yaris", year: "2019", km: "67,765", hp: "125", color: "Red", gear: "Automatic", fuelType: "Gasoline", price: "$15,000" },
                { title: "BMW 5.25", year: "2016", km: "225,000", hp: "218", color: "Black", gear: "Automatic", fuelType: "Diesel", price: "$40,000" },
                { title: "Mercedes AMG GT", year: "2016", km: "38,875", hp: "510", color: "Yellow", gear: "Automatic", fuelType: "Gaspline", price: "$80,000" },
                { title: "Aston Martin Vanquish", year: "2015", km: "13,210", hp: "600", color: "Blue", gear: "Automatic", fuelType: "Gasoline", price: "$85,000" },
                { title: "Lamborghini Urus", year: "2023", km: "6001", hp: "601", color: "Green", gear: "Automatic", fuelType: "Gasoline", price: "$100,000" },
                { title: "Alfa Romeo Giulietta", year: "2018", km: "83,000", hp: "120", color: "Red", gear: "Automatic", fuelType: "Diesel", price: "$25,000" },
                { title: "Mercedes G63", year: "2018", km: "40,000", hp: "330", color: "Black", gear: "Automatic", fuelType: "Gasoline", price: "$60,000" },
                { title: "Porsche 911 GT3 RS", year: "2018", km: "10,265", hp: "525", color: "Gray", gear: "Automatic", fuelType: "Gasoline", price: "$120,000" }
            ];
            localStorage.setItem("carList", JSON.stringify(carList));
        }
    }
}

window.onload = function getCar() {
    var cars = JSON.parse(localStorage.getItem('carList'));
    var input1 = sessionStorage.getItem('title'); // input ali
    switch (input1) {
        case "Volkswagen Passat":
            show_image("assets/images/passat.jpg");
            break;
        case "Renault Clio":
            show_image("assets/images/clio.jpg");
            break;
        case "Toyota Yaris":
            show_image("assets/images/yaris.jpg");
            break;
        case "BMW 5.25":
            show_image("assets/images/5.25.jpg");
            break;
        case "Mercedes AMG GT":
            show_image("assets/images/amggt.jpg");
            break;
        case "Aston Martin Vanquish":
            show_image("assets/images/vanquish.jpg");
            break;
        case "Lamborghini Urus":
            show_image("assets/images/urus.jpg");
            break;
        case "Alfa Romeo Giulietta":
            show_image("assets/images/giulietta.jpg");
            break;
        case "Mercedes G63":
            show_image("assets/images/g63.jpg");
            break;
        case "Porsche 911 GT3 RS":
            show_image("assets/images/911gt3rs.jpg");
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

