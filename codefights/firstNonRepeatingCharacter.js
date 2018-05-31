/* top solution */
function firstNotRepeatingCharacter(s) {
  var arr = s.split('');

  for (var i = 0; i < arr.length; i++) {
    var chr = arr[i];
    if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }

  return '_';
}


/* my solution */
function firstNotRepeatingCharacter(s) {
  for (let i = 0; i < s.length; i++) {
    const currIdx = s.indexOf(s[i]);
    const nextIdx = s.indexOf(s[i], i + 1);
    if (currIdx === i && nextIdx === -1) {
      return s[i];
    }
  }
  return '_';
}

const s = 'abcxabc';
console.log(firstNotRepeatingCharacter(s));
