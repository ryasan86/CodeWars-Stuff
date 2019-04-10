function removeZeros(array) {
  let copy = array.slice();
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < copy.length; j++) {
      if (array[i] === 0) {
        [array[j], copy[i]] = [copy[i], array[j]];
      }
    }
  }

  return array;
}

var input = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];
console.log(removeZeros(input));
