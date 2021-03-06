function uniteUnique(arr) {
  var args = [...arguments];
  var set = new Set();
  var newArr = [];

  args.forEach(arr => {
    for (var i = 0; i < arr.length; i++) {
      set.add(arr[i]);
    }
  });

  set.forEach(num => {
    newArr.push(num);
  });

  return newArr;
}

function assertEqual(actual, expected) {
  var areEqualLength = actual.length === expected.length;
  var areEqualValues = actual.every((value, i) => {
    return value === expected[i];
  });

  if (areEqualLength && areEqualValues) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
    console.log(actual);
  }
}

assertEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
// nested array values
assertEqual(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]), [1, 3, 2, [5], [4]]);
