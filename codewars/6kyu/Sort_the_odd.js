// top solution
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}

// my solution
const sortArray = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log([array[j], array[i]]);
      if (array[j] > array[i] && array[j] % 2 !== 0 && array[i] % 2 !== 0) {
        [array[j], array[i]] = [array[i], array[j]];
      }
    }
  }
  return array;
};

console.log(sortArray([5, 3, 2, 8, 1, 4]));
