const firstDuplicate = a => {
  // array for only duplicates found
  const dupes = [];
  let result = -1;

  a.forEach((num, idx, arr) => {
    // search ahead of the array for a duplicate
    let dupeIdx = arr.indexOf(num, idx + 1);
    if (dupeIdx !== -1) {
      // if duplicate found push to dupe array
      dupes.push([num, dupeIdx]);
    }
  });
  // return dupe with lowest found index
  if (dupes[0]) {
    result = dupes.reduce(
      (acc, curr, idx) => (acc[1] < curr[1] ? acc : curr),
      -1
    )[0];
  }
  return result;
};

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
