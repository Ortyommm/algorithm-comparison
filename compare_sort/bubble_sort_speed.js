const { arr } = require("./config");
const { bubbleSort } = require("../algorithms_and_functions/bubble_sort");

console.time("algorithm bubble sort");
bubbleSort(arr);
console.timeEnd("algorithm bubble sort");
