//------------
//!single,double and constructor
//------------

//!single quotes
const singleQuoteString = "This is a string using single quote";
console.log(singleQuoteString);

//!double quotes
const doubleQuoteString = "This is a string using double quote";
console.log(singleQuoteString);

//!using the string constructor
const stringConstructor = new String(
  "this is string using the string constructor quotes"
);
console.log(stringConstructor);

//------------
//!template literals
//------------

//basic usage
const greeting = "hello world";

//string interploation
const username = "Alice";
const welcomeMessage = `hello, ${username}! welcome to our website`;

//multiline string
const poem = `rose are red, 
violet are blue, 
sugar are sweet, 
and so are you`;
console.log(poem);

//expression evalation
const price = 2;
const tax = 0.05;
const total = `The price:${price * (1 + tax)}`;

//------------
//!string concatenation
//------------
//using the + operator
const firstname = "King";
const lastname = "James";
const fullname = firstname + " " + lastname;

console.log(fullname);

//using the .concat()method
const firstname1 = "Chef";
const lastname2 = "Curry";
const fullname01 = firstname1.concat(" ", lastname2);

console.log(fullname01);

//using template literal
const fruit = "apple";
const color = "red";

const sentence = `The ${fruit} is ${color}`;

console.log(sentence);

//------------
//!Uppercase and lowercase
//------------
//!Uppercase
const localcase = "hello,world";
const result = localcase.toLocaleUpperCase();

console.log(result);

//!lowercase
const localcase1 = "hello,world";
const result1 = localcase1.toLowerCase();
console.log(result1);
