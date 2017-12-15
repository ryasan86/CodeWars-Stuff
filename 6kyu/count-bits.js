function assertArrayEquals(actual, expected) {
  var areEqualLength = actual.length === expected.length;
  var areEqualItems = actual.every(function(item, i) {
    return item === expected[i];
  });

  if (areEqualLength && areEqualItems) {
    console.log('PASSED');
  } else {
    console.log('FAILED actual: ' + actual);
  }
}

function assertEquals(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
  } else {
    console.log('FAILED actual: ' + actual);
  }
}

countBitsCBB = n =>
  n
    .toString(2) // radix
    .split('0')
    .join('').length;

var countBits = function(n) {
  function generateBits(num) {
    var bits = [];
    var bitVal = 1;
    do {
      bits.push(bitVal);
      bitVal *= 2;
    } while (bitVal <= num);
    return bits;
  }

  var count1s = 0;
  var revBits = generateBits(n).reverse();
  for (var i = 0; i < revBits.length; i++) {
    if (n - revBits[i] >= 0) {
      count1s++;
      n -= revBits[i];
    }
  }
  return count1s;
};

assertEquals(countBits(0), 0);
assertEquals(countBits(4), 1);
assertEquals(countBits(7), 3);
assertEquals(countBits(9), 2);
assertEquals(countBits(10), 2);

function generateBitsTest(n) {
  var bits = [];
  var num = 1;

  do {
    bits.push(num);
    num *= 2;
  } while (num <= n);
  return bits;
}

assertArrayEquals(generateBitsTest(8), [1, 2, 4, 8]);
assertArrayEquals(generateBitsTest(9), [1, 2, 4, 8]);
assertArrayEquals(generateBitsTest(32), [1, 2, 4, 8, 16, 32]);
assertArrayEquals(generateBitsTest(63), [1, 2, 4, 8, 16, 32]);
assertArrayEquals(generateBitsTest(1234), [
  1,
  2,
  4,
  8,
  16,
  32,
  64,
  128,
  256,
  512,
  1024
]);
