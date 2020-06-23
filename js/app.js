'use strict';
console.log('app.js is connected.')

var hoursOperation = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ']; //finish the array

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
calcCookiesPerHour: function(){
    this.calcCustomersPerHour();
    for(var 1=0; i < hoursOperation.length; i++){
        var oneHour = Math.ceil(this.customerPerHour[i] * this.avgPerCust);
        }
    },
};

var allShops = [StoreOne];
function renderAllShops(){
    for(var i=0; i < )



function Store(location, minCust, maxCust, avgPerCust) {
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgPerCust = avgPerCust;
this.Store = function() {
    return this.maxCust - this.minCust;
    };
}

var seattleStore = new Store('Seattle', 23, 65, 6.3);
var tokyoStore = new Store('Tokyo', 3, 24, 1.2);
var dubaiStore = new Store('Dubai', 11, 38, 3.7);
var parisStore = new Store('Paris', 20, 38, 2.3);
var limaStore = new Store('Lima', 2, 16, 4.6);

var detailsStore = (seattleStore.location + ' Min. Customers: ' + minCust + ' Max. Customers: ' + maxCust + 'Avg. Sale Per: ' + avgPerCust); 


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

var allShops = [];

