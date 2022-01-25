const { mapFn, arr } = require("./config");

console.time("inbuilt map");
arr.map(mapFn);
console.timeEnd("inbuilt map");
