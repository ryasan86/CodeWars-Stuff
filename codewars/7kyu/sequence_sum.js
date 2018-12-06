const sequenceSum = (begin, end, step) => {
    if (begin > end) {
      return 0;
    }
    return begin + sequenceSum(begin + step, end, step);
  };
  
  // const sequenceSum = (begin, end, step, sum = 0) => {
  //   while (begin <= end) {
  //     sum += begin;
  //     begin += step;
  //   }
  //   return sum;
  // };
  
  console.log(sequenceSum(2, 6, 2));
  console.log(sequenceSum(1, 5, 1));
  console.log(sequenceSum(1, 5, 3));
  