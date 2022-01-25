const TimSort = require("timsort");
const { arr } = require("./config");

// let counter = 0;

function compareFn(a, b) {
  // counter++;
  return a - b;
}

console.time("algorithm timsort");
TimSort.sort(arr, compareFn);
console.timeEnd("algorithm timsort");
// console.log({ counter });
