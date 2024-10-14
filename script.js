let username = "Alice";
const age = 18;
var gender = "female";
var male = true;
var nullValue = null;
let city;

var ages = [23, 34, 45, 24];

// console.log(username, age, gender, city);

// console.log(typeof "Hello");

var temp = 10;

// temp = temp + 5
temp += 5;

let a = 10;
let b = "10";

console.log(a == b); //  true
console.log(a === b); // false

if (!male) {
  // console.log("Condition working");
}

if (age >= 18 && gender === "female") {
  // console.log("This person is eligible to vote");
} else {
  // console.log("This person is not eligible to vote");
}

let temperature = 25;

if (temperature > 30) {
  // console.log("It's hot outside");
} else if (temperature > 20) {
  // console.log("It's warm outside");
} else {
  // console.log("It's cold outside");
}

// For loop

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// While loop

let i = 0;
while (i <= 5) {
  i++;
  if (i === 3) continue;
  // console.log(i);
}

// Do while loop

// let j = 6;
// do {
//   console.log(j);
//   j++;
// } while (j <= 5);

// Functions

function add(val) {
  console.log(val);
}

// console.log(add("name"));

// function scope vs block scoped

function myFunction() {
  if (true) {
    var x = 10;
  }
  console.log(x);
}

myFunction();

const year = ["2000", "2015", "1999"];

console.log(year[1]);
console.log(year.length);

year.push("2010"); // used to add an element at the end of the array

year.pop(); // used to delete any element at the end of te array

year.unshift("1995"); // used to add any element at the beginning of the array

year.shift("1995"); // used to remove any element at the beginning of the array

year.splice(1, 2);

console.log(year);

const phone = {
  brand: "Samsung",
  price: 80000,
  color: ["Gray", "Black", "white"],
  storage: 256,
};

// ways to access properties of object
console.log(phone.brand);
console.log(phone["brand"]);

// To add a new property inside my object
phone.ram = 8;
phone["cameras"] = 3;

console.log(phone);

// Template literals

const firstName = "Ryan";
const lastName = "gupta";
const birthYear = 1991;
const currentYear = 2024;

console.log("I'm Ryan Gupta and my age is 33");
console.log(
  `I'm ${firstName} ${lastName} and my age is ${currentYear - birthYear}`
);

var p = 12;
var q = p;

q++;

console.log(q, p);

var arr1 = [10, 11, 12];
// var arr2 = arr1;
var arr2 = [13, 14, 15];
var arr3 = [8, 9, ...arr1, ...arr2, 16, 17];

console.log(arr3);



function calc(num){
  return num+10;
}

calc(20);

// function calc(num){
//  console.log(Math.random()*num) 
// }

// calc(20);
// calc(20);