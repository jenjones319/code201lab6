'use strict';
console.log('app.js is connected.')

var hoursOperation = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

var storeOne = {
    location: 'seattle',
    minCust: 23,
    maxCust: 65, 
    avgPerCust: 6.3, 
    totalHourlyCookies: 0, 
    customerPerHour: [],
    cookiesPerHour: [],

calcCustomersPerHour : function() {
    for(var i = 0; i < hoursOperation.length; i++){
        this.customerPerHour.push(randomCustomerNumbers(this.minCust,this.maxCust));
    }
},
calcCookiesPerHour : function() {
    this.calcCustomersPerHour();
    for(var i = 0; i < hoursOperation.length; i++){
        var oneHour = Math.ceil(this.customerPerHour[i] * this.avgPerCust);
        this.cookiesPerHour.push(oneHour);
        console.log('this.cookiesPerHour', this.cookiesPerHour);
        this.totalHourlyCookies += oneHour;
        console.log('this.totalHourlyCookies', this.totalHourlyCookies);
    }
},
var allShops = [storeOne];
function renderAllShops() {
    for(var i = 0; i < allShops.length; i++){
        allShops[i].render();
    }
render() {
    this.calcCookiesPerHour ();
    var unorderedList = document.getElementById('seattle');
    for(var i = 0; i < hoursOperation.length i++){
        var listItems = document.create element('li');
        listItems.textContent = hoursOperation[i] + this.cookiesPerHour[i] + 'cookies'.;
        unorderedList.appendChild(listItems);
    }
    listItems = document.createElement('li');
    listItems.textContent = 'Total:' + this.totalHourlyCookies + 'cookies.';
    unorderedList.appendChild(listItems);
}

