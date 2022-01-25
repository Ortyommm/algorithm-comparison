const { arr } = require("./config");
const { selectionSort } = require("../algorithms_and_functions/selection_sort");

console.time("algorithm selection sort");
selectionSort(arr);
console.timeEnd("algorithm selection sort");
