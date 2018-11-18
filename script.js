const addBinary = (a, b) => {
  const bits = [1, 2, 4, 8, 16, 32, 64, 128].reverse();
  let sum = a + b;

  return bits.reduce((a, b) => {
    if (b <= sum) {
      sum -= b;
      return a + '1';
    }
    return a;
  }, '');
};

console.log(addBinary(51, 12));
