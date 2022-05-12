// example 1
const numbers = [1,2,3,4,5];
const squares = numbers.map(value => value*value);
// console.log(squares);

// example 2

const people = [
    {id: 1, name: 'Felipe', country: 'DR'},
    {id: 2, name: 'Scott', country: 'USA'},
    {id: 3, name: 'Jennifer', country: 'Canada'},
]

//With this we can extract all the ids of the people object
const ids = people.map(person => person.id);
// console.log(ids);

// example 3

//We can have a custom return // really usefull for libraries like React!
const divs = numbers.map(number => `<div>${number}</div>`);
console.log(divs);