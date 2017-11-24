const findLongestBPC = l =>
  l.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));

function findLongestBPC2(array) {
  return array.reduce(
    (res, curr) => (String(res).length < String(curr).length ? curr : res)
  );
}

function findLongestBPC3(array) {
  var newArr = array.map(function(element) {
    return element.toString();
  });
  newArr.sort(function(a, b) {
    return b.length - a.length;
  });
  return parseInt(newArr[0]);
}

function findLongest(array) {
  var mostDigits = array[0].toString();

  array.forEach((num, i) => {
    num = num.toString();
    if (num.length > mostDigits.length) {
      mostDigits = num;
    }
  });

  return parseInt(mostDigits);
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
  }
}

assertEqual(findLongest([1, 10, 100]), 100);
assertEqual(findLongest([9000, 8, 800]), 9000);
assertEqual(findLongest([8, 900, 500]), 900);

var output = findLongest([1, 10, 100]);
console.log(output);
