function findShortCleverBestPractice(s) {
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

function findShort(s) {
  var myArray = s.split(' ');
  var shortestWord = myArray[0];
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].length < shortestWord.length) {
      shortestWord = myArray[i];
    }
  }
  return shortestWord.length;
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
  }
}

assertEqual(findShort('bitcoin take over the world maybe who knows perhaps'), 3);
assertEqual(findShort( 'turns out random test cases are easier than writing out basic ones'), 3);
