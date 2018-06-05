const smallest = n => {
  n = n.toString();
  const numArr = n.split('');
  const sliced = n.split('').slice(1);
  const idx    = sliced.reduce(lowest, 0) + 1;
  const jdx    = numArr.findIndex(item => item > numArr[idx]);
  let   result = n.split('');
  result.splice(idx, 1);
  result.splice(jdx, 0, numArr[idx]);
  result = parseInt(result.join(''))

  return [result, idx, jdx];
};

const lowest = (acc, curr, i, arr) => {
  return arr[acc] < curr ? acc : i;
};

// console.log(smallest(261235)); // -> [126235, 2, 0]
// console.log( smallest(285365)) // -> [238565, 3, 1]
// console.log(smallest(296837)) // -> [239687, 4, 1]
// console.log(smallest(956837)) // -> [395687, 4, 0]
// console.log(smallest(198536)) // -> [139856, 4, 1]

console.log(smallest(269045)); // -> [26945, 3, 0]
console.log(smallest(209917)); // -> [29917, 0, 1]
