const { filterFn, arr } = require("./config");
const { filter } = require("../algorithms_and_functions/function_filter");

console.time("function filter");
filter(arr, filterFn);
console.timeEnd("function filter");
