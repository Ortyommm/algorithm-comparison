const { arrayLength, findEl } = require("./config");
const arr = [];
for (let i = 0; i < arrayLength; i++) {
  arr.push(i);
}

console.time("inbuilt indexOf");
arr.indexOf(findEl);
console.timeEnd("inbuilt indexOf");
