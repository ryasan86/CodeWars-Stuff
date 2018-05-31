// https://www.codewars.com/trainer/javascript

function LCS(x, y) {
  let str = '';
  for (let i = 0; i < y.length; i++) {
    console.log(x.indexOf(x[i]));
    console.log(y.indexOf(x[i]));
    if (x[i] === y[i] || x.indexOf(y[i], i + 1) !== -1) {
      str += x[i];
      x = x.substring(x.indexOf(y[i]));
      console.log(x);
    }
  }
  return str;
}

console.log(LCS('132535365', '123456789')); // --> "12356"
