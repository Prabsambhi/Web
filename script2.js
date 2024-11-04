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

const square = (a) => a * a;

const hello = () => console.log("Hello");

// Destructuring

var a = [1, 2, 3];
var [b, c] = a;

var [d, e, f, g] = a;

var [h, , i] = a;

var obj = { name: "Ankit", age: 30 };
var { age } = obj;
// console.log(age);

// Synchronous Javascript

// console.log("First")
// console.log("Second")
// console.log("Third")

// Asynchronous Javascript

// console.log("Start");
// setTimeout(() => console.log("Asynchronous code"), 2000)
// console.log("End");

// Callbacks

// Example 1

// const fetchData = (callback) => {
//   console.log("Fetching data...");

//   setTimeout(function () {
//     const data = {
//       id: 1,
//       name: "Piyush",
//     };
//     callback(data);
//   }, 2000);
// };

// function displayData(data) {
//   console.log("Data received", data);
// }

// fetchData(displayData);

// Example 2 (Callback hell)

// function first(callback) {
//   setTimeout(function () {
//     console.log("First task completed");
//     callback();
//   }, 2000);
// }

// function second(callback) {
//   setTimeout(function () {
//     console.log("Second task completed");
//     callback();
//   }, 2000);
// }

// function third() {
//   setTimeout(function () {
//     console.log("Third task completed");
//   }, 2000);
// }

// first(() => {
//   second(() => {
//     third();
//   });
// });

// Promises

// 3 states of a promise (Pending, fulfilled, rejected)

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     console.log("Fetching Data.....");

//     setTimeout(() => {
//       const data = {
//         id: 1,
//         name: "Piyush",
//       };

//       const error = true;

//       if (!error) {
//         resolve(data);
//       } else {
//         reject("Error Fetching data");
//       }
//     }, 2000);
//   });
// }

// Consuming our promise

// fetchData()
//   .then((data) => {
//     console.log("Data received:", data);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   })
//   .finally(() => {
//     console.log("Finally is working");
//   });

// async/await

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     console.log("Fetching Data.....");

//     setTimeout(() => {
//       const data = {
//         id: 1,
//         name: "Piyush",
//       };

//       const error = true;

//       if (!error) {
//         resolve(data);
//       } else {
//         reject("Error Fetching data");
//       }
//     }, 2000);
//   });
// }

// async function handleData() {
//   try {
//     const data = await fetchData();
//     console.log("Data Received:", data);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// handleData();

// Callbacks

// function getSuitStitched(onSuitReady, onSuitNotReady) {

//   console.log("I'll stitch your suit, comeback in 2 days");

//   setTimeout(() => {
//     const isStitched = false;

//     if (isStitched) {
//       // Run a callback function for resolved state
//       onSuitReady();
//     } else {
//       // Run a callback function for rejected state
//       onSuitNotReady();
//     }
//   }, 2000);
// }

// function onSuitReady() {
//   console.log("Suit is ready !! I can attend the function");
// }

// function onSuitNotReady() {
//   console.log("Suit is not ready :(( I can't attend the function");
// }

// getSuitStitched(onSuitReady, onSuitNotReady);

// function getSuitStitched() {
//   return new Promise((resolve, reject) => {
//     console.log("I'll stitch your suit, comeback in 2 days");

//     setTimeout(() => {
//       const isStitched = true;

//       if (isStitched) {
//         resolve("Suit is ready");
//       } else {
//         reject("Suit is not ready");
//       }
//     }, 2000);
//   });
// }

// getSuitStitched()
//   .then((message) => {
//     console.log(message);
//     console.log("I can attend the function");
//   })
//   .catch((error) => {
//     console.log(error);
//     console.log("I won't be able to go to the function");
//   });

// async/await

// async function consumePromise() {
//   try {
//     const message = await getSuitStitched();
//     console.log(message);
//     console.log("I can attend the function");
//   } catch (error) {
//     console.log(error);
//     console.log("I won't be able to go to the function");
//   }
// }

// consumePromise();

// Array traversal methods

// .forEach()

const numbers = [1, 2, 3, 4];

numbers.forEach((num) => {
  // console.log(num * 10);
});

// .map();

const modified = numbers.map((num) => num * 5);

// console.log(modified,numbers)

// .find()

var newNumbers = [1, 2, 5, 8, 10]; 

function isEven(number) {
  return number % 2 === 0;
}

var output = newNumbers.find(isEven);

// console.log(output);


// .filter()

var evenNumbers = newNumbers.filter(isEven);
// console.log(evenNumbers);


// .reduce()


// var newNumbers = [1, 2, 5, 8, 10]; 


function sum(accumulator, currentnumber){
  return accumulator + currentnumber;
}

const total = newNumbers.reduce(sum, 0)

console.log(total)