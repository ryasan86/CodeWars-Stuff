// 10 Tests Passed. 1 Failed. Expected ',' but got 'G'.
function firstNonRepeatingLetter(s) {
  var obj = {};
  s.split('').forEach(function(letter) {
    if (!obj[letter]) {
      obj[letter] = 0;
    }

    if (letter.match(/[a-zA-Z]/) && letter === letter.toUpperCase()) {
      obj[letter.toLowerCase()]++;
    }

    obj[letter]++;
  });

  for (var char in obj) {
    if (obj[char] === 1) {
      return char;
    }
  }

  return '';
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
  }
}

assertEqual(firstNonRepeatingLetter('aaaa'), '');
assertEqual(firstNonRepeatingLetter('sTreSS'), 'T');
assertEqual(firstNonRepeatingLetter('mo,oGnmen'), ',');
