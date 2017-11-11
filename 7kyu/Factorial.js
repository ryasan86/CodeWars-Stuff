function factorialCleverBestPractice(n) {
  if (n < 0 || n > 12) {
    throw new RangeError('Out of range');
  }
  return n ? n * factorial(n - 1) : 1;
}

function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError('Out of Range');
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
