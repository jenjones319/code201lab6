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
  this.storeCustomerPerHour = storeCustomerPerHour[];
  this.storeCookiesPerHour = storeCookiesPerHour[];
  this.storeTotalCookiesDaily = storeTotalCookiesDaily 0;
}

var allShops = [storeOne, storeTwo, storeThree, storeFour, storeFive];
function renderAllShops() {
  for (var i = 0; i < allShops.length; i++) {
    allShops[i].render();
  }
}
renderAllShops();

Store.prototype.render = function() {
  this.calcCookiesPerHour();
  var tableRow = document.createElement('tr');
  var tableData = document.createElement('td')
  tableData.textContent = this.storeName;
  tableRow.appendChild(tableData);

  for(var i=0; i < storeHours.length; i++){
    tableData = document.createElement('td');
    tableData.textContent = this.CookiesPerHour[i];
    tableRow.appendChild(tableData);
  }
  var tableDailyTotal = document.createElement('th');
  tableDailyTotal.textContent = this.totalCookiesDaily;

  tableRow.appendChild(tableDailyTotal);
  tableElement.appendChild(tableRow);
};


var storeOne = new Store('seattle', 23, 65, 6.3);
var storeTwo = new Store('tokyo', 3, 24, 1.2);
var storeThree = new Store('dubai', 11, 38, 3.7);
var storeFour = new Store('paris', 20, 38, 2.3);
var storeFive = new Store('lima', 2, 16, 4.6);

storeOne.setHours();
storeOne.getCookiesPerHour();


var allStores = [storeOne, storeTwo, storeThree, storeFour, storeFive];

function renderAllData() {
  //makeHeaderRow();

for(var i = 0; i < allStores.length; i++){
  allStores[i].render();
}
  //makeFooterRow();

renderAllData();

Replace the lists of your data for each store and build a single table of data instead. It shoudl look similar to the following:

Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”. */