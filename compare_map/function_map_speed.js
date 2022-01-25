const { mapFn, arr } = require("./config");
const { map } = require("../algorithms_and_functions/function_map");

console.time("function map");
map(arr, mapFn);
console.timeEnd("function map");
