const { linearSearch } = require("../algorithms_and_functions/linear_search");
const { arrayLength, findEl } = require("./config");
const arr = [];
for (let i = 0; i < arrayLength; i++) {
  arr.push(i);
}

console.time("algorithm linear search");
linearSearch(arr, findEl);
console.timeEnd("algorithm linear search");
