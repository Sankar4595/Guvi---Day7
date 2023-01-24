// e. Print the country which uses US Dollars as currency.

var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload = function (){
    var countriesData = JSON.parse(request.response);
    for(let i=0; i<countriesData.length; i++){
        if(countriesData[i].currencies){
            console.log(countriesData[i].currencies.USD);
        }
    }
}