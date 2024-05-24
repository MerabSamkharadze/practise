"use strict";

// nullish coalescing operator

function showCount(count) {
  return count ?? "unknown";
}

let result = showCount(0);
let result1 = showCount(null);
let result2 = showCount();

console.log(result);
console.log(result1);
console.log(result2);

// Returning a value

function sum(x, y) {
  return x + y;
}

let sumResult = sum(190, 20);
console.log(sumResult);

////////////////////////////

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Do you have permision from your parents?");
  }
}
let age = prompt("Your age: ");

if (checkAge(age)) {
  alert("Access granted!");
} else {
  alert("Access denied!");
}
