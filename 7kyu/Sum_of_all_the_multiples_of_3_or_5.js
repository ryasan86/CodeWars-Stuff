function findSum(n) {
  var number = 0;
  for (var i = 0; i <= n; i++) {
    if (i % 3 === 0 || i % 5 == 0) {
      number += i;
    }
  }
  return number;
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
  }
}

assertEqual(findSum(5), 8);
assertEqual(findSum(10), 33);
