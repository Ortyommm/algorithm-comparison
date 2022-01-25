const { binarySearch } = require("../algorithms_and_functions/binary_search");
const { arrayLength, findEl } = require("./config");
const arr = [];
for (let i = 0; i < arrayLength; i++) {
  arr.push(i);
}

console.time("algorithm binary search");
binarySearch(arr, findEl);
console.timeEnd("algorithm binary search");
