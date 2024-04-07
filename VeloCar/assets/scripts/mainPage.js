function selectCar(event){
    event.preventDefault();
    
    if (event.target.tagName === 'BUTTON') {
        var clickedButtonValue = event.target.value;
        sessionStorage.setItem('title', clickedButtonValue);
        window.location.href = 'carView.html';
    }
}
