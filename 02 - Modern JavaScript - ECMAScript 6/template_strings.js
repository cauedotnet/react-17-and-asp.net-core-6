const myname = 'Felipe Gavilán'; // Single quotes
const country = "Dominican Republic"; // double quotes

//traditional way:
const greeting = "Hello, " + myname + ", how are you?";

//string interpolation example:
const greeting2 = `Hello, ${myname}, how are you?` // backticks

const add = (a, b) => a + b;

//with backticks we can have a string declaration in multiple lines too
const message = `Hello, ${myname}

This is a message for you.

The sum of 2 and 2 is ${add(2, 2)}

Bye bye`;

console.log(message);