const { arr } = require("./config");
const { quickSort } = require("../algorithms_and_functions/quick_sort");

console.time("algorithm quickSort");
quickSort(arr);
console.timeEnd("algorithm quickSort");
