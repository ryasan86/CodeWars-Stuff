function isIsogramBestPracticeClever(str) {
  return !/(\w).*\1/i.test(str);
}

function isIsogram(str) {
  var strSet = new Set();
  str
    .toLowerCase()
    .split('')
    .forEach(function(letter) {
      strSet.add(letter);
    });
  return strSet.size === str.length;
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
  }
}

assertEqual(isIsogram('Dermatoglyphics'), true);
assertEqual(isIsogram('aba'), false);
