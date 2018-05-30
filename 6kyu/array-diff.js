function assertArrayEquals(actual, expected) {
  var areEqualLength = actual.length === expected.length;
  var areEqualItems = actual.every(function(item, i) {
    return item === expected[i];
  });

  if (areEqualLength === areEqualItems) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
  }
}

function array_diffCBB(a, b) {
  return a.filter(function(num) {
    return b.indexOf(num) === -1;
  });
}

function array_diff(a, b) {
  return a.filter(function(num) {
    if (b[0]) {
      for (var i = 0; i < b.length; i++) {
        return b[i] ? num !== b[i] : num;
      }
    }
    return num;
  });
}

assertArrayEquals(array_diffCBB([1, 2], [1]), [2]);
assertArrayEquals(array_diffCBB([1, 2, 2, 2, 3], [2]), [1, 3]);
assertArrayEquals(array_diffCBB([1, 2, 2], []), [1, 2, 2]);
