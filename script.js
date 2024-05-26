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

//

function checkAge(age) {
  return age > 18 ? true : "Did parents allow you?";
}
let resultNewCheckAge = checkAge(112);
console.log(resultNewCheckAge);

//

function min(a, b) {
  return a < b ? a : b;
}

console.log(min(10, 20));

//

function pow(x, n) {
  return x ** n;
}

console.log(pow(5, 3));

//

let multiply = pow;
console.log(multiply(2, 3));

// callback function

function getGender(questen, yes, no) {
  confirm(questen) ? yes() : no();
}

getGender(
  "if you are men, click ok else click no",
  function () {
    alert("you are man");
  },
  function () {
    alert("you are woman");
  }
);

//arrow function

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function () {
    alert("You agreed.");
  },
  function () {
    alert("You canceled the execution.");
  }
);

let ask = (questen, yes, no) => (confirm(questen) ? yes() : no());
ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

//////////////////

console.log("Hello world!");

// foreach

let myArray = ["mero", "leo", "mzio", "jabu"];

myArray.forEach((person, index, array) =>
  console.log(
    `${person} is number ${index} in ${array} and ${
      person === "mzio" ? "she" : "he"
    } is super!`
  )
);

// arr.indexof(item, from) & arr.includes(item, from)

let family = ["mero", "leo", "mzio", "jabu"];

let resultOfIndexOf = family.indexOf("leo");
let resultOfIncludes = family.includes("mzio");
console.log(resultOfIndexOf);
console.log(resultOfIncludes);

// find method

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "John" },
];

let user = users.find((element) => element.name === "Mary");
console.log(user.id);

// filter method

let filteredUsers = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let someUsers = filteredUsers.filter((item) => item.id < 3);
let userFilteres = filteredUsers.filter((element) => element.id > 0);

console.log(userFilteres);

// map method

let hobies = [
  "swimming",
  "cycling",
  "walking",
  "listenig to music",
  "watching movies",
];

let sentence = hobies.map((element) => "i love " + "" + element);
console.log(sentence);

// sort method

let mesedNumbers = [
  12, 34, 22, 1345, 677, 8765543, 435, 2, 53465745346, 1000000000000, 55, 7,
];

mesedNumbers.sort((a, b) => b - a);

console.log(mesedNumbers);

let countries = ["ბათუმი", "ჭიათურა", "რუსთავი", "ქუთაისი"];

console.log(countries.sort((a, b) => b.localeCompare(a)));

// reverse method

let rowNumbers = [1, 3, 5, 7, 9];
rowNumbers.reverse();
console.log(rowNumbers);

// split method

let volunters = "ana, gio, cuxo, joni, aglo, usho, piro, bertyi";
let voluntersArr = volunters.split(", ");
let firs2Wolunters = volunters.split(", ", 2);
console.log(firs2Wolunters);

let myName = "Merabinho";
let spelledMyName = myName.split("");
console.log(spelledMyName);

// join method

let wordsArr = ["Hello", "Merabinho"];

let joinedWodrdsArr = wordsArr.join(" ");
console.log(joinedWodrdsArr);

// reduce method

let numberOfApples = [1, 2, 3, 4, 5];

let whoolNamberOfApples = numberOfApples.reduce(
  (acumulator, item) => acumulator + item,
  0
);
console.log(whoolNamberOfApples);

// Array.isArray([])

numberOfApples = [1, 2, 3, 4, 5];
console.log(Array.isArray(numberOfApples));

////////////////////////////////////////////
// !!!!!!!!!!!!!!!!Tasks!!!!!!!!!!!!!!!!!!!!
////////////////////////////////////////////

// task 1

function camelize(string) {
  return string
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

//task 2

// let arr = [5, 3, 8, 1];

function filterRange(arr, min, max) {
  return arr.filter((itam) => itam >= min && itam <= max);
}
console.log(filterRange(arr, 1, 4));

// task 3
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log(arr);

// task 4

let arrNumbers = [5, 2, 1, -10, 8];

console.log(arrNumbers.sort((a, b) => b - a));

// task 5

let arrLanguages = ["HTML", "JavaScript", "CSS"];

function sort(arr) {
  return arr.slice().sort();
}

let newArr = sort(arrLanguages);
console.log(newArr);
console.log(arrLanguages);
