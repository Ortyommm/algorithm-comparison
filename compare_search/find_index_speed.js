const { arrayLength, findEl } = require("./config");
const arr = [];
for (let i = 0; i < arrayLength; i++) {
  arr.push(i);
}

console.time("inbuilt find index");
arr.findIndex((el) => el === findEl);
console.timeEnd("inbuilt find index");
