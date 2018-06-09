// top solution
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

// my solution
const binaryArrayToNumber = arr => {
    const obj = {
      '0': 8,
      '1': 4,
      '2': 2,
      '3': 1
    };
  
    return arr
      .map((b, i) => [b, obj[i]])
      .filter((t, i) => t[0])
      .reduce((a, c) => a + c[1], 0);
  };
  
  console.log(binaryArrayToNumber([0, 0, 0, 1]));
  console.log(binaryArrayToNumber([0, 0, 1, 0]));
  console.log(binaryArrayToNumber([1, 1, 1, 1]));
  console.log(binaryArrayToNumber([0, 1, 1, 0]));
  