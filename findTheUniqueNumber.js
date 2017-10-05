function findUniq(arr) {
  let arrSorted = arr.slice().sort();

  let unique;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arrSorted[i + 1] !== arrSorted[i]) {
      unique = arrSorted[i + 1];
    }
  }
  return unique;
}

let example1 = findUniq([3, 10, 3, 3, 3]);
console.log(example1);
