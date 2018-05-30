function sortArray(array) {
  var odds = array.filter(function(num) {
    if (num % 2 !== 0) {
      return num;
    }
  });

  odds.sort();

  array = array.map(function(num) {
    if (num % 2 === 0) {
      return num;
    }
  });

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < odds.length; j++) {
      if (array[i] === undefined) {
        array.splice(i, 1, odds[j]);
        odds.shift();
      }
    }
  }

  return array;
}

function assertEqual(actual, expected) {
  var areEqualLength = actual.length === expected.length;
  var areEqualValues = actual.every(function(actualValue, index) {
    return actualValue === expected[index];
  });

  if (areEqualLength && areEqualValues) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
  }
}

assertEqual(sortArray([5, 3, 2, 8, 1, 4, 11]), [1, 3, 2, 8, 5, 4]);
assertEqual([1, 11, 2, 8, 3, 4, 5], [1, 3, 2, 8, 5, 4, 11]);

assertEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
assertEqual(sortArray([]), []);

var output = sortArray([5, 3, 2, 8, 1, 4]);
console.log(output);
