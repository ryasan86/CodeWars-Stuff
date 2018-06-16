// top solution
const toUnderScore2 = name => {
  return name.replace(/(?<=[^_-])_?(?=[A-Z])|(?<=[^\d_])_?(?=\d)/g, '_');
};

// my solution
const toUnderScore = name => {
  let pattern = /(?<=[^_-])_?([A-Z]|[0-9]+)/g;

  return name.replace(pattern, str => {
    return `_${str.replace('_', '')}`;
  });
};

// console.log(toUnderScore('_If_A_Test_Start_And_Ends_With_Underscore_It_Should_Be_The_Same_'));
console.log(toUnderScore('Calculate500DividedBy5Equals100'));
console.log(
  toUnderScore(
    '_If_A_Test_Start_And_Ends_With_Underscore_It_Should_Be_The_Same_'
  )
);

// console.log('_If'.match(/?<=/));
