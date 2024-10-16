// console.log(x);

var x = 5;

// hoistedFunction();

function hoistedFunction() {
  console.log("This function is hoisted");
}

// functionExpression();

var functionExpression = function () {
  console.log("This function expression is hoisted");
};

// Arrow Functions

// Syntax

// const functionName = (parameters)=>{

// }

const add = (a, b) => {
  return a + b;
};

// console.log(add(10,20));

const subtract = (a, b) => a - b;

const square = a => a * a;

const hello = () => console.log("Hello");

// Destructuring

var a = [1, 2, 3];
var [b, c] = a;

var [d, e, f, g] = a;

var [h , , i] = a;

var obj = {name: "Ankit", age: 30};
var {age} = obj;
console.log(age);

// Synchronous Javascript

// console.log("First")
// console.log("Second")
// console.log("Third")

// Asynchronous Javascript

console.log("Start");
setTimeout(() => console.log("Asynchronous code"), 2000)
console.log("End");



