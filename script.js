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
  console.log("Condition working");
}

if (age >= 18 && gender === "female") {
  console.log("This person is eligible to vote");
} else {
  console.log("This person is not eligible to vote");
}

let temperature = 25;

if (temperature > 30) {
  console.log("It's hot outside");
} else if (temperature > 20) {
  console.log("It's warm outside");
} else {
  console.log("It's cold outside");
}


// For loop 

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }


// While loop

let i = 0;
while (i <= 5) { 
  i++;
  if(i===3) continue;
  console.log(i);
}


// Do while loop

// let j = 6;
// do {
//   console.log(j);
//   j++;
// } while (j <= 5);


// Functions

function add(val){
    console.log(val)
}

console.log(add("name"));