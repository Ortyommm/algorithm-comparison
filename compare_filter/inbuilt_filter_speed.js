const { filterFn, arr } = require("./config");

console.time("inbuilt filter");
arr.filter(filterFn);
console.timeEnd("inbuilt filter");
