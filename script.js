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
