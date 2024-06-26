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

// task 6

function calculator(str) {
  let numbersArr = str.split(str.includes("+") ? "+" : "-");
  let firstNum = Number(numbersArr[0]);
  let secondNum = Number(numbersArr[1]);
  return str.includes("+") ? firstNum + secondNum : firstNum - secondNum;
}

console.log(calculator("20-11"));

// task 7

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

let userss = [john, pete, mary];

let names = userss.map((item) => item.name);
console.log(names);

//task 8

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

let users1 = [john, pete, mary];

let usersMapped = users1.map((item) => ({
  fullName: `${item.name} ${item.surname}`,
  id: item.id,
}));

console.log(usersMapped);

//task 9

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

let arr10 = [pete, john, mary];

arr10.sort((a, b) => a.age - b.age);
console.log(arr10);

// task 10

// let arr20 = [1, 2, 3];

let shufle = (arr) => {
  arr20.sort(() => Math.random() - 0.5);
};
shufle(arr20);
console.log(arr20);
shufle(arr20);
console.log(arr20);
shufle(arr20);
console.log(arr20);
shufle(arr20);
console.log(arr20);
shufle(arr20);
console.log(arr20);

//better way
let arr20 = [1, 2, 3];

function shufle(arr) {
  for (let i = arr.length - 1; i > 1; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

shufle(arr20);
console.log(arr20);
//count results
let results = {
  123: 0,
  132: 0,
  213: 0,
  231: 0,
  312: 0,
  321: 0,
};

for (let i = 0; i < 1000000; i++) {
  shufle(arr20);
  results[arr20.join("")]++;
}
console.log(results);
// task 11
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr12 = [john, pete, mary];
// let sum = 0;
// function getAverageAge(users) {
//   users.forEach((item) => (sum += item.age));
//   return sum / users.length;
// }
// let res = getAverageAge(arr12);
// console.log(res);

// another way

function getAverageAge2Way(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
let res = getAverageAge2Way(arr12);
console.log(res);

// task 12

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

function unique(arr) {
  let unic = [];
  for (let item of arr) {
    if (!unic.includes(item)) {
      unic.push(item);
    }
  }
  return unic;
}

let ress = unique(strings);
console.log(ress);

// last tast for today

let users2 = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function groupById(arr) {
  let obj = {};
  arr.forEach((item) => {
    obj[item.name] = item;
  });
  return obj;
}

let usersById = groupById(users2);
console.log(usersById);
