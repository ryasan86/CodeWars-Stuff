const findUniq = arr => {
  const lowestLength = arr.reduce((acc, curr) => {
    return acc.length < curr.length ? acc.length : curr.length;
  });

  let mapped = arr.map(str => {
    if (/^\s+/.test(str)) {
      return str;
    }
    const newStr = str
      .toLowerCase()
      .replace(/\s/g, '')
      .split('')
      .sort((a, b) => (a < b ? -1 : 1))
      .slice(0, lowestLength)
      .join('');
    return newStr;
  });

  for (let i = 0; i < mapped.length; i++) {
    if (mapped.indexOf(mapped[i]) === mapped.lastIndexOf(mapped[i])) {
      return arr[i]
    }
  }
};

// console.log(findUniq(['a', 'b', 'b']));
// console.log(findUniq(['silvia', 'vasili', 'victor']));
// console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'])); // --> 'BbBb'
// console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba'])); // --> 'foo'
console.log(findUniq(['    ', 'a', ' '], 'a'));
console.log(
  findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter'])
);
