function map(arr, func) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  }
  return newArr;
}

module.exports = {
  map,
};
