let lastname = "Gavilán";
lastname = "Marrero";
let age = 999;
let date = new Date();

let propertyName = 'country';
let propertyValue = 'Mexico';

let person = {
    [propertyName]: propertyValue, // dynamic property setting
    lastname,
    age, // the value of age here will be 999, because it will implicit use the value for the already declared variable.
    date: new Date(),
    normalFunction() { // possible to declare functions inside
        // ...
    },
    arrowFunction: () => { // and also arrow funtions
        // ...
    }
}

console.log(person.age);

person.normalFunction();
person.arrowFunction();

console.log(person[propertyName]);

returnValueFromPerson = (prop) => person[prop];

console.log(returnValueFromPerson('lastname'));