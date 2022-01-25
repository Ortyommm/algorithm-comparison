const fs = require("fs");
const path = require("path");

const arr = JSON.parse(
  fs.readFileSync(path.join(__dirname, "random_array.txt")).toString()
);

module.exports = {
  filterFn: (el) => el > .2,
  arr,
};
