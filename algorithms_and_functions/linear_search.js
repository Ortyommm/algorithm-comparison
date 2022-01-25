let count = 0;
function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count++;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

module.exports = { linearSearch };
