const findOddBestPracticeClever = xs => xs.reduce((a, b) => a ^ b);

function findOdd(A) {
  var obj = {};

  A.forEach(function(el) {
    return !obj[el] ? (obj[el] = 1) : obj[el]++;
  });

  for (var num in obj) {
    if (obj[num] % 2 !== 0) {
      return Number(num);
    }
  }
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
    console.log(actual);
  } else {
    console.log('FAILED');
    console.log(actual);
  }
}

assertEqual(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), 5);
