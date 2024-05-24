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

//////////////////////

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return true;
    } else {
      return false;
    }
  }
}

let isPrimeResult = isPrime(2);
console.log(isPrimeResult);

/////////////

function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    console.log(i);
  }
}
showPrimes(2);

// continue

let i = 0;
let j = 8;

checkIAndJ: while (i < 4) {
  console.log(`i: ${i}`);
  i += 1;

  checkJ: while (j > 4) {
    console.log(`j: ${j}`);
    j -= 1;

    if (j % 2 === 0) continue checkJ;
    console.log(`${j} is odd.`);
  }
  console.log(`i = ${i}`);
  console.log(`j = ${j}`);
}

let h = 0;
let l = 5;
chekH: while (h < 4) {
  console.log(h);
  h++;
  chekL: while (h < l) {
    console.log(l);
    l--;
  }
}
