const { arr } = require("./config");

// let counter = 0;
console.time("inbuilt sort");
arr.sort((a, b) => {
  // counter++;
  return a - b;
});
console.timeEnd("inbuilt sort");
// console.log({ sicounter: counter });
