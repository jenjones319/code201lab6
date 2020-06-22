'use strict';
console.log('app.js is connected.')

/*//var education = ['a','b','c'];
var personOne = {

    name: 'Jen Jones',
    age: 45,
    codingStudent: true,
    education: ['USD', 'Kirkwood', 'DeltaV'],

    code: function(){
        console.log('The floor is lava.');

        return this.education[Math.floor(Math.random() * this.education.length)];
    }

};

---- */

var petOne = {
    name: 'Tom',
    breed: 'Tabby',
    age: 0,
    imageName: 'tomCat'
    isGoodKids: true,
    isGoodDogs: false,
    isGoodAnimal: true,
    setAge:  function(){
        this.age = randomAge(3, 12) + ' Months';
    }
};

function randomAge(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min);
}

petOne.isFixed = true;

var parentElement = document.getElementById('kittenProfiles');