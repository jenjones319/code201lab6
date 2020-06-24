'use strict';
console.log('app.js is connected.');

var hoursOperation = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

function randomCustomerNumbers (minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}

var storeOne = {
  name: 'seattle',
  minCust: 23,
  maxCust: 65,
  avgPerCust: 6.3,
  totalHourlyCookies: 0,
  customerPerHour: [],
  cookiesPerHour: [],

  setCustomerPerHour: function () {
    for (var i = 0; i < hoursOperation.length; i++) {
      this.customerPerHour.push(randomCustomerNumbers(this.minCust, this.maxCust));
    }
  },
  calcCookiesPerHour: function () {
    this.setCustomerPerHour();
    for (var i = 0; i < hoursOperation.length; i++) {
      var oneHour = Math.ceil(this.customerPerHour[i] * this.avgPerCust);
      this.cookiesPerHour.push(oneHour);
      console.log('this.cookiesPerHour', this.cookiesPerHour);
      this.totalHourlyCookies += oneHour;
      console.log('this.totalHourlyCookies', this.totalHourlyCookies);
    }
  },
  render () {
    this.calcCookiesPerHour();
    var unorderedList = document.getElementById('seattle');
    for (var i = 0; i < hoursOperation.length; i++) {
      var listItems = document.createElement('li');
      listItems.textContent = hoursOperation[i] + this.cookiesPerHour[i] + 'cookies.';
      unorderedList.appendChild(listItems);
    }
    listItems = document.createElement('li');
    listItems.textContent = 'Total:' + this.totalHourlyCookies + 'cookies.';
    unorderedList.appendChild(listItems);
  }
};

var storeTwo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgPerCust: 1.2,
  totalHourlyCookies: 0,
  customerPerHour: [],
  cookiesPerHour: [],
  
  setCustomerPerHour: function () {
    for (var i = 0; i < hoursOperation.length; i++) {
      this.customerPerHour.push(randomCustomerNumbers(this.minCust, this.maxCust));
    }
  },
  calcCookiesPerHour: function () {
    this.setCustomerPerHour();
    for (var i = 0; i < hoursOperation.length; i++) {
      var oneHour = Math.ceil(this.customerPerHour[i] * this.avgPerCust);
      this.cookiesPerHour.push(oneHour);
      console.log('this.cookiesPerHour', this.cookiesPerHour);
      this.totalHourlyCookies += oneHour;
      console.log('this.totalHourlyCookies', this.totalHourlyCookies);
    }
  },
  render () {
    this.calcCookiesPerHour();
    var unorderedList = document.getElementById('seattle');
    for (var i = 0; i < hoursOperation.length; i++) {
      var listItems = document.createElement('li');
      listItems.textContent = hoursOperation[i] + this.cookiesPerHour[i] + 'cookies.';
      unorderedList.appendChild(listItems);
    }
    listItems = document.createElement('li');
    listItems.textContent = 'Total:' + this.totalHourlyCookies + 'cookies.';
    unorderedList.appendChild(listItems);
  }
};

var storeThree = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgPerCust: 3.7,
  totalHourlyCookies: 0,
  customerPerHour: [],
  cookiesPerHour: [],

  setCustomerPerHour: function () {
    for (var i = 0; i < hoursOperation.length; i++) {
      this.customerPerHour.push(randomCustomerNumbers(this.minCust, this.maxCust));
    }
  },
  calcCookiesPerHour: function () {
    this.setCustomerPerHour();
    for (var i = 0; i < hoursOperation.length; i++) {
      var oneHour = Math.ceil(this.customerPerHour[i] * this.avgPerCust);
      this.cookiesPerHour.push(oneHour);
      console.log('this.cookiesPerHour', this.cookiesPerHour);
      this.totalHourlyCookies += oneHour;
      console.log('this.totalHourlyCookies', this.totalHourlyCookies);
    }
  },
  render () {
    this.calcCookiesPerHour();
    var unorderedList = document.getElementById('seattle');
    for (var i = 0; i < hoursOperation.length; i++) {
      var listItems = document.createElement('li');
      listItems.textContent = hoursOperation[i] + this.cookiesPerHour[i] + 'cookies.';
      unorderedList.appendChild(listItems);
    }
    listItems = document.createElement('li');
    listItems.textContent = 'Total:' + this.totalHourlyCookies + 'cookies.';
    unorderedList.appendChild(listItems);
  }
};

var storeFour = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgPerCust: 2.3,
  totalHourlyCookies: 0,
  customerPerHour: [],
  cookiesPerHour: [],

  setCustomerPerHour: function () {
    for (var i = 0; i < hoursOperation.length; i++) {
      this.customerPerHour.push(randomCustomerNumbers(this.minCust, this.maxCust));
    }
  },
  calcCookiesPerHour: function () {
    this.setCustomerPerHour();
    for (var i = 0; i < hoursOperation.length; i++) {
      var oneHour = Math.ceil(this.customerPerHour[i] * this.avgPerCust);
      this.cookiesPerHour.push(oneHour);
      console.log('this.cookiesPerHour', this.cookiesPerHour);
      this.totalHourlyCookies += oneHour;
      console.log('this.totalHourlyCookies', this.totalHourlyCookies);
    }
  },
  render () {
    this.calcCookiesPerHour();
    var unorderedList = document.getElementById('seattle');
    for (var i = 0; i < hoursOperation.length; i++) {
      var listItems = document.createElement('li');
      listItems.textContent = hoursOperation[i] + this.cookiesPerHour[i] + 'cookies.';
      unorderedList.appendChild(listItems);
    }
    listItems = document.createElement('li');
    listItems.textContent = 'Total:' + this.totalHourlyCookies + 'cookies.';
    unorderedList.appendChild(listItems);
  }
};

var storeFive = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgPerCust: 4.6,
  totalHourlyCookies: 0,
  customerPerHour: [],
  cookiesPerHour: [],

  setCustomerPerHour: function () {
    for (var i = 0; i < hoursOperation.length; i++) {
      this.customerPerHour.push(randomCustomerNumbers(this.minCust, this.maxCust));
    }
  },
  calcCookiesPerHour: function () {
    this.setCustomerPerHour();
    for (var i = 0; i < hoursOperation.length; i++) {
      var oneHour = Math.ceil(this.customerPerHour[i] * this.avgPerCust);
      this.cookiesPerHour.push(oneHour);
      console.log('this.cookiesPerHour', this.cookiesPerHour);
      this.totalHourlyCookies += oneHour;
      console.log('this.totalHourlyCookies', this.totalHourlyCookies);
    }
  },
  render () {
    this.calcCookiesPerHour();
    var unorderedList = document.getElementById('seattle');
    for (var i = 0; i < hoursOperation.length; i++) {
      var listItems = document.createElement('li');
      listItems.textContent = hoursOperation[i] + this.cookiesPerHour[i] + 'cookies.';
      unorderedList.appendChild(listItems);
    }
    console.log('listItems.textContent', listItems.textContent);
  }
};

var allShops = [storeOne, storeTwo, storeThree, storeFour, storeFive];
function renderAllShops() {
  for (var i = 0; i < allShops.length; i++) {
    allShops[i].render();
  }
}
renderAllShops();