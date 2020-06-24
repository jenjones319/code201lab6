'use strict';
console.log('app.js is connected.');

var hoursOperation = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

function randomCustomerNumbers (minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}

//Constructor Function    Instance of an Object 
function Store(storeName, storeMinCust, storeMaxCust, storeAvgPerCust, storeTotalHourlyCookies, storeCustomerPerHour, storeCookiesPerHour) {
  this.storeName = storeName;
  this.storeMinCust = storeMinCust;
  this.storeMaxCust = storeMaxCust;
  this.storeAvgPerCust = storeAvgPerCust;
  this.storeTotalHourlyCookies = storeTotalHourlyCookies;
  this.storeCustomerPerHour = storeCustomerPerHour;
  this.storeCookiesPerHour = storeCookiesPerHour;
}

var allShops = [storeOne, storeTwo, storeThree, storeFour, storeFive];
function renderAllShops() {
  for (var i = 0; i < allShops.length; i++) {
    allShops[i].render();
  }
}
renderAllShops();

/*Create a new branch for today’s lab. Make sure it has all of your changes from lab 06 so that you can extend the functionality. -done

Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance. 

var storeOne = new Store('seattle', 23, 65, 6.3, 0, [], []);
firstStore.setHours();
firstStore.getCookiesPerHour();


var allStores = [storeOne];


for(var i = 0; i < allStores.length; i++){
  allStores[i].render();

Replace the lists of your data for each store and build a single table of data instead. It shoudl look similar to the following:

Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”. */