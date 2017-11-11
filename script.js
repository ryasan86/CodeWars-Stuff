function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError('Parameter must be greater than 0 or less than 12');
  } else {
    var number = 1;
    for (var i = 0; i < n; i++) {
      number += number * i;
    }
    return number;
  }
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
  }
}

assertEqual(factorial(0), 1);
factorial(13);
