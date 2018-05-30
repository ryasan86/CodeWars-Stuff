function pigItBestPracticeClever(str) {
  return str
    .split(' ')
    .map(function(el) {
      return el.slice(1) + el.slice(0, 1) + 'ay';
    })
    .join(' ');
}

function pigIt(str) {
  return str
    .split(' ')
    .map(function(el) {
      var firstLetter = el.split('').shift();

      el = el.split('').splice(1);
      el.push(firstLetter);

      return el.join('') + 'ay';
    })
    .join(' ');
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log('PASSED');
  } else {
    console.log('FAILED');
    console.log(actual);
  }
}

assertEqual(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay');
assertEqual(pigIt('This is my string'), 'hisTay siay ymay tringsay');
