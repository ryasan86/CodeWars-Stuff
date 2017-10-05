function findUniq(arr) {
  function onlyUnique(element, index, self) {
    return self.indexOf(element) === index;
  }
  let unique = arr.filter(onlyUnique);
  return unique;
}

let example1 = findUniq([3, 10, 3, 3, 3]);
console.log(example1);
