const fs = require("fs");
const path = require("path");

const arr = JSON.parse(
  fs.readFileSync(path.join(__dirname, "descending_array.txt")).toString()
);

module.exports = { arr };
