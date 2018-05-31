const firstDuplicate = a => {
  const obj = {};

  for (let i = 0; i < a.length; i++) {
    if (obj[a[i]] !== undefined) {
      return a[i];
    } else {
      obj[a[i]] = i;
    }
  }

  return -1;
};

console.log(firstDuplicate([2, 2]));
