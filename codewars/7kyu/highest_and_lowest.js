// top solution
function highAndLow(numbers) {
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

// my solution
const highAndLow = numbers => {
  const highest = numbers.split(' ').reduce((acc, curr) => {
    return parseInt(curr) > parseInt(acc) ? curr : acc;
  });

  const lowest = numbers.split(' ').reduce((acc, curr) => {
    return parseInt(curr) < parseInt(acc) ? curr : acc;
  });

  return `${highest} ${lowest}`;
};

console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6')); // --> "542 -214"
