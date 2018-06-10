// top solution
function firstNonRepeatingLetter(s) {
  for(var i in s) {
    if(s.match(new RegExp(s[i],"gi")).length === 1) {
      return s[i];
    }
  }
  return '';
}

// another solution
const firstNonRepeatingLetter = s => {
  let copy = s.toLowerCase();

  for (let i = 0; i < copy.length; i++) {
    if (copy.lastIndexOf(copy[i]) === copy.indexOf(copy[i])) {
      return s[i];
    }
  }

  return '';
};

// my solution
const firstNonRepeatingLetter = s => {
  let copy = s.toLowerCase();

  for (let i = 0; i < copy.length; i++) {
    if (copy.indexOf(copy[i], i + 1) === -1 && copy.indexOf(copy[i]) === i) {
      return s[i];
    }
  }

  return '';
};

console.log(firstNonRepeatingLetter('a'));
console.log(firstNonRepeatingLetter('sTtrreess'));
console.log(firstNonRepeatingLetter('mooenmn'));
