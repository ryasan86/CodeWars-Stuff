function maxRotBPC(n) {
  var str = n.toString();
  var arr = [str];
  for (var i = 0; i <= str.length - 1; i++) {
    str = str.slice(0, i) + str.slice(i + 1) + str[i];
    arr.push(str.split().join());
  }
  return Math.max.apply(null, arr);
}


const maxRot = (n, numbers = []) => {
  const nToStr      = n.toString();
  const nLength     = numbers.length;
  const firstPart   = nToStr.substring(0, nLength);
  const secondPart  = nToStr.substring(nLength);
  const nextN       = firstPart + rotate(secondPart);
  const nextNumbers = [...numbers, parseInt(firstPart + secondPart)];

  return numbers.length === nToStr.length ? Math.max(...numbers) : maxRot(nextN, nextNumbers);
};

const rotate = str => {
  return str.substring(1) + str[0];
};

console.log(maxRotBPC(56789));
// [12345, 23451, 24513, 24135, 24153]